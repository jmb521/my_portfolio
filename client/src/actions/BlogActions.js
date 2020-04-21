export function addNewPosts(posts){
    console.log("posts from within the action", posts)
    return {
        type: "ADDPOSTS",
        posts
    }
}
// export default addNewPosts

export function getBlogPosts(url) {
    return (dispatch) => {
        fetch(url)
        .then(response => response.json())
        .then(response => dispatch(addNewPosts(response)))
    }
}








    