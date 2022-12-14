import React from 'react';
import CardComponent from '../components/CardComponent';
import './Home.css';
// import Slider from '../components/Slider';
import workData1 from '../data/workData1.json';
import workData2 from '../data/workData2.json';
import workData3 from '../data/workData3.json';
import toyData1 from '../data/toyData1.json';
import toyData2 from '../data/toyData2.json';
import banner from '../images/main-banner-1.jpg'

const Home = () => {

  return (
    <main>
        {/* <Slider /> */}
        <div className="banner-container">
        <img src={banner} alt="banner" className="banner" />
        </div>
        <section className="content-section">
          <CardComponent contentData={workData1} type="work"/>
          <CardComponent contentData={workData2} type="work"/>
          <CardComponent contentData={workData3} type="work"/>
          <CardComponent contentData={toyData1} type="toy"/>
          <CardComponent contentData={toyData2} type="toy"/>
        </section>
    </main>
  )
}

export default Home;
