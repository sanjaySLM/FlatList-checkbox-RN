import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CheckBox from "@react-native-community/checkbox";

export default function App() {
  const data = [
    { id: 1, name: "TEST 1" },
    { id: 2, name: "TEST 2" },
    { id: 3, name: "TEST 3" },
  ];
  const [checked, setChecked] = useState([]);
  const selectedData = data.filter((value) => checked.includes(value.id));
  console.log("checked", checked);
  console.log("selectedData", selectedData);
  const renderItem = (itemData) => { 
    return (
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxTextCointainer}>
          <Text>{itemData.item.name}</Text>
        </View>
        <View style={styles.checkboxViewContainer}>
          <CheckBox
            value={checked.includes(itemData.item.id)}
            onValueChange={() => {
              const newIds = [...checked];
              const index = newIds.indexOf(itemData.item.id);
              if (index > -1) {
                newIds.splice(index, 1);
              } else {
                newIds.push(itemData.item.id);
              }
              setChecked(newIds);
            }}
          />
        </View>
      </View>
    );
  };
  const renderSelectedItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={() => {
          return (
            new Date().getTime().toString() +
            Math.floor(
              Math.random() * Math.floor(new Date().getTime())
            ).toString()
          );
        }}
        data={data}
        renderItem={renderItem}
        numColumns={1}
        extraData={checked}
      />
      <FlatList
        keyExtractor={() => {
          return (
            new Date().getTime().toString() +
            Math.floor(
              Math.random() * Math.floor(new Date().getTime())
            ).toString()
          );
        }}
        data={selectedData}
        renderItem={renderSelectedItem}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: "15%",
    width: "70%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxTextCointainer: {
    width: "35%",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxViewContainer: {
    marginLeft: "10%",
    width: "10%",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
});
