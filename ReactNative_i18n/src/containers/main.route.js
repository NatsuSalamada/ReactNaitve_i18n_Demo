import { createBottomTabNavigator } from 'react-navigation-tabs';

import CampingStackNavigator from "./camping/camping.route";
import SettingStackNavigator from "./setting/setting.route";

const routeConfig = {

    CampingStackNavigator:CampingStackNavigator,
    SettingStackNavigator: SettingStackNavigator

}

export default MainTabNavigator = createBottomTabNavigator(routeConfig)