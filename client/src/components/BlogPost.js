import React from 'react'


let BlogPost = (props) => {
    console.log("props", props)
    let blogPosts = props.posts.map(post => {
        return(

        <div class="blog">
            {post.title}
            <br />
            {post.content}
            <br />
            <hr />
        </div>
        )
    })
    return(
        <div>{blogPosts}</div>
    )
}
export default BlogPost