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
//  src/assets/lab/frontEnd/fixedRawNavbar.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React from "react";
import styled from "styled-components";
/** Exports */
export const NavBarUl = styled.ul`
    z-index: 3;
    position: absolute;
    top: 50%;
    right: 3%;
    // background-color: yellow:
    // cursor: pointer;
    
    &:active{
        background: wheat;
        color: blueviolet;
    }
`;
export const NavBarLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    transition: all 0.7s ease;
    color: red;
    background-color: rgb(232, 194, 194);
    // line-height: 40px;
    text-align: center;
    font-family: sans-serif;
    font-size: 12px
    font-weight: 800;
    // padding: 4px;
    margin-bottom: 2px;
    border-radius: 5px;
    width: 48px;
    height: 40px;
    transition: all 300ms ease-in-out;

    a{
        text-decoration: none;
    }

    &:hover{
        transform: scale(1.2);
        backgound-color: blue;
        color: yellow;
    }
`;
// #navbar{
//     z-index: 3;
//     position: absolute;
//     top: 30%;
//     right: 3%;
//     cursor: pointer;
// }
// #navbar .active {
//     background: wheat;
//     color: blueviolet;
// }
// #navbar li{
//     cursor: pointer;
//     margin-bottom: 10px;
//     transition: all 0.7s ease;
//     color: whitesmoke;
//     line-height: 40px;
//     text-align: center;
//     width: 40px;
//     height: 40px;