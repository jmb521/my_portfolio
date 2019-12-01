const initialState = {
    posts: []
}


const posts = (state = initialState, action) => {
    
    switch(action.type) {
        case 'ADDPOSTS':
            console.log("inside reducer", {...state, posts:[...state.posts, action.posts]})
            return {
            ...state,  posts: action.posts}
        default: 
            return state;
    }
}
export default posts;