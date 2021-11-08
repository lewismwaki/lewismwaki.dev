import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/content/intro/intro";
import About from "./../components/content/about/about";
import Expertise from "../components/content/expertise/expertise";
import Experience from "../components/content/experience/experience";
import Projects from "../components/content/projects/projects";
import References from "../components/content/references/references";
import Contact from "../components/content/contact/contact";
import GlobalFonts from "../fonts/fonts";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>

        <meta name='description' content='Home page of the website' />
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Mono&display=swap'
          rel='stylesheet'
        />

        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />

        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Helmet>

      <Box background='black' height='100vh' textStyle='none'>
        <Navbar />
        <Intro />
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <References />
        <Contact />
      </Box>
    </div>
  );
};

export default Home;
