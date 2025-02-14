import { Image, ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles.js';
import { width1 } from './Constant.js';

export const renderFourPlusImages = (setIsVisible, setimageStartIndex, images) => {
  return (
    <View style={styles.fourPlusImagesContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setIsVisible(true);
          setimageStartIndex(0);
        }}
      >
        <Image
          source={{ uri: images[0] }}
          style={[styles.image, { width: width1 * 0.75, height: width1 + 4, marginRight: 2 }]}
        />
      </TouchableOpacity>
      <View style={styles.rightImagesContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setIsVisible(true);
            setimageStartIndex(1);
          }}
        >
          <Image
            source={{ uri: images[1] }}
            style={[styles.image, { width: width1 * 0.25, height: width1 / 3, marginBottom: 2 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          // style={{ width: 10, height: 10, backgroundColor: 'red' }}
          onPress={() => {
            setIsVisible(true);
            setimageStartIndex(2);
          }}
        >
          <Image
            source={{ uri: images[2] }}
            style={[styles.image, { width: width1 * 0.25, height: width1 / 3, marginBottom: 2 }]}
          />
        </TouchableOpacity>

        <ImageBackground
          source={{ uri: images[3] }}
          style={{ width: width1 * 0.25, height: width1 / 3, marginBottom: 2 }}
        >
          {images.length >= 4 && (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setIsVisible(true);
                setimageStartIndex(3);
              }}
              style={[
                styles.plusView,
                { backgroundColor: images.length > 4 ? 'rgba(0, 0, 0, 0.5)' : 'transparent' },
              ]}
            >
              {images.length > 4 ? (
                <View style={styles.textView}>
                  <Text style={styles.plus}>+</Text>
                  <Text style={styles.plusText}>{images.length - 4}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View>
    </View>
  );
};
