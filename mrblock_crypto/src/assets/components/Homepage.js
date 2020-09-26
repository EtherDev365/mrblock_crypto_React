import React from 'react';
import { Link } from 'react-router-dom';
import MovieCarousel from './Carousel'
import Sections from './sections/Sections'
import Crypto from './News/Crypto'
import Bussiness from './News/Bussiness'
import Social from './News/Social'


class Homepage extends React.Component{
    render() {
        return (
            <div className="homepage">
                <MovieCarousel/>
                <Crypto />
                <Bussiness />
                <Social />
                <Sections />
            </div>
        )
    }
}

export default Homepage;