import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { renderOneImage } from './RenderOneImage';
import { renderTwoImages } from './RenderTwoImages';
import { renderThreeImages } from './RrenderThreeImages';
import { renderFourPlusImages } from './RenderFourPlusImages';

const MultiPhotoPost = ({ images=[], setIsVisible=()=>{}, setimageStartIndex=()=>{} }) => {
  const renderImages = () => {
    switch (images.length) {
      case 1:
        return renderOneImage(setIsVisible, setimageStartIndex, images);
      case 2:
        return renderTwoImages(setIsVisible, setimageStartIndex, images);
      case 3:
        return renderThreeImages(setIsVisible, setimageStartIndex, images);
      default:
        return renderFourPlusImages(setIsVisible, setimageStartIndex, images);
    }
  };

  return (
    <>
      <View style={styles.container}>{renderImages()}</View>
    </>
  );
};

export default React.memo(MultiPhotoPost);
