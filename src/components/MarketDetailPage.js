import React from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import CompanyCard from './CompanyCard';
import bluebird from 'bluebird';
import { fetchCompanies, fetchMarkets } from '../actions/marketsActions';

class MarketDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.props.fetchMarkets());
    });

    promise.then((res) => {
      const market = this.props.markets.find(item => item.slug === this.props.params.slug);
      this.props.fetchCompanies(market.url);
    }, err => {

    });
  }

  render() {
    const { companies } = this.props;

    const companiesList = (
      <div className="">
        { companies.map(company => <CompanyCard key={company.id} company={company} />) }
      </div>
    );

    const emptyMessage = (
      <p>There are no markets yet in your collection</p>
    );

    return (
      <div>
        <IndexLink to='/explore' activeClassName="active" className="btn btn-primary">back to list</IndexLink>
        {companies.length === 0 ? emptyMessage : companiesList}
      </div>
    );
  }
}

MarketDetailPage.propTypes = {
  // market: React.PropTypes.object.isRequired,
  markets: React.PropTypes.array.isRequired,
  companies: React.PropTypes.array.isRequired
}

function mapStateToProps(state, props) {
  if (props.params.slug) {
    return {
      markets: state.markets,
      // market: state.markets.find(item => item.slug === props.params.slug),
      companies: state.companies
    };
  }
}

export default connect(mapStateToProps, { fetchCompanies, fetchMarkets })(MarketDetailPage);
