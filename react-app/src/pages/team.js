import React from 'react';
import Navbar from '../components/navbar';
import team1 from '../assets/ahlem.jpg';
import { useEffect } from 'react';
import Footer from '../components/footer';
function Team() {
  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        reject(e)
      })
      document.body.appendChild(script)
      document.body.removeChild(script)
    })
  }
  
   useEffect(() => {
   loadScript(`${process.env.PUBLIC_URL}js/main.js`)
  
    })
    return (
        <div>
              <Navbar />
<section className="home-slider owl-carousel">
  <div className="slider-item bread-item" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container" data-scrollax-parent="true">
      <div className="row slider-text align-items-end">
        <div className="col-md-7 col-sm-12 ftco-animate mb-5">
          <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Sign Up</span></p>
          <h1 className="mb-3 navbar-brand" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Sign Up In <span style={{ fontWeight : 'bold'  }}>Nearest</span><span style={{color : 'blue', fontWeight : 'bold' }}>Doctor</span></h1>

        </div>
      </div>
    </div>
  </div>
</section>
<section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center mb-5 pb-5">
      <div className="col-md-7 text-center heading-section ftco-animate">
      <h2 className="mb-3" style={{fontSize:'42px', fontWeight:'700'}}>Project Overview</h2>
        <h2 className="mb-3">The project is an AI-powered healthcare system that helps patients find suitable doctors based on symptoms, location, and provider schedules. It uses AI to match users with doctors, allows them to rate providers, and includes a chatbot for immediate assistance and appointment booking. Patient medical records are stored securely with blockchain technology, allowing authorized healthcare providers to access them while ensuring privacy and security. This system centralizes medical services and schedules in a single dashboard, providing a comprehensive view for resource management and a seamless patient experience.
</h2>
        
       
      </div>
      
    </div>
  </div>
  
</section>


<Footer />
        </div>
    );
}

export default Team;