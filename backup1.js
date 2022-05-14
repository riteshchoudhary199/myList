import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";

// get data from this URL!
const movieURL = "https://catfact.ninja/breeds";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json.data);
        console.log(json);
        console.log("jason data of given link....!", json.data);
      })
      .catch((error) => alert(error));
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View>
      <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
      <FlatList
        data={data}
        keyExtractor={({ breed, origin }, index) => breed + origin}
        renderItem={({ item }) => (
          <View style={{ paddingBottom: 10 }}>
            <Text style={styles.movieText}>
              {item.breed}, {item.origin}, {item.pattern},{item.coat}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 48,
  },
  movieText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },
});

export default App;
