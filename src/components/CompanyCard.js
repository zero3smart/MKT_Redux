import React from 'react';

class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui items segment">
        <div className="item">
          <div className="image">
            <img src="/images/wireframe/image.png" />
          </div>
          <div className="content">
            <a className="header">Header</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              Additional Details
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