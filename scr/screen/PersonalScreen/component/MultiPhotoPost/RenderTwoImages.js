import { Image, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { width1 } from './Constant';

export const renderTwoImages = (setIsVisible, setimageStartIndex, images) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.threeImagesContainer}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ marginRight: 2 }}
        onPress={() => {
          setimageStartIndex(0);
          setIsVisible(true);
        }}
      >
        <Image
          source={{ uri: images[0] }}
          style={[styles.image, { width: width1 * 0.75, height: width1 + 2 }]}
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
            style={[styles.image, { width: width1 * 0.75, height: width1 + 2 }]}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
