import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointMent from '../MakeApointMent/MakeAppointMent';
import Services from '../Services/Services';
import Testimoinals from '../Testimoinals/Testimoinals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <MakeAppointMent></MakeAppointMent>
            <Testimoinals></Testimoinals>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;