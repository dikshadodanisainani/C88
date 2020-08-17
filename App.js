import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "./screens/WelcomeScreen";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { AppTabNavigator } from "./components/AppTabNavigator";
 console.disableYellowBox=true;
export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator }
});

const AppContainer = createAppContainer(switchNavigator);
