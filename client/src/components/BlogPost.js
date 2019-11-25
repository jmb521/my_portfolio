import React from 'react'
import ReactHtmlParser from 'react-html-parser';


let BlogPost = (props) => {
    console.log("props.posts", props.posts)
    let blogPosts = props.posts.map(post => {
        return(

        <div className="blog">
            {post.title}
            <br />
            { ReactHtmlParser(post.content) }
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