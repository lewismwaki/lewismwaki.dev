import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "../components/shared/navbar";
import Intro from "../components/content/intro/intro";
import About from "./../components/content/about/about";
import Expertise from "../components/content/expertise/expertise";
import Experience from "../components/content/experience/experience";
import Projects from "../components/content/projects/projects";
import References from "../components/content/references/references";
import Contact from "../components/content/contact/contact";
import GlobalFonts from "../fonts/fonts";
import { Helmet } from "react-helmet";
import Footer from "../components/content/footer/footer";

const Home = () => {
  const [indexSelectedBySection, selectBySection] = useState(0);

  return (
    <>
      <Helmet>
        <title>Lewis Mwaki</title>

        <meta name="Lewis Mwaki's Portfolio" content='' />
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

      <GlobalFonts />

      <Box background='black' textStyle='none' overflowX='clip'>
        <Navbar indexSelectedBySection={indexSelectedBySection} />
        <Intro />
        <About onSectionChange={selectBySection} />
        <Projects onSectionChange={selectBySection} />
        <Experience onSectionChange={selectBySection} />
        <Expertise onSectionChange={selectBySection} />
        <Contact onSectionChange={selectBySection} />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
