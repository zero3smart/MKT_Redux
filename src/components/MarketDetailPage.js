import React from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import CompanyCard from './CompanyCard';
import { fetchCompanies } from '../actions/marketsActions';

class MarketDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanies(this.props.market.url);
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
  market: React.PropTypes.array.isRequired,
  companies: React.PropTypes.array.isRequired
}

function mapStateToProps(state, props) {
  if (props.params.slug) {
    return {
      market: state.markets.find(item => item.slug === props.params.slug),
      companies: state.companies
    };
  }
}

export default connect(mapStateToProps, { fetchCompanies })(MarketDetailPage);
