import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Pressable, // Use Pressable instead of TouchableWithoutFeedback
  Platform,
  ViewStyle,
  StyleProp,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export type DropdownOption = {
  label: string;
  value: string;
};

interface DropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Dropdown({
  options,
  selectedValue,
  onSelect,
  placeholder = "SELECT FILTER",
  style,
}: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const containerRef = useRef<View>(null);

  const selectedLabel = options.find((o) => o.value === selectedValue)?.label;

  const toggleDropdown = () => {
    if (containerRef.current) {
      containerRef.current.measure((x, y, w, h, px, py) => {
        // py is the vertical position, px is horizontal
        const offset = Platform.OS === "android" ? -20 : 2;

        setTop(py + h + offset);
        setLeft(px);
        setWidth(w);
        setExpanded(true);
      });
    }
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setExpanded(false);
  };

  return (
    <View ref={containerRef} style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={toggleDropdown}
      >
        <Text style={styles.buttonText}>{selectedLabel || placeholder}</Text>
        <MaterialIcons
          name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>

      <Modal visible={expanded} transparent animationType="none">
        {/* The backdrop is now a Pressable. Clicking it triggers close. */}
        <Pressable style={styles.backdrop} onPress={() => setExpanded(false)}>
          {/*
              We wrap the menu in a Pressable that does nothing (stops propagation).
              This ensures that clicking INSIDE the menu doesn't close it.
          */}
          <Pressable
            style={[styles.menu, { top, left, width }]}
            onPress={(e) => e.stopPropagation()}
          >
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.item,
                    selectedValue === item.value && styles.itemActive,
                  ]}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text
                    style={[
                      styles.itemText,
                      selectedValue === item.value && styles.itemTextActive,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {selectedValue === item.value && (
                    <MaterialIcons
                      name="check"
                      size={16}
                      color={Colors.primary}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // marginVertical: 20,
  },
  button: {
    height: 50,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  backdrop: {
    flex: 1,
    // Using style.pointerEvents instead of the prop pointerEvents
    pointerEvents: "auto",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  menu: {
    position: "absolute",
    backgroundColor: "#0E1D1B",
    borderWidth: 1,
    borderColor: Colors.primaryMuted,
    borderRadius: 2,
    // Shadow/Depth
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
    elevation: 10,
  },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(29, 54, 47, 0.5)",
  },
  itemActive: {
    backgroundColor: "rgba(139, 213, 185, 0.05)",
  },
  itemText: {
    color: "#8b90a0",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  itemTextActive: {
    color: Colors.primary,
    fontWeight: "800",
  },
});
