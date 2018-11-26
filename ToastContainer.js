import React, { Component } from "react";
import {AppRegistry, View, StyleSheet} from "react-native";

let toastContainer = null;

class ToastContainer extends Component {
  constructor(...args) {
    super(...args);
      toastContainer = this;
      this.state = {
        toast: null
      };
  }
  static setView(component) {
    toastContainer.setState({toast: component});
  }
  render() {
    return (
      <View style={styles.toastView} pointerEvents="box-none">
        {this.state.toast}
      </View>
    );
  }
}

const originRegister = AppRegistry.registerComponent;

AppRegistry.registerComponent = (appKey, component) => {
  return originRegister(appKey, function () {
    const OriginAppComponent = component();
    return class extends Component {
      render() {
        return (
          <View style={styles.container}>
            <OriginAppComponent/>
            <ToastContainer />
          </View>
        );
      };
    };
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  toastView: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
  }
});

export default ToastContainer;