import { StyleSheet } from 'react-native';
import { Responsive } from '../../../assets/theme/Layout';
import { COLORS } from '../../../assets/theme/Theme';


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Responsive.width(16),
    paddingTop: Responsive.height(11),
    backgroundColor: COLORS.white,
  },
  companyLogo: {
    height: 44,
    width: 44,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  nameSubnameContainer: {
    flex: 1,
    paddingLeft: Responsive.width(8),
    paddingRight: Responsive.width(5),
    height: 44,
  },
  HorizontalTripleDot: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },

  companySubName: {
    color: COLORS.charcoalGrey,
    // paddingTop: Responsive.height(2),
    fontSize:12,
    lineHeight: 14,
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    color: COLORS.slateGray,
    fontSize: 10,
    lineHeight: 11,
  },
  proposals: {
    color: COLORS.slateGray,
  },
  dot: {
    height: 4,
    width: 4,
    backgroundColor: COLORS.slateGray,
    borderRadius: 4,
    marginHorizontal: Responsive.width(3),
  },
  bluetickStyle: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
  companyName: {
    color: COLORS.black,
    paddingRight: Responsive.width(3),
    fontSize:14,
    lineHeight: 16,
  },
  description: {
    color: COLORS.charcoalGrey,
    paddingTop: Responsive.height(9),
fontSize:14  },
  tagMembers: {
    color: COLORS.aquaticBlue,
    fontSize:12
  },
  like: {
    color: COLORS.charcoalGrey,
   fontSize:12
  },
  lastrow: {
    borderTopWidth: 2,
    borderTopColor: COLORS.lightGray,
    marginTop: Responsive.height(11),
    justifyContent: 'space-around',
  },
  likeContainer: {
    alignItems: 'center',
  },
  reactions: {
    width: 14,
    height: 13.3,
    resizeMode: 'contain',
  },
  rbsheetViewContainer: {
    paddingHorizontal: Responsive.width(20),
    flex: 1,
    marginBottom: 30,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  Invite: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  inviteTxt: {
    color: COLORS.steelGray,
    marginLeft: Responsive.width(15),
  },
  seeMoreStyle: {
    color: COLORS.slateGray,
  },
  crossContainer: {
    height: 20,
    width: 20,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    position: 'absolute',
    right: -10,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: COLORS.charcoalGrey,
  },
  video: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});
