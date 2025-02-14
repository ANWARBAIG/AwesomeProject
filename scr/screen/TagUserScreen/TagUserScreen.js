import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  InteractionManager,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from './TagUser.styles';
import {WithLocalSvg} from 'react-native-svg/css';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../assets/constants/Icons';
import {COLORS} from '../../assets/theme/Theme';
import Images from '../../assets/constants/Images';
import {commonStyles} from '../../assets/theme/Styles';
import {usersList} from './data/userlist';
import {TagPostsContext} from '../../assets/context/TagPostProvider';
import {addTaggedPost} from '../../utils/tagStorage';
import ApplicationModal from '../../assets/components/ApplicationModal';
import useMessage from './useMessage';

const ItemSeparatorComponent = () => {
  return <View style={{height: 10}} />;
};

const ArrowButton = ({onPress = () => {}, style = {}}) => {
  return (
    <TouchableOpacity
      style={{padding: 5, paddingHorizontal: 10, ...style}}
      onPress={onPress}
      activeOpacity={0.7}>
      <WithLocalSvg asset={Icons.backArrow} style={styles.backArrow} />
    </TouchableOpacity>
  );
};

const Header = ({
  mainContainerStyle,
  shadowBtm,
  leftchild,
  midchild,
  rightchild,
}) => {
  return (
    <View style={[shadowBtm ? commonStyles.shadowWrapper : {}]}>
      <View style={[styles.mainContainer, mainContainerStyle]}>
        {leftchild}
        {midchild}
        {rightchild}
      </View>
    </View>
  );
};

const TagUserScreen = ({route}) => {
  const post = route.params.post;
  const {tagPosts, setTagPosts} = useContext(TagPostsContext);
  const [searchText, setsearchText] = useState('');
  const [searchresult, setsearchresult] = useState([]);
  const [messageSentSuccessModal, setmessageSentSuccessModal] = useState(false);
  const {counter, setcounter} = useMessage();

  const navigation = useNavigation();

  const inputRef = useRef(null); // Create a ref for the TextInput
  const focusInputWithKeyboard = () => {
    InteractionManager.runAfterInteractions(() => {
      if (inputRef.current) {
        inputRef.current.focus(); // Focus the input after interactions
      }
    });
  };
  useEffect(() => {
    focusInputWithKeyboard(); // Call the focus function when the component mounts
  }, []);

  useEffect(() => {
    if (counter == 0 && messageSentSuccessModal) {
      setmessageSentSuccessModal(false);
      navigation.goBack();
    }
  }, [counter]);

  const setsearchTextcb = Text => {
    setsearchText(Text);
    if (Text == '') {
      setsearchresult([]);
    } else {
      let list = usersList.filter(item => {
        return (
          item.firstName.toLowerCase().startsWith(Text.toLowerCase()) ||
          item.lastName.toLowerCase().startsWith(Text.toLowerCase())
        );
      });
      setsearchresult(list);
    }
  };

  const onRequestClose = () => {
    setsearchText('');
    setsearchresult([]);
    navigation.goBack();
  };

  const renderItem = ({item, index}) => {
    console.log('==item==', JSON.stringify(item, null, 3));
    const onPress = async () => {
      const key = 'id';
      const newArr = [...tagPosts, post];
      const arrayUniqueByKey = [
        ...new Map(newArr.map(item => [item[key], item])).values(),
      ];
      setTagPosts(arrayUniqueByKey);
      await addTaggedPost(arrayUniqueByKey);
      setTimeout(() => {
        setcounter(4);
        setmessageSentSuccessModal(true);
      }, 500);
    };
    return item.firstName?.length > 0 ? (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text numberOfLines={1} style={styles.name}>
            {item.firstName}
          </Text>
        </View>
        <Image source={Images.dummyProfileImg} style={styles.userpic} />
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View style={styles.modalOverlay}>
      <Header
        leftchild={
          <ArrowButton style={{paddingRight: 18}} onPress={onRequestClose} />
        }
        midchild={
          <View style={[styles.searchView]}>
            <WithLocalSvg asset={Icons.Search} style={styles.search} />
            <TextInput
              ref={inputRef}
              style={styles.input}
              value={searchText}
              onChangeText={setsearchTextcb}
              placeholder={'search'}
              placeholderTextColor={COLORS.dimGray}
              autoFocus={true}
            />
          </View>
        }
        shadowBtm={true}
        mainContainerStyle={{marginLeft: 0, marginRight: 15}}
      />
      <FlatList
        data={searchresult}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      {messageSentSuccessModal && counter > 0 ? (
        <ApplicationModal message={'You Tag this item successfully!!'} />
      ) : null}
    </View>
  );
};

export default TagUserScreen;
