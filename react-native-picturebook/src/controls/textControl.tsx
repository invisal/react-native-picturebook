import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import {
  PictureBookControl,
  PictureBookControlUpdateCallback,
} from "../PictureBookControl";

export function PictureBookTextControl({
  controlProps,
  update,
}: {
  controlProps: TextControlProps;
  update: PictureBookControlUpdateCallback;
}) {
  const [value, setValue] = useState(controlProps.defaultValue || "");

  return (
    <View>
      <View>
        <Text style={styles.title}>{controlProps.name}</Text>
        {controlProps.description && (
          <Text style={styles.description}>{controlProps.description}</Text>
        )}
        <TextInput
          value={value}
          onChangeText={(newValue) => {
            setValue(newValue);
            update({ [controlProps.name]: newValue });
          }}
          style={styles.textContainer}
        />
      </View>
    </View>
  );
}

interface TextControlProps {
  name: string;
  description?: string;
  defaultValue?: string;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    color: "#555",
    marginBottom: 8,
  },

  textContainer: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default function textControl(
  props: TextControlProps
): PictureBookControl {
  return {
    name: props.name,
    defaultValue: props.defaultValue,
    component: ({ update }) => (
      <PictureBookTextControl update={update} controlProps={props} />
    ),
  };
}
