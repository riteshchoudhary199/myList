import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";

import { CheckBox } from "react-native-elements";

const App = () => {
  const [showlist, setshowlist] = useState(false);

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

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ marginTop: 35, backgroundColor: "#00FFFF" }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          // onPress={() => {
          //   setshowlist(!showlist);
          //   console.log("test");
          // }}
        >
          <CheckBox
            size={25}
            checkedColor="#10226A"
            uncheckedColor="#10226A"
            onPress={() => {
              setshowlist(!showlist);
              console.log("test");
            }}
            checked={!showlist}
          />
          <Text
            style={{
              fontSize: 24,
              alignContent: "center",
              // justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Feautures
          </Text>
        </TouchableOpacity>
        {/* <Button
          title="Press me"
          onPress={
            () => {
              setshowlist(true);
              console.log("test");
            }
            
          }
        /> */}

      <FlatList
        data={data.result}
        //  keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) => (
          <View style={{ paddingBottom: 10, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                setshowlist(!showlist);
                console.log("test");
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  marginLeft: 0,
                  marginTop: 0,
                }}
              >
                {item.filterName}
              </Text>
            </TouchableOpacity>
            {showlist && (
              <FlatList
                data={data.result}
                renderItem={({ item }) => <Text>{item.filterCode}</Text>}
              />
            )}
          </View>
        )}

        //   ListHeaderComponent={headComponent}
      />
    </View>
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

const data = {
  result: [
    {
      filterName: "Style No",
      filterCode: "styleNo",
      filters: [
        {
          record_id: "DUMMY1",
          record_name: "DUMMY1",
          status: "0",
        },
        {
          record_id: "FBR2",
          record_name: "FBR2",
          status: "0",
        },
        {
          record_id: "GNSR1",
          record_name: "GNSR1",
          status: "0",
        },
        {
          record_id: "GNSR2",
          record_name: "GNSR2",
          status: "0",
        },
        {
          record_id: "SPD5104",
          record_name: "SPD5104",
          status: "0",
        },
        {
          record_id: "SPD697",
          record_name: "SPD697",
          status: "0",
        },
        {
          record_id: "SPD700",
          record_name: "SPD700",
          status: "0",
        },
        {
          record_id: "SPD701",
          record_name: "SPD701",
          status: "0",
        },
        {
          record_id: "SPD707",
          record_name: "SPD707",
          status: "0",
        },
        {
          record_id: "SU1",
          record_name: "SU1",
          status: "0",
        },
        {
          record_id: "SU10",
          record_name: "SU10",
          status: "0",
        },
        {
          record_id: "SU11",
          record_name: "SU11",
          status: "0",
        },
        {
          record_id: "SU13",
          record_name: "SU13",
          status: "0",
        },
        {
          record_id: "SU22",
          record_name: "SU22",
          status: "0",
        },
        {
          record_id: "SU23",
          record_name: "SU23",
          status: "0",
        },
        {
          record_id: "SU3",
          record_name: "SU3",
          status: "0",
        },
        {
          record_id: "SU7",
          record_name: "SU7",
          status: "0",
        },
        {
          record_id: "SU8",
          record_name: "SU8",
          status: "0",
        },
        {
          record_id: "SU9",
          record_name: "SU9",
          status: "0",
        },
      ],
    },
    {
      filterName: "FG Code",
      filterCode: "fgCode",
      filters: [
        {
          record_id: "123903",
          record_name: "DUMMY1(10000.000)",
          status: "0",
        },
        {
          record_id: "118594",
          record_name: "FBR2(10000.000)",
          status: "0",
        },
        {
          record_id: "123836",
          record_name: "GNSR1(1000.000)",
          status: "0",
        },
        {
          record_id: "123837",
          record_name: "GNSR2(1000.000)",
          status: "0",
        },
        {
          record_id: "118597",
          record_name: "SPD5104(1000.000)",
          status: "0",
        },
        {
          record_id: "118601",
          record_name: "SPD697(1000.000)",
          status: "0",
        },
        {
          record_id: "118604",
          record_name: "SPD700(1000.000)",
          status: "0",
        },
        {
          record_id: "118605",
          record_name: "SPD701(1000.000)",
          status: "0",
        },
        {
          record_id: "118611",
          record_name: "SPD707(1000.000)",
          status: "0",
        },
        {
          record_id: "118568",
          record_name: "SU1(10000.000)",
          status: "0",
        },
        {
          record_id: "118577",
          record_name: "SU10(10000.000)",
          status: "0",
        },
        {
          record_id: "118578",
          record_name: "SU11(10000.000)",
          status: "0",
        },
        {
          record_id: "118580",
          record_name: "SU13(10000.000)",
          status: "0",
        },
        {
          record_id: "118562",
          record_name: "SU22(10000.000)",
          status: "0",
        },
        {
          record_id: "118563",
          record_name: "SU23(10000.000)",
          status: "0",
        },
        {
          record_id: "118570",
          record_name: "SU3(10000.000)",
          status: "0",
        },
        {
          record_id: "118574",
          record_name: "SU7(10000.000)",
          status: "0",
        },
        {
          record_id: "118575",
          record_name: "SU8(10000.000)",
          status: "0",
        },
        {
          record_id: "118576",
          record_name: "SU9(10000.000)",
          status: "0",
        },
      ],
    },
    {
      filterName: "Activity Name",
      filterCode: "activityName",
      filters: [
        {
          record_id: "209",
          record_name: "3p allocation",
          status: "0",
        },
        {
          record_id: "251",
          record_name: "3p allocation by Inv Opts",
          status: "0",
        },
        {
          record_id: "217",
          record_name: "3p Delivery Confirmation",
          status: "0",
        },
        {
          record_id: "128",
          record_name: "Approval Closure",
          status: "0",
        },
        {
          record_id: "213",
          record_name: "Approval for Shipment",
          status: "0",
        },
        {
          record_id: "301",
          record_name: "Approve design codes",
          status: "0",
        },
        {
          record_id: "139",
          record_name: "Artwork Appl",
          status: "0",
        },
        {
          record_id: "254",
          record_name: "Assign Expected Delivery Date",
          status: "0",
        },
        {
          record_id: "264",
          record_name: "Asthetics Approval",
          status: "0",
        },
        {
          record_id: "302",
          record_name: "Blank Order",
          status: "0",
        },
        {
          record_id: "259",
          record_name: "Brief sent to Buyer",
          status: "0",
        },
        {
          record_id: "240",
          record_name: "Bulk Fabric Q",
          status: "0",
        },
        {
          record_id: "303",
          record_name: "Bulk Printing",
          status: "0",
        },
        {
          record_id: "211",
          record_name: "Checklist approval",
          status: "0",
        },
        {
          record_id: "210",
          record_name: "Checklist BL or AWB upload",
          status: "0",
        },
        {
          record_id: "294",
          record_name: "Code Checking",
          status: "0",
        },
        {
          record_id: "238",
          record_name: "Controlled Spec Sheet CSS Q",
          status: "0",
        },
        {
          record_id: "143",
          record_name: "Cost Closure",
          status: "0",
        },
        {
          record_id: "222",
          record_name: "Cost Closure Indicative",
          status: "0",
        },
        {
          record_id: "227",
          record_name: "Cost Closure PRE RS",
          status: "0",
        },
        {
          record_id: "283",
          record_name: "CRP",
          status: "0",
        },
        {
          record_id: "107",
          record_name: "Cutting",
          status: "0",
        },
        {
          record_id: "121",
          record_name: "Deskloom",
          status: "0",
        },
        {
          record_id: "88",
          record_name: "Dispatch",
          status: "0",
        },
        {
          record_id: "258",
          record_name: "Dispatch Date Closure",
          status: "0",
        },
        {
          record_id: "134",
          record_name: "Docket Based Cost",
          status: "0",
        },
        {
          record_id: "130",
          record_name: "Docket Receipt",
          status: "0",
        },
        {
          record_id: "131",
          record_name: "Docket to Vendor",
          status: "0",
        },
        {
          record_id: "207",
          record_name: "Documentation Approval",
          status: "0",
        },
        {
          record_id: "108",
          record_name: "Documentation Submission",
          status: "0",
        },
        {
          record_id: "106",
          record_name: "Duty Payment",
          status: "0",
        },
        {
          record_id: "214",
          record_name: "Duty Payment Approval",
          status: "0",
        },
        {
          record_id: "153",
          record_name: "EBD and Thread Run",
          status: "0",
        },
        {
          record_id: "126",
          record_name: "Emb Strike Off",
          status: "0",
        },
        {
          record_id: "243",
          record_name: "Emb Strike Off Q",
          status: "0",
        },
        {
          record_id: "105",
          record_name: "Ex Mill",
          status: "0",
        },
        {
          record_id: "129",
          record_name: "EX Mill Internal",
          status: "0",
        },
        {
          record_id: "249",
          record_name: "Express Shipment Mode",
          status: "0",
        },
        {
          record_id: "250",
          record_name: "Express Shipment Mode Approval",
          status: "0",
        },
        {
          record_id: "145",
          record_name: "Fab",
          status: "0",
        },
        {
          record_id: "174",
          record_name: "Fabric Approval Closure",
          status: "0",
        },
        {
          record_id: "75",
          record_name: "Fabric at Port",
          status: "0",
        },
        {
          record_id: "74",
          record_name: "Fabric Dispatch",
          status: "0",
        },
        {
          record_id: "144",
          record_name: "Fabric Indent to Mill",
          status: "0",
        },
        {
          record_id: "148",
          record_name: "Fabric Indent to Vendor",
          status: "0",
        },
        {
          record_id: "76",
          record_name: "Fabric Inhouse",
          status: "0",
        },
        {
          record_id: "122",
          record_name: "Fabric Inhouse at Vendor",
          status: "0",
        },
        {
          record_id: "95",
          record_name: "Fabric Order Date",
          status: "0",
        },
        {
          record_id: "133",
          record_name: "Fabric Quality",
          status: "0",
        },
        {
          record_id: "111",
          record_name: "Fabric under process",
          status: "0",
        },
        {
          record_id: "208",
          record_name: "Final Document Upload",
          status: "0",
        },
        {
          record_id: "86",
          record_name: "Final Inspection",
          status: "0",
        },
        {
          record_id: "168",
          record_name: "FINAL MRN DETAILS",
          status: "0",
        },
        {
          record_id: "274",
          record_name: "Finance Approval",
          status: "0",
        },
        {
          record_id: "171",
          record_name: "Finishing",
          status: "0",
        },
        {
          record_id: "233",
          record_name: "Finishing Review",
          status: "0",
        },
        {
          record_id: "104",
          record_name: "First of Bulk",
          status: "0",
        },
        {
          record_id: "147",
          record_name: "First Sample Wash",
          status: "0",
        },
        {
          record_id: "235",
          record_name: "Fit Appl Q if new",
          status: "0",
        },
        {
          record_id: "265",
          record_name: "Fit Approval",
          status: "0",
        },
        {
          record_id: "137",
          record_name: "Fit or Proto",
          status: "0",
        },
        {
          record_id: "78",
          record_name: "FPT",
          status: "0",
        },
        {
          record_id: "160",
          record_name: "FPT Q",
          status: "0",
        },
        {
          record_id: "218",
          record_name: "Freight Invoice and Shipment Documentation upload",
          status: "0",
        },
        {
          record_id: "219",
          record_name: "Freight Invoice approval",
          status: "0",
        },
        {
          record_id: "91",
          record_name: "Gate Pass Vendor Delivery",
          status: "0",
        },
        {
          record_id: "286",
          record_name: "Go Live",
          status: "0",
        },
        {
          record_id: "90",
          record_name: "Goods InTransit Ind",
          status: "0",
        },
        {
          record_id: "80",
          record_name: "GPT",
          status: "0",
        },
        {
          record_id: "159",
          record_name: "GPT Q",
          status: "0",
        },
        {
          record_id: "113",
          record_name: "Greige Inhouse",
          status: "0",
        },
        {
          record_id: "100",
          record_name: "Greige Input",
          status: "0",
        },
        {
          record_id: "97",
          record_name: "Greige Yarn Inhouse",
          status: "0",
        },
        {
          record_id: "92",
          record_name: "GRN",
          status: "0",
        },
        {
          record_id: "206",
          record_name: "Import Document Data Upload",
          status: "0",
        },
        {
          record_id: "94",
          record_name: "Indicative Ready Fabric Date",
          status: "0",
        },
        {
          record_id: "156",
          record_name: "Inline Inspection",
          status: "0",
        },
        {
          record_id: "157",
          record_name: "Interim Inspection",
          status: "0",
        },
        {
          record_id: "203",
          record_name: "Invoice Created",
          status: "0",
        },
        {
          record_id: "276",
          record_name: "Invoice Paid",
          status: "0",
        },
        {
          record_id: "109",
          record_name: "Issue to Fabric Dyeing",
          status: "0",
        },
        {
          record_id: "103",
          record_name: "Issue to Fabric Finishing",
          status: "0",
        },
        {
          record_id: "102",
          record_name: "Issue to Fabric Printing",
          status: "0",
        },
        {
          record_id: "85",
          record_name: "Issue to Finishing",
          status: "0",
        },
        {
          record_id: "115",
          record_name: "Issue to Knitting",
          status: "0",
        },
        {
          record_id: "117",
          record_name: "Issue to Linking",
          status: "0",
        },
        {
          record_id: "116",
          record_name: "Issue to Panel Wash",
          status: "0",
        },
        {
          record_id: "82",
          record_name: "Issue to Print Emb",
          status: "0",
        },
        {
          record_id: "83",
          record_name: "Issue to Sewing",
          status: "0",
        },
        {
          record_id: "84",
          record_name: "Issue to Washing",
          status: "0",
        },
        {
          record_id: "99",
          record_name: "Issue to Weaving",
          status: "0",
        },
        {
          record_id: "98",
          record_name: "Issue to Yarn Dyeing",
          status: "0",
        },
        {
          record_id: "138",
          record_name: "Knit Down",
          status: "0",
        },
        {
          record_id: "118",
          record_name: "Lab Dip",
          status: "0",
        },
        {
          record_id: "223",
          record_name: "Lab Dip or Yarn Dip",
          status: "0",
        },
        {
          record_id: "93",
          record_name: "LAB DIP STATUS",
          status: "0",
        },
        {
          record_id: "261",
          record_name: "Lasting",
          status: "0",
        },
        {
          record_id: "146",
          record_name: "Leg Mock",
          status: "0",
        },
        {
          record_id: "224",
          record_name: "Leg or Wash Mock",
          status: "0",
        },
        {
          record_id: "266",
          record_name: "Material Inhouse",
          status: "0",
        },
        {
          record_id: "267",
          record_name: "Material Testing",
          status: "0",
        },
        {
          record_id: "172",
          record_name: "Mill Deliver Date",
          status: "0",
        },
        {
          record_id: "255",
          record_name: "Mill Fabric Ready",
          status: "0",
        },
        {
          record_id: "280",
          record_name: "MIS entry",
          status: "0",
        },
        {
          record_id: "124",
          record_name: "New Development",
          status: "0",
        },
        {
          record_id: "166",
          record_name: "ORDER CONFIRMATION",
          status: "0",
        },
        {
          record_id: "110",
          record_name: "Packing",
          status: "0",
        },
        {
          record_id: "201",
          record_name: "PACKING LIST",
          status: "0",
        },
        {
          record_id: "204",
          record_name: "Packing List Created",
          status: "0",
        },
        {
          record_id: "136",
          record_name: "Paper Artwork",
          status: "0",
        },
        {
          record_id: "123",
          record_name: "Pattern Ready",
          status: "0",
        },
        {
          record_id: "260",
          record_name: "Pattern Received",
          status: "0",
        },
        {
          record_id: "277",
          record_name: "Payment confirmation from Vendor",
          status: "0",
        },
        {
          record_id: "220",
          record_name: "Payment Status",
          status: "0",
        },
        {
          record_id: "96",
          record_name: "PCD",
          status: "0",
        },
        {
          record_id: "285",
          record_name: "Pilot Go Live",
          status: "0",
        },
        {
          record_id: "271",
          record_name: "Pilot production",
          status: "0",
        },
        {
          record_id: "205",
          record_name: "PL and Inv  Approval",
          status: "0",
        },
        {
          record_id: "248",
          record_name: "PL and Inv Upload",
          status: "0",
        },
        {
          record_id: "304",
          record_name: "Planned Launch",
          status: "0",
        },
        {
          record_id: "199",
          record_name: "PO Accept date by Vendor",
          status: "0",
        },
        {
          record_id: "279",
          record_name: "PO acceptance",
          status: "0",
        },
        {
          record_id: "278",
          record_name: "PO from Customer",
          status: "0",
        },
        {
          record_id: "221",
          record_name: "PO Issuance",
          status: "0",
        },
        {
          record_id: "202",
          record_name: "PO Release to Vendor",
          status: "0",
        },
        {
          record_id: "175",
          record_name: "PP Approval",
          status: "0",
        },
        {
          record_id: "162",
          record_name: "PP Meeting Q",
          status: "0",
        },
        {
          record_id: "269",
          record_name: "PP sample Approval",
          status: "0",
        },
        {
          record_id: "125",
          record_name: "Print Strike Off",
          status: "0",
        },
        {
          record_id: "242",
          record_name: "Print Strike Off Q",
          status: "0",
        },
        {
          record_id: "247",
          record_name: "Product Team for Review Q",
          status: "0",
        },
        {
          record_id: "268",
          record_name: "Production Planning",
          status: "0",
        },
        {
          record_id: "281",
          record_name: "Project Kickoff",
          status: "0",
        },
        {
          record_id: "296",
          record_name: "proto",
          status: "0",
        },
        {
          record_id: "262",
          record_name: "Proto Approval",
          status: "0",
        },
        {
          record_id: "200",
          record_name: "PURCHASE ORDER",
          status: "0",
        },
        {
          record_id: "236",
          record_name: "Quality Ref Sample new factory",
          status: "0",
        },
        {
          record_id: "312",
          record_name: "ready for FI",
          status: "0",
        },
        {
          record_id: "141",
          record_name: "Sample Based Cost",
          status: "0",
        },
        {
          record_id: "230",
          record_name: "Sample Cutting",
          status: "0",
        },
        {
          record_id: "142",
          record_name: "SAMPLE DISPATCH",
          status: "0",
        },
        {
          record_id: "228",
          record_name: "Sample Handover to Brand",
          status: "0",
        },
        {
          record_id: "226",
          record_name: "Sample Inhouse",
          status: "0",
        },
        {
          record_id: "164",
          record_name: "SAMPLE ORDER PLACEMENT",
          status: "0",
        },
        {
          record_id: "231",
          record_name: "Sample Sewing",
          status: "0",
        },
        {
          record_id: "79",
          record_name: "Sealer Sample Q",
          status: "0",
        },
        {
          record_id: "170",
          record_name: "Sewing",
          status: "0",
        },
        {
          record_id: "245",
          record_name: "Shade Width Q",
          status: "0",
        },
        {
          record_id: "252",
          record_name: "Shipment Handover",
          status: "0",
        },
        {
          record_id: "229",
          record_name: "Shrinkage",
          status: "0",
        },
        {
          record_id: "263",
          record_name: "Sign Off Approval",
          status: "0",
        },
        {
          record_id: "237",
          record_name: "Size Set CSS Q",
          status: "0",
        },
        {
          record_id: "161",
          record_name: "Size Set Q",
          status: "0",
        },
        {
          record_id: "239",
          record_name: "Skein LabDip Deskloom Q",
          status: "0",
        },
        {
          record_id: "167",
          record_name: "SMS COMMENTS",
          status: "0",
        },
        {
          record_id: "165",
          record_name: "SMS IN HOUSE DATE",
          status: "0",
        },
        {
          record_id: "154",
          record_name: "Stitching",
          status: "0",
        },
        {
          record_id: "120",
          record_name: "Strike Off",
          status: "0",
        },
        {
          record_id: "246",
          record_name: "Style File Q",
          status: "0",
        },
        {
          record_id: "282",
          record_name: "System Study",
          status: "0",
        },
        {
          record_id: "163",
          record_name: "TECH PACK CREATION",
          status: "0",
        },
        {
          record_id: "292",
          record_name: "TEST001",
          status: "0",
        },
        {
          record_id: "307",
          record_name: "test1",
          status: "0",
        },
        {
          record_id: "308",
          record_name: "test123",
          status: "0",
        },
        {
          record_id: "310",
          record_name: "test17",
          status: "0",
        },
        {
          record_id: "311",
          record_name: "test18",
          status: "0",
        },
        {
          record_id: "313",
          record_name: "test25",
          status: "0",
        },
        {
          record_id: "309",
          record_name: "testapril1",
          status: "0",
        },
        {
          record_id: "241",
          record_name: "Thread Run Q",
          status: "0",
        },
        {
          record_id: "273",
          record_name: "Three way matching",
          status: "0",
        },
        {
          record_id: "253",
          record_name: "Treasury and Finance Duty Payment",
          status: "0",
        },
        {
          record_id: "77",
          record_name: "Trims Inhouse",
          status: "0",
        },
        {
          record_id: "284",
          record_name: "UAT",
          status: "0",
        },
        {
          record_id: "297",
          record_name: "Upload Buying Plan",
          status: "0",
        },
        {
          record_id: "299",
          record_name: "Upload design codes",
          status: "0",
        },
        {
          record_id: "298",
          record_name: "Upload dev plan",
          status: "0",
        },
        {
          record_id: "212",
          record_name: "Upload of BOE with Annexure 2",
          status: "0",
        },
        {
          record_id: "216",
          record_name: "Upload of Endorsed Annexure 2",
          status: "0",
        },
        {
          record_id: "215",
          record_name: "Upload of Endorsed Annexure 3",
          status: "0",
        },
        {
          record_id: "300",
          record_name: "upload sampling indent",
          status: "0",
        },
        {
          record_id: "256",
          record_name: "Value Addition Received from design",
          status: "0",
        },
        {
          record_id: "257",
          record_name: "Value Addition sent to T1",
          status: "0",
        },
        {
          record_id: "169",
          record_name: "vendor inspection",
          status: "0",
        },
        {
          record_id: "275",
          record_name: "Vendor Invoice Approval",
          status: "0",
        },
        {
          record_id: "272",
          record_name: "Vendor Invoice Submission",
          status: "0",
        },
        {
          record_id: "112",
          record_name: "Vessel Booking China",
          status: "0",
        },
        {
          record_id: "158",
          record_name: "Warehouse Inspection",
          status: "0",
        },
        {
          record_id: "127",
          record_name: "Wash Approval",
          status: "0",
        },
        {
          record_id: "244",
          record_name: "Wash Hand Feel Finish Q",
          status: "0",
        },
        {
          record_id: "232",
          record_name: "Wash Mock Approval",
          status: "0",
        },
        {
          record_id: "140",
          record_name: "WASH MOCK or OD",
          status: "0",
        },
        {
          record_id: "155",
          record_name: "Washing",
          status: "0",
        },
        {
          record_id: "270",
          record_name: "Wear Test",
          status: "0",
        },
        {
          record_id: "225",
          record_name: "Yardage Inhouse",
          status: "0",
        },
        {
          record_id: "234",
          record_name: "Yardage Ready",
          status: "0",
        },
        {
          record_id: "135",
          record_name: "Yarn Dip",
          status: "0",
        },
        {
          record_id: "73",
          record_name: "Yarn Inhouse",
          status: "0",
        },
        {
          record_id: "132",
          record_name: "Yarn or Fabric Order",
          status: "0",
        },
      ],
    },
    {
      filterName: "Sourcing Merchant",
      filterCode: "sourcingMerchant",
      filters: [
        {
          record_id: "778",
          record_name: "bk2sm@bluekaktus.com",
          status: "0",
        },
      ],
    },
    {
      filterName: "Fabric Merchant",
      filterCode: "fabricMerchant",
      filters: [],
    },
    {
      filterName: "FG Vendor",
      filterCode: "fgVendor",
      filters: [
        {
          record_id: "483",
          record_name: "sahu exports",
          status: "0",
        },
      ],
    },
    {
      filterName: "Regional Sourcing Merchant",
      filterCode: "regionalSourcingMerchant",
      filters: [],
    },
    {
      filterName: "Mill",
      filterCode: "mill",
      filters: [],
    },
    {
      filterName: "Type",
      filterCode: "type",
      filters: [
        {
          record_id: "C",
          record_name: "COMPLETE",
          status: "0",
        },
        {
          record_id: "O",
          record_name: "ONGOING",
          status: "0",
        },
        {
          record_id: "P",
          record_name: "PENDING",
          status: "0",
        },
        {
          record_id: "U",
          record_name: "UPCOMING",
          status: "0",
        },
      ],
    },
    {
      filterName: "Approve Status",
      filterCode: "approveStatus",
      filters: [
        {
          record_id: "A",
          record_name: "APPROVED",
          status: "0",
        },
        {
          record_id: "P",
          record_name: "PENDING",
          status: "0",
        },
        {
          record_id: "R",
          record_name: "REJECTED",
          status: "0",
        },
      ],
    },
    {
      filterName: "Vendor User",
      filterCode: "vendorUser",
      filters: [
        {
          record_id: "696",
          record_name: "Sahu Exports",
          status: "0",
        },
      ],
    },
    {
      filterName: "Mill User",
      filterCode: "millUser",
      filters: [
        {
          record_id: "0",
          record_name: "",
          status: "0",
        },
      ],
    },
  ],
};

export default App;
