import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoPL from '../../assets/images/PL.webp';
import CR7 from "../../assets/images/CR7.png";
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Welcome to".split("");
    const jobArray = "Premier Zone Fantasy!".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <img src={LogoPL} alt="PremierZone" />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={12}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={15}
              />
            </h1>
            <h2>Your home for everything Premier League related!</h2>
            <Link to="/teams" className="flat-button">
              GET STARTED
            </Link>
          </div>
          <div className="image-zone">
            <img src={CR7} alt=""/>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    );
}

export default Home