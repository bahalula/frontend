import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { addFeature } from "../api";

export default function AddFeatureScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const save = async () => {
    if (!title.trim()) return Alert.alert("Title required");
    await addFeature({ title, description: desc });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Feature title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        multiline
        style={{ borderWidth: 1, height: 80, marginBottom: 8, padding: 8 }}
      />
      <Button title="Submit" onPress={save} />
    </View>
  );
}
