import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_Rocket_Company } from '../../Graphql/QueryAll/GraphqlQuery';

const RocketCompany = () => {
  const { loading, error, data } = useQuery(GET_Rocket_Company);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const company = data.company;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <CardItem label="Name" value={company.name} />
        <CardItem label="CEO" value={company.ceo} />
        <CardItem label="CTO" value={company.cto} />
        <CardItem label="CTO Propulsion" value={company.cto_propulsion} />
        <CardItem label="Employees" value={company.employees} />
        <CardItem label="Founded" value={company.founded} />
        <CardItem label="Founder" value={company.founder} />
        <CardItem
          label="Headquarters Address"
          value={`${company.headquarters.address}, ${company.headquarters.city}, ${company.headquarters.state}`}
        />
        <CardItem label="Launch Sites" value={company.launch_sites} />
        <CardItem label="Elon Twitter" value={company.links.elon_twitter} link={company.links.elon_twitter} />
        <CardItem label="Flickr" value={company.links.flickr} link={company.links.flickr} />
        <CardItem label="Twitter" value={company.links.twitter} link={company.links.twitter} />
        <CardItem label="Website" value={company.links.website} link={company.links.website} />
        <CardItem label="Summary" value={company.summary} colSpan={2} />
        <CardItem label="Test Sites" value={company.test_sites} />
        <CardItem label="Valuation" value={company.valuation} />
        <CardItem label="Vehicles" value={company.vehicles} />
      </div>
    </div>
  );
};

const CardItem = ({ label, value, colSpan = 1, link }) => {
  const isLink = !!link;

  return (
    <div className={`col-span-${colSpan}`}>
      <p className="text-gray-600 mb-1">{label}</p>
      {isLink ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 hover:underline">
          {value}
        </a>
      ) : (
        <p className="font-semibold">{value}</p>
      )}
    </div>
  );
};

export default RocketCompany;
