import { StyleSheet, Platform } from "react-native";
import { Colors } from "./Colors";

export const SettingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 50,
  },
  section: {
    marginBottom: 40,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8b90a0",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  // Badges
  badgeRow: {
    flexDirection: "row",
    gap: 8,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 165, 114, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
    borderRadius: 2,
  },
  badgeText: {
    fontSize: 9,
    color: Colors.secondary,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  // Cards & Inputs
  card: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 24,
    borderRadius: 4,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8b90a0",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  inputWrapper: {
    backgroundColor: "#050505",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#FFF",
    padding: 12,
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  // Parameters Bento
  bentoGrid: {
    gap: 16,
  },
  bentoCard: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    borderRadius: 4,
  },
  amountInput: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "right",
    paddingRight: 60,
    paddingVertical: 12,
  },
  currencyLabel: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -8,
    color: "#8b90a0",
    fontSize: 12,
    fontWeight: "700",
  },
  // Margin Mode Buttons
  modeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#050505",
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 8,
    borderRadius: 4,
  },
  modeButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  modeText: {
    color: "#8b90a0",
    fontWeight: "600",
  },
  modeTextActive: {
    color: "#FFF",
    fontWeight: "700",
  },
  // Leverage
  leverageInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 20,
  },
  leverageValue: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.primary,
  },
  // Guardian
  guardianCard: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.warning,
  },
  // Footer
  footer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 4,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    elevation: 8,
  },
  saveButtonText: {
    color: "#FFF",
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
