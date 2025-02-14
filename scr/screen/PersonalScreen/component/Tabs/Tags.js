import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useContext, useRef, useState} from 'react';
import PostCard from '../Card/PostCard';
import {ItemSeparatorComponent} from '../../../../assets/components/ItemSeparatorComponent';
import {TagPostsContext} from '../../../../assets/context/TagPostProvider';
import {Responsive} from '../../../../assets/theme/Layout';
import {COLORS} from '../../../../assets/theme/Theme';
import Icons from '../../../../assets/constants/Icons';
import {WithLocalSvg} from 'react-native-svg/css';

const ListEmptyComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <WithLocalSvg asset={Icons.mail} height={30} width={30} />
      <Text style={styles.title}>No tags items to show</Text>
    </View>
  );
};

const Tags = () => {
  const {tagPosts} = useContext(TagPostsContext);
  const [currentVisiblePostId, setcurrentVisiblePostId] = useState(null);
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 30,
    waitForInteraction: true,
  });
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setcurrentVisiblePostId(viewableItems[0].item.id);
    }
  });

  const renderItem = useCallback(
    ({item}) => {
      return (
        <PostCard post={item} currentVisiblePostId={currentVisiblePostId} />
      );
    },
    [currentVisiblePostId],
  );

  return (
    <FlatList
      data={tagPosts ?? []}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      style={{backgroundColor:COLORS.white}}
    />
  );
};

export default Tags;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:Responsive.height(50)
  },
  title: {
    color: COLORS.charcoalGrey,
    fontSize: 16,
    paddingTop: Responsive.height(10),
  },
});
