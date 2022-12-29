"use strict";
exports.__esModule = true;
exports.Examples = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var examples = [
    {
        screen: "Headspace",
        title: "🟠 Headspace",
    },
];
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
    },
    content: {
        paddingBottom: 32,
    },
    thumbnail: {
        backgroundColor: "white",
        padding: 16,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderColor: "#f2f2f2",
    },
    title: {
        fontSize: 17,
        lineHeight: 22,
    },
});
var Examples = function () {
    var navigate = native_1.useNavigation().navigate;
    return (<react_native_1.ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map(function (thumbnail) { return (<react_native_gesture_handler_1.RectButton key={thumbnail.screen} onPress={function () { return navigate(thumbnail.screen); }}>
          <react_native_1.View style={styles.thumbnail}>
            <react_native_1.Text style={styles.title}>{thumbnail.title}</react_native_1.Text>
          </react_native_1.View>
        </react_native_gesture_handler_1.RectButton>); })}
    </react_native_1.ScrollView>);
};
exports.Examples = Examples;
