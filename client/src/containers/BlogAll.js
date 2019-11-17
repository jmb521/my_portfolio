import React, {Component} from 'react'
import BlogPost from '../components/BlogPost.js'
class BlogAll extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

        fetchBlogs = () => {
            fetch("http://localhost:3001/blogs")
            .then(response => response.json())
            .then(response => this.setState({posts: response}))
        }

        componentDidMount() {
            this.fetchBlogs()
            
        }
    render() {
        console.log("state", this.state)
        return (
          <div>
              <BlogPost posts={this.state.posts} />
          </div>
        )
      }
}

export default BlogAll









