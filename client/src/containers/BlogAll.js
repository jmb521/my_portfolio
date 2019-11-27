import React, {Component} from 'react'
import BlogList from '../components/BlogListDetails.js'

class BlogAll extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
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









