import React from 'react';
import '../assets/stylesheets/components/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container Landscape-Map-Layout-Copy">
        {this.props.children}
      </div>
    );
  }
}

export default App;
