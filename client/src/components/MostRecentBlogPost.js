import React from 'react'
import BlogPost from './BlogPost.js'

    let MostRecent = (props) => {
	
        console.log("props from most recent", props.lastPost.title)
        return (
          <div>
            <BlogPost title={props.lastPost.title} content={props.lastPost.content}/>
          </div>
        )
      
    }
    
    
export default MostRecent

MostRecent.defaultProps = {
  lastPost:
    {
      title: "", 
      content: ""
    }

}


