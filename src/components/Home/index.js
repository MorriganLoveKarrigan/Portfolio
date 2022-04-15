import {useState, useEffect} from "react";
import LogoTitle from "../../assets/images/logo-s.png"
import "./index.scss"
import {Link} from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo/index";
import Loader from "react-loaders";


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray1 = ['M', 'A', 'K']
    const nameArray2 = ['U', 'D']
    const jobArray = ['J', 'U', 'N', 'I', 'O', 'R', ' ', 'F', 'R', 'O', 'N', 'T', 'E', 'N', 'D', ' ', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])


    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>`m</span>
                        <span> </span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray1} idx={15}/>
                        <img src={LogoTitle} alt="developer"/>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray2} idx={18}/>
                    </h1>
                    <br/>
                    <h2><AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/></h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo/>
            </div>
            <Loader type='pacman' active='loader-active'/>
        </>
    )
}

export default Home
