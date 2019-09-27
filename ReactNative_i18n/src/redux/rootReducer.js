import { combineReducers } from "redux"

import { campingReducer } from "../containers/camping/reducers/camping.reducers";
import { settingReducer } from "../containers/setting/reducers/setting.reducers";

export default rootReducer = combineReducers({

    campingReducer: campingReducer,
    // settingReducer: settingReducer,

})