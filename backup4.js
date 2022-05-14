const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.result}
        keyExtractor={({ fgCode, styleNo }, index) => fgCode + styleNo}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                {item.fgCode}, {item.styleNo},
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
