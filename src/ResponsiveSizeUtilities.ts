import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const STANDARD_SCREEN_HEIGHT = 680;

export function normalizeSize(size: number) {
  return size * height / STANDARD_SCREEN_HEIGHT;
}