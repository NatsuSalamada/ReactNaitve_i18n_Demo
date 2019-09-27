import { createStackNavigator } from 'react-navigation-stack';

import CampingScreen from "./CampingScreen";
import SettingScreen from "../setting/SettingScreen";
const routeConfig = {
    // CampingScreen: CampingScreen,
    SettingScreen:SettingScreen
}

const stackConfig = {
    // initialRouteParams: 'SettingScreen',
    headerMode: 'none',
}

export default CampingStackNavigator = createStackNavigator(routeConfig,stackConfig)