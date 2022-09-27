const initialState = []

export const reducers = (state=initialState, action) => {
    if(action.type==='FILTERED')
    {
        if(action.clicked == "All")
        {
            return{
                state: action.data
            }
        }
       else{
        const updated = action.data.filter((e) => e.category === action.clicked)

        return (
            {
                state: updated
            }
        )   
    }
       }
    return state

}