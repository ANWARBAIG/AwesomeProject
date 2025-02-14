import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { width1 } from './Constant';

export const renderThreeImages = (setIsVisible, setimageStartIndex, images) => (
  <View style={styles.threeImagesContainer}>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setimageStartIndex([0]);
        setIsVisible(true);
      }}
      style={{ flex: 0 }}
    >
      <Image
        source={{ uri: images[0] }}
        style={[styles.image, { width: width1 * 0.75, height: width1 + 2, marginRight: 2 }]}
      />
    </TouchableOpacity>
    <View style={{}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setIsVisible(true);
          setimageStartIndex(1);
        }}
      >
        <Image
          source={{ uri: images[1] }}
          style={[styles.image, { width: width1 * 0.25, height: width1 / 2, marginBottom: 2 }]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setIsVisible(true);
          setimageStartIndex(2);
        }}
      >
        <Image
          source={{ uri: images[2] }}
          style={[styles.image, { width: width1 * 0.25, height: width1 / 2 }]}
        />
      </TouchableOpacity>
    </View>
  </View>
);
