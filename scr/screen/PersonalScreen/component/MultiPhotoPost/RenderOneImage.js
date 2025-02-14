import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { width1 } from './Constant';

export const renderOneImage = (setIsVisible, setimageStartIndex, images) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setIsVisible(true);
        setimageStartIndex(0);
      }}
    >
      <Image
        source={{ uri: images[0] }}
        style={[styles.image, { height: width1, width: width1, borderRadius: 5 }]}
      />
    </TouchableOpacity>
  );
};
