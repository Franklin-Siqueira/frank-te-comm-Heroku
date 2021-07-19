// Copyright 2021 Franklin Siqueira
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------
//
//// Gama Academy | Hiring Coders | [HC] Challenge 01 | Landing Page
//
// ------------------------------------------------------------------------
//  src/assets/lab/frontEnd/cssTricksStyles.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React from "react";
import styled from "styled-components";
import { device } from "../../styles/common/devices/mixins";

// * { box-sizing: border-box; }

// html,
// body {
//   width: 100%;
//   margin: 0;
// }

/** Elements */
export const LandingSectionConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0003;
`;
// export const Base = styled.*`
//     box-sizing: border-box; 
// `;

export const PageHtml = styled.html`
    box-sizing: border-box; 
    width: 100%;
    margin: 0;
    scroll-behavior: smooth;
`;
export const PageContainer = styled.div`
    box-sizing: border-box; 
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/0236.jpg');
    background-size: cover;
    height: 100vh;
    padding: 1px;
    width: 100vw;
    position: relative;
    iframe {
        position: absolute;
        top:0; right: 0; left: 0; bottom:0;
        width: 50%;
        height: 100%;
        object-fit: cover;
    }
`;
export const BoxInsiderContainer = styled.div`
    width: 1100px;
    height: 500px;
    display: flex;
    // border: 1px solid #fff;
    // border-radius: 12px;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
`;
export const BoxFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 80%;
`;
export const BoxFormHeader = styled.h1`
    margin: 18px;
    color: yellow;
    font-weight: 800;
    font-size: 72px;
    opacity: 1;
`;
export const BoxFormSubHeader = styled.h3`
    margin: 8px;
    color: #0008;
    font-weight: 600;
    font-size: 28px;
`;
export const BoxText = styled.p`
    margin: 8px;
    color: #00099;
    font-weight: 600;
    font-size: 16px;
    text-align: left;
`;
export const BoxesContainer = styled.section`
    display: flex;
    margin-right: 10px;
    overflow: scroll;
    min-height: 100vh;
    width: 100%;
    align-items: center;

    // p {
    //     display: block;
    //     font-weight: 600;
    //     min-width: 200px;
    //     color: white;
    //     font-size: 40px;
    //     padding: 25px;
    //     @media (${device.tablet}) {
    //         font-size: 60px;
    //         min-width: 300px;
    //     }
    }
`;
export const Box = styled.div`
    border: 1px solid rgba(255,255,255,.7);
    min-width: 100vw;
    min-height: 100vh;
    line-height: 1;
    padding: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .12s ease-in-out;

    &:nth-child(1n + 1) {
        border-right: none;
    }

    // h1 {
    //     font-weight: 600;
    //     font-size: 24px;
    //     padding:25px
    // }
`;
export const Body = styled.body`
    background-color: black;
    display: flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
export const NoSupport = styled.div`
    @supports not (backdrop-filter: opacity( 1.0 )) {
        text-align: center;
        padding: 10px;
        width: 300px;
        position: absolute;
        z-index: 100;
        top: 5px;
        left: 5px;
        background: #ee6620;
        color: #fff;
        font-size: 12px;
        display: none;
    }
`;
export const BoxNone = styled(Box)`
    backdrop-filter: none;
`;
export const BoxGrayscale = styled(Box)`
    backdrop-filter: grayscale(1);
`;
export const BoxBrightness = styled(Box)`
    backdrop-filter: brightness(1.5);
`;
export const BoxBlur = styled(Box)`
    backdrop-filter: blur(5px);
`;
export const BoxContrast = styled(Box)`
    backdrop-filter: contrast(.8);
`;
export const BoxDropShadow = styled(Box)`
    backdrop-filter: drop-shadow(4px 4px 10px blue);
`;
export const BoxInvert = styled(Box)`
    backdrop-filter: invert(.7);
`;
export const BoxOpacity = styled(Box)`
    backdrop-filter: opacity(.4);
`;
export const BoxSepia= styled(Box)`
    backdrop-filter: sepia(.4);
`;
export const BoxSaturate= styled(Box)`
    backdrop-filter: saturate(1.8);
`;
export const BoxHueRotare= styled(Box)`
    backdrop-filter: hue-rotate(120deg);
`;
