// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunity from "@expo/vector-icons/MaterialCommunityIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  lock: "lock",
  eye: "visibility",
  "eye.slash": "visibility-off",
  "person.3.fill": "person",
  "phone.fill": "local-phone",
  "person.2": "person-outline",
  "arrow.backward": "arrow-back",
  "key": "key",
  "arrow.right.square": "logout",
  "bell":"notifications-none",
  "gear": "settings",
  "dpad.right.fill": "keyboard-arrow-right",
  "pencil":"edit",
  "house.slash":"roofing",
  "plus.app":"add",
  "delete.item" : "detele-outline"
} as Partial<
  Record<
    import("expo-symbols").SymbolViewProps["name"],
    React.ComponentProps<typeof MaterialIcons>["name"]
  >
>;

const MAPPINGCOMU = {
  shield: "shield-key-outline",
  "key.card": "card-account-details-outline",
  mail: "email-outline",
  "checkmark.message":"message-alert-outline",
  "creditcard.trianglebadge.exclamationmark":"credit-card-check-outline",
  "gift":"github"
} as Partial<
  Record<
    import("expo-symbols").SymbolViewProps["name"],
    React.ComponentProps<typeof MaterialCommunity>["name"]
  >
>;
export type IconSymbolName = keyof typeof MAPPING;
type IconMaterialCommunity = keyof typeof MAPPINGCOMU;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName | IconMaterialCommunity;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  if (name in MAPPINGCOMU) {
    return (
      <MaterialCommunity
        color={color}
        size={size}
        name={MAPPINGCOMU[name as IconMaterialCommunity]}
        style={style}
      />
    );
  } else {
    return (
      <MaterialIcons
        color={color}
        size={size}
        name={MAPPING[name as IconSymbolName]}
        style={style}
      />
    );
  }
}
