import { View, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react'
import { styles } from '../styles'

const PostCardHeader = (props) => {
  // console.log("===props==",JSON.stringify(props,null,3))
  return (
    <View style={[styles.rowAlignCenter, { alignItems: 'flex-start' }]}>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.companyLogo} />

    <View style={styles.nameSubnameContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.rowAlignCenter]}
      >
        <Text style={[styles.companyName]} numberOfLines={1}>
          {props.fullname}
        </Text>
      </TouchableOpacity>

      <Text style={styles.companySubName} numberOfLines={1}>
        --
      </Text>

      <View style={[styles.rowAlignCenter]}>
         <Text style={styles.active}>{props.postedAt}</Text>
        <View style={styles.dot} />
      </View>
    </View>
  </View>
  )
}

export default PostCardHeader
