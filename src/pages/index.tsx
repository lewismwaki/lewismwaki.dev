import React from "react"
import "@fontsource/fira-mono/500.css"
import { Box } from "@chakra-ui/react"
import Navbar from "../components/navbar/navbar"
import Intro from "../components/content/intro/intro"
import About from "./../components/content/about/about"
import Expertise from "../components/content/expertise/expertise"
import Experience from "../components/content/experience/experience"
import Projects from "../components/content/projects/projects"
import References from "../components/content/references/references"
import Contact from "../components/content/contact/contact"
import GlobalFonts from '../fonts/fonts';

import {Helmet } from'react-helmet';
const Home = () => {
  return (
    <Box background="black" height="100vh" textStyle="none">
      <Helmet> <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> </Helmet>
      <Navbar />
      <Intro />
      <About />
      <Experience/>
      <Expertise />
      <Projects />
      <References />
      <Contact />
    </Box>
  )
}

export default Home
