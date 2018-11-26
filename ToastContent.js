import React, {Component} from "react";
import { StyleSheet, Easing, Dimensions, Text, Animated } from "react-native";

const {width, height} = Dimensions.get("window");

class ToastContent extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
        message: this.props.message || "",
        time: this.props.time === 0 ? 0 : 3
    };
    this.move = new Animated.Value(0);
    this.opacity = new Animated.Value(this.props.opacity || 0);
    this.dismissHandler = null;
  }
  static getDerivedStateFromProps(nextProps) {
    return {
        message: nextProps.message || "",
        time: nextProps.time === 0 ? 0 : 3
    };
  }
  componentDidMount() {
    Animated.timing(this.move, {
      toValue: height / 8,
      duration: 80,
      easing: Easing.ease
    }).start(this.timingDismiss.bind(this));
    Animated.timing(this.opacity, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear
    }).start();
  }
  timingDismiss() {
    if (this.state.time === 0) {
      return;
    }
    this.dismissHandler = setTimeout(() => {
      this.dismiss();
    }, this.state.time * 1000);
  }
  dismiss() {
    Animated.timing(this.opacity, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear
    }).start(this.onDismiss.bind(this));
  }
  onDismiss() {
    if (typeof this.props.onClose === "function") {
      this.props.onClose();
    }
    if (typeof this.props.onDismiss === "function") {
      this.props.onDismiss();
    }
  }
  componentWillUnmount() {
    if (this.dismissHandler) {
      clearTimeout(this.dismissHandler);
      this.dismissHandler = null;
    }
  }
  render() {
    return (
      <Animated.View style={[styles.container, {
        bottom: this.move, opacity: this.opacity}]}>
        <Text style={styles.toastText}>
          {this.state.message}
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    minWidth: 114,
    maxWidth: width * 0.8,
    minHeight: 37,
    backgroundColor: "#4F4F4F",
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 13,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  toastText: {
    fontSize: 12,
    color: "#FFFFFF"
  }
});

export default ToastContent;