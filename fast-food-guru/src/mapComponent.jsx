import React, {
  Component
} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import SearchBar from './searchBar.jsx'
const mapStyles = {
  width: '50%',
  height: '50%',
};
class MapComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <SearchBar/>
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 43.651070, lng: -79.347015 }}
        />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyDSZy_muaB5hzAf8NYwyuM3JCj0AT2tH4s'
})(MapComponent);