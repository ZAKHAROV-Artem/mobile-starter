import { shorthands } from "@tamagui/shorthands";
import { createFont, createTamagui, createTokens } from "tamagui";
import {
  animations,
  tokens as defaultTokens,
  fonts,
  media,
} from "@tamagui/config/v3";

import * as themes from "./theme-output";

const tokens = createTokens({
  ...defaultTokens,
  color: {},
});

const latoFace = {
  400: { normal: "Lato_Regular" },
  700: { normal: "Lato_Bold" },
  900: { normal: "Lato_Black" },
  bold: { normal: "Lato_Bold" },
  normal: { normal: "Lato_Regular" },
};

const headingFont = createFont({
  face: latoFace,
  letterSpacing: fonts.heading.letterSpacing,
  lineHeight: fonts.heading.lineHeight,
  size: fonts.heading.size,
  weight: fonts.heading.weight,
});
const bodyFont = createFont({
  face: latoFace,
  letterSpacing: fonts.body.letterSpacing,
  lineHeight: fonts.body.lineHeight,
  size: fonts.body.size,
  weight: fonts.body.weight,
});
const monoFont = createFont({
  face: latoFace,
  size: fonts.mono.size,
  weight: fonts.mono.weight,
});

const config = createTamagui({
  animations,
  fonts: {
    body: bodyFont,
    heading: headingFont,
    mono: monoFont,
  },
  media,
  shorthands,
  themes,
  tokens,
});

type Conf = typeof config;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
export default config;
