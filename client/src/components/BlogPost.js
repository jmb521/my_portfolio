import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Paper from '@material-ui/core/Paper';

let BlogPost = (props) => {
    console.log("blogpost", props.title)
    return(
        
        <Paper>
        <div className="blog">
            {props.title}
            <br />
            <br />
            { ReactHtmlParser(props.content) }
        </div>
            </Paper>
        
        )
    }
    
    
    export default BlogPost