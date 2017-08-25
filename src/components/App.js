import React from 'react';
import '../assets/stylesheets/components/App.scss';
import NavigationBar from './NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div className="container Landscape-Map-Layout-Copy">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
