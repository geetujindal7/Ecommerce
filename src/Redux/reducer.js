const initialState = {
    data: [],
}

export const reducers = (state=initialState, action) => {
    if(action.type==='FILTERED')
    {
        if(action.clicked === "All")
        {
            return{
                data: action.data,
            }
        }
       else{
        const update = action.data.filter((e) => e.category === action.clicked)
        return (
            {
                data: update,
            }
        )   
    }
       }
    //    else if(action.type === "LH")
    //    {
    //        let newList = [...state.data]
    //     newList.push(action.id.sort((a, b) => a.price - b.price));
    //     return newList
    //     //   console.log(a)
    //    }
    //    else if(action.type === "HL")
    //    {
    //     let newLis = [...state.data]
    //     newLis.push(action.id.sort((a, b) => a.price - b.price));
         
    //     return newLis
            
    //     }
    //     //   console.log(a)
       
    return state

}