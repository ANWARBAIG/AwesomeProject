import {Text, TouchableOpacity, View} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {COLORS} from '../../../../assets/theme/Theme';
import {Responsive} from '../../../../assets/theme/Layout';
import {styles} from '../styles';
import Icons from '../../../../assets/constants/Icons';
import {Proposal, Repost} from '../../../../assets/icons/SvgIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const PostCardFooter = ({post}) => {
  const [like,setLike] = useState(false)
  const navigation = useNavigation()
  return (
    <View>
      <View
        style={[
          styles.rowAlignCenter,
          {
            justifyContent: 'space-between',
            marginTop: Responsive.height(10),
          },
        ]}>
        <TouchableOpacity activeOpacity={1} style={[styles.rowAlignCenter]}>
          <View
            style={[styles.rowAlignCenter, {marginRight: Responsive.width(8)}]}>
            <WithLocalSvg asset={Icons.Like2} style={styles.reactions} />
          </View>
          <Text style={[styles.proposals, {color: '#4E4E4E'}]}>{like?1:0}</Text>
        </TouchableOpacity>
     
      </View>
      <View style={[styles.rowAlignCenter, styles.lastrow]}>
        <View style={[styles.likeContainer]}>
          <TouchableOpacity
          onPress={()=>{
            setLike(!like)
          }}
            activeOpacity={0.9}
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: Responsive.width(65),
              paddingBottom: Responsive.height(11),
            }}>
            {like ? (
              <WithLocalSvg asset={Icons.like3} width={20} height={20} />
            ) : (
              <WithLocalSvg asset={Icons.unlike1} width={20} height={20} />
            )}
            <Text
              style={[
                styles.like,
                {
                  textAlign: 'center',
                  color:like?COLORS.aquaticBlue: COLORS.charcoalGrey,
                  paddingTop: 5,
                },
              ]}>
              like
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.likeContainer,
            {width: Responsive.width(65), paddingBottom: Responsive.height(11)},
          ]}>
          <Repost color={COLORS.charcoalGrey} width={30} height={30} />
          <Text
            style={[
              styles.like,
              {
                color: COLORS.charcoalGrey,
              },
            ]}>
            repost
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("TagUserScreen",{post:post})
        }}
          style={[
            styles.likeContainer,
            {width: Responsive.width(65), paddingBottom: Responsive.height(11)},
          ]}>
          <Proposal color={COLORS.charcoalGrey} height={30} width={30} />
          <Text
            style={[
              styles.like,
              {
                color: COLORS.charcoalGrey,
              },
            ]}>
            {'tag'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCardFooter;
