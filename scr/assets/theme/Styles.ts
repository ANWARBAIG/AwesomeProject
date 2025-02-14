import { Responsive } from './Layout';
import { COLORS, FONTS } from './Theme';

export const ReactionItems = [
  {
    id: 0,
    emoji: '😇',
    title: 'Like',
  },
  {
    id: 1,
    emoji: '🥰',
    title: 'Love',
  },
  {
    id: 2,
    emoji: '🤗',
    title: 'Care',
  },
];
export const commonStyles = {
  // Gilroy font family
  GilroyRegularten500: {
    fontFamily: FONTS.GilroyMedium500,
    fontSize: Responsive.font(10),
  },
  GilroyRegulareleven400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(11),
  },
  GilroyRegulartwelve400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(12),
  },
  GilroyRegulartwelve500: {
    fontFamily: FONTS.GilroyMedium500,
    fontSize: Responsive.font(12),
  },
  GilroyRegulartwelve600: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.font(12),
  },
  GilroyRegulartwelve700: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.font(12),
  },
  GilroyRegularfourteen400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(14),
  },
  GilroyRegularfourteen500: {
    fontFamily: FONTS.GilroyMedium500,
    fontSize: Responsive.font(14),
  },
  GilroyRegularfourteen600: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.font(14),
  },
  GilroyRegularfourteen700: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.font(14),
  },
  GilroyRegularsixteen400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(16),
  },
  GilroyRegularsixteen600: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.font(16),
  },
  GilroyRegulartwenty400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(20),
  },
  GilroyRegulartwentytwo400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(22),
  },
  GilroyRegularthirtysix400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(36),
  },
  GilroyRegularthirtysix700: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.font(35), //thirty six font leading the text on next line
  },
  GilroyRegulareighteen400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(18),
  },
  GilroyRegulareighteen500: {
    fontFamily: FONTS.GilroyMedium500,
    fontSize: Responsive.font(18),
  },
  GilroyRegulareighteen600: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.font(18),
  },
  GilroyRegulareighteen700: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.font(18),
  },
  GilroyRegularnineteen400: {
    fontFamily: FONTS.GilroyRegular400,
    fontSize: Responsive.font(19),
  },
  GilroyRegularnineteen700: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.font(19),
  },
  GilroyRegulartwenty600: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.font(20),
  },

  // Plus Jakarta Sans font family
  PlusJakartaSansten400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(10),
  },
  PlusJakartaSansten500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(10),
  },
  PlusJakartaSansten700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(10),
  },
  PlusJakartaSansthirty400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(30),
  },
  PlusJakartaSansthirty700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(30),
  },
  PlusJakartaSanseleven400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(11),
  },
  PlusJakartaSanseleven700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(11),
  },
  PlusJakartaSanseleven500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(11),
  },
  PlusJakartaSanstwelve400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(12),
  },
  PlusJakartaSanstwelve600: {
    fontFamily: FONTS.PlusJakartaSansSemiBold600,
    fontSize: Responsive.font(12),
  },
  PlusJakartaSanstwelve700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(12),
  },
  PlusJakartaSansthirteen400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(13),
  },
  PlusJakartaSansfourteen400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(14),
  },
  PlusJakartaSansfourteen700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(14),
  },
  PlusJakartaSansfourteen500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(14),
  },

  PlusJakartaSansfourteen600: {
    fontFamily: FONTS.PlusJakartaSansSemiBold600,
    fontSize: Responsive.font(14),
  },

  PlusJakartaSansfifteen400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(15),
  },
  PlusJakartaSansfifteen500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(15),
  },
  PlusJakartaSanssixteen400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(16),
  },
  PlusJakartaSanssixteen600: {
    fontFamily: FONTS.PlusJakartaSansSemiBold600,
    fontSize: Responsive.font(16),
  },
  PlusJakartaSanssixteen700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(16),
  },
  PlusJakartaSanseighteen400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(18),
  },
  PlusJakartaSanseighteen500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(18),
  },
  PlusJakartaSanseighteen700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(18),
  },
  PlusJakartaSanstwenty400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(20),
  },
  PlusJakartaSanstwenty700: {
    fontFamily: FONTS.PlusJakartaSansBold700,
    fontSize: Responsive.font(20),
  },
  PlusJakartaSanstwentytwo400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(22),
  },

  PlusJakartaSansthirtysix400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(36),
  },
  PlusJakartaSansthirtyeight400: {
    fontFamily: FONTS.PlusJakartaSansRegular400,
    fontSize: Responsive.font(38),
  },
  PlusJakartaSanstwentytwo600: {
    fontFamily: FONTS.PlusJakartaSansSemiBold600,
    fontSize: Responsive.font(22),
  },
  PlusJakartaSansfifteen600: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(15),
  },
  PlusJakartaSansthirteen500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(13),
  },
  PlusJakartaSanstwelve500: {
    fontFamily: FONTS.PlusJakartaSansMedium500,
    fontSize: Responsive.font(12),
  },
  PlusJakartaSansthirteen600: {
    fontFamily: FONTS.PlusJakartaSansSemiBold600,
    fontSize: Responsive.font(13),
  },
  shadowWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: COLORS.white,
  },
  HeadermainContainerStyle: {
    paddingLeft: Responsive.width(18),
    paddingBottom: Responsive.height(15),
    paddingRight: Responsive.width(15),
    marginTop: 0,
    paddingTop: Responsive.height(45),
  },
  hashtagStyle: {
    color: COLORS.aquaticBlue,
  },
};
