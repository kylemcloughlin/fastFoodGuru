import React, { Component } from 'react';

class TopFive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: props.reviews,
      nums: [0,1,2,3,4]
    }
  }
  componentDidMount() {
    console.log(this.state.reviews)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      reviews: nextProps.reviews
    });
  }
  render() {
    return (
      <div className="top-five">
     <div id="title-holder-topfive">
     <h3>Top Five restaurants by average:</h3>
      </div>
      <div className="top-5-container">

       {this.state.nums.map(number => {
         return (
           <div key={number} className="top-five-buttons">
           <label>{this.state.reviews[number].restaurant}: </label>  
           <span> {this.state.reviews[number].average} </span>
          </div>
           )
          })
          
        }
        </div>
      </div>
    )
  }
}

export default TopFive;