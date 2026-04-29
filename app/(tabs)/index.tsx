import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { GlobalStyles as Styles } from "../../constants/GlobalStyles";
import { TraderCard } from "../../components/TraderCard";
import { DotBackground } from "@/components/DotBackground";
import Dropdown, { DropdownOption } from "@/components/Dropdown";

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

const FILTER_OPTIONS: DropdownOption[] = [
  { label: "BEST ROI", value: "roi" },
  { label: "LOWEST RISK", value: "risk" },
];

export default function HomeScreen() {
  const [filter, setFilter] = useState("roi");

  return (
    <View style={Styles.container}>
      <DotBackground />
      <View style={Styles.content}>
        <FlatList
          data={TRADERS_DATA}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View>
              <Text style={Styles.label}>Scanner Engine</Text>
              <Text style={Styles.title}>Discover Traders</Text>

              {/* NATIVE PICKER CONTAINER */}
              <Dropdown
                style={{ marginVertical: 20 }}
                options={FILTER_OPTIONS}
                selectedValue={filter}
                onSelect={(val) => setFilter(val)}
                placeholder="SORT BY"
              />
            </View>
          )}
          renderItem={({ item }) => <TraderCard {...item} />}
        />
      </View>
    </View>
  );
}
