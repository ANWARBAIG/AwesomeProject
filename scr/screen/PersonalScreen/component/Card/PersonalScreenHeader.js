import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {styles} from './PersonalScreenHeader.styles';
import Icons from '../../../../assets/constants/Icons';
import ReadMore from '@fawazahmed/react-native-read-more';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../../assets/theme/Theme';
import {Responsive} from '../../../../assets/theme/Layout';
import SocialMediaButton from '../SocialMediaButton';
import Images from '../../../../assets/constants/Images';

const PersonalScreenHeader = () => {
  return (
    <View style={[styles.container]}>
      <Image source={Images.cover_image} style={styles.backgroundImg} />
      <View style={[styles.header]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.personProfileImgContainer, {zIndex: 11}]}>
          <Image
            source={Images.dummyProfileImg}
            style={styles.personProfileImg}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={[styles.rightIcon]}>
          <WithLocalSvg asset={Icons.bellInactive} height={30} width={30} />
        </TouchableOpacity>

        <View style={styles.nameContainer}>
          {1 ? (
            <View style={[styles.rowAlignCenter]}>
              <Text style={styles.name}>{'Anwar Baig'}</Text>
              {1 && (
                <WithLocalSvg asset={Icons.bluetick2} height={16} width={16} />
              )}
            </View>
          ) : null}
          {1 && (
            <ReadMore
              seeLessText="see less"
              seeMoreText="see more"
              seeMoreStyle={styles.seeMoreStyle}
              seeLessStyle={styles.seeMoreStyle}
              numberOfLines={2}
              seeMoreContainerStyleSecondary={{position: 'relative'}}
              style={[styles.subname]}>
              {
                'Front-end developer with three years of experience, I specialize in building mobile applications using React Native and web applications using React.'
              }
            </ReadMore>
          )}
          <View style={styles.servicesContainer}>
            {1 ? (
              <View style={styles.rowAlignCenter}>
                <Text style={[styles.services]}>
                  {'Cypto306'}
                  {1 && ', '}
                  {'React Native Developer'}{' '}
                </Text>
              </View>
            ) : null}
            {1 ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Icon
                  name="map-marker-outline"
                  size={15}
                  color={COLORS.charcoalGrey}
                /> */}
                <Text style={[styles.services, {paddingLeft: 2}]}>
                  {'Rajkot, Gujarat'}
                </Text>
              </View>
            ) : null}
          </View>
          <View style={styles.websiteNsocialContainer}>
            {1 && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: Responsive.width(180),
                }}>
                {/* <Icon
                  name="link-variant"
                  size={15}
                  color={COLORS.charcoalGrey}
                /> */}
                <Text numberOfLines={1} style={[styles.link, {flex: 1}]}>
                  {'https://medium.com/scaleuptech/'?.replace(
                    /^(https?:\/\/)?(www\.)?/,
                    '',
                  )}
                </Text>
              </View>
            )}
            <SocialMediaButton
              twitter_link={'https://medium.com/scaleuptech/'}
              youtube_link={'https://medium.com/scaleuptech/'}
              telegram_link={'https://medium.com/scaleuptech/'}
              Icons={Icons}
              style={styles.socialIconMainView}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalScreenHeader;
