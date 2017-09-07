import React from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';

class MarketDetailPage extends React.Component {

  render() {
    const companies = this.props.markets.map(company =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );

    return (
      <div>
        <IndexLink to='/explore' activeClassName="active" className="btn btn-primary">back to list</IndexLink>
      </div>
    );
  }
}

MarketDetailPage.propTypes = {
  markets: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    markets: state.markets
  };
}

export default connect(mapStateToProps)(MarketDetailPage);
