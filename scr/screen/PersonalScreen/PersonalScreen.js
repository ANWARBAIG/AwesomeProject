import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Tabs from './component/Tabs/Tabs';
import PersonalScreenHeader from './component/Card/PersonalScreenHeader';
import {COLORS} from '../../assets/theme/Theme';
import {Responsive} from '../../assets/theme/Layout';
import {TagPostsContext} from '../../assets/context/TagPostProvider';
import {getTaggedPosts} from '../../utils/tagStorage';

const PersonalScreen = () => {
  const {tagPosts, setTagPosts} = useContext(TagPostsContext);

  const loadTaggedPosts = async () => {
    console.log('before');
    const posts = await getTaggedPosts();
    setTagPosts(posts)
  };

  useEffect(() => {
    loadTaggedPosts();
  }, []);

  return (
    <View style={styles.maincontainer}>
      <ScrollView nestedScrollEnabled contentContainerStyle={{flex: 1}}>
        <PersonalScreenHeader />
        <Tabs />
      </ScrollView>
    </View>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Responsive.height(45),
  },
});
