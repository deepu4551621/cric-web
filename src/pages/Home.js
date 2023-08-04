import { useSearchParams } from 'react-router-dom';
import Card from './Card'
import RecentMatches from './Recent'
import { useState } from 'react';
const Home = () => {
  const [screen, setScreen] = useState(null);

  const handlePress = (val) => {
    setScreen(val);
  };

  return (
    <div style={{ position: 'relative', top: '35px' }}>
      <div style={{ display: 'flex', margin:'5px', justifyContent:'space-around' }}>
        <button onClick={() => handlePress('screen1')}>UpComing Matches</button>
        <button onClick={() => handlePress('screen2')}>Recent Matches</button>
      </div>
      {screen === 'screen1' ? (
        <section>
          <h1 style={{ backgroundColor: '#ee4', height: '30px', paddingTop: '6px', textAlign: 'center' }}>UpComing Matches</h1>
          <Card />
        </section>
      ) : screen === 'screen2' ? (
        <div><h1>Recent matches</h1>
        <RecentMatches />
        </div>
      ) : null}
      <section className='new-section'>
        <p>Welcome to my webpage</p>
        <h1>Deepu rd</h1>
      </section>
    </div>
  );
};

export default Home;
