import React, {Component} from 'react';

import {connect} from 'react-redux'
import MostRecent from './components/MostRecentBlogPost.js'
import Paper from '@material-ui/core/Paper';

class Home extends Component {
    
   
    
	render() {
        console.log("this.props inside home", this.props)
       
        return (
            <Paper>
            <div className="rightside">
            
            <MostRecent lastPost={this.props.posts[this.props.posts.length-1]}/>
            </div> 
            </Paper>   
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

export default connect(mapStateToProps) (Home)
