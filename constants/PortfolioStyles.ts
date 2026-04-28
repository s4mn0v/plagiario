import { StyleSheet, Platform } from "react-native";
import { Colors } from "./Colors";

export const PortfolioStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  pageHeader: {
    marginBottom: 32,
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.textMain,
    letterSpacing: -1,
  },
  pageSubtitle: {
    fontSize: 16,
    color: Colors.textMuted,
    marginTop: 4,
  },

  sectionHeader: {
    marginTop: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#8b90a0",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 12,
  },
  sectionLine: {
    height: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
  },

  // Health / Equity Card Styles
  healthCard: {
    backgroundColor: Colors.surface,
    padding: 24,
    borderRadius: 4,
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: "center",
  },
  svgWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  chartOverlay: {
    position: "absolute",
    alignItems: "center",
  },
  chartValue: {
    fontSize: 36,
    fontWeight: "700",
    color: Colors.textMain,
  },
  chartLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8b90a0",
  },
  metricsList: {
    width: "100%",
    gap: 12,
  },
  metricRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricLabel: {
    fontSize: 15,
    color: Colors.textMuted,
  },
  metricValue: {
    fontSize: 15,
    color: Colors.textMain,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  equityValue: {
    fontSize: 40,
    fontWeight: "600",
    color: Colors.textMain,
    marginBottom: 8,
  },
  equityChange: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },

  // Portfolio Card Component Styles
  card: {
    backgroundColor: Colors.surface,
    padding: 24,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 16,
  },
  titleContainer: {
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.textMain,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  labelCaps: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8b90a0",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  idSection: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
  },
  idText: {
    fontSize: 14,
    color: Colors.textMain,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
  },
  statBox: {
    width: "50%",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.textMain,
    marginTop: 4,
  },
  unit: {
    fontSize: 12,
    color: "#8b90a0",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    height: 44,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },
  detailsToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#1A1A1A",
  },
  tradesList: {
    marginTop: 16,
  },
  tradeHeader: {
    flexDirection: "row",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
  },
  tradeHeadText: {
    fontSize: 9,
    color: "#8b90a0",
    flex: 1,
    fontWeight: "700",
  },
  tradeRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  tradeTextMain: {
    fontSize: 12,
    color: "white",
    flex: 1,
  },
  tradeTextMuted: {
    fontSize: 12,
    color: "#8b90a0",
    flex: 1,
  },
});
