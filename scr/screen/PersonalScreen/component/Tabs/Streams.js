import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useCallback, useRef, useState } from 'react'
import { videosData } from '../../data/videosData';
import PostCard from '../Card/PostCard';
import { ItemSeparatorComponent } from '../../../../assets/components/ItemSeparatorComponent';

const Streams = () => {
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
        <PostCard
          post={item}
          type={'videoPost'}
          currentVisiblePostId={currentVisiblePostId}
        />
      );
    },
    [currentVisiblePostId],
  );

  return (
    <FlatList
      data={videosData}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
}

export default Streams
