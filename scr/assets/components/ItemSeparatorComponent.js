import React from "react";
import { COLORS } from "../theme/Theme";
import { View } from "react-native";

export const ItemSeparatorComponent = React.memo(
    function ItemSeparatorComponent() {
      return <View style={{height: 6, backgroundColor: COLORS.lightGray}} />;
    },
  );