import { StyleSheet } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { COLORS } from '../../assets/theme/Theme';


export const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },

  closeButton: {
    padding: 10,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(15),
  },
  searchView: {
    flex: 1,
    backgroundColor: COLORS.lightSkyBlue,
    borderRadius: 9,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchViewStyle: {
    marginLeft: Responsive.width(0),
    marginRight: Responsive.width(8),
  },
  input: {
    height: 35,
    padding: 5,
    flex: 1,
    color: COLORS.black,
    textAlignVertical: 'center',
  },
  search: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  backArrow: {
    width: 23,
    height: 19,
    resizeMode: 'contain',
  },
  name: {
    color: 'black',
    flex: 1,
    paddingHorizontal: 5,
  },
  userpic: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  mainContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Responsive.height(5),
    backgroundColor: COLORS.white,
    marginTop: Responsive.height(45), // Ensure this matches your desired background color
  }
});
