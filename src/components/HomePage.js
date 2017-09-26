import React from 'react';
import '../assets/stylesheets/components/MapPresentation.scss';
import MapPresentation from './MapPresentation';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <MapPresentation />
      </div>
    );
  }
}

export default HomePage;
