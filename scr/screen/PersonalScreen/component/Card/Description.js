import React from 'react'
import { styles } from '../styles'
import ReadMore from '@fawazahmed/react-native-read-more';

const Description = ({desc}) => {
  return (
    <ReadMore
      seeLessText="see less"
      seeMoreText="see more"
      seeMoreStyle={styles.seeMoreStyle}
      seeLessStyle={styles.seeMoreStyle}
      numberOfLines={3}
      style={[styles.description]}
    >
        {desc}
    </ReadMore>
  )
}

export default Description
