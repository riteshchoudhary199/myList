import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";

const App = () => {
  // 555555555555555
  const [showlist, setshowlist] = useState(false);

  let listViewRef;
  const [dataSource, setDataSource] = useState([
    { id: 1, title: "Button" },
    { id: 2, title: "Card" },
    { id: 3, title: "Input" },
    { id: 4, title: "Avatar" },
    { id: 5, title: "CheckBox" },
    { id: 6, title: "Header" },
    { id: 7, title: "Icon" },
    { id: 8, title: "Lists" },
    { id: 9, title: "Rating" },
    { id: 10, title: "Pricing" },
    { id: 11, title: "Avatar" },
    { id: 12, title: "CheckBox" },
    { id: 13, title: "Header" },
    { id: 14, title: "Icon" },
    { id: 15, title: "Lists" },
    { id: 16, title: "Rating" },
    { id: 17, title: "Pricing" },
  ]);

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "red",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  const headAlert = () => {
    alert("hi feautures");
  };

  // const upButtonHandler = () => {
  //   //OnCLick of Up button we scrolled the list to top
  //   listViewRef.scrollToOffset({ offset: 0, animated: true });
  // };

  // const downButtonHandler = () => {
  //   //OnCLick of down button we scrolled the list to bottom
  //   listViewRef.scrollToEnd({ animated: true });
  // };

  const headComponent = () => {
    return (
      <View style={{ marginTop: 35 }}>
        <Text
          style={{
            fontSize: 24,
            alignContent: "center",
            // justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#00FFFF",
          }}
          onPress={headAlert}
        >
          Feautures
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 35 }}>
        <Text
          style={{
            fontSize: 24,
            alignContent: "center",
            // justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#00FFFF",
          }}
          onPress={() => {
            Alert.alert("hii");
          }}
        >
          Feautures
        </Text>
        <Button
          title="Press me"
          onPress={
            () => {
              setshowlist(true);
              console.log("test");
            }
            // Alert.alert("Simple Button pressed")
          }
        />
      </View>
      {showlist && (
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          //   ListHeaderComponent={headComponent}
        />
      )}
      {/* <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {}}
        style={styles.downButtonStyle}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_down.png",
          }}
          style={styles.downButtonImageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={upButtonHandler}
        style={styles.upButtonStyle}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_up.png",
          }}
          style={styles.upButtonImageStyle}
        />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 30,
    fontSize: 20,
  },
  upButtonStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 70,
  },
  upButtonImageStyle: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  downButtonStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    top: 70,
  },
  downButtonImageStyle: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
});

export default App;
