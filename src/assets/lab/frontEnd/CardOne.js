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
//  src/assets/lab/frontEnd/CardOne.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React from "react";
import styled from "styled-components";
import { device } from "../../styles/common/devices/mixins";
/** Vars */
const bdrTplft = 8;
const bdrBtlft = 8;
/** Exports */
export const CardContainer = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  // border: 1px solid #fff;
  border-radius: ${bdrTplft}px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
`;
export const CardLeftSideContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  border-radius: ${bdrTplft}px 0 0 ${bdrBtlft}px;
  background: rgb(10, 8, 56);
  background: linear-gradient(
    90deg,
    rgba(10, 8, 56, 1) 9%,
    rgba(9, 9, 121, 1) 48%,
    rgba(211, 210, 233, 0.4) 100%
  );
  opacity: 0.9;
`;
export const CardRightSideContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  opacity: 0.95;
  border-radius: 0 ${bdrTplft}px ${bdrBtlft}px 0;
`;
export const CardImageContainer = styled.div`
    width: auto;
    height: 30em;
`;
export const CardImage = styled.img`
    position: relative;
    width: auto;
    height: 100%;
    filter: drop-shadow(16px 16px 20px red) invert(75%);

    @media (${device.mobileM}) {
        width: 10px;
        height: 20px;
    }
`;
export const CardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 80%;
`;
export const CardFormHeader = styled.h1`
  margin: 8px;
  color: #0009;
  font-weight: 800;
  font-size: 48px;
`;
export const CardFormSubHeader = styled.h3`
  margin: 8px;
  color: #0008;
  font-weight: 600;
  font-size: 28px;
`;
export const CardText = styled.p`
  margin: 8px;
  color: #00009;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
`;
export const CardFormGroup = styled.div`
  margin: 8px;
  display: flex;
  position: relative;
  height: 53px;
  margin-top: 1em;
`;
export const CardInput = styled.input`
  margin: 8px;
  outline: none;
  border: none;
  border-radius: 2px;
  padding-left: 1.5em;
  background-color: white;
  font-size: 20px;

  &::placeholder {
    color: #00002;
  }
`;
export const CardInputError = styled.div`
  margin: 4px;
  display: flex;
  position: relative;
  height: 53px;
  margin-top: 1em;
  color: #0008;
  p {
    margin: 8px;
    color: red;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
`;
export const CardFormButton = styled.button`
  // position: relative;
  // right: -10px;
  top: 0;
  height: 100%;
  width: 150px;
  border: none;
  border-radius: 5px;
  outline: none;
  color: yellow;
  cursor: pointer;
  background-color: #262fec;
  padding: 0px;
  font-size: 18px;
  font-weight: 600;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
