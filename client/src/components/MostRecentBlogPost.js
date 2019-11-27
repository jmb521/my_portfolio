import React, {Component} from 'react'
import {connect} from 'react-redux'
class MostRecent extends Component {
	render() {
        return (
          
        )
      }
}

let mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps) (MostRecent)

