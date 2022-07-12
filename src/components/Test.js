import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            a:10
        }
        console.log("consturctor");
    }
    componentDidMount = () => {
      console.log("mount wedildi");
      this.setState({
        a:20
    })
    }
    componentDidUpdate = (prevProps, prevState) => {
      console.log("component did update");
    }
    //component update dilsin mi için çlaışıyor ama kullanma bunu
    /*
    shouldComponentUpdate = (nextProps, nextState) => {
      return false;
    }*/
    
    
  render() {
    console.log("render ediliyor");
    /*
    this.setState({
        a:20
    })*/
    return (
      <div>
        
      </div>
    )
  }
}
