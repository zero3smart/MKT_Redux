import React from 'react';
import '../assets/stylesheets/components/HomePage.scss';
import MapPresentation from './MapPresentation';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'main-container'}>
        <MapPresentation />
      </div>
    );
  }
}

export default HomePage;
