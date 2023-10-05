import React from 'react';
import { SliderComponent } from '../SliderComponent';
import ProjectData from '../../Projects/projectData';
import User from '../../User/User';
import ContributorProfile from '../../Contributors/ContributorProfile';
import ContributorGrid from '../../Contributors/ContributorGrid';

const Home = () => {
  return (
    <div>
      <section className='mb-5'>
        <marquee
          behavior="scroll"
          direction="left"
          className="bg-lime-300 text-white py-2"
        >
          <span className=" text-2xl uppercase font-extralight text-black p-2 rounded-full ">Open Source Projects</span>
        </marquee>
      </section>
      <SliderComponent />
      <ProjectData />

      <section>
            <User></User>
      </section>
      <section>
        <ContributorGrid/>
      </section>
    </div>
  );
};

export default Home;
