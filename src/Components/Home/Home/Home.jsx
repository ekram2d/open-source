import React from 'react';
import { SliderComponent } from '../SliderComponent';
import ProjectData from '../../Projects/projectData';
import User from '../../User/User';

import ContributorGrid from '../../Contributors/ContributorGrid';
import RocketCompany from '../../Rousorces/RocketCompany';
import DragonList from '../../Rousorces/DragonList ';


const Home = () => {
  return (
    <div>
      {/* <section className='mb-5'>
        <marquee
          behavior="scroll"
          direction="left"
          className=" text-white py-2"
        >
          <span className=" text-2xl uppercase font-extralight text-black p-2 rounded-full ">Open Source Projects</span>
        </marquee>
      </section> */}
      <SliderComponent />
      <ProjectData />

      <section>
            <User></User>
      </section>
      <section>
        <ContributorGrid/>
      </section>

      <section>
        <RocketCompany></RocketCompany>
      </section>

      <section>
        <DragonList></DragonList>
      </section>
    </div>
  );
};

export default Home;
