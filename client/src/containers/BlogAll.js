import React, {Component} from 'react'
import BlogList from '../components/BlogListDetails.js'

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
        let List = this.state.posts.map(post => {
            return <BlogList post={post} />
        })
        return (
          <div>
             {List}
          </div>
        )
      }
}

export default BlogAll









