import React from 'react'
import styles from './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

/*
// ES5 equivalent
var App = React.createClass({
  render: function() {
    return (
      <div>I'm an app</div>
    )
  }
})

module.exports = App;
*/

