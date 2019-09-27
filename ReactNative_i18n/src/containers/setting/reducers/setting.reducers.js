initialSettingState = {

}

export default settingReducer = (state = initialSettingState, action) => {

    const {type, payload} = action

    switch (type) {
        
        default:
            return {
                ...state
            }
    }

}