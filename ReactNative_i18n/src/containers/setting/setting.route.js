import { createStackNavigator } from 'react-navigation-stack';

import SettingScreen from "./SettingScreen";

const routeConfig = {
    SettingScreen: SettingScreen
}

const stackConfig = {
    initialRouteParams: 'SettingScreen',
    headerMode: 'none',
}

export default SettingStackNavigator = createStackNavigator(routeConfig,stackConfig)