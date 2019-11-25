import React, {Component} from 'react'
import BlogPost from './components/BlogPost.js'
class BlogShow extends Component {
    // constructor() {
    //     super()
    // }
	render() {
        return (
          <BlogPost title={this.state.title} content={this.state.content} created_at={this.state.created_at} />
        )
      }
}

export default BlogShow