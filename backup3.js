<FlatList
  data={[
    { key: "Devin" },
    { key: "Dan" },
    { key: "Jillian" },
    { key: "Jimmy" },
    { key: "Julie" },
  ]}
  renderItem={({ item }) => <Text>{item.key}</Text>}
/>;
