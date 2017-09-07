import React from 'react';

export default function CompanyCard({ company }) {
  return (
    <div>
      {company.name}
    </div>
  );
}

CompanyCard.propTypes = {
  company: React.PropTypes.object.isRequired
}