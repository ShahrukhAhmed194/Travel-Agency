import React, {useEffect} from 'react';
import './main.css';

// imported ions
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
// imported images for destinations
import img from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Cox Bazar',
    location: 'Bangladesh',
    grade: 'Sea Season',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kashmir',
    location: 'Pakistan',
    grade: 'Hill Beauty',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 5,
    imgSrc: img2,
    destTitle: 'Cox Bazar',
    location: 'Bangladesh',
    grade: 'Sea Season',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 6,
    imgSrc: img3,
    destTitle: 'Kashmir',
    location: 'Pakistan',
    grade: 'Hill Beauty',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 7,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 8,
    imgSrc: img2,
    destTitle: 'Cox Bazar',
    location: 'Bangladesh',
    grade: 'Sea Season',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
  {
    id: 9,
    imgSrc: img3,
    destTitle: 'Kashmir',
    location: 'Pakistan',
    grade: 'Hill Beauty',
    fees: '$7000',
    description: 'The epitome of romance, bora bora is one of the best travel destination'
  },
]
const Main = () => {
// animation hooks
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos='fade-up' className='singleDestination'>
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                    <span className="container flex">  {/*a container missing*/}
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Main;
