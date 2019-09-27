initialCampingState = {

}

export const campingReducer = (state = initialCampingState, action) => {

    const {type, payload} = action

    switch (type) {
    
        default:
            return {
                ...state
            }
    }

}