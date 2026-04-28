import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles as Styles } from "../../constants/GlobalStyles";
import { TraderCard } from "../../components/TraderCard";
import { DotBackground } from "@/components/DotBackground";
import { Colors } from "@/constants/Colors";

const TRADERS_DATA = [
  {
    id: "TR-882",
    roi: "+85.2%",
    drawdown: "-4.2%",
    isWhale: true,
    type: "LONG" as const,
  },
  {
    id: "TR-991",
    roi: "+112.4%",
    drawdown: "-8.7%",
    isWhale: true,
    type: "LONG" as const,
  },
  {
    id: "TR-105",
    roi: "+64.9%",
    drawdown: "-1.2%",
    isWhale: false,
    type: "SHORT" as const,
  },
];

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState("risk");

  return (
    <View style={Styles.container}>
      <DotBackground />
      <View style={Styles.content}>
        <FlatList
          data={TRADERS_DATA}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 24, marginTop: 20 }}>
              <Text style={Styles.label}>Scanner Engine</Text>
              <Text style={Styles.title}>Discover Traders</Text>

              {/* NATIVE PICKER CONTAINER */}
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  style={styles.picker}
                  dropdownIconColor={Colors.primary}
                  mode="dropdown" // Android specific
                >
                  <Picker.Item
                    label="BEST ROI"
                    value="roi"
                    color={Colors.primary}
                    style={{
                      backgroundColor: Colors.background,
                      color: Colors.primary,
                    }}
                  />
                  <Picker.Item
                    label="LOWEST RISK"
                    value="risk"
                    color={Colors.primary}
                    style={{
                      backgroundColor: Colors.background,
                      color: Colors.primary,
                    }}
                  />
                  <Picker.Item
                    label="WHALE ALIGNED"
                    value="whale"
                    color={Colors.primary}
                    style={{
                      backgroundColor: Colors.background,
                      color: Colors.primary,
                    }}
                  />
                </Picker>
              </View>
            </View>
          )}
          renderItem={({ item }) => <TraderCard {...item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerWrapper: {
    marginTop: 16,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    height: 50,
    justifyContent: "center",
  },
  picker: {
    color: Colors.primary,
    width: "100%",
    backgroundColor: "transparent",
  },
});
