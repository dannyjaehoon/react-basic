import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { action: '' }
    console.log('1 - constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2 - getDerivedStateFromProps');
    if (state.action === '') {
      return {
        action: 'Milhile'
      }
    }
    return null
  }

  componentDidMount() {
    console.log('4 - componentDidMount');
  }
  
  componentWillUnmount() {
    console.log('5 - componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('6 - shouldComponentUpdate');
    console.log(nextState);
    console.log(this.state);

    if(nextState.name !== 'Ron') {
      return true;
    }
    return false;
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    let age = 20;
    return age;
  }

  
  componentDidUpdate(prevProps, nextState, snapshot) {
    console.log(snapshot);
    console.log('7 - componentDidMount');
  }
  render() {
    console.log('3 - render');
    return(
      <>
        {this.state.action}
        <div onClick={() => this.setState({action: 'Ron'})}>
          change name
        </div>
      </>
    )
  }
}

export default Life;