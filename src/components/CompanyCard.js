import React from 'react';
import '../assets/stylesheets/components/CompanyCard.scss';

class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company } = this.props;
    let website = company.website.substring(8);
    return (
      <div className="ui items segment">
        <div className="item">
          <div className="image">
            <img src={company.imageSrc} alt="Company Logo" />
          </div>
          <div className="content">
            <a className="header">{company.name}</a>
            <p>{website}</p>
            <div className="meta">
              <span>{company.description}</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              <div className="ui label">
                <i className="fa fa-flag" aria-hidden="true"></i>
                <p>{company.geo.city}<br />{company.geo.stateCode},{company.geo.countryCode}</p>
              </div>
              <div className="ui label">
                <i className="fa fa-star" aria-hidden="true"></i>
                <p>{company.foundedYear}<br />founded</p>
              </div>
              <div className="ui label">
                <i className="fa fa-users" aria-hidden="true"></i>
                <p>{company.metrics.employees}<br />employees</p>
              </div>
              <div className="ui label">
                <img src={company.addedToMarketBy.imageSrc} alt="Avatar" width="20" />
                <p>Added by<br />{company.addedToMarketBy.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CompanyCard.propTypes = {
  company: React.PropTypes.object.isRequired
}

export default CompanyCard;