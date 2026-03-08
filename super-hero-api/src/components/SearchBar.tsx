import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  onSearch: (text: string) => void;
};

export default function SearchBar({ onSearch }: Props) {

  const [text, setText] = useState("");

  const handlePress = () => {
    if (text.trim().length === 0) return;
    onSearch(text);
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="ingresar nombre o id"
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
        style={styles.input}
        onSubmitEditing={handlePress}

      />

      <Pressable onPress={handlePress}>
        <Ionicons name="search" size={24} color="white" />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    margin:40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
  },

  input: {
    flex: 1,
    color: "white",
    marginRight: 10,
    fontSize: 16,
  },

});