// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const MyGlobalTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#050505",
    card: "#121212",
    text: "#FFFFFF",
    border: "#262626",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={MyGlobalTheme}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#050505" },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* The Modal Route */}
        <Stack.Screen
          name="trader/[id]"
          options={{
            presentation: "modal",
            headerTitle: "Trader Profile",
            headerLeft: () => null, // Optional: hide back button if using swipe-to-dismiss
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
