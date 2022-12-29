import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Examples } from "./src/Examples";
import { Headspace } from "./src/Headspace";
import { LoadAssets } from "./src/components";

const fonts = {};
const assets = [];
const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Examples"
      component={Examples}
      options={{
        title: "Can it be done in React Native?",
      }}
    />
    <Stack.Screen
      name="Headspace"
      component={Headspace}
      options={{
        title: "🟠 Headspace",
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <AppNavigator />
    </LoadAssets>
  );
};

export default App;
