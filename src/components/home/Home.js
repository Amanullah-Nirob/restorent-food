import React from 'react';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import AboutSimple from './AboutSimple';
import Article from './article/Article';
import Borocard from './Borocard';
import Downloads from './Downloads';
import './Home.css'
import MainHome from './MainHome';
import Service from './service/Service';
import Simplefoodcard from './Simplefoodcard';
const Home = () => {
        return (
        <div>
                <MainHome></MainHome>
                <Simplefoodcard></Simplefoodcard>
                <Borocard></Borocard>
                <AboutSimple></AboutSimple>
                <Service></Service>
                <BackgroundVideo></BackgroundVideo>
                <Downloads></Downloads>
                <Article></Article>
        </div>
        );
};

export default Home;