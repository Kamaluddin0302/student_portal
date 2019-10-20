const ALL_STATE={
    login : false,
    allproduct : []
    }
    function reducer(state = ALL_STATE, action){
    switch(action.type){
    case "login" : 
    return {
    ...state, login : action.login
    }
    case 'allproduct' :
    return {
        ...state, allproduct : action.allproduct
    }
        }
        return state
    }
    export default reducer