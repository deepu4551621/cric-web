import './pagesStyle/about.css'
import myPhoto from './Images/IMG_20201215_232838.jpg'
import myphoto2 from './Images/IMG-20200718-WA0002.jpg'
const About = () => {
    return(
      <div>
       {/* <h1>About Me</h1>; */}
       <div className="about-section">
      <h2>About Me</h2>
      <div className="photo-section">
        <img src={myPhoto} alt="My Photo" />
      </div>
      <p>Hi, my name is Deepu and I am a BTech CSE graduate from MDU Rohtak University. I am passionate about cricket and anime and enjoy spending my free time watching matches and shows.</p>
      <p>I have experience in web development and have worked on various projects using ReactJS, JavaScript, HTML, and CSS. I am always eager to learn and improve my skills, and am excited to take on new challenges.</p>
    </div>
    <div className="cricket-section">
      <div className="cricket-image">
        <img src={myphoto2} alt="Cricket" />
        <p className="image-caption">Deepu_rd:RHB & Medium Pace Bowler</p>
      </div>
      <div className="cricket-content">
        <h2 className="section-title">The Exciting World of Cricket</h2>
        <p className="section-text">Cricket is a popular sport played in many countries around the world, especially in England, Australia, India, Pakistan, and South Africa. It is a bat-and-ball game played between two teams of eleven players each.</p>
        <p className="section-text">The objective of the game is to score runs by hitting the ball and running between two sets of wickets, while the other team tries to get the batsman out by catching the ball, hitting the wickets, or getting the batsman run out.</p>
        <p className="section-text">Cricket is known for its long matches, which can last up to five days in test matches, and its many exciting formats, such as One Day Internationals (ODIs) and Twenty20 (T20) matches.</p>
        <p className="section-text">Some of the greatest cricketers of all time include Sir Donald Bradman, Sachin Tendulkar, and Brian Lara, who have set numerous records and achieved legendary status in the sport.</p>
      {/* about dhoni */}
      <h2 className="section-title" >Inspiration MS Dhoni</h2>
        <p className="section-text" style={ {fontSize:14, fontWeight:'bold'}}>MS Dhoni is one of the most successful and inspiring cricketers of all time. Born in Ranchi, India, Dhoni rose to fame as the captain of the Indian cricket team, leading them to victory in many major tournaments, including the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, and the 2011 ICC Cricket World Cup.</p>
        <p className="section-text"style={ {fontSize:14, fontWeight:'bold'}}>Dhoni's leadership skills and calm demeanor under pressure have made him a role model for millions of people around the world. He is known for his ability to make quick decisions and lead his team to victory, even in difficult situations.</p>
        <p className="section-text" style={ {fontSize:14, fontWeight:'bold'}}>Off the field, Dhoni is also known for his philanthropic work and his love for motorcycles. He has started many charitable foundations and has donated generously to help people in need.</p>
        <p className="section-text"style={ {fontSize:14, fontWeight:'bold'}}>Dhoni's life and career are a testament to the power of hard work, determination, and leadership. He is an inspiration to many young cricketers and aspiring leaders around the world.</p>
      </div>
    </div>
      </div>
    )
     
  };
  
  export default About;

  