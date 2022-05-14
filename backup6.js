import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.result}
        //  keyExtractor={({ fgCode }, index) => fgCode}
        renderItem={({ item }) => (
          <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
              {item.fgCode}, {item.styleNo},
            </Text>
            <FlatList
              data={item.fields}
              renderItem={({ item }) => (
                <Text>
                  {item.name},{item.value}
                </Text>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const data = {
  result: [
    {
      fgCode: "10722905BU (10000)",
      styleNo: "10722905BU",
      vendorName: 117713,
      vendorFactoryCity: 101904,
      fields: [
        {
          name: "Style No",
          value: "10722905BU",
        },
        {
          name: "Product Code",
          value: "10722905BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101904",
    },
    {
      fgCode: "10722906BU (10000)",
      styleNo: "10722906BU",
      vendorName: 117714,
      vendorFactoryCity: 101905,
      fields: [
        {
          name: "Style No",
          value: "10722906BU",
        },
        {
          name: "Product Code",
          value: "10722906BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101905",
    },
    {
      fgCode: "10722907BU (10000)",
      styleNo: "10722907BU",
      vendorName: 117715,
      vendorFactoryCity: 101906,
      fields: [
        {
          name: "Style No",
          value: "10722907BU",
        },
        {
          name: "Product Code",
          value: "10722907BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101906",
    },
    {
      fgCode: "10722908BU (10000)",
      styleNo: "10722908BU",
      vendorName: 117716,
      vendorFactoryCity: 101907,
      fields: [
        {
          name: "Style No",
          value: "10722908BU",
        },
        {
          name: "Product Code",
          value: "10722908BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101907",
    },
    {
      fgCode: "10722909BU (10000)",
      styleNo: "10722909BU",
      vendorName: 117717,
      vendorFactoryCity: 101908,
      fields: [
        {
          name: "Style No",
          value: "10722909BU",
        },
        {
          name: "Product Code",
          value: "10722909BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101908",
    },
    {
      fgCode: "10722910BU (10000)",
      styleNo: "10722910BU",
      vendorName: 117718,
      vendorFactoryCity: 101909,
      fields: [
        {
          name: "Style No",
          value: "10722910BU",
        },
        {
          name: "Product Code",
          value: "10722910BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101909",
    },
    {
      fgCode: "10722911BU (10000)",
      styleNo: "10722911BU",
      vendorName: 117719,
      vendorFactoryCity: 101910,
      fields: [
        {
          name: "Style No",
          value: "10722911BU",
        },
        {
          name: "Product Code",
          value: "10722911BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101910",
    },
    {
      fgCode: "10722912BU (10000)",
      styleNo: "10722912BU",
      vendorName: 117720,
      vendorFactoryCity: 101911,
      fields: [
        {
          name: "Style No",
          value: "10722912BU",
        },
        {
          name: "Product Code",
          value: "10722912BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101911",
    },
    {
      fgCode: "10722913BU (10000)",
      styleNo: "10722913BU",
      vendorName: 117721,
      vendorFactoryCity: 101912,
      fields: [
        {
          name: "Style No",
          value: "10722913BU",
        },
        {
          name: "Product Code",
          value: "10722913BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101912",
    },
    {
      fgCode: "10722914BU (10000)",
      styleNo: "10722914BU",
      vendorName: 117722,
      vendorFactoryCity: 101913,
      fields: [
        {
          name: "Style No",
          value: "10722914BU",
        },
        {
          name: "Product Code",
          value: "10722914BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101913",
    },
    {
      fgCode: "10722915BU (10000)",
      styleNo: "10722915BU",
      vendorName: 117723,
      vendorFactoryCity: 101914,
      fields: [
        {
          name: "Style No",
          value: "10722915BU",
        },
        {
          name: "Product Code",
          value: "10722915BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101914",
    },
    {
      fgCode: "10722916BU (10000)",
      styleNo: "10722916BU",
      vendorName: 117724,
      vendorFactoryCity: 101915,
      fields: [
        {
          name: "Style No",
          value: "10722916BU",
        },
        {
          name: "Product Code",
          value: "10722916BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101915",
    },
    {
      fgCode: "10722917BU (10000)",
      styleNo: "10722917BU",
      vendorName: 117725,
      vendorFactoryCity: 101916,
      fields: [
        {
          name: "Style No",
          value: "10722917BU",
        },
        {
          name: "Product Code",
          value: "10722917BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101916",
    },
    {
      fgCode: "10722918BU (10000)",
      styleNo: "10722918BU",
      vendorName: 117726,
      vendorFactoryCity: 101917,
      fields: [
        {
          name: "Style No",
          value: "10722918BU",
        },
        {
          name: "Product Code",
          value: "10722918BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101917",
    },
    {
      fgCode: "10722919BU (10000)",
      styleNo: "10722919BU",
      vendorName: 117727,
      vendorFactoryCity: 101918,
      fields: [
        {
          name: "Style No",
          value: "10722919BU",
        },
        {
          name: "Product Code",
          value: "10722919BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101918",
    },
    {
      fgCode: "10722920BU (10000)",
      styleNo: "10722920BU",
      vendorName: 117728,
      vendorFactoryCity: 101919,
      fields: [
        {
          name: "Style No",
          value: "10722920BU",
        },
        {
          name: "Product Code",
          value: "10722920BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101919",
    },
    {
      fgCode: "10722921BU (10000)",
      styleNo: "10722921BU",
      vendorName: 117729,
      vendorFactoryCity: 101920,
      fields: [
        {
          name: "Style No",
          value: "10722921BU",
        },
        {
          name: "Product Code",
          value: "10722921BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101920",
    },
    {
      fgCode: "10722922BU (10000)",
      styleNo: "10722922BU",
      vendorName: 117730,
      vendorFactoryCity: 101921,
      fields: [
        {
          name: "Style No",
          value: "10722922BU",
        },
        {
          name: "Product Code",
          value: "10722922BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101921",
    },
    {
      fgCode: "10722923BU (10000)",
      styleNo: "10722923BU",
      vendorName: 117731,
      vendorFactoryCity: 101922,
      fields: [
        {
          name: "Style No",
          value: "10722923BU",
        },
        {
          name: "Product Code",
          value: "10722923BU (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101922",
    },
    {
      fgCode: "ABHI8859936 (2500)",
      styleNo: "ABHI8859936",
      vendorName: 117837,
      vendorFactoryCity: 102028,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859936",
        },
        {
          name: "Product Code",
          value: "ABHI8859936 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102028",
    },
    {
      fgCode: "ABHI8859937 (2500)",
      styleNo: "ABHI8859937",
      vendorName: 117838,
      vendorFactoryCity: 102029,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859937",
        },
        {
          name: "Product Code",
          value: "ABHI8859937 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102029",
    },
    {
      fgCode: "ABHI8859938 (2500)",
      styleNo: "ABHI8859938",
      vendorName: 117839,
      vendorFactoryCity: 102030,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859938",
        },
        {
          name: "Product Code",
          value: "ABHI8859938 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102030",
    },
    {
      fgCode: "ABHI8859939 (2500)",
      styleNo: "ABHI8859939",
      vendorName: 117840,
      vendorFactoryCity: 102031,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859939",
        },
        {
          name: "Product Code",
          value: "ABHI8859939 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102031",
    },
    {
      fgCode: "ABHI8859940 (2500)",
      styleNo: "ABHI8859940",
      vendorName: 117841,
      vendorFactoryCity: 102032,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859940",
        },
        {
          name: "Product Code",
          value: "ABHI8859940 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102032",
    },
    {
      fgCode: "ABHI8859941 (2500)",
      styleNo: "ABHI8859941",
      vendorName: 117842,
      vendorFactoryCity: 102033,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859941",
        },
        {
          name: "Product Code",
          value: "ABHI8859941 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102033",
    },
    {
      fgCode: "ABHI8859942 (2500)",
      styleNo: "ABHI8859942",
      vendorName: 117843,
      vendorFactoryCity: 102034,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859942",
        },
        {
          name: "Product Code",
          value: "ABHI8859942 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102034",
    },
    {
      fgCode: "ABHI8859943 (2500)",
      styleNo: "ABHI8859943",
      vendorName: 117844,
      vendorFactoryCity: 102035,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859943",
        },
        {
          name: "Product Code",
          value: "ABHI8859943 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102035",
    },
    {
      fgCode: "ABHI8859944 (2500)",
      styleNo: "ABHI8859944",
      vendorName: 117845,
      vendorFactoryCity: 102036,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859944",
        },
        {
          name: "Product Code",
          value: "ABHI8859944 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102036",
    },
    {
      fgCode: "ABHI8859945 (2500)",
      styleNo: "ABHI8859945",
      vendorName: 117846,
      vendorFactoryCity: 102037,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859945",
        },
        {
          name: "Product Code",
          value: "ABHI8859945 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102037",
    },
    {
      fgCode: "ABHI8859946 (2500)",
      styleNo: "ABHI8859946",
      vendorName: 117847,
      vendorFactoryCity: 102038,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859946",
        },
        {
          name: "Product Code",
          value: "ABHI8859946 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102038",
    },
    {
      fgCode: "ABHI8859947 (2500)",
      styleNo: "ABHI8859947",
      vendorName: 117848,
      vendorFactoryCity: 102039,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859947",
        },
        {
          name: "Product Code",
          value: "ABHI8859947 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102039",
    },
    {
      fgCode: "ABHI8859948 (2500)",
      styleNo: "ABHI8859948",
      vendorName: 117849,
      vendorFactoryCity: 102040,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859948",
        },
        {
          name: "Product Code",
          value: "ABHI8859948 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102040",
    },
    {
      fgCode: "ABHI8859949 (2500)",
      styleNo: "ABHI8859949",
      vendorName: 117850,
      vendorFactoryCity: 102041,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859949",
        },
        {
          name: "Product Code",
          value: "ABHI8859949 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102041",
    },
    {
      fgCode: "ABHI8859950 (2500)",
      styleNo: "ABHI8859950",
      vendorName: 117851,
      vendorFactoryCity: 102042,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859950",
        },
        {
          name: "Product Code",
          value: "ABHI8859950 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102042",
    },
    {
      fgCode: "ABHI8859951 (2500)",
      styleNo: "ABHI8859951",
      vendorName: 117852,
      vendorFactoryCity: 102043,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859951",
        },
        {
          name: "Product Code",
          value: "ABHI8859951 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102043",
    },
    {
      fgCode: "ABHI8859952 (2500)",
      styleNo: "ABHI8859952",
      vendorName: 117853,
      vendorFactoryCity: 102044,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859952",
        },
        {
          name: "Product Code",
          value: "ABHI8859952 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102044",
    },
    {
      fgCode: "ABHI8859953 (2500)",
      styleNo: "ABHI8859953",
      vendorName: 117854,
      vendorFactoryCity: 102045,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859953",
        },
        {
          name: "Product Code",
          value: "ABHI8859953 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102045",
    },
    {
      fgCode: "ABHI8859954 (2500)",
      styleNo: "ABHI8859954",
      vendorName: 117855,
      vendorFactoryCity: 102046,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859954",
        },
        {
          name: "Product Code",
          value: "ABHI8859954 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102046",
    },
    {
      fgCode: "ABHI8859955 (2500)",
      styleNo: "ABHI8859955",
      vendorName: 117856,
      vendorFactoryCity: 102047,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859955",
        },
        {
          name: "Product Code",
          value: "ABHI8859955 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102047",
    },
    {
      fgCode: "ABHI8859956 (2500)",
      styleNo: "ABHI8859956",
      vendorName: 117857,
      vendorFactoryCity: 102048,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859956",
        },
        {
          name: "Product Code",
          value: "ABHI8859956 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102048",
    },
    {
      fgCode: "ABHI8859957 (2500)",
      styleNo: "ABHI8859957",
      vendorName: 117858,
      vendorFactoryCity: 102049,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859957",
        },
        {
          name: "Product Code",
          value: "ABHI8859957 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102049",
    },
    {
      fgCode: "ABHI8859958 (2500)",
      styleNo: "ABHI8859958",
      vendorName: 117859,
      vendorFactoryCity: 102050,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859958",
        },
        {
          name: "Product Code",
          value: "ABHI8859958 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102050",
    },
    {
      fgCode: "ABHI8859959 (2500)",
      styleNo: "ABHI8859959",
      vendorName: 117860,
      vendorFactoryCity: 102051,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859959",
        },
        {
          name: "Product Code",
          value: "ABHI8859959 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102051",
    },
    {
      fgCode: "ABHI8859960 (2500)",
      styleNo: "ABHI8859960",
      vendorName: 117835,
      vendorFactoryCity: 102026,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859960",
        },
        {
          name: "Product Code",
          value: "ABHI8859960 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102026",
    },
    {
      fgCode: "ABHI8859961 (2500)",
      styleNo: "ABHI8859961",
      vendorName: 117836,
      vendorFactoryCity: 102027,
      fields: [
        {
          name: "Style No",
          value: "ABHI8859961",
        },
        {
          name: "Product Code",
          value: "ABHI8859961 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102027",
    },
    {
      fgCode: "AMY8859936 (2500)",
      styleNo: "AMY8859936",
      vendorName: 117809,
      vendorFactoryCity: 102000,
      fields: [
        {
          name: "Style No",
          value: "AMY8859936",
        },
        {
          name: "Product Code",
          value: "AMY8859936 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102000",
    },
    {
      fgCode: "AMY8859937 (2500)",
      styleNo: "AMY8859937",
      vendorName: 117810,
      vendorFactoryCity: 102001,
      fields: [
        {
          name: "Style No",
          value: "AMY8859937",
        },
        {
          name: "Product Code",
          value: "AMY8859937 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102001",
    },
    {
      fgCode: "AMY8859938 (2500)",
      styleNo: "AMY8859938",
      vendorName: 117811,
      vendorFactoryCity: 102002,
      fields: [
        {
          name: "Style No",
          value: "AMY8859938",
        },
        {
          name: "Product Code",
          value: "AMY8859938 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102002",
    },
    {
      fgCode: "AMY8859939 (2500)",
      styleNo: "AMY8859939",
      vendorName: 117812,
      vendorFactoryCity: 102003,
      fields: [
        {
          name: "Style No",
          value: "AMY8859939",
        },
        {
          name: "Product Code",
          value: "AMY8859939 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102003",
    },
    {
      fgCode: "AMY8859940 (2500)",
      styleNo: "AMY8859940",
      vendorName: 117813,
      vendorFactoryCity: 102004,
      fields: [
        {
          name: "Style No",
          value: "AMY8859940",
        },
        {
          name: "Product Code",
          value: "AMY8859940 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102004",
    },
    {
      fgCode: "AMY8859941 (2500)",
      styleNo: "AMY8859941",
      vendorName: 117814,
      vendorFactoryCity: 102005,
      fields: [
        {
          name: "Style No",
          value: "AMY8859941",
        },
        {
          name: "Product Code",
          value: "AMY8859941 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102005",
    },
    {
      fgCode: "AMY8859942 (2500)",
      styleNo: "AMY8859942",
      vendorName: 117815,
      vendorFactoryCity: 102006,
      fields: [
        {
          name: "Style No",
          value: "AMY8859942",
        },
        {
          name: "Product Code",
          value: "AMY8859942 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102006",
    },
    {
      fgCode: "AMY8859943 (2500)",
      styleNo: "AMY8859943",
      vendorName: 117816,
      vendorFactoryCity: 102007,
      fields: [
        {
          name: "Style No",
          value: "AMY8859943",
        },
        {
          name: "Product Code",
          value: "AMY8859943 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102007",
    },
    {
      fgCode: "AMY8859944 (2500)",
      styleNo: "AMY8859944",
      vendorName: 117817,
      vendorFactoryCity: 102008,
      fields: [
        {
          name: "Style No",
          value: "AMY8859944",
        },
        {
          name: "Product Code",
          value: "AMY8859944 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102008",
    },
    {
      fgCode: "AMY8859945 (2500)",
      styleNo: "AMY8859945",
      vendorName: 117818,
      vendorFactoryCity: 102009,
      fields: [
        {
          name: "Style No",
          value: "AMY8859945",
        },
        {
          name: "Product Code",
          value: "AMY8859945 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102009",
    },
    {
      fgCode: "AMY8859946 (2500)",
      styleNo: "AMY8859946",
      vendorName: 117819,
      vendorFactoryCity: 102010,
      fields: [
        {
          name: "Style No",
          value: "AMY8859946",
        },
        {
          name: "Product Code",
          value: "AMY8859946 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102010",
    },
    {
      fgCode: "AMY8859947 (2500)",
      styleNo: "AMY8859947",
      vendorName: 117820,
      vendorFactoryCity: 102011,
      fields: [
        {
          name: "Style No",
          value: "AMY8859947",
        },
        {
          name: "Product Code",
          value: "AMY8859947 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102011",
    },
    {
      fgCode: "AMY8859948 (2500)",
      styleNo: "AMY8859948",
      vendorName: 117821,
      vendorFactoryCity: 102012,
      fields: [
        {
          name: "Style No",
          value: "AMY8859948",
        },
        {
          name: "Product Code",
          value: "AMY8859948 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102012",
    },
    {
      fgCode: "AMY8859949 (2500)",
      styleNo: "AMY8859949",
      vendorName: 117822,
      vendorFactoryCity: 102013,
      fields: [
        {
          name: "Style No",
          value: "AMY8859949",
        },
        {
          name: "Product Code",
          value: "AMY8859949 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102013",
    },
    {
      fgCode: "AMY8859950 (2500)",
      styleNo: "AMY8859950",
      vendorName: 117823,
      vendorFactoryCity: 102014,
      fields: [
        {
          name: "Style No",
          value: "AMY8859950",
        },
        {
          name: "Product Code",
          value: "AMY8859950 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102014",
    },
    {
      fgCode: "AMY8859951 (2500)",
      styleNo: "AMY8859951",
      vendorName: 117824,
      vendorFactoryCity: 102015,
      fields: [
        {
          name: "Style No",
          value: "AMY8859951",
        },
        {
          name: "Product Code",
          value: "AMY8859951 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102015",
    },
    {
      fgCode: "AMY8859952 (2500)",
      styleNo: "AMY8859952",
      vendorName: 117825,
      vendorFactoryCity: 102016,
      fields: [
        {
          name: "Style No",
          value: "AMY8859952",
        },
        {
          name: "Product Code",
          value: "AMY8859952 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102016",
    },
    {
      fgCode: "AMY8859953 (2500)",
      styleNo: "AMY8859953",
      vendorName: 117826,
      vendorFactoryCity: 102017,
      fields: [
        {
          name: "Style No",
          value: "AMY8859953",
        },
        {
          name: "Product Code",
          value: "AMY8859953 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102017",
    },
    {
      fgCode: "AMY8859954 (2500)",
      styleNo: "AMY8859954",
      vendorName: 117827,
      vendorFactoryCity: 102018,
      fields: [
        {
          name: "Style No",
          value: "AMY8859954",
        },
        {
          name: "Product Code",
          value: "AMY8859954 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102018",
    },
    {
      fgCode: "AMY8859955 (2500)",
      styleNo: "AMY8859955",
      vendorName: 117828,
      vendorFactoryCity: 102019,
      fields: [
        {
          name: "Style No",
          value: "AMY8859955",
        },
        {
          name: "Product Code",
          value: "AMY8859955 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102019",
    },
    {
      fgCode: "AMY8859956 (2500)",
      styleNo: "AMY8859956",
      vendorName: 117829,
      vendorFactoryCity: 102020,
      fields: [
        {
          name: "Style No",
          value: "AMY8859956",
        },
        {
          name: "Product Code",
          value: "AMY8859956 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102020",
    },
    {
      fgCode: "AMY8859957 (2500)",
      styleNo: "AMY8859957",
      vendorName: 117830,
      vendorFactoryCity: 102021,
      fields: [
        {
          name: "Style No",
          value: "AMY8859957",
        },
        {
          name: "Product Code",
          value: "AMY8859957 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102021",
    },
    {
      fgCode: "AMY8859958 (2500)",
      styleNo: "AMY8859958",
      vendorName: 117831,
      vendorFactoryCity: 102022,
      fields: [
        {
          name: "Style No",
          value: "AMY8859958",
        },
        {
          name: "Product Code",
          value: "AMY8859958 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102022",
    },
    {
      fgCode: "AMY8859959 (2500)",
      styleNo: "AMY8859959",
      vendorName: 117832,
      vendorFactoryCity: 102023,
      fields: [
        {
          name: "Style No",
          value: "AMY8859959",
        },
        {
          name: "Product Code",
          value: "AMY8859959 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102023",
    },
    {
      fgCode: "AMY8859960 (2500)",
      styleNo: "AMY8859960",
      vendorName: 117833,
      vendorFactoryCity: 102024,
      fields: [
        {
          name: "Style No",
          value: "AMY8859960",
        },
        {
          name: "Product Code",
          value: "AMY8859960 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102024",
    },
    {
      fgCode: "AMY8859961 (2500)",
      styleNo: "AMY8859961",
      vendorName: 117834,
      vendorFactoryCity: 102025,
      fields: [
        {
          name: "Style No",
          value: "AMY8859961",
        },
        {
          name: "Product Code",
          value: "AMY8859961 (2500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102025",
    },
    {
      fgCode: "Auto_039 (2000)",
      styleNo: "2311",
      vendorName: 116854,
      vendorFactoryCity: 101045,
      fields: [
        {
          name: "Style No",
          value: "2311",
        },
        {
          name: "Product Code",
          value: "Auto_039 (2000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101045",
    },
    {
      fgCode: "Auto_041 (2000)",
      styleNo: "2313",
      vendorName: 116856,
      vendorFactoryCity: 101047,
      fields: [
        {
          name: "Style No",
          value: "2313",
        },
        {
          name: "Product Code",
          value: "Auto_041 (2000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101047",
    },
    {
      fgCode: "Auto_043 (2000)",
      styleNo: "2315",
      vendorName: 116858,
      vendorFactoryCity: 101049,
      fields: [
        {
          name: "Style No",
          value: "2315",
        },
        {
          name: "Product Code",
          value: "Auto_043 (2000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101049",
    },
    {
      fgCode: "Auto_045 (2000)",
      styleNo: "2317",
      vendorName: 116860,
      vendorFactoryCity: 101051,
      fields: [
        {
          name: "Style No",
          value: "2317",
        },
        {
          name: "Product Code",
          value: "Auto_045 (2000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101051",
    },
    {
      fgCode: "Auto_047 (2000)",
      styleNo: "2319",
      vendorName: 116847,
      vendorFactoryCity: 101038,
      fields: [
        {
          name: "Style No",
          value: "2319",
        },
        {
          name: "Product Code",
          value: "Auto_047 (2000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101038",
    },
    {
      fgCode: "D__Calk016 (5000)",
      styleNo: "11090",
      vendorName: 115496,
      vendorFactoryCity: 99687,
      fields: [
        {
          name: "Style No",
          value: "11090",
        },
        {
          name: "Product Code",
          value: "D__Calk016 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99687",
    },
    {
      fgCode: "D__Calk017 (6000)",
      styleNo: "11091",
      vendorName: 115497,
      vendorFactoryCity: 99688,
      fields: [
        {
          name: "Style No",
          value: "11091",
        },
        {
          name: "Product Code",
          value: "D__Calk017 (6000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99688",
    },
    {
      fgCode: "D__Calk018 (7000)",
      styleNo: "11092",
      vendorName: 115498,
      vendorFactoryCity: 99689,
      fields: [
        {
          name: "Style No",
          value: "11092",
        },
        {
          name: "Product Code",
          value: "D__Calk018 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99689",
    },
    {
      fgCode: "D__Calk019 (40000)",
      styleNo: "11093",
      vendorName: 115499,
      vendorFactoryCity: 99690,
      fields: [
        {
          name: "Style No",
          value: "11093",
        },
        {
          name: "Product Code",
          value: "D__Calk019 (40000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99690",
    },
    {
      fgCode: "D__Calk020 (50000)",
      styleNo: "11094",
      vendorName: 115500,
      vendorFactoryCity: 99691,
      fields: [
        {
          name: "Style No",
          value: "11094",
        },
        {
          name: "Product Code",
          value: "D__Calk020 (50000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99691",
    },
    {
      fgCode: "D__Calk021 (60000)",
      styleNo: "11095",
      vendorName: 115501,
      vendorFactoryCity: 99692,
      fields: [
        {
          name: "Style No",
          value: "11095",
        },
        {
          name: "Product Code",
          value: "D__Calk021 (60000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99692",
    },
    {
      fgCode: "D__Calk022 (40000)",
      styleNo: "11096",
      vendorName: 115502,
      vendorFactoryCity: 99693,
      fields: [
        {
          name: "Style No",
          value: "11096",
        },
        {
          name: "Product Code",
          value: "D__Calk022 (40000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99693",
    },
    {
      fgCode: "D__Calk023 (60000)",
      styleNo: "11097",
      vendorName: 115503,
      vendorFactoryCity: 99694,
      fields: [
        {
          name: "Style No",
          value: "11097",
        },
        {
          name: "Product Code",
          value: "D__Calk023 (60000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99694",
    },
    {
      fgCode: "D__Calk024 (70000)",
      styleNo: "11098",
      vendorName: 115504,
      vendorFactoryCity: 99695,
      fields: [
        {
          name: "Style No",
          value: "11098",
        },
        {
          name: "Product Code",
          value: "D__Calk024 (70000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99695",
    },
    {
      fgCode: "D__Calk025 (50000)",
      styleNo: "11099",
      vendorName: 115505,
      vendorFactoryCity: 99696,
      fields: [
        {
          name: "Style No",
          value: "11099",
        },
        {
          name: "Product Code",
          value: "D__Calk025 (50000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99696",
    },
    {
      fgCode: "D__Calk026 (60000)",
      styleNo: "11100",
      vendorName: 115506,
      vendorFactoryCity: 99697,
      fields: [
        {
          name: "Style No",
          value: "11100",
        },
        {
          name: "Product Code",
          value: "D__Calk026 (60000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99697",
    },
    {
      fgCode: "D__Calk027 (70000)",
      styleNo: "11101",
      vendorName: 115507,
      vendorFactoryCity: 99698,
      fields: [
        {
          name: "Style No",
          value: "11101",
        },
        {
          name: "Product Code",
          value: "D__Calk027 (70000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99698",
    },
    {
      fgCode: "D__Calk028 (50000)",
      styleNo: "11102",
      vendorName: 115508,
      vendorFactoryCity: 99699,
      fields: [
        {
          name: "Style No",
          value: "11102",
        },
        {
          name: "Product Code",
          value: "D__Calk028 (50000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99699",
    },
    {
      fgCode: "D__Calk029 (60000)",
      styleNo: "11103",
      vendorName: 115509,
      vendorFactoryCity: 99700,
      fields: [
        {
          name: "Style No",
          value: "11103",
        },
        {
          name: "Product Code",
          value: "D__Calk029 (60000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99700",
    },
    {
      fgCode: "D__Calk030 (7000)",
      styleNo: "11104",
      vendorName: 115510,
      vendorFactoryCity: 99701,
      fields: [
        {
          name: "Style No",
          value: "11104",
        },
        {
          name: "Product Code",
          value: "D__Calk030 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99701",
    },
    {
      fgCode: "D__Calk031 (50000)",
      styleNo: "11105",
      vendorName: 115450,
      vendorFactoryCity: 99641,
      fields: [
        {
          name: "Style No",
          value: "11105",
        },
        {
          name: "Product Code",
          value: "D__Calk031 (50000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99641",
    },
    {
      fgCode: "D__Calk032 (60000)",
      styleNo: "11106",
      vendorName: 115451,
      vendorFactoryCity: 99642,
      fields: [
        {
          name: "Style No",
          value: "11106",
        },
        {
          name: "Product Code",
          value: "D__Calk032 (60000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99642",
    },
    {
      fgCode: "D__Calk033 (70000)",
      styleNo: "11107",
      vendorName: 115452,
      vendorFactoryCity: 99643,
      fields: [
        {
          name: "Style No",
          value: "11107",
        },
        {
          name: "Product Code",
          value: "D__Calk033 (70000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99643",
    },
    {
      fgCode: "D__Calk034 (50000)",
      styleNo: "11108",
      vendorName: 115453,
      vendorFactoryCity: 99644,
      fields: [
        {
          name: "Style No",
          value: "11108",
        },
        {
          name: "Product Code",
          value: "D__Calk034 (50000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99644",
    },
    {
      fgCode: "D__Calk035 (70000)",
      styleNo: "11109",
      vendorName: 115454,
      vendorFactoryCity: 99645,
      fields: [
        {
          name: "Style No",
          value: "11109",
        },
        {
          name: "Product Code",
          value: "D__Calk035 (70000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99645",
    },
    {
      fgCode: "D__Calk036 (700)",
      styleNo: "11110",
      vendorName: 115455,
      vendorFactoryCity: 99646,
      fields: [
        {
          name: "Style No",
          value: "11110",
        },
        {
          name: "Product Code",
          value: "D__Calk036 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99646",
    },
    {
      fgCode: "D__Calk037 (500)",
      styleNo: "11111",
      vendorName: 115456,
      vendorFactoryCity: 99647,
      fields: [
        {
          name: "Style No",
          value: "11111",
        },
        {
          name: "Product Code",
          value: "D__Calk037 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99647",
    },
    {
      fgCode: "D__Calk038 (600)",
      styleNo: "11112",
      vendorName: 115457,
      vendorFactoryCity: 99648,
      fields: [
        {
          name: "Style No",
          value: "11112",
        },
        {
          name: "Product Code",
          value: "D__Calk038 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99648",
    },
    {
      fgCode: "D__Calk039 (700)",
      styleNo: "11113",
      vendorName: 115458,
      vendorFactoryCity: 99649,
      fields: [
        {
          name: "Style No",
          value: "11113",
        },
        {
          name: "Product Code",
          value: "D__Calk039 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99649",
    },
    {
      fgCode: "D__Calk040 (500)",
      styleNo: "11114",
      vendorName: 115459,
      vendorFactoryCity: 99650,
      fields: [
        {
          name: "Style No",
          value: "11114",
        },
        {
          name: "Product Code",
          value: "D__Calk040 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99650",
    },
    {
      fgCode: "D__Calk041 (600)",
      styleNo: "11115",
      vendorName: 115460,
      vendorFactoryCity: 99651,
      fields: [
        {
          name: "Style No",
          value: "11115",
        },
        {
          name: "Product Code",
          value: "D__Calk041 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99651",
    },
    {
      fgCode: "D__Calk042 (700)",
      styleNo: "11116",
      vendorName: 115461,
      vendorFactoryCity: 99652,
      fields: [
        {
          name: "Style No",
          value: "11116",
        },
        {
          name: "Product Code",
          value: "D__Calk042 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99652",
    },
    {
      fgCode: "D__Calk043 (500)",
      styleNo: "11117",
      vendorName: 115462,
      vendorFactoryCity: 99653,
      fields: [
        {
          name: "Style No",
          value: "11117",
        },
        {
          name: "Product Code",
          value: "D__Calk043 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99653",
    },
    {
      fgCode: "D__Calk044 (600)",
      styleNo: "11118",
      vendorName: 115463,
      vendorFactoryCity: 99654,
      fields: [
        {
          name: "Style No",
          value: "11118",
        },
        {
          name: "Product Code",
          value: "D__Calk044 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99654",
    },
    {
      fgCode: "D__Calk045 (700)",
      styleNo: "11119",
      vendorName: 115464,
      vendorFactoryCity: 99655,
      fields: [
        {
          name: "Style No",
          value: "11119",
        },
        {
          name: "Product Code",
          value: "D__Calk045 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99655",
    },
    {
      fgCode: "D__Calk046 (500)",
      styleNo: "11120",
      vendorName: 115465,
      vendorFactoryCity: 99656,
      fields: [
        {
          name: "Style No",
          value: "11120",
        },
        {
          name: "Product Code",
          value: "D__Calk046 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99656",
    },
    {
      fgCode: "D__Calk047 (600)",
      styleNo: "11121",
      vendorName: 115466,
      vendorFactoryCity: 99657,
      fields: [
        {
          name: "Style No",
          value: "11121",
        },
        {
          name: "Product Code",
          value: "D__Calk047 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99657",
    },
    {
      fgCode: "D__Za121 (5000)",
      styleNo: "1420",
      vendorName: 115619,
      vendorFactoryCity: 99810,
      fields: [
        {
          name: "Style No",
          value: "1420",
        },
        {
          name: "Product Code",
          value: "D__Za121 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99810",
    },
    {
      fgCode: "D__Za122 (10000)",
      styleNo: "1421",
      vendorName: 115620,
      vendorFactoryCity: 99811,
      fields: [
        {
          name: "Style No",
          value: "1421",
        },
        {
          name: "Product Code",
          value: "D__Za122 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99811",
    },
    {
      fgCode: "D__Za123 (20000)",
      styleNo: "1422",
      vendorName: 115645,
      vendorFactoryCity: 99836,
      fields: [
        {
          name: "Style No",
          value: "1422",
        },
        {
          name: "Product Code",
          value: "D__Za123 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99836",
    },
    {
      fgCode: "D__Za124 (7000)",
      styleNo: "1423",
      vendorName: 115646,
      vendorFactoryCity: 99837,
      fields: [
        {
          name: "Style No",
          value: "1423",
        },
        {
          name: "Product Code",
          value: "D__Za124 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99837",
    },
    {
      fgCode: "D__Za125 (5000)",
      styleNo: "1424",
      vendorName: 115647,
      vendorFactoryCity: 99838,
      fields: [
        {
          name: "Style No",
          value: "1424",
        },
        {
          name: "Product Code",
          value: "D__Za125 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99838",
    },
    {
      fgCode: "D__Za126 (10000)",
      styleNo: "1425",
      vendorName: 115648,
      vendorFactoryCity: 99839,
      fields: [
        {
          name: "Style No",
          value: "1425",
        },
        {
          name: "Product Code",
          value: "D__Za126 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99839",
    },
    {
      fgCode: "D__Za127 (20000)",
      styleNo: "1426",
      vendorName: 115649,
      vendorFactoryCity: 99840,
      fields: [
        {
          name: "Style No",
          value: "1426",
        },
        {
          name: "Product Code",
          value: "D__Za127 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99840",
    },
    {
      fgCode: "D__Za128 (7000)",
      styleNo: "1427",
      vendorName: 115650,
      vendorFactoryCity: 99841,
      fields: [
        {
          name: "Style No",
          value: "1427",
        },
        {
          name: "Product Code",
          value: "D__Za128 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99841",
    },
    {
      fgCode: "D__Za129 (5000)",
      styleNo: "1428",
      vendorName: 115651,
      vendorFactoryCity: 99842,
      fields: [
        {
          name: "Style No",
          value: "1428",
        },
        {
          name: "Product Code",
          value: "D__Za129 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99842",
    },
    {
      fgCode: "D__Za130 (10000)",
      styleNo: "1429",
      vendorName: 115652,
      vendorFactoryCity: 99843,
      fields: [
        {
          name: "Style No",
          value: "1429",
        },
        {
          name: "Product Code",
          value: "D__Za130 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99843",
    },
    {
      fgCode: "D__Za131 (20000)",
      styleNo: "1430",
      vendorName: 115653,
      vendorFactoryCity: 99844,
      fields: [
        {
          name: "Style No",
          value: "1430",
        },
        {
          name: "Product Code",
          value: "D__Za131 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99844",
    },
    {
      fgCode: "D__Za132 (7000)",
      styleNo: "1431",
      vendorName: 115654,
      vendorFactoryCity: 99845,
      fields: [
        {
          name: "Style No",
          value: "1431",
        },
        {
          name: "Product Code",
          value: "D__Za132 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99845",
    },
    {
      fgCode: "D__Za133 (5000)",
      styleNo: "1432",
      vendorName: 115655,
      vendorFactoryCity: 99846,
      fields: [
        {
          name: "Style No",
          value: "1432",
        },
        {
          name: "Product Code",
          value: "D__Za133 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99846",
    },
    {
      fgCode: "D__Za134 (10000)",
      styleNo: "1433",
      vendorName: 115656,
      vendorFactoryCity: 99847,
      fields: [
        {
          name: "Style No",
          value: "1433",
        },
        {
          name: "Product Code",
          value: "D__Za134 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99847",
    },
    {
      fgCode: "D__Za135 (20000)",
      styleNo: "1434",
      vendorName: 115657,
      vendorFactoryCity: 99848,
      fields: [
        {
          name: "Style No",
          value: "1434",
        },
        {
          name: "Product Code",
          value: "D__Za135 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99848",
    },
    {
      fgCode: "D__Za136 (7000)",
      styleNo: "1435",
      vendorName: 115658,
      vendorFactoryCity: 99849,
      fields: [
        {
          name: "Style No",
          value: "1435",
        },
        {
          name: "Product Code",
          value: "D__Za136 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99849",
    },
    {
      fgCode: "D__Za137 (5000)",
      styleNo: "1436",
      vendorName: 115659,
      vendorFactoryCity: 99850,
      fields: [
        {
          name: "Style No",
          value: "1436",
        },
        {
          name: "Product Code",
          value: "D__Za137 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99850",
    },
    {
      fgCode: "D__Za138 (10000)",
      styleNo: "1437",
      vendorName: 115660,
      vendorFactoryCity: 99851,
      fields: [
        {
          name: "Style No",
          value: "1437",
        },
        {
          name: "Product Code",
          value: "D__Za138 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99851",
    },
    {
      fgCode: "D__Za139 (20000)",
      styleNo: "1438",
      vendorName: 115661,
      vendorFactoryCity: 99852,
      fields: [
        {
          name: "Style No",
          value: "1438",
        },
        {
          name: "Product Code",
          value: "D__Za139 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99852",
    },
    {
      fgCode: "D__Za140 (7000)",
      styleNo: "1439",
      vendorName: 115662,
      vendorFactoryCity: 99853,
      fields: [
        {
          name: "Style No",
          value: "1439",
        },
        {
          name: "Product Code",
          value: "D__Za140 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99853",
    },
    {
      fgCode: "D__Za141 (5000)",
      styleNo: "1440",
      vendorName: 115663,
      vendorFactoryCity: 99854,
      fields: [
        {
          name: "Style No",
          value: "1440",
        },
        {
          name: "Product Code",
          value: "D__Za141 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99854",
    },
    {
      fgCode: "D__Za142 (10000)",
      styleNo: "1441",
      vendorName: 115664,
      vendorFactoryCity: 99855,
      fields: [
        {
          name: "Style No",
          value: "1441",
        },
        {
          name: "Product Code",
          value: "D__Za142 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99855",
    },
    {
      fgCode: "D__Za143 (20000)",
      styleNo: "1442",
      vendorName: 115665,
      vendorFactoryCity: 99856,
      fields: [
        {
          name: "Style No",
          value: "1442",
        },
        {
          name: "Product Code",
          value: "D__Za143 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99856",
    },
    {
      fgCode: "D__Za144 (7000)",
      styleNo: "1443",
      vendorName: 115666,
      vendorFactoryCity: 99857,
      fields: [
        {
          name: "Style No",
          value: "1443",
        },
        {
          name: "Product Code",
          value: "D__Za144 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99857",
    },
    {
      fgCode: "D__Za145 (5000)",
      styleNo: "1444",
      vendorName: 115667,
      vendorFactoryCity: 99858,
      fields: [
        {
          name: "Style No",
          value: "1444",
        },
        {
          name: "Product Code",
          value: "D__Za145 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99858",
    },
    {
      fgCode: "D__Za146 (10000)",
      styleNo: "1445",
      vendorName: 115668,
      vendorFactoryCity: 99859,
      fields: [
        {
          name: "Style No",
          value: "1445",
        },
        {
          name: "Product Code",
          value: "D__Za146 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99859",
    },
    {
      fgCode: "D__Za147 (20000)",
      styleNo: "1446",
      vendorName: 115669,
      vendorFactoryCity: 99860,
      fields: [
        {
          name: "Style No",
          value: "1446",
        },
        {
          name: "Product Code",
          value: "D__Za147 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99860",
    },
    {
      fgCode: "D__Za148 (7000)",
      styleNo: "1447",
      vendorName: 115670,
      vendorFactoryCity: 99861,
      fields: [
        {
          name: "Style No",
          value: "1447",
        },
        {
          name: "Product Code",
          value: "D__Za148 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99861",
    },
    {
      fgCode: "D__Za149 (5000)",
      styleNo: "1448",
      vendorName: 115671,
      vendorFactoryCity: 99862,
      fields: [
        {
          name: "Style No",
          value: "1448",
        },
        {
          name: "Product Code",
          value: "D__Za149 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99862",
    },
    {
      fgCode: "D__Za150 (10000)",
      styleNo: "1449",
      vendorName: 115672,
      vendorFactoryCity: 99863,
      fields: [
        {
          name: "Style No",
          value: "1449",
        },
        {
          name: "Product Code",
          value: "D__Za150 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99863",
    },
    {
      fgCode: "D__Za151 (20000)",
      styleNo: "1450",
      vendorName: 115673,
      vendorFactoryCity: 99864,
      fields: [
        {
          name: "Style No",
          value: "1450",
        },
        {
          name: "Product Code",
          value: "D__Za151 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99864",
    },
    {
      fgCode: "D__Za152 (7000)",
      styleNo: "1451",
      vendorName: 115674,
      vendorFactoryCity: 99865,
      fields: [
        {
          name: "Style No",
          value: "1451",
        },
        {
          name: "Product Code",
          value: "D__Za152 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99865",
    },
    {
      fgCode: "D__Za153 (5000)",
      styleNo: "1452",
      vendorName: 115675,
      vendorFactoryCity: 99866,
      fields: [
        {
          name: "Style No",
          value: "1452",
        },
        {
          name: "Product Code",
          value: "D__Za153 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99866",
    },
    {
      fgCode: "D__Za154 (10000)",
      styleNo: "1453",
      vendorName: 115676,
      vendorFactoryCity: 99867,
      fields: [
        {
          name: "Style No",
          value: "1453",
        },
        {
          name: "Product Code",
          value: "D__Za154 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99867",
    },
    {
      fgCode: "D__Za155 (20000)",
      styleNo: "1454",
      vendorName: 115677,
      vendorFactoryCity: 99868,
      fields: [
        {
          name: "Style No",
          value: "1454",
        },
        {
          name: "Product Code",
          value: "D__Za155 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99868",
    },
    {
      fgCode: "D__Za156 (7000)",
      styleNo: "1455",
      vendorName: 115678,
      vendorFactoryCity: 99869,
      fields: [
        {
          name: "Style No",
          value: "1455",
        },
        {
          name: "Product Code",
          value: "D__Za156 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99869",
    },
    {
      fgCode: "D__Za157 (5000)",
      styleNo: "1456",
      vendorName: 115679,
      vendorFactoryCity: 99870,
      fields: [
        {
          name: "Style No",
          value: "1456",
        },
        {
          name: "Product Code",
          value: "D__Za157 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99870",
    },
    {
      fgCode: "D__Za158 (10000)",
      styleNo: "1457",
      vendorName: 115680,
      vendorFactoryCity: 99871,
      fields: [
        {
          name: "Style No",
          value: "1457",
        },
        {
          name: "Product Code",
          value: "D__Za158 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99871",
    },
    {
      fgCode: "D__Za159 (20000)",
      styleNo: "1458",
      vendorName: 115681,
      vendorFactoryCity: 99872,
      fields: [
        {
          name: "Style No",
          value: "1458",
        },
        {
          name: "Product Code",
          value: "D__Za159 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99872",
    },
    {
      fgCode: "D__Za160 (7000)",
      styleNo: "1459",
      vendorName: 115682,
      vendorFactoryCity: 99873,
      fields: [
        {
          name: "Style No",
          value: "1459",
        },
        {
          name: "Product Code",
          value: "D__Za160 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99873",
    },
    {
      fgCode: "D__Za161 (5000)",
      styleNo: "1460",
      vendorName: 115683,
      vendorFactoryCity: 99874,
      fields: [
        {
          name: "Style No",
          value: "1460",
        },
        {
          name: "Product Code",
          value: "D__Za161 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99874",
    },
    {
      fgCode: "D__Za162 (10000)",
      styleNo: "1461",
      vendorName: 115684,
      vendorFactoryCity: 99875,
      fields: [
        {
          name: "Style No",
          value: "1461",
        },
        {
          name: "Product Code",
          value: "D__Za162 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99875",
    },
    {
      fgCode: "D__Za163 (20000)",
      styleNo: "1462",
      vendorName: 115685,
      vendorFactoryCity: 99876,
      fields: [
        {
          name: "Style No",
          value: "1462",
        },
        {
          name: "Product Code",
          value: "D__Za163 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99876",
    },
    {
      fgCode: "D__Za164 (7000)",
      styleNo: "1463",
      vendorName: 115686,
      vendorFactoryCity: 99877,
      fields: [
        {
          name: "Style No",
          value: "1463",
        },
        {
          name: "Product Code",
          value: "D__Za164 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99877",
    },
    {
      fgCode: "D__Za165 (5000)",
      styleNo: "1464",
      vendorName: 115687,
      vendorFactoryCity: 99878,
      fields: [
        {
          name: "Style No",
          value: "1464",
        },
        {
          name: "Product Code",
          value: "D__Za165 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99878",
    },
    {
      fgCode: "D__Za166 (10000)",
      styleNo: "1465",
      vendorName: 115688,
      vendorFactoryCity: 99879,
      fields: [
        {
          name: "Style No",
          value: "1465",
        },
        {
          name: "Product Code",
          value: "D__Za166 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99879",
    },
    {
      fgCode: "D__Za167 (20000)",
      styleNo: "1466",
      vendorName: 115689,
      vendorFactoryCity: 99880,
      fields: [
        {
          name: "Style No",
          value: "1466",
        },
        {
          name: "Product Code",
          value: "D__Za167 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99880",
    },
    {
      fgCode: "D__Za168 (7000)",
      styleNo: "1467",
      vendorName: 115690,
      vendorFactoryCity: 99881,
      fields: [
        {
          name: "Style No",
          value: "1467",
        },
        {
          name: "Product Code",
          value: "D__Za168 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99881",
    },
    {
      fgCode: "D__Za169 (5000)",
      styleNo: "1468",
      vendorName: 115691,
      vendorFactoryCity: 99882,
      fields: [
        {
          name: "Style No",
          value: "1468",
        },
        {
          name: "Product Code",
          value: "D__Za169 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99882",
    },
    {
      fgCode: "D__Za170 (10000)",
      styleNo: "1469",
      vendorName: 115692,
      vendorFactoryCity: 99883,
      fields: [
        {
          name: "Style No",
          value: "1469",
        },
        {
          name: "Product Code",
          value: "D__Za170 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99883",
    },
    {
      fgCode: "D__Za171 (20000)",
      styleNo: "1470",
      vendorName: 115693,
      vendorFactoryCity: 99884,
      fields: [
        {
          name: "Style No",
          value: "1470",
        },
        {
          name: "Product Code",
          value: "D__Za171 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99884",
    },
    {
      fgCode: "D__Za172 (7000)",
      styleNo: "1471",
      vendorName: 115694,
      vendorFactoryCity: 99885,
      fields: [
        {
          name: "Style No",
          value: "1471",
        },
        {
          name: "Product Code",
          value: "D__Za172 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99885",
    },
    {
      fgCode: "D__Za173 (5000)",
      styleNo: "1472",
      vendorName: 115695,
      vendorFactoryCity: 99886,
      fields: [
        {
          name: "Style No",
          value: "1472",
        },
        {
          name: "Product Code",
          value: "D__Za173 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99886",
    },
    {
      fgCode: "D__Za174 (10000)",
      styleNo: "1473",
      vendorName: 115696,
      vendorFactoryCity: 99887,
      fields: [
        {
          name: "Style No",
          value: "1473",
        },
        {
          name: "Product Code",
          value: "D__Za174 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99887",
    },
    {
      fgCode: "D__Za175 (20000)",
      styleNo: "1474",
      vendorName: 115697,
      vendorFactoryCity: 99888,
      fields: [
        {
          name: "Style No",
          value: "1474",
        },
        {
          name: "Product Code",
          value: "D__Za175 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99888",
    },
    {
      fgCode: "D__Za176 (7000)",
      styleNo: "1475",
      vendorName: 115698,
      vendorFactoryCity: 99889,
      fields: [
        {
          name: "Style No",
          value: "1475",
        },
        {
          name: "Product Code",
          value: "D__Za176 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99889",
    },
    {
      fgCode: "D__Za177 (5000)",
      styleNo: "1476",
      vendorName: 115699,
      vendorFactoryCity: 99890,
      fields: [
        {
          name: "Style No",
          value: "1476",
        },
        {
          name: "Product Code",
          value: "D__Za177 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99890",
    },
    {
      fgCode: "D__Za178 (10000)",
      styleNo: "1477",
      vendorName: 115700,
      vendorFactoryCity: 99891,
      fields: [
        {
          name: "Style No",
          value: "1477",
        },
        {
          name: "Product Code",
          value: "D__Za178 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99891",
    },
    {
      fgCode: "D__Za179 (20000)",
      styleNo: "1478",
      vendorName: 115701,
      vendorFactoryCity: 99892,
      fields: [
        {
          name: "Style No",
          value: "1478",
        },
        {
          name: "Product Code",
          value: "D__Za179 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99892",
    },
    {
      fgCode: "D__Za180 (7000)",
      styleNo: "1479",
      vendorName: 115702,
      vendorFactoryCity: 99893,
      fields: [
        {
          name: "Style No",
          value: "1479",
        },
        {
          name: "Product Code",
          value: "D__Za180 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99893",
    },
    {
      fgCode: "D__Za181 (5000)",
      styleNo: "1480",
      vendorName: 115703,
      vendorFactoryCity: 99894,
      fields: [
        {
          name: "Style No",
          value: "1480",
        },
        {
          name: "Product Code",
          value: "D__Za181 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99894",
    },
    {
      fgCode: "D__Za182 (10000)",
      styleNo: "1481",
      vendorName: 115704,
      vendorFactoryCity: 99895,
      fields: [
        {
          name: "Style No",
          value: "1481",
        },
        {
          name: "Product Code",
          value: "D__Za182 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99895",
    },
    {
      fgCode: "D__Za183 (20000)",
      styleNo: "1482",
      vendorName: 115705,
      vendorFactoryCity: 99896,
      fields: [
        {
          name: "Style No",
          value: "1482",
        },
        {
          name: "Product Code",
          value: "D__Za183 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99896",
    },
    {
      fgCode: "D__Za184 (7000)",
      styleNo: "1483",
      vendorName: 115706,
      vendorFactoryCity: 99897,
      fields: [
        {
          name: "Style No",
          value: "1483",
        },
        {
          name: "Product Code",
          value: "D__Za184 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99897",
    },
    {
      fgCode: "D__Za185 (5000)",
      styleNo: "1484",
      vendorName: 115707,
      vendorFactoryCity: 99898,
      fields: [
        {
          name: "Style No",
          value: "1484",
        },
        {
          name: "Product Code",
          value: "D__Za185 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99898",
    },
    {
      fgCode: "D__Za186 (10000)",
      styleNo: "1485",
      vendorName: 115708,
      vendorFactoryCity: 99899,
      fields: [
        {
          name: "Style No",
          value: "1485",
        },
        {
          name: "Product Code",
          value: "D__Za186 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99899",
    },
    {
      fgCode: "D__Za187 (20000)",
      styleNo: "1486",
      vendorName: 115709,
      vendorFactoryCity: 99900,
      fields: [
        {
          name: "Style No",
          value: "1486",
        },
        {
          name: "Product Code",
          value: "D__Za187 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99900",
    },
    {
      fgCode: "D__Za188 (7000)",
      styleNo: "1487",
      vendorName: 115710,
      vendorFactoryCity: 99901,
      fields: [
        {
          name: "Style No",
          value: "1487",
        },
        {
          name: "Product Code",
          value: "D__Za188 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99901",
    },
    {
      fgCode: "D__Za189 (5000)",
      styleNo: "1488",
      vendorName: 115711,
      vendorFactoryCity: 99902,
      fields: [
        {
          name: "Style No",
          value: "1488",
        },
        {
          name: "Product Code",
          value: "D__Za189 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99902",
    },
    {
      fgCode: "D__Za190 (10000)",
      styleNo: "1489",
      vendorName: 115712,
      vendorFactoryCity: 99903,
      fields: [
        {
          name: "Style No",
          value: "1489",
        },
        {
          name: "Product Code",
          value: "D__Za190 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99903",
    },
    {
      fgCode: "D__Za191 (20000)",
      styleNo: "1490",
      vendorName: 115713,
      vendorFactoryCity: 99904,
      fields: [
        {
          name: "Style No",
          value: "1490",
        },
        {
          name: "Product Code",
          value: "D__Za191 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99904",
    },
    {
      fgCode: "D__Za192 (7000)",
      styleNo: "1491",
      vendorName: 115714,
      vendorFactoryCity: 99905,
      fields: [
        {
          name: "Style No",
          value: "1491",
        },
        {
          name: "Product Code",
          value: "D__Za192 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99905",
    },
    {
      fgCode: "D__Za193 (5000)",
      styleNo: "1492",
      vendorName: 115715,
      vendorFactoryCity: 99906,
      fields: [
        {
          name: "Style No",
          value: "1492",
        },
        {
          name: "Product Code",
          value: "D__Za193 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99906",
    },
    {
      fgCode: "D__Za194 (10000)",
      styleNo: "1493",
      vendorName: 115716,
      vendorFactoryCity: 99907,
      fields: [
        {
          name: "Style No",
          value: "1493",
        },
        {
          name: "Product Code",
          value: "D__Za194 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99907",
    },
    {
      fgCode: "D__Za195 (20000)",
      styleNo: "1494",
      vendorName: 115717,
      vendorFactoryCity: 99908,
      fields: [
        {
          name: "Style No",
          value: "1494",
        },
        {
          name: "Product Code",
          value: "D__Za195 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99908",
    },
    {
      fgCode: "D__Za196 (7000)",
      styleNo: "1495",
      vendorName: 115621,
      vendorFactoryCity: 99812,
      fields: [
        {
          name: "Style No",
          value: "1495",
        },
        {
          name: "Product Code",
          value: "D__Za196 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99812",
    },
    {
      fgCode: "D__Za197 (5000)",
      styleNo: "1496",
      vendorName: 115622,
      vendorFactoryCity: 99813,
      fields: [
        {
          name: "Style No",
          value: "1496",
        },
        {
          name: "Product Code",
          value: "D__Za197 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99813",
    },
    {
      fgCode: "D__Za198 (10000)",
      styleNo: "1497",
      vendorName: 115623,
      vendorFactoryCity: 99814,
      fields: [
        {
          name: "Style No",
          value: "1497",
        },
        {
          name: "Product Code",
          value: "D__Za198 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99814",
    },
    {
      fgCode: "D__Za199 (20000)",
      styleNo: "1498",
      vendorName: 115624,
      vendorFactoryCity: 99815,
      fields: [
        {
          name: "Style No",
          value: "1498",
        },
        {
          name: "Product Code",
          value: "D__Za199 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99815",
    },
    {
      fgCode: "D__Za200 (7000)",
      styleNo: "1499",
      vendorName: 115635,
      vendorFactoryCity: 99826,
      fields: [
        {
          name: "Style No",
          value: "1499",
        },
        {
          name: "Product Code",
          value: "D__Za200 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99826",
    },
    {
      fgCode: "D__Za201 (5000)",
      styleNo: "1500",
      vendorName: 115636,
      vendorFactoryCity: 99827,
      fields: [
        {
          name: "Style No",
          value: "1500",
        },
        {
          name: "Product Code",
          value: "D__Za201 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99827",
    },
    {
      fgCode: "D__Za202 (10000)",
      styleNo: "1501",
      vendorName: 115637,
      vendorFactoryCity: 99828,
      fields: [
        {
          name: "Style No",
          value: "1501",
        },
        {
          name: "Product Code",
          value: "D__Za202 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99828",
    },
    {
      fgCode: "D__Za203 (20000)",
      styleNo: "1502",
      vendorName: 115638,
      vendorFactoryCity: 99829,
      fields: [
        {
          name: "Style No",
          value: "1502",
        },
        {
          name: "Product Code",
          value: "D__Za203 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99829",
    },
    {
      fgCode: "D__Za204 (7000)",
      styleNo: "1503",
      vendorName: 115639,
      vendorFactoryCity: 99830,
      fields: [
        {
          name: "Style No",
          value: "1503",
        },
        {
          name: "Product Code",
          value: "D__Za204 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99830",
    },
    {
      fgCode: "D__Za205 (5000)",
      styleNo: "1504",
      vendorName: 115640,
      vendorFactoryCity: 99831,
      fields: [
        {
          name: "Style No",
          value: "1504",
        },
        {
          name: "Product Code",
          value: "D__Za205 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99831",
    },
    {
      fgCode: "D__Za206 (10000)",
      styleNo: "1505",
      vendorName: 115641,
      vendorFactoryCity: 99832,
      fields: [
        {
          name: "Style No",
          value: "1505",
        },
        {
          name: "Product Code",
          value: "D__Za206 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99832",
    },
    {
      fgCode: "D__Za207 (20000)",
      styleNo: "1506",
      vendorName: 115642,
      vendorFactoryCity: 99833,
      fields: [
        {
          name: "Style No",
          value: "1506",
        },
        {
          name: "Product Code",
          value: "D__Za207 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99833",
    },
    {
      fgCode: "D__Za208 (7000)",
      styleNo: "1507",
      vendorName: 115643,
      vendorFactoryCity: 99834,
      fields: [
        {
          name: "Style No",
          value: "1507",
        },
        {
          name: "Product Code",
          value: "D__Za208 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99834",
    },
    {
      fgCode: "D__Za209 (5000)",
      styleNo: "1508",
      vendorName: 115644,
      vendorFactoryCity: 99835,
      fields: [
        {
          name: "Style No",
          value: "1508",
        },
        {
          name: "Product Code",
          value: "D__Za209 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99835",
    },
    {
      fgCode: "D__Za210 (10000)",
      styleNo: "1509",
      vendorName: 115747,
      vendorFactoryCity: 99938,
      fields: [
        {
          name: "Style No",
          value: "1509",
        },
        {
          name: "Product Code",
          value: "D__Za210 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99938",
    },
    {
      fgCode: "D__Za211 (20000)",
      styleNo: "1510",
      vendorName: 115748,
      vendorFactoryCity: 99939,
      fields: [
        {
          name: "Style No",
          value: "1510",
        },
        {
          name: "Product Code",
          value: "D__Za211 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99939",
    },
    {
      fgCode: "D__Za212 (7000)",
      styleNo: "1511",
      vendorName: 115718,
      vendorFactoryCity: 99909,
      fields: [
        {
          name: "Style No",
          value: "1511",
        },
        {
          name: "Product Code",
          value: "D__Za212 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99909",
    },
    {
      fgCode: "D__Za213 (5000)",
      styleNo: "1512",
      vendorName: 115719,
      vendorFactoryCity: 99910,
      fields: [
        {
          name: "Style No",
          value: "1512",
        },
        {
          name: "Product Code",
          value: "D__Za213 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99910",
    },
    {
      fgCode: "D__Za214 (10000)",
      styleNo: "1513",
      vendorName: 115720,
      vendorFactoryCity: 99911,
      fields: [
        {
          name: "Style No",
          value: "1513",
        },
        {
          name: "Product Code",
          value: "D__Za214 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99911",
    },
    {
      fgCode: "D__Za215 (20000)",
      styleNo: "1514",
      vendorName: 115721,
      vendorFactoryCity: 99912,
      fields: [
        {
          name: "Style No",
          value: "1514",
        },
        {
          name: "Product Code",
          value: "D__Za215 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99912",
    },
    {
      fgCode: "D__Za216 (7000)",
      styleNo: "1515",
      vendorName: 115722,
      vendorFactoryCity: 99913,
      fields: [
        {
          name: "Style No",
          value: "1515",
        },
        {
          name: "Product Code",
          value: "D__Za216 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99913",
    },
    {
      fgCode: "D__Za217 (5000)",
      styleNo: "1516",
      vendorName: 115723,
      vendorFactoryCity: 99914,
      fields: [
        {
          name: "Style No",
          value: "1516",
        },
        {
          name: "Product Code",
          value: "D__Za217 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99914",
    },
    {
      fgCode: "D__Za218 (10000)",
      styleNo: "1517",
      vendorName: 115724,
      vendorFactoryCity: 99915,
      fields: [
        {
          name: "Style No",
          value: "1517",
        },
        {
          name: "Product Code",
          value: "D__Za218 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99915",
    },
    {
      fgCode: "D__Za219 (20000)",
      styleNo: "1518",
      vendorName: 115725,
      vendorFactoryCity: 99916,
      fields: [
        {
          name: "Style No",
          value: "1518",
        },
        {
          name: "Product Code",
          value: "D__Za219 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99916",
    },
    {
      fgCode: "D__Za220 (7000)",
      styleNo: "1519",
      vendorName: 115726,
      vendorFactoryCity: 99917,
      fields: [
        {
          name: "Style No",
          value: "1519",
        },
        {
          name: "Product Code",
          value: "D__Za220 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99917",
    },
    {
      fgCode: "D__Za221 (5000)",
      styleNo: "1520",
      vendorName: 115727,
      vendorFactoryCity: 99918,
      fields: [
        {
          name: "Style No",
          value: "1520",
        },
        {
          name: "Product Code",
          value: "D__Za221 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99918",
    },
    {
      fgCode: "D__Za222 (10000)",
      styleNo: "1521",
      vendorName: 115728,
      vendorFactoryCity: 99919,
      fields: [
        {
          name: "Style No",
          value: "1521",
        },
        {
          name: "Product Code",
          value: "D__Za222 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99919",
    },
    {
      fgCode: "D__Za223 (20000)",
      styleNo: "1522",
      vendorName: 115729,
      vendorFactoryCity: 99920,
      fields: [
        {
          name: "Style No",
          value: "1522",
        },
        {
          name: "Product Code",
          value: "D__Za223 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99920",
    },
    {
      fgCode: "D__Za224 (7000)",
      styleNo: "1523",
      vendorName: 115730,
      vendorFactoryCity: 99921,
      fields: [
        {
          name: "Style No",
          value: "1523",
        },
        {
          name: "Product Code",
          value: "D__Za224 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99921",
    },
    {
      fgCode: "D__Za225 (5000)",
      styleNo: "1524",
      vendorName: 115731,
      vendorFactoryCity: 99922,
      fields: [
        {
          name: "Style No",
          value: "1524",
        },
        {
          name: "Product Code",
          value: "D__Za225 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99922",
    },
    {
      fgCode: "D__Za226 (10000)",
      styleNo: "1525",
      vendorName: 115732,
      vendorFactoryCity: 99923,
      fields: [
        {
          name: "Style No",
          value: "1525",
        },
        {
          name: "Product Code",
          value: "D__Za226 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99923",
    },
    {
      fgCode: "D__Za227 (20000)",
      styleNo: "1526",
      vendorName: 115733,
      vendorFactoryCity: 99924,
      fields: [
        {
          name: "Style No",
          value: "1526",
        },
        {
          name: "Product Code",
          value: "D__Za227 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99924",
    },
    {
      fgCode: "D__Za228 (7000)",
      styleNo: "1527",
      vendorName: 115734,
      vendorFactoryCity: 99925,
      fields: [
        {
          name: "Style No",
          value: "1527",
        },
        {
          name: "Product Code",
          value: "D__Za228 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99925",
    },
    {
      fgCode: "D__Za229 (5000)",
      styleNo: "1528",
      vendorName: 115735,
      vendorFactoryCity: 99926,
      fields: [
        {
          name: "Style No",
          value: "1528",
        },
        {
          name: "Product Code",
          value: "D__Za229 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99926",
    },
    {
      fgCode: "D__Za230 (10000)",
      styleNo: "1529",
      vendorName: 115736,
      vendorFactoryCity: 99927,
      fields: [
        {
          name: "Style No",
          value: "1529",
        },
        {
          name: "Product Code",
          value: "D__Za230 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99927",
    },
    {
      fgCode: "D__Za231 (20000)",
      styleNo: "1530",
      vendorName: 115737,
      vendorFactoryCity: 99928,
      fields: [
        {
          name: "Style No",
          value: "1530",
        },
        {
          name: "Product Code",
          value: "D__Za231 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99928",
    },
    {
      fgCode: "D__Za232 (7000)",
      styleNo: "1531",
      vendorName: 115738,
      vendorFactoryCity: 99929,
      fields: [
        {
          name: "Style No",
          value: "1531",
        },
        {
          name: "Product Code",
          value: "D__Za232 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99929",
    },
    {
      fgCode: "D__Za233 (5000)",
      styleNo: "1532",
      vendorName: 115739,
      vendorFactoryCity: 99930,
      fields: [
        {
          name: "Style No",
          value: "1532",
        },
        {
          name: "Product Code",
          value: "D__Za233 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99930",
    },
    {
      fgCode: "D__Za234 (10000)",
      styleNo: "1533",
      vendorName: 115740,
      vendorFactoryCity: 99931,
      fields: [
        {
          name: "Style No",
          value: "1533",
        },
        {
          name: "Product Code",
          value: "D__Za234 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99931",
    },
    {
      fgCode: "D__Za235 (20000)",
      styleNo: "1534",
      vendorName: 115741,
      vendorFactoryCity: 99932,
      fields: [
        {
          name: "Style No",
          value: "1534",
        },
        {
          name: "Product Code",
          value: "D__Za235 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99932",
    },
    {
      fgCode: "D__Za236 (7000)",
      styleNo: "1535",
      vendorName: 115742,
      vendorFactoryCity: 99933,
      fields: [
        {
          name: "Style No",
          value: "1535",
        },
        {
          name: "Product Code",
          value: "D__Za236 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99933",
    },
    {
      fgCode: "D__Za237 (5000)",
      styleNo: "1536",
      vendorName: 115743,
      vendorFactoryCity: 99934,
      fields: [
        {
          name: "Style No",
          value: "1536",
        },
        {
          name: "Product Code",
          value: "D__Za237 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99934",
    },
    {
      fgCode: "D__Za238 (10000)",
      styleNo: "1537",
      vendorName: 115744,
      vendorFactoryCity: 99935,
      fields: [
        {
          name: "Style No",
          value: "1537",
        },
        {
          name: "Product Code",
          value: "D__Za238 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99935",
    },
    {
      fgCode: "D__Za239 (20000)",
      styleNo: "1538",
      vendorName: 115745,
      vendorFactoryCity: 99936,
      fields: [
        {
          name: "Style No",
          value: "1538",
        },
        {
          name: "Product Code",
          value: "D__Za239 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99936",
    },
    {
      fgCode: "D__Za240 (7000)",
      styleNo: "1539",
      vendorName: 115746,
      vendorFactoryCity: 99937,
      fields: [
        {
          name: "Style No",
          value: "1539",
        },
        {
          name: "Product Code",
          value: "D__Za240 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99937",
    },
    {
      fgCode: "FAB 08298907 (400)",
      styleNo: "FAB 08298907",
      vendorName: 116505,
      vendorFactoryCity: 100696,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298907",
        },
        {
          name: "Product Code",
          value: "FAB 08298907 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100696",
    },
    {
      fgCode: "FAB 08298908 (300)",
      styleNo: "FAB 08298908",
      vendorName: 116506,
      vendorFactoryCity: 100697,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298908",
        },
        {
          name: "Product Code",
          value: "FAB 08298908 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100697",
    },
    {
      fgCode: "FAB 08298909 (300)",
      styleNo: "FAB 08298909",
      vendorName: 116507,
      vendorFactoryCity: 100698,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298909",
        },
        {
          name: "Product Code",
          value: "FAB 08298909 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100698",
    },
    {
      fgCode: "FAB 08298910 (400)",
      styleNo: "FAB 08298910",
      vendorName: 116508,
      vendorFactoryCity: 100699,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298910",
        },
        {
          name: "Product Code",
          value: "FAB 08298910 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100699",
    },
    {
      fgCode: "FAB 08298911 (400)",
      styleNo: "FAB 08298911",
      vendorName: 116509,
      vendorFactoryCity: 100700,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298911",
        },
        {
          name: "Product Code",
          value: "FAB 08298911 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100700",
    },
    {
      fgCode: "FAB 08298912 (300)",
      styleNo: "FAB 08298912",
      vendorName: 116510,
      vendorFactoryCity: 100701,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298912",
        },
        {
          name: "Product Code",
          value: "FAB 08298912 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100701",
    },
    {
      fgCode: "FAB 08298913 (400)",
      styleNo: "FAB 08298913",
      vendorName: 116511,
      vendorFactoryCity: 100702,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298913",
        },
        {
          name: "Product Code",
          value: "FAB 08298913 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100702",
    },
    {
      fgCode: "FAB 08298914 (500)",
      styleNo: "FAB 08298914",
      vendorName: 116512,
      vendorFactoryCity: 100703,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298914",
        },
        {
          name: "Product Code",
          value: "FAB 08298914 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100703",
    },
    {
      fgCode: "FAB 08298915 (500)",
      styleNo: "FAB 08298915",
      vendorName: 116513,
      vendorFactoryCity: 100704,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298915",
        },
        {
          name: "Product Code",
          value: "FAB 08298915 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100704",
    },
    {
      fgCode: "FAB 08298916 (500)",
      styleNo: "FAB 08298916",
      vendorName: 116514,
      vendorFactoryCity: 100705,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298916",
        },
        {
          name: "Product Code",
          value: "FAB 08298916 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100705",
    },
    {
      fgCode: "FAB 08298917 (300)",
      styleNo: "FAB 08298917",
      vendorName: 116515,
      vendorFactoryCity: 100706,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298917",
        },
        {
          name: "Product Code",
          value: "FAB 08298917 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100706",
    },
    {
      fgCode: "FAB 08298918 (400)",
      styleNo: "FAB 08298918",
      vendorName: 116516,
      vendorFactoryCity: 100707,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298918",
        },
        {
          name: "Product Code",
          value: "FAB 08298918 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100707",
    },
    {
      fgCode: "FAB 08298919 (450)",
      styleNo: "FAB 08298919",
      vendorName: 116517,
      vendorFactoryCity: 100708,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298919",
        },
        {
          name: "Product Code",
          value: "FAB 08298919 (450)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100708",
    },
    {
      fgCode: "FAB 08298920 (1262)",
      styleNo: "FAB 08298920",
      vendorName: 116518,
      vendorFactoryCity: 100709,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298920",
        },
        {
          name: "Product Code",
          value: "FAB 08298920 (1262)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100709",
    },
    {
      fgCode: "FAB 08298921 (1262)",
      styleNo: "FAB 08298921",
      vendorName: 116519,
      vendorFactoryCity: 100710,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298921",
        },
        {
          name: "Product Code",
          value: "FAB 08298921 (1262)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100710",
    },
    {
      fgCode: "FAB 08298922 (5147)",
      styleNo: "FAB 08298922",
      vendorName: 116520,
      vendorFactoryCity: 100711,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298922",
        },
        {
          name: "Product Code",
          value: "FAB 08298922 (5147)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100711",
    },
    {
      fgCode: "FAB 08298923 (400)",
      styleNo: "FAB 08298923",
      vendorName: 116521,
      vendorFactoryCity: 100712,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298923",
        },
        {
          name: "Product Code",
          value: "FAB 08298923 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100712",
    },
    {
      fgCode: "FAB 08298924 (300)",
      styleNo: "FAB 08298924",
      vendorName: 116522,
      vendorFactoryCity: 100713,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298924",
        },
        {
          name: "Product Code",
          value: "FAB 08298924 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100713",
    },
    {
      fgCode: "FAB 08298925 (300)",
      styleNo: "FAB 08298925",
      vendorName: 116523,
      vendorFactoryCity: 100714,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298925",
        },
        {
          name: "Product Code",
          value: "FAB 08298925 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100714",
    },
    {
      fgCode: "FAB 08298926 (400)",
      styleNo: "FAB 08298926",
      vendorName: 116524,
      vendorFactoryCity: 100715,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298926",
        },
        {
          name: "Product Code",
          value: "FAB 08298926 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100715",
    },
    {
      fgCode: "FAB 08298927 (400)",
      styleNo: "FAB 08298927",
      vendorName: 116525,
      vendorFactoryCity: 100716,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298927",
        },
        {
          name: "Product Code",
          value: "FAB 08298927 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100716",
    },
    {
      fgCode: "FAB 08298928 (300)",
      styleNo: "FAB 08298928",
      vendorName: 116526,
      vendorFactoryCity: 100717,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298928",
        },
        {
          name: "Product Code",
          value: "FAB 08298928 (300)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100717",
    },
    {
      fgCode: "FAB 08298929 (400)",
      styleNo: "FAB 08298929",
      vendorName: 116527,
      vendorFactoryCity: 100718,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298929",
        },
        {
          name: "Product Code",
          value: "FAB 08298929 (400)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100718",
    },
    {
      fgCode: "FAB 08298930 (500)",
      styleNo: "FAB 08298930",
      vendorName: 116528,
      vendorFactoryCity: 100719,
      fields: [
        {
          name: "Style No",
          value: "FAB 08298930",
        },
        {
          name: "Product Code",
          value: "FAB 08298930 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/100719",
    },
    {
      fgCode: "P__12345 (123)",
      styleNo: "123",
      vendorName: 117672,
      vendorFactoryCity: 101863,
      fields: [
        {
          name: "Style No",
          value: "123",
        },
        {
          name: "Product Code",
          value: "P__12345 (123)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/101863",
    },
    {
      fgCode: "P__Calk016 (500)",
      styleNo: "1111000",
      vendorName: 115161,
      vendorFactoryCity: 99352,
      fields: [
        {
          name: "Style No",
          value: "1111000",
        },
        {
          name: "Product Code",
          value: "P__Calk016 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99352",
    },
    {
      fgCode: "P__Calk017 (600)",
      styleNo: "1111001",
      vendorName: 115162,
      vendorFactoryCity: 99353,
      fields: [
        {
          name: "Style No",
          value: "1111001",
        },
        {
          name: "Product Code",
          value: "P__Calk017 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99353",
    },
    {
      fgCode: "P__Calk018 (700)",
      styleNo: "1111002",
      vendorName: 115163,
      vendorFactoryCity: 99354,
      fields: [
        {
          name: "Style No",
          value: "1111002",
        },
        {
          name: "Product Code",
          value: "P__Calk018 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99354",
    },
    {
      fgCode: "P__Calk019 (500)",
      styleNo: "1111003",
      vendorName: 115164,
      vendorFactoryCity: 99355,
      fields: [
        {
          name: "Style No",
          value: "1111003",
        },
        {
          name: "Product Code",
          value: "P__Calk019 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99355",
    },
    {
      fgCode: "P__Calk020 (600)",
      styleNo: "1111004",
      vendorName: 115165,
      vendorFactoryCity: 99356,
      fields: [
        {
          name: "Style No",
          value: "1111004",
        },
        {
          name: "Product Code",
          value: "P__Calk020 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99356",
    },
    {
      fgCode: "P__Calk021 (700)",
      styleNo: "1111005",
      vendorName: 115166,
      vendorFactoryCity: 99357,
      fields: [
        {
          name: "Style No",
          value: "1111005",
        },
        {
          name: "Product Code",
          value: "P__Calk021 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99357",
    },
    {
      fgCode: "P__Calk022 (500)",
      styleNo: "1111006",
      vendorName: 115167,
      vendorFactoryCity: 99358,
      fields: [
        {
          name: "Style No",
          value: "1111006",
        },
        {
          name: "Product Code",
          value: "P__Calk022 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99358",
    },
    {
      fgCode: "P__Calk023 (600)",
      styleNo: "1111007",
      vendorName: 115168,
      vendorFactoryCity: 99359,
      fields: [
        {
          name: "Style No",
          value: "1111007",
        },
        {
          name: "Product Code",
          value: "P__Calk023 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99359",
    },
    {
      fgCode: "P__Calk024 (700)",
      styleNo: "1111008",
      vendorName: 115169,
      vendorFactoryCity: 99360,
      fields: [
        {
          name: "Style No",
          value: "1111008",
        },
        {
          name: "Product Code",
          value: "P__Calk024 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99360",
    },
    {
      fgCode: "P__Calk025 (500)",
      styleNo: "1111009",
      vendorName: 115170,
      vendorFactoryCity: 99361,
      fields: [
        {
          name: "Style No",
          value: "1111009",
        },
        {
          name: "Product Code",
          value: "P__Calk025 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99361",
    },
    {
      fgCode: "P__Calk026 (600)",
      styleNo: "1111010",
      vendorName: 115171,
      vendorFactoryCity: 99362,
      fields: [
        {
          name: "Style No",
          value: "1111010",
        },
        {
          name: "Product Code",
          value: "P__Calk026 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99362",
    },
    {
      fgCode: "P__Calk027 (700)",
      styleNo: "1111011",
      vendorName: 115172,
      vendorFactoryCity: 99363,
      fields: [
        {
          name: "Style No",
          value: "1111011",
        },
        {
          name: "Product Code",
          value: "P__Calk027 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99363",
    },
    {
      fgCode: "P__Calk028 (500)",
      styleNo: "1111012",
      vendorName: 115173,
      vendorFactoryCity: 99364,
      fields: [
        {
          name: "Style No",
          value: "1111012",
        },
        {
          name: "Product Code",
          value: "P__Calk028 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99364",
    },
    {
      fgCode: "P__Calk029 (600)",
      styleNo: "1111013",
      vendorName: 115174,
      vendorFactoryCity: 99365,
      fields: [
        {
          name: "Style No",
          value: "1111013",
        },
        {
          name: "Product Code",
          value: "P__Calk029 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99365",
    },
    {
      fgCode: "P__Calk030 (700)",
      styleNo: "1111014",
      vendorName: 115175,
      vendorFactoryCity: 99366,
      fields: [
        {
          name: "Style No",
          value: "1111014",
        },
        {
          name: "Product Code",
          value: "P__Calk030 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99366",
    },
    {
      fgCode: "P__Calk031 (500)",
      styleNo: "1111015",
      vendorName: 115124,
      vendorFactoryCity: 99315,
      fields: [
        {
          name: "Style No",
          value: "1111015",
        },
        {
          name: "Product Code",
          value: "P__Calk031 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99315",
    },
    {
      fgCode: "P__Calk032 (600)",
      styleNo: "1111016",
      vendorName: 115125,
      vendorFactoryCity: 99316,
      fields: [
        {
          name: "Style No",
          value: "1111016",
        },
        {
          name: "Product Code",
          value: "P__Calk032 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99316",
    },
    {
      fgCode: "P__Calk033 (700)",
      styleNo: "1111017",
      vendorName: 115126,
      vendorFactoryCity: 99317,
      fields: [
        {
          name: "Style No",
          value: "1111017",
        },
        {
          name: "Product Code",
          value: "P__Calk033 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99317",
    },
    {
      fgCode: "P__Calk034 (500)",
      styleNo: "1111018",
      vendorName: 115127,
      vendorFactoryCity: 99318,
      fields: [
        {
          name: "Style No",
          value: "1111018",
        },
        {
          name: "Product Code",
          value: "P__Calk034 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99318",
    },
    {
      fgCode: "P__Calk035 (600)",
      styleNo: "1111019",
      vendorName: 115128,
      vendorFactoryCity: 99319,
      fields: [
        {
          name: "Style No",
          value: "1111019",
        },
        {
          name: "Product Code",
          value: "P__Calk035 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99319",
    },
    {
      fgCode: "P__Calk036 (700)",
      styleNo: "1111020",
      vendorName: 115129,
      vendorFactoryCity: 99320,
      fields: [
        {
          name: "Style No",
          value: "1111020",
        },
        {
          name: "Product Code",
          value: "P__Calk036 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99320",
    },
    {
      fgCode: "P__Calk037 (500)",
      styleNo: "1111021",
      vendorName: 115130,
      vendorFactoryCity: 99321,
      fields: [
        {
          name: "Style No",
          value: "1111021",
        },
        {
          name: "Product Code",
          value: "P__Calk037 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99321",
    },
    {
      fgCode: "P__Calk038 (600)",
      styleNo: "1111022",
      vendorName: 115131,
      vendorFactoryCity: 99322,
      fields: [
        {
          name: "Style No",
          value: "1111022",
        },
        {
          name: "Product Code",
          value: "P__Calk038 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99322",
    },
    {
      fgCode: "P__Calk039 (700)",
      styleNo: "1111023",
      vendorName: 115132,
      vendorFactoryCity: 99323,
      fields: [
        {
          name: "Style No",
          value: "1111023",
        },
        {
          name: "Product Code",
          value: "P__Calk039 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99323",
    },
    {
      fgCode: "P__Calk040 (500)",
      styleNo: "1111024",
      vendorName: 115133,
      vendorFactoryCity: 99324,
      fields: [
        {
          name: "Style No",
          value: "1111024",
        },
        {
          name: "Product Code",
          value: "P__Calk040 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99324",
    },
    {
      fgCode: "P__Calk041 (600)",
      styleNo: "1111025",
      vendorName: 115134,
      vendorFactoryCity: 99325,
      fields: [
        {
          name: "Style No",
          value: "1111025",
        },
        {
          name: "Product Code",
          value: "P__Calk041 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99325",
    },
    {
      fgCode: "P__Calk042 (700)",
      styleNo: "1111026",
      vendorName: 115135,
      vendorFactoryCity: 99326,
      fields: [
        {
          name: "Style No",
          value: "1111026",
        },
        {
          name: "Product Code",
          value: "P__Calk042 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99326",
    },
    {
      fgCode: "P__Calk043 (500)",
      styleNo: "1111027",
      vendorName: 115136,
      vendorFactoryCity: 99327,
      fields: [
        {
          name: "Style No",
          value: "1111027",
        },
        {
          name: "Product Code",
          value: "P__Calk043 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99327",
    },
    {
      fgCode: "P__Calk044 (600)",
      styleNo: "1111028",
      vendorName: 115137,
      vendorFactoryCity: 99328,
      fields: [
        {
          name: "Style No",
          value: "1111028",
        },
        {
          name: "Product Code",
          value: "P__Calk044 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99328",
    },
    {
      fgCode: "P__Calk045 (700)",
      styleNo: "1111029",
      vendorName: 115138,
      vendorFactoryCity: 99329,
      fields: [
        {
          name: "Style No",
          value: "1111029",
        },
        {
          name: "Product Code",
          value: "P__Calk045 (700)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99329",
    },
    {
      fgCode: "P__Calk046 (500)",
      styleNo: "1111030",
      vendorName: 115139,
      vendorFactoryCity: 99330,
      fields: [
        {
          name: "Style No",
          value: "1111030",
        },
        {
          name: "Product Code",
          value: "P__Calk046 (500)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99330",
    },
    {
      fgCode: "P__Calk047 (600)",
      styleNo: "1111031",
      vendorName: 115140,
      vendorFactoryCity: 99331,
      fields: [
        {
          name: "Style No",
          value: "1111031",
        },
        {
          name: "Product Code",
          value: "P__Calk047 (600)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99331",
    },
    {
      fgCode: "P__Lv01 (1000)",
      styleNo: "2300",
      vendorName: 115190,
      vendorFactoryCity: 99381,
      fields: [
        {
          name: "Style No",
          value: "2300",
        },
        {
          name: "Product Code",
          value: "P__Lv01 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99381",
    },
    {
      fgCode: "P__Lv02 (1000)",
      styleNo: "2301",
      vendorName: 115191,
      vendorFactoryCity: 99382,
      fields: [
        {
          name: "Style No",
          value: "2301",
        },
        {
          name: "Product Code",
          value: "P__Lv02 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99382",
    },
    {
      fgCode: "P__Lv03 (1000)",
      styleNo: "2302",
      vendorName: 115192,
      vendorFactoryCity: 99383,
      fields: [
        {
          name: "Style No",
          value: "2302",
        },
        {
          name: "Product Code",
          value: "P__Lv03 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99383",
    },
    {
      fgCode: "P__Lv04 (1000)",
      styleNo: "2303",
      vendorName: 115193,
      vendorFactoryCity: 99384,
      fields: [
        {
          name: "Style No",
          value: "2303",
        },
        {
          name: "Product Code",
          value: "P__Lv04 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99384",
    },
    {
      fgCode: "P__Lv05 (1000)",
      styleNo: "2304",
      vendorName: 115194,
      vendorFactoryCity: 99385,
      fields: [
        {
          name: "Style No",
          value: "2304",
        },
        {
          name: "Product Code",
          value: "P__Lv05 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99385",
    },
    {
      fgCode: "P__Lv06 (1000)",
      styleNo: "2305",
      vendorName: 115195,
      vendorFactoryCity: 99386,
      fields: [
        {
          name: "Style No",
          value: "2305",
        },
        {
          name: "Product Code",
          value: "P__Lv06 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99386",
    },
    {
      fgCode: "P__Lv07 (1000)",
      styleNo: "2306",
      vendorName: 115196,
      vendorFactoryCity: 99387,
      fields: [
        {
          name: "Style No",
          value: "2306",
        },
        {
          name: "Product Code",
          value: "P__Lv07 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99387",
    },
    {
      fgCode: "P__Lv08 (1000)",
      styleNo: "2307",
      vendorName: 115197,
      vendorFactoryCity: 99388,
      fields: [
        {
          name: "Style No",
          value: "2307",
        },
        {
          name: "Product Code",
          value: "P__Lv08 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99388",
    },
    {
      fgCode: "P__Lv09 (1000)",
      styleNo: "2308",
      vendorName: 115198,
      vendorFactoryCity: 99389,
      fields: [
        {
          name: "Style No",
          value: "2308",
        },
        {
          name: "Product Code",
          value: "P__Lv09 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99389",
    },
    {
      fgCode: "P__Lv10 (1000)",
      styleNo: "2309",
      vendorName: 115199,
      vendorFactoryCity: 99390,
      fields: [
        {
          name: "Style No",
          value: "2309",
        },
        {
          name: "Product Code",
          value: "P__Lv10 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99390",
    },
    {
      fgCode: "P__Lv11 (1000)",
      styleNo: "2310",
      vendorName: 115200,
      vendorFactoryCity: 99391,
      fields: [
        {
          name: "Style No",
          value: "2310",
        },
        {
          name: "Product Code",
          value: "P__Lv11 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99391",
    },
    {
      fgCode: "P__Lv12 (1000)",
      styleNo: "2311",
      vendorName: 115201,
      vendorFactoryCity: 99392,
      fields: [
        {
          name: "Style No",
          value: "2311",
        },
        {
          name: "Product Code",
          value: "P__Lv12 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99392",
    },
    {
      fgCode: "P__Lv13 (1000)",
      styleNo: "2312",
      vendorName: 115202,
      vendorFactoryCity: 99393,
      fields: [
        {
          name: "Style No",
          value: "2312",
        },
        {
          name: "Product Code",
          value: "P__Lv13 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99393",
    },
    {
      fgCode: "P__Lv14 (1000)",
      styleNo: "2313",
      vendorName: 115203,
      vendorFactoryCity: 99394,
      fields: [
        {
          name: "Style No",
          value: "2313",
        },
        {
          name: "Product Code",
          value: "P__Lv14 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99394",
    },
    {
      fgCode: "P__Lv15 (1000)",
      styleNo: "2314",
      vendorName: 115204,
      vendorFactoryCity: 99395,
      fields: [
        {
          name: "Style No",
          value: "2314",
        },
        {
          name: "Product Code",
          value: "P__Lv15 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99395",
    },
    {
      fgCode: "P__Lv16 (1000)",
      styleNo: "2315",
      vendorName: 115205,
      vendorFactoryCity: 99396,
      fields: [
        {
          name: "Style No",
          value: "2315",
        },
        {
          name: "Product Code",
          value: "P__Lv16 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99396",
    },
    {
      fgCode: "P__Lv17 (1000)",
      styleNo: "2316",
      vendorName: 115206,
      vendorFactoryCity: 99397,
      fields: [
        {
          name: "Style No",
          value: "2316",
        },
        {
          name: "Product Code",
          value: "P__Lv17 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99397",
    },
    {
      fgCode: "P__Lv18 (1000)",
      styleNo: "2317",
      vendorName: 115207,
      vendorFactoryCity: 99398,
      fields: [
        {
          name: "Style No",
          value: "2317",
        },
        {
          name: "Product Code",
          value: "P__Lv18 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99398",
    },
    {
      fgCode: "P__Lv19 (1000)",
      styleNo: "2318",
      vendorName: 115208,
      vendorFactoryCity: 99399,
      fields: [
        {
          name: "Style No",
          value: "2318",
        },
        {
          name: "Product Code",
          value: "P__Lv19 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99399",
    },
    {
      fgCode: "P__Lv20 (1000)",
      styleNo: "2319",
      vendorName: 115209,
      vendorFactoryCity: 99400,
      fields: [
        {
          name: "Style No",
          value: "2319",
        },
        {
          name: "Product Code",
          value: "P__Lv20 (1000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99400",
    },
    {
      fgCode: "P__Za121 (5000)",
      styleNo: "22220",
      vendorName: 115344,
      vendorFactoryCity: 99535,
      fields: [
        {
          name: "Style No",
          value: "22220",
        },
        {
          name: "Product Code",
          value: "P__Za121 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99535",
    },
    {
      fgCode: "P__Za122 (10000)",
      styleNo: "22221",
      vendorName: 115345,
      vendorFactoryCity: 99536,
      fields: [
        {
          name: "Style No",
          value: "22221",
        },
        {
          name: "Product Code",
          value: "P__Za122 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99536",
    },
    {
      fgCode: "P__Za123 (20000)",
      styleNo: "22222",
      vendorName: 115259,
      vendorFactoryCity: 99450,
      fields: [
        {
          name: "Style No",
          value: "22222",
        },
        {
          name: "Product Code",
          value: "P__Za123 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99450",
    },
    {
      fgCode: "P__Za124 (7000)",
      styleNo: "22223",
      vendorName: 115260,
      vendorFactoryCity: 99451,
      fields: [
        {
          name: "Style No",
          value: "22223",
        },
        {
          name: "Product Code",
          value: "P__Za124 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99451",
    },
    {
      fgCode: "P__Za125 (5000)",
      styleNo: "22224",
      vendorName: 115261,
      vendorFactoryCity: 99452,
      fields: [
        {
          name: "Style No",
          value: "22224",
        },
        {
          name: "Product Code",
          value: "P__Za125 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99452",
    },
    {
      fgCode: "P__Za126 (10000)",
      styleNo: "22225",
      vendorName: 115262,
      vendorFactoryCity: 99453,
      fields: [
        {
          name: "Style No",
          value: "22225",
        },
        {
          name: "Product Code",
          value: "P__Za126 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99453",
    },
    {
      fgCode: "P__Za127 (20000)",
      styleNo: "22226",
      vendorName: 115263,
      vendorFactoryCity: 99454,
      fields: [
        {
          name: "Style No",
          value: "22226",
        },
        {
          name: "Product Code",
          value: "P__Za127 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99454",
    },
    {
      fgCode: "P__Za128 (7000)",
      styleNo: "22227",
      vendorName: 115264,
      vendorFactoryCity: 99455,
      fields: [
        {
          name: "Style No",
          value: "22227",
        },
        {
          name: "Product Code",
          value: "P__Za128 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99455",
    },
    {
      fgCode: "P__Za129 (5000)",
      styleNo: "22228",
      vendorName: 115265,
      vendorFactoryCity: 99456,
      fields: [
        {
          name: "Style No",
          value: "22228",
        },
        {
          name: "Product Code",
          value: "P__Za129 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99456",
    },
    {
      fgCode: "P__Za130 (10000)",
      styleNo: "22229",
      vendorName: 115266,
      vendorFactoryCity: 99457,
      fields: [
        {
          name: "Style No",
          value: "22229",
        },
        {
          name: "Product Code",
          value: "P__Za130 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99457",
    },
    {
      fgCode: "P__Za131 (20000)",
      styleNo: "22230",
      vendorName: 115267,
      vendorFactoryCity: 99458,
      fields: [
        {
          name: "Style No",
          value: "22230",
        },
        {
          name: "Product Code",
          value: "P__Za131 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99458",
    },
    {
      fgCode: "P__Za132 (7000)",
      styleNo: "22231",
      vendorName: 115268,
      vendorFactoryCity: 99459,
      fields: [
        {
          name: "Style No",
          value: "22231",
        },
        {
          name: "Product Code",
          value: "P__Za132 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99459",
    },
    {
      fgCode: "P__Za133 (5000)",
      styleNo: "22232",
      vendorName: 115269,
      vendorFactoryCity: 99460,
      fields: [
        {
          name: "Style No",
          value: "22232",
        },
        {
          name: "Product Code",
          value: "P__Za133 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99460",
    },
    {
      fgCode: "P__Za134 (10000)",
      styleNo: "22233",
      vendorName: 115270,
      vendorFactoryCity: 99461,
      fields: [
        {
          name: "Style No",
          value: "22233",
        },
        {
          name: "Product Code",
          value: "P__Za134 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99461",
    },
    {
      fgCode: "P__Za135 (20000)",
      styleNo: "22234",
      vendorName: 115271,
      vendorFactoryCity: 99462,
      fields: [
        {
          name: "Style No",
          value: "22234",
        },
        {
          name: "Product Code",
          value: "P__Za135 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99462",
    },
    {
      fgCode: "P__Za136 (7000)",
      styleNo: "22235",
      vendorName: 115272,
      vendorFactoryCity: 99463,
      fields: [
        {
          name: "Style No",
          value: "22235",
        },
        {
          name: "Product Code",
          value: "P__Za136 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99463",
    },
    {
      fgCode: "P__Za137 (5000)",
      styleNo: "22236",
      vendorName: 115384,
      vendorFactoryCity: 99575,
      fields: [
        {
          name: "Style No",
          value: "22236",
        },
        {
          name: "Product Code",
          value: "P__Za137 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99575",
    },
    {
      fgCode: "P__Za138 (10000)",
      styleNo: "22237",
      vendorName: 115385,
      vendorFactoryCity: 99576,
      fields: [
        {
          name: "Style No",
          value: "22237",
        },
        {
          name: "Product Code",
          value: "P__Za138 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99576",
    },
    {
      fgCode: "P__Za139 (20000)",
      styleNo: "22238",
      vendorName: 115346,
      vendorFactoryCity: 99537,
      fields: [
        {
          name: "Style No",
          value: "22238",
        },
        {
          name: "Product Code",
          value: "P__Za139 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99537",
    },
    {
      fgCode: "P__Za140 (7000)",
      styleNo: "22239",
      vendorName: 115347,
      vendorFactoryCity: 99538,
      fields: [
        {
          name: "Style No",
          value: "22239",
        },
        {
          name: "Product Code",
          value: "P__Za140 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99538",
    },
    {
      fgCode: "P__Za141 (5000)",
      styleNo: "22240",
      vendorName: 115348,
      vendorFactoryCity: 99539,
      fields: [
        {
          name: "Style No",
          value: "22240",
        },
        {
          name: "Product Code",
          value: "P__Za141 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99539",
    },
    {
      fgCode: "P__Za142 (10000)",
      styleNo: "22241",
      vendorName: 115349,
      vendorFactoryCity: 99540,
      fields: [
        {
          name: "Style No",
          value: "22241",
        },
        {
          name: "Product Code",
          value: "P__Za142 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99540",
    },
    {
      fgCode: "P__Za143 (20000)",
      styleNo: "22242",
      vendorName: 115350,
      vendorFactoryCity: 99541,
      fields: [
        {
          name: "Style No",
          value: "22242",
        },
        {
          name: "Product Code",
          value: "P__Za143 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99541",
    },
    {
      fgCode: "P__Za144 (7000)",
      styleNo: "22243",
      vendorName: 115351,
      vendorFactoryCity: 99542,
      fields: [
        {
          name: "Style No",
          value: "22243",
        },
        {
          name: "Product Code",
          value: "P__Za144 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99542",
    },
    {
      fgCode: "P__Za145 (5000)",
      styleNo: "22244",
      vendorName: 115352,
      vendorFactoryCity: 99543,
      fields: [
        {
          name: "Style No",
          value: "22244",
        },
        {
          name: "Product Code",
          value: "P__Za145 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99543",
    },
    {
      fgCode: "P__Za146 (10000)",
      styleNo: "22245",
      vendorName: 115353,
      vendorFactoryCity: 99544,
      fields: [
        {
          name: "Style No",
          value: "22245",
        },
        {
          name: "Product Code",
          value: "P__Za146 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99544",
    },
    {
      fgCode: "P__Za147 (20000)",
      styleNo: "22246",
      vendorName: 115354,
      vendorFactoryCity: 99545,
      fields: [
        {
          name: "Style No",
          value: "22246",
        },
        {
          name: "Product Code",
          value: "P__Za147 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99545",
    },
    {
      fgCode: "P__Za148 (7000)",
      styleNo: "22247",
      vendorName: 115355,
      vendorFactoryCity: 99546,
      fields: [
        {
          name: "Style No",
          value: "22247",
        },
        {
          name: "Product Code",
          value: "P__Za148 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99546",
    },
    {
      fgCode: "P__Za149 (5000)",
      styleNo: "22248",
      vendorName: 115356,
      vendorFactoryCity: 99547,
      fields: [
        {
          name: "Style No",
          value: "22248",
        },
        {
          name: "Product Code",
          value: "P__Za149 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99547",
    },
    {
      fgCode: "P__Za150 (10000)",
      styleNo: "22249",
      vendorName: 115357,
      vendorFactoryCity: 99548,
      fields: [
        {
          name: "Style No",
          value: "22249",
        },
        {
          name: "Product Code",
          value: "P__Za150 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99548",
    },
    {
      fgCode: "P__Za151 (20000)",
      styleNo: "22250",
      vendorName: 115358,
      vendorFactoryCity: 99549,
      fields: [
        {
          name: "Style No",
          value: "22250",
        },
        {
          name: "Product Code",
          value: "P__Za151 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99549",
    },
    {
      fgCode: "P__Za152 (7000)",
      styleNo: "22251",
      vendorName: 115359,
      vendorFactoryCity: 99550,
      fields: [
        {
          name: "Style No",
          value: "22251",
        },
        {
          name: "Product Code",
          value: "P__Za152 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99550",
    },
    {
      fgCode: "P__Za153 (5000)",
      styleNo: "22252",
      vendorName: 115360,
      vendorFactoryCity: 99551,
      fields: [
        {
          name: "Style No",
          value: "22252",
        },
        {
          name: "Product Code",
          value: "P__Za153 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99551",
    },
    {
      fgCode: "P__Za154 (10000)",
      styleNo: "22253",
      vendorName: 115361,
      vendorFactoryCity: 99552,
      fields: [
        {
          name: "Style No",
          value: "22253",
        },
        {
          name: "Product Code",
          value: "P__Za154 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99552",
    },
    {
      fgCode: "P__Za155 (20000)",
      styleNo: "22254",
      vendorName: 115362,
      vendorFactoryCity: 99553,
      fields: [
        {
          name: "Style No",
          value: "22254",
        },
        {
          name: "Product Code",
          value: "P__Za155 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99553",
    },
    {
      fgCode: "P__Za156 (7000)",
      styleNo: "22255",
      vendorName: 115363,
      vendorFactoryCity: 99554,
      fields: [
        {
          name: "Style No",
          value: "22255",
        },
        {
          name: "Product Code",
          value: "P__Za156 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99554",
    },
    {
      fgCode: "P__Za157 (5000)",
      styleNo: "22256",
      vendorName: 115364,
      vendorFactoryCity: 99555,
      fields: [
        {
          name: "Style No",
          value: "22256",
        },
        {
          name: "Product Code",
          value: "P__Za157 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99555",
    },
    {
      fgCode: "P__Za158 (10000)",
      styleNo: "22257",
      vendorName: 115365,
      vendorFactoryCity: 99556,
      fields: [
        {
          name: "Style No",
          value: "22257",
        },
        {
          name: "Product Code",
          value: "P__Za158 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99556",
    },
    {
      fgCode: "P__Za159 (20000)",
      styleNo: "22258",
      vendorName: 115366,
      vendorFactoryCity: 99557,
      fields: [
        {
          name: "Style No",
          value: "22258",
        },
        {
          name: "Product Code",
          value: "P__Za159 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99557",
    },
    {
      fgCode: "P__Za160 (7000)",
      styleNo: "22259",
      vendorName: 115367,
      vendorFactoryCity: 99558,
      fields: [
        {
          name: "Style No",
          value: "22259",
        },
        {
          name: "Product Code",
          value: "P__Za160 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99558",
    },
    {
      fgCode: "P__Za161 (5000)",
      styleNo: "22260",
      vendorName: 115368,
      vendorFactoryCity: 99559,
      fields: [
        {
          name: "Style No",
          value: "22260",
        },
        {
          name: "Product Code",
          value: "P__Za161 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99559",
    },
    {
      fgCode: "P__Za162 (10000)",
      styleNo: "22261",
      vendorName: 115369,
      vendorFactoryCity: 99560,
      fields: [
        {
          name: "Style No",
          value: "22261",
        },
        {
          name: "Product Code",
          value: "P__Za162 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99560",
    },
    {
      fgCode: "P__Za163 (20000)",
      styleNo: "22262",
      vendorName: 115370,
      vendorFactoryCity: 99561,
      fields: [
        {
          name: "Style No",
          value: "22262",
        },
        {
          name: "Product Code",
          value: "P__Za163 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99561",
    },
    {
      fgCode: "P__Za164 (7000)",
      styleNo: "22263",
      vendorName: 115371,
      vendorFactoryCity: 99562,
      fields: [
        {
          name: "Style No",
          value: "22263",
        },
        {
          name: "Product Code",
          value: "P__Za164 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99562",
    },
    {
      fgCode: "P__Za165 (5000)",
      styleNo: "22264",
      vendorName: 115372,
      vendorFactoryCity: 99563,
      fields: [
        {
          name: "Style No",
          value: "22264",
        },
        {
          name: "Product Code",
          value: "P__Za165 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99563",
    },
    {
      fgCode: "P__Za166 (10000)",
      styleNo: "22265",
      vendorName: 115373,
      vendorFactoryCity: 99564,
      fields: [
        {
          name: "Style No",
          value: "22265",
        },
        {
          name: "Product Code",
          value: "P__Za166 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99564",
    },
    {
      fgCode: "P__Za167 (20000)",
      styleNo: "22266",
      vendorName: 115374,
      vendorFactoryCity: 99565,
      fields: [
        {
          name: "Style No",
          value: "22266",
        },
        {
          name: "Product Code",
          value: "P__Za167 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99565",
    },
    {
      fgCode: "P__Za168 (7000)",
      styleNo: "22267",
      vendorName: 115375,
      vendorFactoryCity: 99566,
      fields: [
        {
          name: "Style No",
          value: "22267",
        },
        {
          name: "Product Code",
          value: "P__Za168 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99566",
    },
    {
      fgCode: "P__Za169 (5000)",
      styleNo: "22268",
      vendorName: 115376,
      vendorFactoryCity: 99567,
      fields: [
        {
          name: "Style No",
          value: "22268",
        },
        {
          name: "Product Code",
          value: "P__Za169 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99567",
    },
    {
      fgCode: "P__Za170 (10000)",
      styleNo: "22269",
      vendorName: 115377,
      vendorFactoryCity: 99568,
      fields: [
        {
          name: "Style No",
          value: "22269",
        },
        {
          name: "Product Code",
          value: "P__Za170 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99568",
    },
    {
      fgCode: "P__Za171 (20000)",
      styleNo: "22270",
      vendorName: 115380,
      vendorFactoryCity: 99571,
      fields: [
        {
          name: "Style No",
          value: "22270",
        },
        {
          name: "Product Code",
          value: "P__Za171 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99571",
    },
    {
      fgCode: "P__Za172 (7000)",
      styleNo: "22271",
      vendorName: 115381,
      vendorFactoryCity: 99572,
      fields: [
        {
          name: "Style No",
          value: "22271",
        },
        {
          name: "Product Code",
          value: "P__Za172 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99572",
    },
    {
      fgCode: "P__Za173 (5000)",
      styleNo: "22272",
      vendorName: 115382,
      vendorFactoryCity: 99573,
      fields: [
        {
          name: "Style No",
          value: "22272",
        },
        {
          name: "Product Code",
          value: "P__Za173 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99573",
    },
    {
      fgCode: "P__Za174 (10000)",
      styleNo: "22273",
      vendorName: 115383,
      vendorFactoryCity: 99574,
      fields: [
        {
          name: "Style No",
          value: "22273",
        },
        {
          name: "Product Code",
          value: "P__Za174 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99574",
    },
    {
      fgCode: "P__Za175 (20000)",
      styleNo: "22274",
      vendorName: 115386,
      vendorFactoryCity: 99577,
      fields: [
        {
          name: "Style No",
          value: "22274",
        },
        {
          name: "Product Code",
          value: "P__Za175 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99577",
    },
    {
      fgCode: "P__Za176 (7000)",
      styleNo: "22275",
      vendorName: 115387,
      vendorFactoryCity: 99578,
      fields: [
        {
          name: "Style No",
          value: "22275",
        },
        {
          name: "Product Code",
          value: "P__Za176 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99578",
    },
    {
      fgCode: "P__Za177 (5000)",
      styleNo: "22276",
      vendorName: 115388,
      vendorFactoryCity: 99579,
      fields: [
        {
          name: "Style No",
          value: "22276",
        },
        {
          name: "Product Code",
          value: "P__Za177 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99579",
    },
    {
      fgCode: "P__Za178 (10000)",
      styleNo: "22277",
      vendorName: 115389,
      vendorFactoryCity: 99580,
      fields: [
        {
          name: "Style No",
          value: "22277",
        },
        {
          name: "Product Code",
          value: "P__Za178 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99580",
    },
    {
      fgCode: "P__Za179 (20000)",
      styleNo: "22278",
      vendorName: 115390,
      vendorFactoryCity: 99581,
      fields: [
        {
          name: "Style No",
          value: "22278",
        },
        {
          name: "Product Code",
          value: "P__Za179 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99581",
    },
    {
      fgCode: "P__Za180 (7000)",
      styleNo: "22279",
      vendorName: 115391,
      vendorFactoryCity: 99582,
      fields: [
        {
          name: "Style No",
          value: "22279",
        },
        {
          name: "Product Code",
          value: "P__Za180 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99582",
    },
    {
      fgCode: "P__Za181 (5000)",
      styleNo: "22280",
      vendorName: 115392,
      vendorFactoryCity: 99583,
      fields: [
        {
          name: "Style No",
          value: "22280",
        },
        {
          name: "Product Code",
          value: "P__Za181 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99583",
    },
    {
      fgCode: "P__Za182 (10000)",
      styleNo: "22281",
      vendorName: 115393,
      vendorFactoryCity: 99584,
      fields: [
        {
          name: "Style No",
          value: "22281",
        },
        {
          name: "Product Code",
          value: "P__Za182 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99584",
    },
    {
      fgCode: "P__Za183 (20000)",
      styleNo: "22282",
      vendorName: 115394,
      vendorFactoryCity: 99585,
      fields: [
        {
          name: "Style No",
          value: "22282",
        },
        {
          name: "Product Code",
          value: "P__Za183 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99585",
    },
    {
      fgCode: "P__Za184 (7000)",
      styleNo: "22283",
      vendorName: 115395,
      vendorFactoryCity: 99586,
      fields: [
        {
          name: "Style No",
          value: "22283",
        },
        {
          name: "Product Code",
          value: "P__Za184 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99586",
    },
    {
      fgCode: "P__Za185 (5000)",
      styleNo: "22284",
      vendorName: 115396,
      vendorFactoryCity: 99587,
      fields: [
        {
          name: "Style No",
          value: "22284",
        },
        {
          name: "Product Code",
          value: "P__Za185 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99587",
    },
    {
      fgCode: "P__Za186 (10000)",
      styleNo: "22285",
      vendorName: 115397,
      vendorFactoryCity: 99588,
      fields: [
        {
          name: "Style No",
          value: "22285",
        },
        {
          name: "Product Code",
          value: "P__Za186 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99588",
    },
    {
      fgCode: "P__Za187 (20000)",
      styleNo: "22286",
      vendorName: 115398,
      vendorFactoryCity: 99589,
      fields: [
        {
          name: "Style No",
          value: "22286",
        },
        {
          name: "Product Code",
          value: "P__Za187 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99589",
    },
    {
      fgCode: "P__Za188 (7000)",
      styleNo: "22287",
      vendorName: 115399,
      vendorFactoryCity: 99590,
      fields: [
        {
          name: "Style No",
          value: "22287",
        },
        {
          name: "Product Code",
          value: "P__Za188 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99590",
    },
    {
      fgCode: "P__Za189 (5000)",
      styleNo: "22288",
      vendorName: 115400,
      vendorFactoryCity: 99591,
      fields: [
        {
          name: "Style No",
          value: "22288",
        },
        {
          name: "Product Code",
          value: "P__Za189 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99591",
    },
    {
      fgCode: "P__Za190 (10000)",
      styleNo: "22289",
      vendorName: 115401,
      vendorFactoryCity: 99592,
      fields: [
        {
          name: "Style No",
          value: "22289",
        },
        {
          name: "Product Code",
          value: "P__Za190 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99592",
    },
    {
      fgCode: "P__Za191 (20000)",
      styleNo: "22290",
      vendorName: 115402,
      vendorFactoryCity: 99593,
      fields: [
        {
          name: "Style No",
          value: "22290",
        },
        {
          name: "Product Code",
          value: "P__Za191 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99593",
    },
    {
      fgCode: "P__Za192 (7000)",
      styleNo: "22291",
      vendorName: 115403,
      vendorFactoryCity: 99594,
      fields: [
        {
          name: "Style No",
          value: "22291",
        },
        {
          name: "Product Code",
          value: "P__Za192 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99594",
    },
    {
      fgCode: "P__Za193 (5000)",
      styleNo: "22292",
      vendorName: 115404,
      vendorFactoryCity: 99595,
      fields: [
        {
          name: "Style No",
          value: "22292",
        },
        {
          name: "Product Code",
          value: "P__Za193 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99595",
    },
    {
      fgCode: "P__Za194 (10000)",
      styleNo: "22293",
      vendorName: 115405,
      vendorFactoryCity: 99596,
      fields: [
        {
          name: "Style No",
          value: "22293",
        },
        {
          name: "Product Code",
          value: "P__Za194 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99596",
    },
    {
      fgCode: "P__Za195 (20000)",
      styleNo: "22294",
      vendorName: 115406,
      vendorFactoryCity: 99597,
      fields: [
        {
          name: "Style No",
          value: "22294",
        },
        {
          name: "Product Code",
          value: "P__Za195 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99597",
    },
    {
      fgCode: "P__Za196 (7000)",
      styleNo: "22295",
      vendorName: 115407,
      vendorFactoryCity: 99598,
      fields: [
        {
          name: "Style No",
          value: "22295",
        },
        {
          name: "Product Code",
          value: "P__Za196 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99598",
    },
    {
      fgCode: "P__Za197 (5000)",
      styleNo: "22296",
      vendorName: 115408,
      vendorFactoryCity: 99599,
      fields: [
        {
          name: "Style No",
          value: "22296",
        },
        {
          name: "Product Code",
          value: "P__Za197 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99599",
    },
    {
      fgCode: "P__Za198 (10000)",
      styleNo: "22297",
      vendorName: 115409,
      vendorFactoryCity: 99600,
      fields: [
        {
          name: "Style No",
          value: "22297",
        },
        {
          name: "Product Code",
          value: "P__Za198 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99600",
    },
    {
      fgCode: "P__Za199 (20000)",
      styleNo: "22298",
      vendorName: 115410,
      vendorFactoryCity: 99601,
      fields: [
        {
          name: "Style No",
          value: "22298",
        },
        {
          name: "Product Code",
          value: "P__Za199 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99601",
    },
    {
      fgCode: "P__Za200 (7000)",
      styleNo: "22299",
      vendorName: 115411,
      vendorFactoryCity: 99602,
      fields: [
        {
          name: "Style No",
          value: "22299",
        },
        {
          name: "Product Code",
          value: "P__Za200 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99602",
    },
    {
      fgCode: "P__Za201 (5000)",
      styleNo: "22300",
      vendorName: 115412,
      vendorFactoryCity: 99603,
      fields: [
        {
          name: "Style No",
          value: "22300",
        },
        {
          name: "Product Code",
          value: "P__Za201 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99603",
    },
    {
      fgCode: "P__Za202 (10000)",
      styleNo: "22301",
      vendorName: 115413,
      vendorFactoryCity: 99604,
      fields: [
        {
          name: "Style No",
          value: "22301",
        },
        {
          name: "Product Code",
          value: "P__Za202 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99604",
    },
    {
      fgCode: "P__Za203 (20000)",
      styleNo: "22302",
      vendorName: 115414,
      vendorFactoryCity: 99605,
      fields: [
        {
          name: "Style No",
          value: "22302",
        },
        {
          name: "Product Code",
          value: "P__Za203 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99605",
    },
    {
      fgCode: "P__Za204 (7000)",
      styleNo: "22303",
      vendorName: 115415,
      vendorFactoryCity: 99606,
      fields: [
        {
          name: "Style No",
          value: "22303",
        },
        {
          name: "Product Code",
          value: "P__Za204 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99606",
    },
    {
      fgCode: "P__Za205 (5000)",
      styleNo: "22304",
      vendorName: 115424,
      vendorFactoryCity: 99615,
      fields: [
        {
          name: "Style No",
          value: "22304",
        },
        {
          name: "Product Code",
          value: "P__Za205 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99615",
    },
    {
      fgCode: "P__Za206 (10000)",
      styleNo: "22305",
      vendorName: 115425,
      vendorFactoryCity: 99616,
      fields: [
        {
          name: "Style No",
          value: "22305",
        },
        {
          name: "Product Code",
          value: "P__Za206 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99616",
    },
    {
      fgCode: "P__Za207 (20000)",
      styleNo: "22306",
      vendorName: 115426,
      vendorFactoryCity: 99617,
      fields: [
        {
          name: "Style No",
          value: "22306",
        },
        {
          name: "Product Code",
          value: "P__Za207 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99617",
    },
    {
      fgCode: "P__Za208 (7000)",
      styleNo: "22307",
      vendorName: 115427,
      vendorFactoryCity: 99618,
      fields: [
        {
          name: "Style No",
          value: "22307",
        },
        {
          name: "Product Code",
          value: "P__Za208 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99618",
    },
    {
      fgCode: "P__Za209 (5000)",
      styleNo: "22308",
      vendorName: 115428,
      vendorFactoryCity: 99619,
      fields: [
        {
          name: "Style No",
          value: "22308",
        },
        {
          name: "Product Code",
          value: "P__Za209 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99619",
    },
    {
      fgCode: "P__Za210 (10000)",
      styleNo: "22309",
      vendorName: 115429,
      vendorFactoryCity: 99620,
      fields: [
        {
          name: "Style No",
          value: "22309",
        },
        {
          name: "Product Code",
          value: "P__Za210 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99620",
    },
    {
      fgCode: "P__Za211 (20000)",
      styleNo: "22310",
      vendorName: 115430,
      vendorFactoryCity: 99621,
      fields: [
        {
          name: "Style No",
          value: "22310",
        },
        {
          name: "Product Code",
          value: "P__Za211 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99621",
    },
    {
      fgCode: "P__Za212 (7000)",
      styleNo: "22311",
      vendorName: 115431,
      vendorFactoryCity: 99622,
      fields: [
        {
          name: "Style No",
          value: "22311",
        },
        {
          name: "Product Code",
          value: "P__Za212 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99622",
    },
    {
      fgCode: "P__Za213 (5000)",
      styleNo: "22312",
      vendorName: 115432,
      vendorFactoryCity: 99623,
      fields: [
        {
          name: "Style No",
          value: "22312",
        },
        {
          name: "Product Code",
          value: "P__Za213 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99623",
    },
    {
      fgCode: "P__Za214 (10000)",
      styleNo: "22313",
      vendorName: 115433,
      vendorFactoryCity: 99624,
      fields: [
        {
          name: "Style No",
          value: "22313",
        },
        {
          name: "Product Code",
          value: "P__Za214 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99624",
    },
    {
      fgCode: "P__Za215 (20000)",
      styleNo: "22314",
      vendorName: 115434,
      vendorFactoryCity: 99625,
      fields: [
        {
          name: "Style No",
          value: "22314",
        },
        {
          name: "Product Code",
          value: "P__Za215 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99625",
    },
    {
      fgCode: "P__Za216 (7000)",
      styleNo: "22315",
      vendorName: 115435,
      vendorFactoryCity: 99626,
      fields: [
        {
          name: "Style No",
          value: "22315",
        },
        {
          name: "Product Code",
          value: "P__Za216 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99626",
    },
    {
      fgCode: "P__Za217 (5000)",
      styleNo: "22316",
      vendorName: 115436,
      vendorFactoryCity: 99627,
      fields: [
        {
          name: "Style No",
          value: "22316",
        },
        {
          name: "Product Code",
          value: "P__Za217 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99627",
    },
    {
      fgCode: "P__Za218 (10000)",
      styleNo: "22317",
      vendorName: 115437,
      vendorFactoryCity: 99628,
      fields: [
        {
          name: "Style No",
          value: "22317",
        },
        {
          name: "Product Code",
          value: "P__Za218 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99628",
    },
    {
      fgCode: "P__Za219 (20000)",
      styleNo: "22318",
      vendorName: 115438,
      vendorFactoryCity: 99629,
      fields: [
        {
          name: "Style No",
          value: "22318",
        },
        {
          name: "Product Code",
          value: "P__Za219 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99629",
    },
    {
      fgCode: "P__Za220 (7000)",
      styleNo: "22319",
      vendorName: 115439,
      vendorFactoryCity: 99630,
      fields: [
        {
          name: "Style No",
          value: "22319",
        },
        {
          name: "Product Code",
          value: "P__Za220 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99630",
    },
    {
      fgCode: "P__Za221 (5000)",
      styleNo: "22320",
      vendorName: 115440,
      vendorFactoryCity: 99631,
      fields: [
        {
          name: "Style No",
          value: "22320",
        },
        {
          name: "Product Code",
          value: "P__Za221 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99631",
    },
    {
      fgCode: "P__Za222 (10000)",
      styleNo: "22321",
      vendorName: 115441,
      vendorFactoryCity: 99632,
      fields: [
        {
          name: "Style No",
          value: "22321",
        },
        {
          name: "Product Code",
          value: "P__Za222 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99632",
    },
    {
      fgCode: "P__Za223 (20000)",
      styleNo: "22322",
      vendorName: 115442,
      vendorFactoryCity: 99633,
      fields: [
        {
          name: "Style No",
          value: "22322",
        },
        {
          name: "Product Code",
          value: "P__Za223 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99633",
    },
    {
      fgCode: "P__Za224 (7000)",
      styleNo: "22323",
      vendorName: 115443,
      vendorFactoryCity: 99634,
      fields: [
        {
          name: "Style No",
          value: "22323",
        },
        {
          name: "Product Code",
          value: "P__Za224 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99634",
    },
    {
      fgCode: "P__Za225 (5000)",
      styleNo: "22324",
      vendorName: 115444,
      vendorFactoryCity: 99635,
      fields: [
        {
          name: "Style No",
          value: "22324",
        },
        {
          name: "Product Code",
          value: "P__Za225 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99635",
    },
    {
      fgCode: "P__Za226 (10000)",
      styleNo: "22325",
      vendorName: 115445,
      vendorFactoryCity: 99636,
      fields: [
        {
          name: "Style No",
          value: "22325",
        },
        {
          name: "Product Code",
          value: "P__Za226 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99636",
    },
    {
      fgCode: "P__Za227 (20000)",
      styleNo: "22326",
      vendorName: 115446,
      vendorFactoryCity: 99637,
      fields: [
        {
          name: "Style No",
          value: "22326",
        },
        {
          name: "Product Code",
          value: "P__Za227 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99637",
    },
    {
      fgCode: "P__Za228 (7000)",
      styleNo: "22327",
      vendorName: 115447,
      vendorFactoryCity: 99638,
      fields: [
        {
          name: "Style No",
          value: "22327",
        },
        {
          name: "Product Code",
          value: "P__Za228 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99638",
    },
    {
      fgCode: "P__Za229 (5000)",
      styleNo: "22328",
      vendorName: 115448,
      vendorFactoryCity: 99639,
      fields: [
        {
          name: "Style No",
          value: "22328",
        },
        {
          name: "Product Code",
          value: "P__Za229 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99639",
    },
    {
      fgCode: "P__Za230 (10000)",
      styleNo: "22329",
      vendorName: 115449,
      vendorFactoryCity: 99640,
      fields: [
        {
          name: "Style No",
          value: "22329",
        },
        {
          name: "Product Code",
          value: "P__Za230 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99640",
    },
    {
      fgCode: "P__Za231 (20000)",
      styleNo: "22330",
      vendorName: 115416,
      vendorFactoryCity: 99607,
      fields: [
        {
          name: "Style No",
          value: "22330",
        },
        {
          name: "Product Code",
          value: "P__Za231 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99607",
    },
    {
      fgCode: "P__Za232 (7000)",
      styleNo: "22331",
      vendorName: 115417,
      vendorFactoryCity: 99608,
      fields: [
        {
          name: "Style No",
          value: "22331",
        },
        {
          name: "Product Code",
          value: "P__Za232 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99608",
    },
    {
      fgCode: "P__Za233 (5000)",
      styleNo: "22332",
      vendorName: 115418,
      vendorFactoryCity: 99609,
      fields: [
        {
          name: "Style No",
          value: "22332",
        },
        {
          name: "Product Code",
          value: "P__Za233 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99609",
    },
    {
      fgCode: "P__Za234 (10000)",
      styleNo: "22333",
      vendorName: 115419,
      vendorFactoryCity: 99610,
      fields: [
        {
          name: "Style No",
          value: "22333",
        },
        {
          name: "Product Code",
          value: "P__Za234 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99610",
    },
    {
      fgCode: "P__Za235 (20000)",
      styleNo: "22334",
      vendorName: 115420,
      vendorFactoryCity: 99611,
      fields: [
        {
          name: "Style No",
          value: "22334",
        },
        {
          name: "Product Code",
          value: "P__Za235 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99611",
    },
    {
      fgCode: "P__Za236 (7000)",
      styleNo: "22335",
      vendorName: 115421,
      vendorFactoryCity: 99612,
      fields: [
        {
          name: "Style No",
          value: "22335",
        },
        {
          name: "Product Code",
          value: "P__Za236 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99612",
    },
    {
      fgCode: "P__Za237 (5000)",
      styleNo: "22336",
      vendorName: 115422,
      vendorFactoryCity: 99613,
      fields: [
        {
          name: "Style No",
          value: "22336",
        },
        {
          name: "Product Code",
          value: "P__Za237 (5000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99613",
    },
    {
      fgCode: "P__Za238 (10000)",
      styleNo: "22337",
      vendorName: 115423,
      vendorFactoryCity: 99614,
      fields: [
        {
          name: "Style No",
          value: "22337",
        },
        {
          name: "Product Code",
          value: "P__Za238 (10000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99614",
    },
    {
      fgCode: "P__Za239 (20000)",
      styleNo: "22338",
      vendorName: 115378,
      vendorFactoryCity: 99569,
      fields: [
        {
          name: "Style No",
          value: "22338",
        },
        {
          name: "Product Code",
          value: "P__Za239 (20000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99569",
    },
    {
      fgCode: "P__Za240 (7000)",
      styleNo: "22339",
      vendorName: 115379,
      vendorFactoryCity: 99570,
      fields: [
        {
          name: "Style No",
          value: "22339",
        },
        {
          name: "Product Code",
          value: "P__Za240 (7000)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/99570",
    },
    {
      fgCode: "P122AMJN00001-01 (250)",
      styleNo: "P122AMJN00001",
      vendorName: 117963,
      vendorFactoryCity: 102154,
      fields: [
        {
          name: "Style No",
          value: "P122AMJN00001",
        },
        {
          name: "Product Code",
          value: "P122AMJN00001-01 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102154",
    },
    {
      fgCode: "P122AMJN00001-02 (250)",
      styleNo: "P122AMJN00001",
      vendorName: 117964,
      vendorFactoryCity: 102155,
      fields: [
        {
          name: "Style No",
          value: "P122AMJN00001",
        },
        {
          name: "Product Code",
          value: "P122AMJN00001-02 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102155",
    },
    {
      fgCode: "P122AMJN00001-03 (250)",
      styleNo: "P122AMJN00001",
      vendorName: 117965,
      vendorFactoryCity: 102156,
      fields: [
        {
          name: "Style No",
          value: "P122AMJN00001",
        },
        {
          name: "Product Code",
          value: "P122AMJN00001-03 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102156",
    },
    {
      fgCode: "P122AMJN00002-01 (250)",
      styleNo: "P122AMJN00002",
      vendorName: 117966,
      vendorFactoryCity: 102157,
      fields: [
        {
          name: "Style No",
          value: "P122AMJN00002",
        },
        {
          name: "Product Code",
          value: "P122AMJN00002-01 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102157",
    },
    {
      fgCode: "P122AMJN00002-02 (250)",
      styleNo: "P122AMJN00002",
      vendorName: 117967,
      vendorFactoryCity: 102158,
      fields: [
        {
          name: "Style No",
          value: "P122AMJN00002",
        },
        {
          name: "Product Code",
          value: "P122AMJN00002-02 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102158",
    },
    {
      fgCode: "P122AMJN00002-03 (250)",
      styleNo: "P122AMJN00002",
      vendorName: 117968,
      vendorFactoryCity: 102159,
      fields: [
        {
          name: "Style No",
          value: "P122AMJN00002",
        },
        {
          name: "Product Code",
          value: "P122AMJN00002-03 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102159",
    },
    {
      fgCode: "P122AMSH00001-01 (250)",
      styleNo: "P122AMSH00001",
      vendorName: 117969,
      vendorFactoryCity: 102160,
      fields: [
        {
          name: "Style No",
          value: "P122AMSH00001",
        },
        {
          name: "Product Code",
          value: "P122AMSH00001-01 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102160",
    },
    {
      fgCode: "P122AMSH00001-02 (250)",
      styleNo: "P122AMSH00001",
      vendorName: 117970,
      vendorFactoryCity: 102161,
      fields: [
        {
          name: "Style No",
          value: "P122AMSH00001",
        },
        {
          name: "Product Code",
          value: "P122AMSH00001-02 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102161",
    },
    {
      fgCode: "P122AMSH00001-03 (250)",
      styleNo: "P122AMSH00001",
      vendorName: 117971,
      vendorFactoryCity: 102162,
      fields: [
        {
          name: "Style No",
          value: "P122AMSH00001",
        },
        {
          name: "Product Code",
          value: "P122AMSH00001-03 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102162",
    },
    {
      fgCode: "P122AMSH00002-01 (250)",
      styleNo: "P122AMSH00002",
      vendorName: 117972,
      vendorFactoryCity: 102163,
      fields: [
        {
          name: "Style No",
          value: "P122AMSH00002",
        },
        {
          name: "Product Code",
          value: "P122AMSH00002-01 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102163",
    },
    {
      fgCode: "P122AMSH00002-02 (250)",
      styleNo: "P122AMSH00002",
      vendorName: 117973,
      vendorFactoryCity: 102164,
      fields: [
        {
          name: "Style No",
          value: "P122AMSH00002",
        },
        {
          name: "Product Code",
          value: "P122AMSH00002-02 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102164",
    },
    {
      fgCode: "P122AMSH00002-03 (250)",
      styleNo: "P122AMSH00002",
      vendorName: 117974,
      vendorFactoryCity: 102165,
      fields: [
        {
          name: "Style No",
          value: "P122AMSH00002",
        },
        {
          name: "Product Code",
          value: "P122AMSH00002-03 (250)",
        },
      ],
      productProfileUrl:
        "http://52.187.60.117:8085/Login/DirectToScreen/say?loginstring=696/FGProfileM/102165",
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default App;
