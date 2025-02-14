import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import PostCardHeader from './PostCardHeader';
import MultiPhotoPost from '../MultiPhotoPost/MultiPhotoPost';
import Description from './Description';
import VideoPlayer from '../VideoPlayer';
import PostCardFooter from './PostCardFooter';

const PostCard = ({post, currentVisiblePostId}) => {
  const isImage = post.hasOwnProperty('postImageArray');
  const isVideo = post.hasOwnProperty('sources');

  return (
    <View style={styles.container}>
      <PostCardHeader {...post} />
      <Description desc={post?.description} />
      {isImage ? <MultiPhotoPost images={post.postImageArray} /> : null}
      {isVideo ? (
        <VideoPlayer
          id={post.id}
          videoUrl={post.sources[0]}
          currentVisiblePostId={currentVisiblePostId}
        />
      ) : null}
      <PostCardFooter post={post} />
    </View>
  );
};

export default PostCard;
