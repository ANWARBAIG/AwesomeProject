import {FlatList} from 'react-native';
import React from 'react'
import { postsData } from '../../data/postsData';
import PostCard from '../Card/PostCard';
import { ItemSeparatorComponent } from '../../../../assets/components/ItemSeparatorComponent';

const Feed = () => {
  return (
    <FlatList
      data={postsData}
      renderItem={({item}) => {
        return <PostCard post={item} type={'imagePost'} />;
      }}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export default Feed

