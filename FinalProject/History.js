import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  List,
  ListItem,
  Layout,
  ApplicationProvider,
  Text,
  Button,
} from "@ui-kitten/components";
import { useSQLiteContext } from "expo-sqlite";
import * as eva from "@eva-design/eva";

const History = () => {
  const [history, setHistory] = useState([]);
  const db = useSQLiteContext();

  const updateList = async () => {
    try {
      const list = await db.getAllAsync("SELECT * from history");
      setHistory(list);
    } catch (error) {
      console.error("Could not get items", error);
    }
  };

  useEffect(() => {
    updateList();
  }, []);

  const renderItem = ({ item, index }) => (
    <ListItem title={`- LINK ${index + 1}: ${item.link} `} />
  );

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text style={styles.text} category="h1">
          HISTORY
        </Text>
        <Button style={{ marginTop: 20, marginBottom:20 }} onPress={updateList}>
          Refresh
        </Button>
        <List
          style={styles.listContainer}
          data={history}
          renderItem={renderItem}
        />
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  listContainer: {
    maxHeight: 700,
  },
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    position: "relative",
  },
});

export default History;
