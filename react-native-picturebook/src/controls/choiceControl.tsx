import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { PictureBookControlUpdateCallback } from "../PictureBookControl";

interface ChoiceControlProps {
  name: string;
  description?: string;
  defaultValue?: string;
  options: string[];
}

export function PictureBookChoiceControl<T>({
  controlProps,
  update,
}: {
  controlProps: ChoiceControlProps;
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
        <FlatList
          horizontal
          data={controlProps.options}
          renderItem={({ item }) => {
            const isSelected = value === item;

            return (
              <TouchableOpacity
                onPress={() => {
                  setValue(item);
                  update({ [controlProps.name]: item });
                }}
                style={
                  isSelected
                    ? [styles.choiceButton, styles.selected]
                    : styles.choiceButton
                }
              >
                <Text style={isSelected ? styles.textSelected : undefined}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
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

  choiceButton: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  selected: {
    backgroundColor: "#2980b9",
  },

  textSelected: {
    color: "#fff",
  },
});

export default function choiceControl(props: ChoiceControlProps) {
  return {
    name: props.name,
    defaultValue: props.defaultValue,
    component: ({ update }) => (
      <PictureBookChoiceControl update={update} controlProps={props} />
    ),
  };
}
