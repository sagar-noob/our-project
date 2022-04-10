import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Index extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        this is home
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Index;
