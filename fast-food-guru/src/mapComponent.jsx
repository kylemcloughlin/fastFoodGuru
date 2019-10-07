/* global google */
import React, {
  Component
} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MarkerModal from './markerModal.jsx'
// import SearchBar from './searchBar.jsx'
const mapStyles = {
  width: '50%',
  height: '50%',
};
class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      currentReview: null,
      modal: false
    }
  }
  handleMarkerModal = (review) => {
      this.setState({ modal: false, currentReview: review });
      
      console.log(review)
      this.setState({ modal: true });

  }

  componentDidMount() {
    this.setState({
      reviews: this.props.reviews
      })
      console.log(this.state.reviews)
    }
  componentWillReceiveProps(nextProps) {
  this.setState({
    reviews: nextProps.reviews
  });
}
  render() {
    return (
     <div className="map-wrapper">

     <div className="map-div">
 
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 43.651070, lng: -79.347015 }}
        > 
        {this.state.reviews.map (review => {
          return (<Marker position={new google.maps.LatLng(review.lat, review.lng)} onClick={this.handleMarkerModal.bind(this, review)}/> )
        })
      }
        </Map>
        </div>
        {this.state.modal ? (
          <MarkerModal
          modalIsOpen={this.state.modal} modalIsClosed={() => {this.setState({modal: false})}} review={this.state.currentReview}/>
          ) : (
            <h1></h1>
            )}
            </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyDSZy_muaB5hzAf8NYwyuM3JCj0AT2tH4s'
})(MapComponent);


/**
 *     {this.state.parks.map(park => {
              return (<Marker className="markers" Name={park.name} position={new google.maps.LatLng(park.lat, park.long)}
                onClick={this.handleModal.bind(this, park)}
                />)
            })}
 *
*/