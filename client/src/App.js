
import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import {getBlogPosts} from './actions/BlogActions.js'
import Home from './Home.js'
import LeftDrawer from './components/LeftDrawer'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BlogAll from './containers/BlogAll'
import ResourceAll from './containers/ResourceAll'
class App extends Component {

  componentDidMount() {
    this.props.getBlogPosts("http://localhost:3001/blogs")
}
	render() {
    console.log("app props", this.props)
        return (
          <div>
            <Router>
        
              <LeftDrawer />
              <Route exact path="/" component={Home} />
              <Route path="/blogs" component={BlogAll} />
              <Route path="/resources" component={ResourceAll} />
            </Router>
          </div>
        )
      }
}

let mapStateToProps = (state) => {
    
  return {
      posts: state.posts
  }
}
let mapDispatchToProps = {
  getBlogPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(App)