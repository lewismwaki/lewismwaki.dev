import { createGlobalStyle } from "styled-components";
import React from "react";

import LucidaCalligraphyItalicWoff from "../fonts/LucidaCalligraphyItalic.woff";
import LucidaCalligraphyItalicWoff2 from "../fonts/LucidaCalligraphyItalic.woff2";
import Futura from "../fonts/FuturaPTMedium.otf";
import CircularMedium from "../fonts/CircularStd-Medium.otf";
import CircularBook from "../fonts/CircularStd-Book.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Lucida';
        src: local('Lucida'), local('Lucida'),
        url(${LucidaCalligraphyItalicWoff2}) format('woff2'),
        url(${LucidaCalligraphyItalicWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Futura';
        src: local('Futura'), url(${Futura}) format('opentype');
    }
    
    @font-face {
        font-family: 'CircularMedium';
        src: local('CircularMedium'), url(${CircularMedium}) format('opentype');
    }
    @font-face {
        font-family: 'CircularBook';
        src: local('CircularBook'), url(${CircularBook}) format('opentype');
    }
`;
