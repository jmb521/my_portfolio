import React, {Component} from 'react';
import LeftDrawer from './components/LeftDrawer.js'
import addNewPosts from './actions/BlogActions.js'
import {connect} from 'react-redux'
import MostRecent from './components/MostRecentBlogPost.js'
class Home extends Component {
  

    
    fetchBlogs = () => {
        fetch("http://localhost:3001/blogs")
        .then(response => response.json())
        .then(response => this.props.addNewPosts(response))
    }
    
    componentDidMount() {
        this.fetchBlogs()
        
    }
    
	render() {
       
        return (
            
            <div>
            <LeftDrawer />
            <MostRecent lastPost={this.props.posts[this.props.posts.length-1]}/>
            </div>    
        );
    }
}
let mapStateToProps = (state) => {
    
    return {
        posts: state.posts
    }
}

Home.defaultProps = {
    posts: [
        {
            title: "Placeholder", 
            content: "Placeholder Content"
        }
        
    ]
}

export default connect(mapStateToProps, {addNewPosts}) (Home)
