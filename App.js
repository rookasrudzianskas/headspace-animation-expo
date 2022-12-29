"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Examples_1 = require("./src/Examples");
var Headspace_1 = require("./src/Headspace");
var components_1 = require("./src/components");
var fonts = {};
var assets = [];
var Stack = stack_1.createStackNavigator();
var AppNavigator = function () { return (<Stack.Navigator>
    <Stack.Screen name="Examples" component={Examples_1.Examples} options={{
        title: "Can it be done in React Native?",
    }}/>
    <Stack.Screen name="Headspace" component={Headspace_1.Headspace} options={{
        title: "🟠 Headspace",
        headerShown: false,
    }}/>
  </Stack.Navigator>); };
var App = function () {
    return (<components_1.LoadAssets assets={assets} fonts={fonts}>
      <AppNavigator />
    </components_1.LoadAssets>);
};
// eslint-disable-next-line import/no-default-export
exports["default"] = App;
