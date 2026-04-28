import { StyleSheet, Platform } from "react-native";
import { Colors } from "./Colors";

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 60,
    alignItems: "center",
  },
  // Focal Unit Card
  focalCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    padding: 32,
    alignItems: "center",
    marginTop: 20,
    // Subtle glow effect
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  avatarBox: {
    width: 80,
    height: 80,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#404040",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  unitLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#A3A3A3",
    letterSpacing: 1,
    marginBottom: 4,
  },
  unitTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFF",
    marginBottom: 20,
  },
  roiContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
    marginBottom: 24,
  },
  roiLarge: {
    fontSize: 42,
    fontWeight: "900",
    color: Colors.secondary,
    letterSpacing: -1,
  },
  roiLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: Colors.secondary,
    opacity: 0.6,
  },
  unitFooter: {
    width: "100%",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 24,
    justifyContent: "center",
    gap: 20,
  },
  footerItem: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  vSeparator: {
    width: 1,
    height: 30,
    backgroundColor: Colors.border,
  },
  footerValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFF",
    marginTop: 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
    marginRight: 4,
  },

  pinnedExecutionWrapper: {
    padding: 16,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  executionCard: {
    width: "100%",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.primaryMuted,
    padding: 24,
    borderRadius: 4,
    marginBottom: 20,
  },

  // Horizontal Stats Row
  statsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 32,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statLabel: {
    fontSize: 9,
    color: "#8b90a0",
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },

  // Tables & Chart (Standardized with project palette)
  sectionCard: {
    width: "100%",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    marginBottom: 24,
  },
  tableTitle: {
    fontSize: 10,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
  },

  // Execution Box
  executionCard: {
    width: "100%",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.primaryMuted,
    padding: 24,
    borderRadius: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#050505",
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: 20,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    color: "#FFF",
    padding: 12,
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
});
