import React from 'react'
import ReactHtmlParser from 'react-html-parser';


let BlogPost = (props) => {
    console.log("blogpost", props)
    return(
        
        
        <div>
            {props.title}
            <br />
            <br />
            { ReactHtmlParser(props.content) }
        </div>
        
        
        )
    }
    BlogPost.defaultProps = {
        post:
            {
                title: "Placeholder", 
                content: "Placeholder Content"
            }
            
        
    }
    
    
    export default BlogPost