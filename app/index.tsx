/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import { YellowBox } from "react-native";
import Props from './screens/Props';
import ShapesByProps from './screens/ShapesByProps';
import ShapesByMethods from './screens/ShapesByMethods';

const AppNavigator = createStackNavigator({
  Home,
  Props,
  ShapesByProps,
  ShapesByMethods
});

export default createAppContainer(AppNavigator);

YellowBox.ignoreWarnings([
  'Remote debugger is in a background tab which may cause apps to perform slowly'
]);
