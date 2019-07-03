import React, { Component } from "react";
import { Dropdown } from "react-native-material-dropdown";
import { StyleSheet, Text, View } from "react-native";

class Dropbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redParking: props.parking[0],
      greenParking: props.parking[1],
      blueParking: props.parking[2],
      yellowParking: props.parking[3]
    };
  }

  render() {
    let data = [
      {
        value: this.state.redParking
      },
      {
        value: this.state.greenParking
      },
      {
        value: this.state.blueParking
      },
      {
        value: this.state.yellowParking
      }
    ];

    return (
      <View style={styles.container}>
        <Dropdown label="אתה חונה ב" data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  menuStyle: {
    width: 200,
    height: 300
  }
});

export default Dropbox;
