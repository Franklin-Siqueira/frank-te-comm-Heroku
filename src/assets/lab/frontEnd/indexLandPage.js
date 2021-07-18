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
//  src/assets/lab/frontend/indexLandingPage.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React, { Fragment, useState } from "react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
/** Imports (app) */
import iMacImage from "./../../images/sale/fathersday/247-2477466_monitor-mac-png-imac-pro-2017.png";
import "./index.css";
import * as S from "./boxStyles";
import * as C from "./CardOne";
/**  */
export default function FathersDayPage() {
  //
  const firstBoxHeader = "It's More Than a Dream...";
  const firstBoxSubheader = "And it can make YOUR dreams come true";
  const firstBoxCallToNext =
    "what about breaking those barriers... Just swipe to left...";
  const secondBoxMiddle =
    "Achieving a higher level of productivity is a matter of human and material resources";
  const secondBoxCallToNext =
    "What about being the first to know... keep swiping";
  const thirdBoxMiddleText =
    "Bring your creativity to THE NEXT LEVEL with the right tools";
  const thirdBoxCallToNext = "You're one step way... Just one more swipe...";
  const cardHeaderText = "Get it FIRST!";
  const cardSubheaderText = "Our best deals won't last...";
  const cardParagraphText =
    "Stay among those people which are always ahead in their industries. Be the first to know everything about our products, subscribing to our newsletter. It's FREE!";
  const textBoxOne = "Get it FIRST!";
  const textBoxTwo =
    "Text for box two is your opportunity do make things happen for your beloved old man!";
  const textBoxThree = "Text for BOX Three";
  const textBoxFour = "Text for BOX Four";
  const textBoxFive = "Text for BOX Five";
  //
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const navHistory = useHistory();
  const handleForm = () => {
    if (userEmail === ""){
      setEmailError(true);
      return;
    }
    localStorage.setItem("guestData", userEmail);
    navHistory.push("/#");
  };
  //
  return (
    // <Fragment>
    //   <S.PageHtml>
    // <S.Body>
    <S.PageContainer>
      <S.BoxesContainer>
        <S.BoxDropShadow id="boxDropShadow">
          <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormHeader>{firstBoxHeader}</S.BoxFormHeader>
              <S.BoxFormSubHeader>{firstBoxSubheader}</S.BoxFormSubHeader>
              <S.BoxText>{firstBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxDropShadow>
        <S.BoxNone id="boxNone">
          <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormSubHeader>{secondBoxMiddle}</S.BoxFormSubHeader>
              <S.BoxText>{secondBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxNone>
        <S.BoxOpacity id="boxOpacity">
          <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormSubHeader>{thirdBoxMiddleText}</S.BoxFormSubHeader>
              <S.BoxText>{thirdBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxOpacity>
        {/* <S.BoxBrightness id="boxBright">{textBoxFour}</S.BoxBrightness> */}
        <S.BoxBlur id="boxBlur">
          <C.CardContainer>
            <C.CardLeftSideContainer>{textBoxOne}</C.CardLeftSideContainer>
            <C.CardRightSideContainer>
              <C.CardFormContainer>
                <C.CardFormHeader>{cardHeaderText}</C.CardFormHeader>
                <C.CardFormSubHeader>{cardSubheaderText}</C.CardFormSubHeader>
                <C.CardText>{cardParagraphText}</C.CardText>
                <C.CardFormGroup>
                  <C.CardInput
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Your e-mail here..."
                  />
                </C.CardFormGroup>
                <C.CardFormButton onClick={handleForm}>
                  Subscribe
                </C.CardFormButton>
              </C.CardFormContainer>
            </C.CardRightSideContainer>
          </C.CardContainer>
        </S.BoxBlur>
      </S.BoxesContainer>
    </S.PageContainer>
    // </S.Body>
    //   </S.PageHtml>
    // </Fragment>
  );
}

// <!-- Learn about backdrop-filter on CSS-Tricks: https://css-tricks.com/almanac/properties/b/backdrop-filter/ -->

// <div class="container">
//   <div class="no-support">
//     <p>Heads up: It doesn't look like your browser supports <code>backdrop-filter</code>! Check <a href="https://caniuse.com/#feat=css-backdrop-filter">Can I use</a> for current browser support. Maybe try opening this CodePen in a different browser that supports <code>backdrop-filter</code>?</p>
//   </div>
//   <div class="boxes">
//     <p>Scroll → </p>
//     <div class="box none">
//       <h1>backdrop-filter: none</h1>
//     </div>
//     <div class="box grayscale">
//       <h1>backdrop-filter: grayscale(1)</h1>
//     </div>
//     <div class="box brightness">
//       <h1>backdrop-filter: brightness(1.5)</h1>
//     </div>
//     <div class="box blur">
//       <h1>backdrop-filter: blur(5px)</h1>
//     </div>
//     <div class="box contrast">
//       <h1>backdrop-filter: contrast(.8)</h1>
//     </div>
//     <div class="box invert">
//       <h1>backdrop-filter: invert(.7)</h1>
//     </div>
//     <div class="box opacity">
//       <h1>backdrop-filter: opacity(.4)</h1>
//     </div>
//     <div class="box sepia">
//       <h1>backdrop-filter: sepia(.4)</h1>
//     </div>
//     <div class="box saturate">
//       <h1>backdrop-filter: saturate(1.8)</h1>
//     </div>
//     <div class="box hue-rotate">
//       <h1>backdrop-filter: hue-rotate(120deg)</h1>
//     </div>
//   </div>
// </div>
