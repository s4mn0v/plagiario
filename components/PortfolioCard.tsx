import React, { useState } from "react";
import { View, Text, TouchableOpacity, LayoutAnimation } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { PortfolioStyles as styles } from "../constants/PortfolioStyles";

interface Trade {
  symbol: string;
  side: "LONG" | "SHORT";
  entry: string;
  pl: string;
}

interface PortfolioCardProps {
  id: string;
  name: string;
  status: string;
  allocated: string;
  livePL: string;
  openTrades: number;
  avgHold: string;
  avatarBg: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  trades: Trade[];
}

export const PortfolioCard = ({
  id,
  name,
  status,
  allocated,
  livePL,
  openTrades,
  avgHold,
  avatarBg,
  icon,
  trades,
}: PortfolioCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  const isPositive = !livePL.startsWith("-");

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: avatarBg }]}>
          <MaterialIcons name={icon} size={24} color="white" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <View style={styles.statusRow}>
            <View
              style={[styles.statusDot, { backgroundColor: Colors.secondary }]}
            />
            <Text style={styles.labelCaps}>{status}</Text>
          </View>
        </View>
      </View>

      <View style={styles.idSection}>
        <Text style={styles.labelCaps}>Trader ID</Text>
        <Text style={styles.idText}>{id}</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Text style={styles.labelCaps}>ALLOCATED</Text>
          <Text style={styles.statValue}>
            {allocated} <Text style={styles.unit}>USDT</Text>
          </Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.labelCaps}>LIVE P/L</Text>
          <Text
            style={[
              styles.statValue,
              { color: isPositive ? Colors.secondary : Colors.error },
            ]}
          >
            {livePL}
          </Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.labelCaps}>OPEN TRADES</Text>
          <Text style={styles.statValue}>{openTrades}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.labelCaps}>AVG HOLD</Text>
          <Text style={styles.statValue}>{avgHold}</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="pause" size={18} color="white" />
          <Text style={styles.buttonText}>PAUSE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="close" size={18} color={Colors.error} />
          <Text style={[styles.buttonText, { color: Colors.error }]}>
            CLOSE
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={toggleOpen} style={styles.detailsToggle}>
        <Text style={styles.labelCaps}>
          {isOpen ? "HIDE TRADE DETAILS" : "TAP FOR INDIVIDUAL TRADE DETAILS"}
        </Text>
        <MaterialIcons
          name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={20}
          color="#8b90a0"
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.tradesList}>
          <View style={styles.tradeHeader}>
            <Text style={styles.tradeHeadText}>SYMBOL</Text>
            <Text style={styles.tradeHeadText}>SIDE</Text>
            <Text style={styles.tradeHeadText}>ENTRY</Text>
            <Text style={[styles.tradeHeadText, { textAlign: "right" }]}>
              P/L
            </Text>
          </View>
          {trades.map((trade, idx) => (
            <View key={idx} style={styles.tradeRow}>
              <Text style={styles.tradeTextMain}>{trade.symbol}</Text>
              <Text
                style={[
                  styles.tradeTextMain,
                  {
                    color:
                      trade.side === "LONG" ? Colors.secondary : Colors.error,
                  },
                ]}
              >
                {trade.side}
              </Text>
              <Text style={styles.tradeTextMuted}>{trade.entry}</Text>
              <Text
                style={[
                  styles.tradeTextMain,
                  { color: Colors.secondary, textAlign: "right" },
                ]}
              >
                {trade.pl}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
