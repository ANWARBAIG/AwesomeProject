import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/theme/Theme';
import { Responsive } from '../../../../assets/theme/Layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.white,
    paddingLeft: Responsive.width(19),
    paddingRight: Responsive.width(19),
    position: 'relative',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  nameContainer: {
    paddingTop: 102,
  },
  link: {
    color: COLORS.aquaticBlue,
    paddingLeft: 4,
  },
  services: {
    color: COLORS.slateGray,
   
  },
  servicesContainer: {
    paddingTop: Responsive.height(8),
  },
  name: {
    color: COLORS.black,
    textAlignVertical: 'bottom',
    fontSize:22,
    lineHeight: 25,
  },
  subname: {
    color: COLORS.black,
    paddingTop: Responsive.height(0),
   fontSize:15,
    lineHeight: 17,
    paddingRight: 20,
  },
  personProfileImg: {
    height: 140,
    width: 140,
    resizeMode: 'cover',
    borderRadius: 90,
  },
  personProfileImgContainer: {
    borderWidth: 4,
    borderColor: COLORS.white,
    position: 'absolute',
    left: Responsive.width(10),
    top: -60,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    elevation: 5,
  },

  backgroundImg: {
    width: '100%',
    height: 100,
    // aspectRatio: 4 / 0.8,
  },
  rightIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 10,
  },
  openContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Responsive.height(7),
    backgroundColor: COLORS.aquaticBlue,
    borderRadius: 50,
    marginTop: 30,
  },
  open: {
    color: COLORS.white,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19,
  },
  rbsheetViewContainer: {
    paddingHorizontal: Responsive.width(20),
    flex: 1,
  },
  inviteSendPropNmeeting: {
    paddingTop: Responsive.height(25),
  },
  Invite: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginRight: Responsive.width(15),
  },
  inviteTxt: {
    color: COLORS.steelGray,
  },
  dot: {
    height: 2,
    width: 2,
    backgroundColor: COLORS.slateGray,
    borderRadius: 4,
    marginHorizontal: Responsive.width(3),
  },
  socialIconMainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  websiteNsocialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Responsive.height(4),
    justifyContent: 'space-between',
  },
  seeMoreStyle: {
    color: COLORS.slateGray,
  },
});
