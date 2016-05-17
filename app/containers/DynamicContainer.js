import React from 'react'

export default function DynamicContainer (props) {
  return (
    <div>
      <h2>{props.params.id}</h2>
    </div>
  )
}

/*
//ES6 Class equivalent
export default class DynamicContainer extends React.Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    );
  }
}
/**/