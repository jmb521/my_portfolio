function addNewPosts(posts){
    console.log("posts from within the action", posts)
    return {
        type: "ADDPOSTS",
        posts
    }
}
export default addNewPosts