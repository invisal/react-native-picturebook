import { StyleSheet, SafeAreaView, View } from "react-native";
import {
  choiceControl,
  PictureBook,
  PictureBookPreview,
  textControl,
} from "react-native-picturebook";
import { Text, Button, Card, Avatar, IconButton } from "react-native-paper";

const ButtonPage = ({
  text,
  mode,
}: {
  text: string;
  mode: "text" | "contained" | "elevated" | "outlined" | "contained-tonal";
}) => {
  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Button mode={mode}>{text || "No default value"}</Button>
    </View>
  );
};

const book = new PictureBook([
  {
    name: "Button",
    body: ButtonPage,
    controls: [
      textControl({ name: "text", defaultValue: "Hello World" }),
      choiceControl({
        name: "mode",
        defaultValue: "contained",
        options: [
          "text",
          "contained",
          "elevated",
          "outlined",
          "contained-tonal",
        ],
      }),
    ],
  },
  {
    name: "Card",
    body: () => (
      <View style={{ padding: 20, marginTop: 40 }}>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    ),
    pages: [
      {
        name: "Card.Actions",
        body: () => {
          return (
            <View style={{ padding: 20, marginTop: 40 }}>
              <Card>
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          );
        },
      },
      {
        name: "Card.Content",
        body: () => {
          return (
            <View style={{ padding: 20, marginTop: 40 }}>
              <Card>
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
              </Card>
            </View>
          );
        },
      },
      {
        name: "Card.Cover",
        body: () => {
          return (
            <View style={{ padding: 20, marginTop: 40 }}>
              <Card>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              </Card>
            </View>
          );
        },
      },
      {
        name: "Card.Title",
        body: () => {
          return (
            <View style={{ padding: 20, marginTop: 40 }}>
              <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => (
                  <IconButton {...props} icon="camera" onPress={() => {}} />
                )}
              />
            </View>
          );
        },
      },
    ],
  },
]);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PictureBookPreview book={book} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
