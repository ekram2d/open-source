import React from 'react';
import ContributorProfile from './ContributorProfile';
import Card from '../Card/Card';

const contributors = [
      {
            name: 'John Doe',
            profilePicture: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
            country: 'United States',
            linkedinId: 'johndoe',
            facebookId: 'johndoefb',
      },
      {
            name: 'Alice Smith',
            profilePicture: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
            country: 'Canada',
            linkedinId: 'alicesmith',
            facebookId: 'alicesmithfb',
      },
      {
            name: 'Bob Johnson',
            profilePicture: 'https://example.com/bob-johnson.jpg',
            country: 'United Kingdom',
            linkedinId: 'bobjohnson',
            facebookId: 'bobjohnsonfb',
      },
      {
            name: 'Emily Wilson',
            profilePicture: 'https://example.com/emily-wilson.jpg',
            country: 'Australia',
            linkedinId: 'emilywilson',
            facebookId: 'emilywilsonfb',
      },
      {
            name: 'David Lee',
            profilePicture: 'https://example.com/david-lee.jpg',
            country: 'South Korea',
            linkedinId: 'davidlee',
            facebookId: 'davidleefb',
      },
      {
            name: 'Sophia Kim',
            profilePicture: 'https://example.com/sophia-kim.jpg',
            country: 'Japan',
            linkedinId: 'sophiakim',
            facebookId: 'sophiakimfb',
      },
      {
            name: 'Michael Brown',
            profilePicture: 'https://example.com/michael-brown.jpg',
            country: 'Germany',
            linkedinId: 'michaelbrown',
            facebookId: 'michaelbrownfb',
      },
      {
            name: 'Olivia Davis',
            profilePicture: 'https://example.com/olivia-davis.jpg',
            country: 'France',
            linkedinId: 'oliviadavis',
            facebookId: 'oliviadavisfb',
      },
      {
            name: 'William Taylor',
            profilePicture: 'https://example.com/william-taylor.jpg',
            country: 'Spain',
            linkedinId: 'williamtaylor',
            facebookId: 'williamtaylorfb',
      },
      {
            name: 'Ava Martinez',
            profilePicture: 'https://example.com/ava-martinez.jpg',
            country: 'Italy',
            linkedinId: 'avamartinez',
            facebookId: 'avamartinezfb',
      },
];
// console.log(contributors)
const ContributorGrid = () => {
      return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {contributors?.map((contributor, index) => (
                        <>
                        {/* <Card></Card> */}
                           
                              <ContributorProfile key={index} contributor={contributor} />
                        </>

                  ))}
            </div>
      );
};

export default ContributorGrid;
