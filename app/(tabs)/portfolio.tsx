import { View, Text } from "react-native";
import { DotBackground } from "@/components/DotBackground";
import { GlobalStyles } from "@/constants/GlobalStyles";

export default function PortfolioScreen() {
  return (
    <View style={GlobalStyles.container}>
      <DotBackground />
      <View style={GlobalStyles.content}>
        <Text style={GlobalStyles.title}>Portfolio Page</Text>
      </View>
    </View>
  );
}
