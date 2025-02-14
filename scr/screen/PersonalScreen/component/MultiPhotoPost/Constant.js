import { Dimensions } from 'react-native';
import { Responsive } from '../../../../assets/theme/Layout';

const { width } = Dimensions.get('window');
export const width1 = width - Responsive.width(32);
