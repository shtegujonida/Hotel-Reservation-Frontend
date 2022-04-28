import React from 'react';
import './HomePage.css';
import SimpleImageSlider from "react-simple-image-slider";
import {Link} from "react-router-dom";


const images = [
    { url: "https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/217411832_794577207893732_15217680898274382_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=cWQG3hmSg-wAX9UANO9&tn=4mYFYwkkXBQQK2Yj&_nc_ht=scontent-sof1-1.xx&oh=00_AT_yENgi893ZeIX7FWGG4S3q_loRHg-YmlWc1-JCbRzo8g&oe=62676052" },
    { url: "https://scontent.ftia5-1.fna.fbcdn.net/v/t39.30808-6/247192556_856950241656428_2408121095565015871_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=gqHDTm0cwcQAX90KmyR&_nc_ht=scontent.ftia5-1.fna&oh=00_AT_JZxZLp5tSCTUptXqZDI9IeEv5Vqr7IfzbUBA1PuoxeA&oe=626C8F83" },
  ];

export default function Home(){
    return(
         <><div className='starter'>
            <aside className='home--aside'>
                <h1 id='htl'>HOTEL BOOKING</h1>
                <h1>More than just a Hotel. Make your vacations unforgettable.</h1>
                <hr />
                
                <h3>Logu i Harushave Hotel is located in the heart of one of the best national parks of Albania, Theth National Park. This renovated 5 stars combines the art and tradition of hospitality with all
                    the facilities and services</h3>
                <h3>Upon entering this charming hotel in Theth, you will immediately sense its special intimate atmosphere that 
                    makes you feel like being in your own florentine home.  Each detail has been passionately chosen and each room deserves a visit. 
                    Logu i Harushave style mixes valuable antiques and original artworks with an unexpected eclectic contemporary twist. </h3>
                <h3>The entire House recalls the ancient times past where young European aristocrats lived while discovering the 
                    beauty and the artistic mysteries of the mountains.
                    The special charm and the cosy mood of Logu i Harushave will make you a nature lover (if you aren't one already 😉)</h3>
        
                <h1>Features</h1>
                <hr />
                <h3>Facilities include 24-hour room service, Wi-Fi
                    access, TV in the rooms, restaurant, snack-bar, fitness centre with
                    sauna and private parking.</h3>
                
            </aside>
            <img className='top--img' src='https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/61762947_333664173985040_701407497042264064_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PS_NiVVZngQAX8HKMHN&_nc_ht=scontent-sof1-1.xx&oh=00_AT9OMDFw5eXzIMDsAGmzXQLfQE7C9fFAygCxUveUT8plQg&oe=62857A76'></img>
            <hr />

        </div>
        <aside className='aside--bottom'>
                <h1>Slide to see the amazing view that awaits you</h1>
                <SimpleImageSlider
                    width={700}
                    height={435}
                    images={images}
                    showBullets={true}
                    showNavs={true} />
        </aside>
        <div className='bottom--text'>
            <h1>Exciting right? What are you waiting for then?</h1>
            <a class="btn"><Link to="/rooms">BOOK NOW</Link></a>
        </div></>
            
                
    )
}