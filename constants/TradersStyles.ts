import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const TradersStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    padding: 24,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Changed to center for better badge alignment
    marginBottom: 24,
  },
  idSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  labelCaps: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8b90a0",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  traderId: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.textMain,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statValueROI: {
    fontSize: 28,
    fontWeight: "600",
    color: Colors.primary,
  },
  statValueDD: {
    fontSize: 28,
    fontWeight: "600",
    color: "#ffb3ad",
  },
  divider: {
    height: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
    marginVertical: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  copyButton: {
    flex: 1,
    backgroundColor: Colors.primaryMuted,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  secondaryButtonText: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
  copyButtonText: {
    color: Colors.background,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
