import React from 'react'
import './Project.css';
import netflixlogo from '../src/assets/object.jpg';
import ProjectContainer from './common/ProjectContainer';
import forestfiree from './assets/stock.jpg'
import Covid19 from './assets/heart.jpg';
import house from './assets/watch.jpg';
function Project() {
  return (
    <section>
      <span className="HE"><h1>PROJECTS</h1></span><br></br>
      <div className='container'>
      <div className='ProjectContainer'>
      <ProjectContainer link="https://github.com/Yogesh0925/Realtime-object-detection/tree/main" src={netflixlogo} 
      h3="Object detection" p="Machine learning"/> </div> 
      <div className='ProjectContainer'><ProjectContainer link="https://github.com/Yogesh0925/Stock-market-anomalies-detection" src={forestfiree}  
      h3="Stock market anomalies" p="Data science"/> </div>
      <div className='ProjectContainer'><ProjectContainer link="https://github.com/Yogesh0925/Heart-disease-prediction" src={ Covid19}  
      h3="Heart disease prediction" p="Machine Learning"/>  </div>  
      <div className='ProjectContainer'><ProjectContainer link="https://github.com/Yogesh0925/porsche-watch-landing-page" src={house}  
      h3="landing page" p="web development"/>  </div> 
</div>
</section>
  )
}

export default Project
