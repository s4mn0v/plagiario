import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Svg, Rect, Path } from "react-native-svg";
import { ProfileStyles as styles } from "../../constants/TraderProfileStyles";
import { Colors } from "@/constants/Colors";

export default function TraderProfile() {
  const { id } = useLocalSearchParams();

  // 1. Create a reference to the ScrollView
  const scrollViewRef = useRef<ScrollView>(null);

  // 2. Function to scroll to the bottom when input is focused
  const handleFocus = () => {
    // Small delay to allow keyboard to start opening, then scroll to end
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <ScrollView
        ref={scrollViewRef} // 3. Attach the ref
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* --- ALL CONTENT REMAINS INSIDE THE SCROLLVIEW --- */}

        {/* FOCAL POINT CARD */}
        <View style={styles.focalCard}>
          <View style={styles.avatarBox}>
            <Svg width="60" height="60" viewBox="0 0 80 80">
              <Rect x="10" y="10" width="10" height="10" fill="#404040" />
              <Rect
                x="30"
                y="30"
                width="20"
                height="20"
                stroke={Colors.primary}
                strokeWidth="2"
              />
              <Rect
                x="60"
                y="60"
                width="10"
                height="10"
                fill={Colors.primary}
                fillOpacity="0.5"
              />
              <Path
                d="M0 0L80 80M80 0L0 80"
                stroke="#262626"
                strokeWidth="0.5"
              />
            </Svg>
          </View>
          <Text style={styles.unitLabel}>TRADER UNIT</Text>
          <Text style={styles.unitTitle}>TRDR-992-SIGMA</Text>
          <View style={styles.roiContainer}>
            <Text style={styles.roiLarge}>+248%</Text>
            <Text style={styles.roiLabel}>ROI</Text>
          </View>
          <View style={styles.unitFooter}>
            <View style={styles.footerItem}>
              <Text style={styles.unitLabel}>RISK</Text>
              <Text style={[styles.footerValue, { color: Colors.secondary }]}>
                LOW
              </Text>
            </View>
            <View style={styles.vSeparator} />
            <View style={styles.footerItem}>
              <Text style={styles.unitLabel}>STATUS</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.statusDot} />
                <Text style={styles.footerValue}>ACTIVE</Text>
              </View>
            </View>
          </View>
        </View>

        {/* HORIZONTAL STATS ROW */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>PROFIT</Text>
            <Text style={styles.statValue}>14.2K</Text>
          </View>
          <View style={styles.vSeparator} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>WIN RATE</Text>
            <Text style={styles.statValue}>82%</Text>
          </View>
          <View style={styles.vSeparator} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>FOLLOWERS</Text>
            <Text style={styles.statValue}>1.2K</Text>
          </View>
        </View>

        {/* LIVE POSITIONS */}
        <View style={styles.sectionCard}>
          <Text style={styles.tableTitle}>Live Positions</Text>
          <PositionRow
            symbol="BTCUSDT"
            side="LONG 50X"
            price="64,281.40"
            color={Colors.secondary}
          />
          <PositionRow
            symbol="ETHUSDT"
            side="SHORT 20X"
            price="3,452.12"
            color={Colors.error}
          />
          <PositionRow
            symbol="SOLUSDT"
            side="LONG 10X"
            price="142.05"
            color={Colors.secondary}
          />
        </View>

        {/* DIRECT COPY EXECUTION CARD (Inside ScrollView at the end) */}
        <View style={styles.executionCard}>
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>
            Direct Copy Execution
          </Text>
          <Text style={{ color: "#8b90a0", fontSize: 13, marginTop: 4 }}>
            Initialize automated copying of Alpha Core signals. System will
            mirror all future executions.
          </Text>

          <View style={styles.inputWrapper}>
            <Text
              style={{
                color: "#8b90a0",
                paddingLeft: 16,
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              USDT
            </Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor="#404040"
              keyboardType="numeric"
              onFocus={handleFocus} // 4. Trigger auto-scroll on focus
              returnKeyType="done"
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              padding: 16,
              alignItems: "center",
            }}
            activeOpacity={0.8}
            onPress={() => Keyboard.dismiss()}
          >
            <Text
              style={{
                color: Colors.background,
                fontWeight: "800",
                letterSpacing: 1,
              }}
            >
              CONFIRM EXECUTION
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const PositionRow = ({ symbol, side, price, color }: any) => (
  <View style={styles.row}>
    <View>
      <Text style={{ color: "#FFF", fontWeight: "600" }}>{symbol}</Text>
      <Text style={{ color, fontSize: 10, fontWeight: "700" }}>{side}</Text>
    </View>
    <View style={{ alignItems: "flex-end" }}>
      <Text style={{ color: "#c1c6d7" }}>{price}</Text>
      <Text style={{ color: "#8b90a0", fontSize: 10 }}>ENTRY</Text>
    </View>
  </View>
);
