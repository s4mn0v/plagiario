import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Svg, Circle } from "react-native-svg";
import { Colors } from "@/constants/Colors";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PortfolioStyles as styles } from "../../constants/PortfolioStyles";
import { DotBackground } from "@/components/DotBackground";
import { GlobalStyles } from "@/constants/GlobalStyles";

export default function PortfolioScreen() {
  return (
    <View style={GlobalStyles.container}>
      <DotBackground />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Portfolio Overview</Text>
          <Text style={styles.pageSubtitle}>
            Managing 3 active copy-trading streams
          </Text>
        </View>

        {/* --- OVERVIEW SECTION --- */}
        <View style={styles.healthCard}>
          <Text style={styles.labelCaps}>PORTFOLIO HEALTH</Text>
          <View style={styles.chartContainer}>
            <View style={styles.svgWrapper}>
              <Svg height="160" width="160" viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={Colors.tertiary}
                  strokeWidth="8"
                  fill="transparent"
                />
                <Circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={Colors.primary}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="282.6"
                  strokeDashoffset="70.6"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </Svg>
              <View style={styles.chartOverlay}>
                <Text style={styles.chartValue}>
                  75<Text style={{ color: Colors.primary }}>%</Text>
                </Text>
                <Text style={styles.chartLabel}>OPTIMAL</Text>
              </View>
            </View>
            <View style={styles.metricsList}>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Max Drawdown</Text>
                <Text style={[styles.metricValue, { color: Colors.error }]}>
                  -4.2%
                </Text>
              </View>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Margin Used</Text>
                <Text style={styles.metricValue}>32.8%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.healthCard}>
          <Text style={styles.labelCaps}>TOTAL EQUITY</Text>
          <Text style={styles.equityValue}>14,250.00</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={styles.equityChange}>+1,240.50 (9.54%)</Text>
            <Text style={styles.labelCaps}>LAST 30D</Text>
          </View>
        </View>

        {/* --- DIVIDER SECTION --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Assets</Text>
          <View style={styles.sectionLine} />
        </View>

        {/* --- ACTIVE ASSETS LIST --- */}
        <PortfolioCard
          id="9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
          name="QUANT_ALPHA_V3_TRADER"
          status="ACTIVE • HIGH FREQUENCY"
          allocated="5,000.00"
          livePL="+420.15"
          openTrades={4}
          avgHold="2.4 HRS"
          avatarBg="#005bc1"
          icon="toll"
          trades={[
            {
              symbol: "BTC/USDT",
              side: "LONG",
              entry: "64,230.50",
              pl: "+$124.20",
            },
            {
              symbol: "ETH/USDT",
              side: "LONG",
              entry: "3,450.10",
              pl: "+$82.40",
            },
          ]}
        />

        <PortfolioCard
          id="497f6eca-6276-4993-bfeb-53cbbbba6f08"
          name="STABLE_MACRO_BTC"
          status="ACTIVE • LOW LEVERAGE"
          allocated="2,500.00"
          livePL="-12.40"
          openTrades={1}
          avgHold="4 DAYS"
          avatarBg="#00a572"
          icon="architecture"
          trades={[
            {
              symbol: "BTC/USDT",
              side: "LONG",
              entry: "65,100.00",
              pl: "-$45.20",
            },
          ]}
        />

        <PortfolioCard
          id="497f6eca-6276-4993-bfeb-53cbbbba6f09"
          name="ETH_SCALPER_PRO"
          status="ACTIVE • SCALPING"
          allocated="3,000.00"
          livePL="+154.20"
          openTrades={7}
          avgHold="12 MINS"
          avatarBg="#93000a"
          icon="grid-view"
          trades={[
            {
              symbol: "ETH/USDT",
              side: "SHORT",
              entry: "3,520.40",
              pl: "+$12.50",
            },
            {
              symbol: "ETH/USDT",
              side: "LONG",
              entry: "3,480.20",
              pl: "+$34.15",
            },
          ]}
        />
      </ScrollView>
    </View>
  );
}
