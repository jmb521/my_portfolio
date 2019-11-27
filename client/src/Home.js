import React, {Component} from 'react';
import LeftDrawer from './components/LeftDrawer.js'
import addNewPosts from './actions/BlogActions.js'
import {connect} from 'react-redux'

class Home extends Component {
    // constructor(props) {
    //     super(props)
        // this.state = {
        //     posts: []
        // }
    // }
    
    fetchBlogs = () => {
        fetch("http://localhost:3001/blogs")
        .then(response => response.json())
        // .then(response => this.setState({posts: response}))
        
        .then(response => this.props.addNewPosts(response))
        
    }
   

    
    componentDidMount() {
        this.fetchBlogs()
        console.log('fetched')
    }
    
	render() {
       
        return (
            
        <div>
        <LeftDrawer />
        
      </div>    
  );
}
}
// let mapStateToProps = (state) => {
//     return {
//         posts: state
//     }
// }

// let mapDispatchToProps = () => {

// }

export default connect(null, {addNewPosts} ) (Home)
