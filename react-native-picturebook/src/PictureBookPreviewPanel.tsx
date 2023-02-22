import { useCallback, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import PictureBook from "./PictureBook";
import PictureBookPage from "./PictureBookPage";
import PictureBookPreviewControls from "./PictureBookPreviewControls";
import PictureBookPreviewPageList from "./PictureBookPreviewPageList";

interface PictureBookPreviewPanelProps {
  book: PictureBook;
  selected?: PictureBookPage;
  onPageChange: (selected: PictureBookPage) => void;
  onControlValueChange: (value: Record<string, unknown>) => void;
}

export default function PictureBookPreviewPanel({
  book,
  onPageChange,
  selected,
  onControlValueChange,
}: PictureBookPreviewPanelProps) {
  const [showNavigate, setShowNavigate] = useState(false);

  const onOpenNavigate = useCallback(() => {
    setShowNavigate(true);
  }, [setShowNavigate]);

  const hasControl =
    selected && selected.controls && selected.controls.length > 0;

  return (
    <View style={{ maxHeight: "40%" }}>
      <PictureBookPreviewPageList
        pages={book.getPages()}
        open={showNavigate}
        onClose={() => setShowNavigate(false)}
        onSelect={(page) => {
          onPageChange(page);
          setShowNavigate(false);
        }}
      />

      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolBarButton} onPress={onOpenNavigate}>
          <Text>Navigate</Text>
        </TouchableOpacity>
        {hasControl && (
          <TouchableOpacity
            style={[styles.toolBarButton, styles.toolBarButtonSelected]}
          >
            <Text style={styles.toolBarButtonSeelctedText}>Controls</Text>
          </TouchableOpacity>
        )}
      </View>

      {hasControl && (
        <View
          style={[
            styles.control,
            { height: Dimensions.get("screen").height * 0.4 },
          ]}
        >
          <PictureBookPreviewControls
            controls={selected.controls || []}
            onControlValueChange={onControlValueChange}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#eee",
    flexDirection: "row",
  },

  control: {
    backgroundColor: "#fff",
  },

  toolBarButton: {
    padding: 10,
    paddingHorizontal: 15,
  },

  toolBarButtonSelected: {
    backgroundColor: "#2980b9",
  },

  toolBarButtonSeelctedText: {
    color: "#fff",
  },
});
