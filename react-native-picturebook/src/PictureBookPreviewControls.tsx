import { FlatList, View, StyleSheet } from "react-native";
import { PictureBookControl } from "./PictureBookControl";

interface PictureBookPreviewControlsProps {
  controls: PictureBookControl[];
  onControlValueChange: (value: Record<string, unknown>) => void;
}

export default function PictureBookPreviewControls({
  controls,
  onControlValueChange,
}: PictureBookPreviewControlsProps) {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={controls}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => {
        const ControlComponent = item.component;
        return (
          <View style={styles.controlContainer}>
            <ControlComponent update={onControlValueChange} />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  controlContainer: {
    padding: 10,
    paddingHorizontal: 15,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});
