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

const Home = () => {
  return (
    <Box background="black" height="100vh" textStyle="none">
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
