import React from 'react';
import '../assets/stylesheets/components/HomePage.scss';
import MapPresentation from './MapPresentation';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

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
