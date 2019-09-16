/* global google */
import React, {
  Component
} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import SearchBar from './searchBar.jsx'
const mapStyles = {
  width: '50%',
  height: '50%',
};
class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.setState({
      reviews: this.props.reviews
      })
  }
  render() {
    return (
      <div>
 
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 43.651070, lng: -79.347015 }}
        > 
        {this.state.reviews.map (review => {
         return ( <Marker position={new google.maps.LatLng(review.lat, review.lng)}/> )
        })

        }
        </Map>
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