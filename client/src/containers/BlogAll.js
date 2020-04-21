import React, {Component} from 'react'
import {connect} from 'react-redux'
// import BlogList from '../components/BlogListDetails.js'
import BlogTitleAndDate from '../components/BlogTitleAndDate.js'
import Paper from '@material-ui/core/Paper';
class BlogAll extends Component {
  
   
    render() {
       
        let individualPost = this.props.posts.map(post => {
            return(<BlogTitleAndDate post={post} key={post.id}/>)
        })
        return (
        <Paper>
          <div className="rightside">
             {individualPost}
          </div>
        </Paper>
        )
      }
}

const mapStateToProps = (state) => {
    console.log("state within the mapStateToProps in BlogAll", state)
    return {posts: state.posts}
}

export default connect(mapStateToProps, null, null)(BlogAll)









