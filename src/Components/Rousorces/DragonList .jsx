import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_Rocket_dragons } from '../../Graphql/QueryAll/GraphqlQuery';

const DragonList = () => {
  const { loading, error, data } = useQuery(GET_Rocket_dragons);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dragons = data.dragons;

  return (
    <div>
      <h2>Dragon List</h2>
      {dragons.map((dragon) => (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4" key={dragon.id}>
          <h3 className="text-xl font-semibold mb-2">{dragon.name}</h3>
          <p className="text-gray-600 mb-4">{dragon.description}</p>
          <div className="grid grid-cols-2 gap-2">
            <CardItem label="Crew Capacity" value={dragon.crew_capacity} />
            <CardItem label="Active" value={dragon.active ? 'Yes' : 'No'} />
            <CardItem label="Diameter (feet)" value={dragon.diameter.feet} />
            <CardItem label="Diameter (meters)" value={dragon.diameter.meters} />
            {/* Add more fields as needed */}
          </div>
          <div className="mt-4">
            <a
              href={dragon.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              Wikipedia
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-gray-600 mb-1">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default DragonList;
