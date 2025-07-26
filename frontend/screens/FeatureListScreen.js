import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, RefreshControl } from "react-native";
import { fetchFeatures, upvote } from "../api";

export default function FeatureListScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    setRefreshing(true);
    setItems(await fetchFeatures());
    setRefreshing(false);
  };
  useEffect(load, []);

  const handleUpvote = async (id) => {
    await upvote(id);
    load();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Feature" onPress={() => navigation.navigate("Add")} />
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={load} />
        }
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              marginVertical: 4,
              borderWidth: 1,
              borderRadius: 6,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Votes: {item.votes}</Text>
            <Button title="Up‑vote" onPress={() => handleUpvote(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
