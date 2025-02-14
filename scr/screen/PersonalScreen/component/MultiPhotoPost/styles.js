import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/theme/Theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    resizeMode: 'cover',
  },
  twoImagesContainer: {
    flexDirection: 'row',
  },
  threeImagesContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  largeImageContainer: {
    flex: 2,
  },
  smallImagesContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  fourPlusImagesContainer: {
    flexDirection: 'row',
  },
  rightImagesContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  plusView: {
    flex: 1,

    justifyContent: 'center',
  },
  plusText: {
    color: COLORS.white,
    lineHeight: 24,
  },
  plus: {
    color: COLORS.white,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
