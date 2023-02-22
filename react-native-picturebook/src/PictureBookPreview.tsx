import { useState, useCallback } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PictureBook from "./PictureBook";
import PictureBookPage from "./PictureBookPage";
import PictureBookPreviewPanel from "./PictureBookPreviewPanel";

interface PictureBookPreviewProps {
  book: PictureBook;
}

export default function PictureBookPreview({ book }: PictureBookPreviewProps) {
  const [selectedPage, setSelectedPage] = useState<{
    page?: PictureBookPage;
    value?: Record<string, unknown>;
  }>();

  const onSelectedPageChanged = useCallback(
    (page: PictureBookPage) => {
      setSelectedPage({
        page,
        value: (page.controls || [])
          .filter((control) => control.defaultValue !== undefined)
          .reduce(
            (defaultValues, control) => ({
              ...defaultValues,
              [control.name]: control.defaultValue,
            }),
            {}
          ),
      });
    },
    [setSelectedPage]
  );

  const onControlValueChanged = useCallback(
    (changedValue: Record<string, unknown>) => {
      setSelectedPage((prev) => ({
        page: prev?.page,
        value: { ...prev?.value, ...changedValue },
      }));
    },
    [setSelectedPage]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.previewContainer}
    >
      <ScrollView style={styles.preview}>
        {selectedPage?.page?.body && (
          <selectedPage.page.body {...selectedPage.value} />
        )}
      </ScrollView>

      <PictureBookPreviewPanel
        book={book}
        selected={selectedPage?.page}
        onPageChange={onSelectedPageChanged}
        onControlValueChange={onControlValueChanged}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    position: "relative",
  },

  preview: {
    flex: 1,
  },

  showModalButtonContainer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 100,
  },

  showModalButtonText: {
    fontSize: 25,
  },
});
