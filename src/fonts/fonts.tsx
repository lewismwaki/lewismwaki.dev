import { createGlobalStyle } from "styled-components";
import React from "react";

import LucidaCalligraphyItalicWoff from "../fonts/LucidaCalligraphyItalic.woff";
import LucidaCalligraphyItalicWoff2 from "../fonts/LucidaCalligraphyItalic.woff2";
export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${LucidaCalligraphyItalicWoff2}) format('woff2'),
        url(${LucidaCalligraphyItalicWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
