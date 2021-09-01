// import React, { Component } from "react";
// import Slider from "react-slick";
//
// export default class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null
//     };
//   }
//
//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <h2>Slider Syncing (AsNavFor)</h2>
//         <h4>First Slider</h4>
//         <Slider
//           asNavFor={this.state.nav2}
//           ref={slider => (this.slider1 = slider)}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <h4>Second Slider</h4>
//         <Slider
//           asNavFor={this.state.nav1}
//           ref={slider => (this.slider2 = slider)}
//           slidesToShow={3}
//           swipeToSlide={true}
//           focusOnSelect={true}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
//
//
//
// // import { Box, Center, Flex, Text } from "@chakra-ui/layout"
// import React, { useRef } from "react"
// import SectionDescription from "../../shared/section_description"
// import SectionTitle from "../../shared/section_title"
// import { StaticImage } from "gatsby-plugin-image"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import ArrowLeft from "../../shared/arrow-left"
// import ArrowRight from "../../shared/arrow-right"
//
// const settings = {
//   dots: false,
//   infinite: true,
//   arrows: false,
//   // swipeToSlide: true,
// }
//
// function ProjectsWithHooks(Projects: any){
//   return function WrappedComponent(props: any){
//     const slider = useRef(null);
//     return <Projects {...props} slider={slider}/>;
//   }
// }
//  class Projects extends React.Component {
//   slider1: any
//   slider2: any
//
//   constructor(props: {} | Readonly<{}>) {
//     super(props)
//     this.state = {
//       nav1: null,
//       nav2: null,
//     }
//   }
//
//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2,
//     })
//   }
//
//   render() {
//     const slider = this.props.slider;
//
//     return (
//       <Box background="inherit">
//         <SectionTitle title=".projects()" id="projects" />
//         <SectionDescription description="Some of my proudest works. Enjoy. :)" />
//
//         {/* projects images here*/}
//         <Center>
//           <Slider
//             asNavFor={this.state.nav2}
//             ref={slider => (this.slider1 = slider)}
//             {...settings}
//           >
//             <Box>
//               <StaticImage src="../../../images/image_2.png" alt="" />
//             </Box>
//             <Box>
//               <StaticImage src="../../../images/image_1.png" alt="" />
//             </Box>
//           </Slider>
//         </Center>
//
//         {/* projects controller */}
//         <Center>
//           <Box width="978px" height="240px" position="relative">
//             {/* bkg */}
//             <StaticImage src="../../../images/projects_controller.png" alt="" />
//
//             {/* content */}
//
//             <Box
//               position="absolute"
//               top="56px"
//               left="37.3px"
//               right="46.7px"
//               bottom="31.3px"
//               background="red"
//               justifyContent="space-between"
//             >
//               <Slider
//                 asNavFor={this.state.nav1}
//                 ref={slider => (this.slider2 = slider)}
//                 {...settings}
//               >
//                 <Box background="blue">
//                   {/* section 1 */}
//                   <Text textColor="black">text section 1</Text>
//                   {/* section 2 */}
//                   <Text textColor="black">text section 2</Text>
//                   {/* section 3 */}
//                   <Text textColor="black">text section 3</Text>
//                 </Box>
//                 <Box background="green">
//                   {/* section 1 */}
//                   <Text textColor="black">text section 1</Text>
//                   {/* section 2 */}
//                   <Text textColor="black">text section 2</Text>
//                   {/* section 3 */}
//                   <Text textColor="black">text section 3</Text>
//                 </Box>
//               </Slider>
//             </Box>
//             <Box position="absolute" right="32px" bottom="32px">
//               <Flex direction="row">
//                 <ArrowLeft
//                   cursor="pointer"
//                   onClick={() => slider?.current?.slickPrev()}
//                 />
//                 <Box width="28px"></Box>
//                 <ArrowRight
//                   cursor="pointer"
//                   onClick={() => slider?.current?.slickNext()}
//                 />
//               </Flex>
//             </Box>
//           </Box>
//         </Center>
//       </Box>
//     )
//   }
// }
// export default ProjectsWithHooks(Projects);
