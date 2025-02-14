import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {Linking} from 'react-native';

const SocialMediaButton = ({link, icon, size = {width: 30, height: 30}}) => {
  if (!link) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => Linking.openURL(link)}
      style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
      <WithLocalSvg asset={icon} width={size.width} height={size.height} />
    </TouchableOpacity>
  );
};

const SocialMediaButtons = ({
  twitter_link,
  youtube_link,
  telegram_link,
  Icons,
  style,
}) => {
  if (!twitter_link && !youtube_link && !telegram_link) return null;

  return (
    <View style={[{flexDirection: 'row'}, style]}>
      <SocialMediaButton link={twitter_link} icon={Icons.twitter_icon} />
      <SocialMediaButton
        link={youtube_link}
        icon={Icons.youtube_icon}
        size={{width: 40, height: 30}}
      />
      <SocialMediaButton link={telegram_link} icon={Icons.telegram_icon} />
    </View>
  );
};

export default React.memo(SocialMediaButtons);
