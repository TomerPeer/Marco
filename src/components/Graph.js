import React from "react";
import { View, Text } from "react-native";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redParkingSpaces: props.parkingSpaces[0],
      greenParkingSpaces: props.parkingSpaces[1],
      blueParkingSpaces: props.parkingSpaces[2],
      yellowParkingSpaces: props.parkingSpaces[3]
    };
  }

  render() {
    return (
      <View>
        <View style={styles.containerStyle}>
          <View style={[styles.square, styles.redSide]}>
            <Text style={[styles.textStyle, styles.redText]}> {this.state.redParkingSpaces}</Text>
          </View>
          <View style={[styles.square, styles.greenSide]}>
            <Text style={[styles.textStyle, styles.greenText]}> {this.state.greenParkingSpaces}</Text>
          </View>
        </View>
        <View style={styles.containerStyle}>
          <View style={[styles.square, styles.blueSide]}>
            <Text style={[styles.textStyle, styles.blueText]}> {this.state.blueParkingSpaces}</Text>
          </View>
          <View style={[styles.square, styles.yellowSide]}>
            <Text style={[styles.textStyle, styles.yellowText]}> {this.state.yellowParkingSpaces}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
  redText: { color: "#E21B3C" },
  yellowText: { color: "#FFC00A" },
  blueText: { color: "#1268CE" },
  greenText: { color: "#26890A" },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    borderStyle: "solid",
    border: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  redSide: {
    borderLeftColor: "#E21B3C",
    borderRightColor: "transparent",
    borderTopColor: "#E21B3C",
    borderBottomColor: "transparent"
  },
  yellowSide: {
    borderLeftColor: "transparent",
    borderRightColor: "#FFC00A",
    borderTopColor: "transparent",
    borderBottomColor: "#FFC00A"
  },
  blueSide: {
    borderLeftColor: "#1268CE",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "#1268CE"
  },
  greenSide: {
    borderLeftColor: "transparent",
    borderRightColor: "#26890A",
    borderTopColor: "#26890A",
    borderBottomColor: "transparent"
  }
};

export default Graph;
