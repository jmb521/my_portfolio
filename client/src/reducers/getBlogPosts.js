const initialState = {
    posts: []
}


const posts = (state = initialState, action) => {
    
    switch(action.type) {
        case 'ADDPOSTS':
            return {
            ...state, posts: [...state.posts, action.posts]}
        default: 
            return state;
    }
}
export default posts;