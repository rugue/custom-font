import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter_18pt-Black.ttf"),
    "SulphurPoint-Light": require("../assets/fonts/SulphurPoint-Light.ttf"),
    "SulphurPoint-Bold": require("../assets/fonts/SulphurPoint-Bold.ttf"),
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
    <View style={styles.container}>
      <Text style={styles.inter}>Inter Black</Text>
      <Text style={styles.sulphurLight}>SulphurPoint-Light</Text>
      <Text style={styles.sulphurBold}>SulphurPoint-Bold</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inter: {
    fontSize: 24,
    fontFamily: "Inter-Black",
  },
  sulphurLight: {
    fontSize: 24,
    fontFamily: "SulphurPoint-Light",
  },
  sulphurBold: {
    fontSize: 24,
    fontFamily: "SulphurPoint-Bold",
  },
});
