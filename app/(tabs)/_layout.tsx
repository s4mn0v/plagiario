import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // This line hides the header for all screens in the tab bar
        headerShown: false,

        tabBarStyle: {
          backgroundColor: Colors.background,
          height: 65,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: Colors.primaryMuted,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          textTransform: "uppercase",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="grid-view" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
