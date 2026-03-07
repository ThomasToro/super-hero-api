import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/*no pinte ningún encabezado */}

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}