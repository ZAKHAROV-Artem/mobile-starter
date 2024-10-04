import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CombineProviders } from "@/components/providers";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Lato_Black: require("@/assets/fonts/Lato/Lato-Black.ttf"),
    Lato_Bold: require("@/assets/fonts/Lato/Lato-Bold.ttf"),
    Lato_Regular: require("@/assets/fonts/Lato/Lato-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <CombineProviders>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </CombineProviders>
  );
}
