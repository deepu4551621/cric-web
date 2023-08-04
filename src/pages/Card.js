import React, { useEffect,useState } from 'react';
import './pagesStyle/card.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const IPLCard = () => {
    let API  = 'https://api.cricapi.com/v1/series?apikey=af803163-cdf8-400d-9dbb-57a12ab2af0c&offset=0';
    const [matches, setMatch] = useState([]);
    const [slideToShow, setSlidesToShow] = useState(4);
    const fetcApiData = async (url) => {
        try {
            const res = await fetch(url);
            const result = await res.json();
            console.log(result.data);
        setMatch(result.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetcApiData(API);
        console.log("seriesData: "+matches)
        // Add event listener to track window size changes
    const handleResize = () => {
        if (window.innerWidth > 568) {
          setSlidesToShow(4);
        } else {
          setSlidesToShow(2);
        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      
    }, [])
    //style for slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
      };
      const mobileSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideToShow, // Adjust the number of slides shown on mobile
        slidesToScroll: 2,
      };
    return (
        <div className='container'>
               <Slider {...(window.innerWidth > 568 ? sliderSettings : mobileSliderSettings)}>
           {matches?(
            matches.map((item) => (
        <div key={item.id} className="card">
            <h3 style={{fontSize:'16px'}}>{item.name}</h3>
            <strong style={{color:'green'}}>from {item.startDate} to {item.endDate}</strong> 
            <ul style={{display:'flex'}}>
                <li>ODI: {item.odi}</li>,
                <li>T20: {item.t20}</li>,
                <li>Test: {item.test}</li>
            </ul>
        </div>
   
      ))
            ):<p style={{width:'100px'}}>Loading...</p>}
                </Slider>
        </div>
       
    );
};

export default IPLCard;
