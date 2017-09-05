import React from 'react';
import MarketsList from './MarketsList';
import { connect } from 'react-redux';
import { fetchMarkets } from '../actions/marketsActions';

import '../assets/stylesheets/components/ExplorePage.scss';

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMarkets();
  }

  render() {
    return (
      <div>
        <h1>Markets List</h1>
        <MarketsList markets={this.props.markets} />
      </div>
    );
  }
}

ExplorePage.propTypes = {
  markets: React.PropTypes.array.isRequired,
  fetchMarkets: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    markets: state.markets
  }
}

export default connect(mapStateToProps, { fetchMarkets })(ExplorePage);
