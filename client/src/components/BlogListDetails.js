import React from 'react'
import moment from 'moment'
let BlogList = (props) => {
        let time = moment(props.post.created_at).format("MMMM Do YYYY")

        console.log("props", props)
        return(
            <div>
               <p> {props.post.title}</p>
               <p>{time}</p>

            </div>
        )
    
}
export default BlogList