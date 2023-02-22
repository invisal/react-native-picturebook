import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PictureBookControl } from "./PictureBookControl";

export interface PictureBookPreviewItemProps {
  name: string;
  controls?: PictureBookControl[];
  component: React.FC | null;
}

export default function PictureBookPreviewItem({
  item,
  onPress,
}: {
  item: PictureBookPreviewItemProps;
  onPress: () => void;
}) {
  if (item.component) {
    return (
      <TouchableOpacity style={styles.storyContainer} onPress={onPress}>
        <Text style={styles.storyText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.collectionContainer}>
      <Text style={styles.collectionText}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  collectionContainer: {
    padding: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  collectionText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  storyContainer: {
    padding: 10,
    paddingLeft: 25,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  storyText: {
    fontSize: 16,
  },
});
