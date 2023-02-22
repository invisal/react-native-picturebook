import {
  Modal,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import PictureBookPage from "./PictureBookPage";

interface PictureBookPreviewPageList {
  open: boolean;
  pages: readonly PictureBookPage[];
  onClose: () => void;
  onSelect: (page: PictureBookPage) => void;
}

type PageItemPress = () => void;
type PageTreeItemPress = (page: PictureBookPage) => void;

function PageItem({
  depth,
  name,
  onPress,
}: {
  depth: number;
  name: string;
  onPress: PageItemPress;
}) {
  return (
    <TouchableOpacity
      style={{
        paddingLeft: depth * 20,
      }}
      onPress={onPress}
    >
      <View
        style={{
          padding: 8,
          paddingLeft: 15,
          borderLeftWidth: 2,
          borderLeftColor: "#ccc",
        }}
      >
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

function PageItemWithSub({
  depth,
  page,
  onPress,
}: {
  depth: number;
  page: PictureBookPage;
  onPress: PageTreeItemPress;
}) {
  return (
    <>
      <PageItem depth={depth} name={page.name} onPress={() => onPress(page)} />
      {page.pages &&
        page.pages.length > 0 &&
        page.pages.map((page) => (
          <PageItemWithSub
            key={page.name}
            depth={depth + 1}
            page={page}
            onPress={onPress}
          />
        ))}
    </>
  );
}

export default function PictureBookPreviewPageList({
  open,
  pages,
  onClose,
  onSelect,
}: PictureBookPreviewPageList) {
  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.modalContent}>
        <View>
          <Button title="Close" onPress={onClose} />
        </View>
        <ScrollView>
          {pages.map((page) => (
            <PageItemWithSub
              key={page.name}
              page={page}
              depth={0}
              onPress={onSelect}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#0007",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: "#fff",
  },
});
