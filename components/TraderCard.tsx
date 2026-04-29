import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { TradersStyles } from "../constants/TradersStyles";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

interface TraderProps {
  id: string;
  roi: string;
  drawdown: string;
  isWhale: boolean;
  type: "LONG" | "SHORT";
}

export const TraderCard = ({
  id,
  roi,
  drawdown,
  isWhale,
  type,
}: TraderProps) => {
  // Define dynamic colors based on type
  const typeColor = type === "LONG" ? "#4edea3" : "#ffb3ad";
  const typeBg =
    type === "LONG" ? "rgba(0, 165, 114, 0.1)" : "rgba(255, 84, 81, 0.1)";
  const typeBorder =
    type === "LONG" ? "rgba(78, 222, 163, 0.2)" : "rgba(255, 179, 173, 0.2)";
  const router = useRouter();

  return (
    <View style={TradersStyles.card}>
      {/* Header */}
      <View style={TradersStyles.header}>
        <View style={TradersStyles.idSection}>
          <View>
            <Text style={TradersStyles.labelCaps}>Trader ID</Text>
            <Text style={TradersStyles.traderId}>{id}</Text>
          </View>
        </View>

        {/* Replaced Whale badge with Long/Short Badge */}
        <View
          style={[
            TradersStyles.badge,
            { backgroundColor: typeBg, borderColor: typeBorder },
          ]}
        >
          <MaterialIcons
            name={type === "LONG" ? "trending-up" : "trending-down"}
            size={14}
            color={typeColor}
          />
          <Text style={[TradersStyles.badgeText, { color: typeColor }]}>
            {type}
          </Text>
        </View>
      </View>

      {/* Stats */}
      <View style={TradersStyles.statsGrid}>
        <View>
          <Text style={TradersStyles.labelCaps}>ROI (30D)</Text>
          <Text style={TradersStyles.statValueROI}>{roi}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={TradersStyles.labelCaps}>Max Drawdown</Text>
          <Text style={TradersStyles.statValueDD}>{drawdown}</Text>
        </View>
      </View>

      <View style={TradersStyles.divider} />

      <View style={TradersStyles.buttonRow}>
        <TouchableOpacity
          style={TradersStyles.secondaryButton}
          activeOpacity={0.7}
          onPress={() => router.push(`/trader/${id}`)}
        >
          <Text style={TradersStyles.secondaryButtonText}>DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={TradersStyles.copyButton} activeOpacity={0.8}>
          <Ionicons name="copy-outline" size={16} color={Colors.background} />
          <Text style={TradersStyles.copyButtonText}>COPY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
