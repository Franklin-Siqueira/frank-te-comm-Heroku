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
//  src/assets/lab/frontend/indexLandingPage.js - (UNDER REVIEW)
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React, { Fragment, useState } from "react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
/** Imports (app) */
import "./index.css";
import OPoder from "./../../images/sale/blackfriday/poder_Vieira.png"
import * as S from "./boxStyles";
import * as C from "./CardOne";
import * as Nav from "./fixedRawNavbar";
/**  */
export default function FathersDayPage() {
  // Navbar
  const navBarItems = [
    { txt: "MOVE", link: "/training#boxNone" },
    { txt: "TO", link: "/training#boxOpacity" },
    { txt: "NEW", link: "/training#boxBlur" },
    { txt: "LEVEL", link: "/training#boxDropShadow" },
  ];
  // Text
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
  const emailInvalidInputMessage = "Please, enter a valid e-mail address...";
  // States
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // Handlers
  const navHistory = useHistory();
  const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
  };
  const handleForm = () => {
    if (userEmail === "" || userEmail.indexOf("@") === -1) {
      console.log(emailInvalidInputMessage);
      setEmailError(true);
      return;
    }
    localStorage.setItem("guestData", userEmail);
    navHistory.push("/#");
  };
  // JSX
  return (
    // <Fragment>
    //   <S.PageHtml>
    // <S.Body>
    <S.PageContainer>
      <Nav.NavBarUl>
        {navBarItems.map((navItem, navLink) => (
          <Nav.NavBarLi key={navLink}>
            <a href={navItem.link}>{navItem.txt}</a>
          </Nav.NavBarLi>
        ))}
      </Nav.NavBarUl>
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
            {/*  */}
            <C.CardLeftSideContainer>
              <C.CardImageContainer>
                <C.CardImage src={OPoder} alt="Livro: o poder da ação" />
              </C.CardImageContainer>
            </C.CardLeftSideContainer>
            {/*  */}
            <C.CardRightSideContainer>
              <C.CardFormContainer>
                <C.CardFormHeader>{cardHeaderText}</C.CardFormHeader>
                <C.CardFormSubHeader>{cardSubheaderText}</C.CardFormSubHeader>
                <C.CardText>{cardParagraphText}</C.CardText>
                <C.CardFormGroup>
                  <C.CardInput
                    value={userEmail}
                    onChange={handleEmailInput}
                    placeholder="Your e-mail here..."
                  />
                </C.CardFormGroup>
                <C.CardFormButton onClick={handleForm}>
                  Subscribe
                </C.CardFormButton>
                {emailError ? (
                  <C.CardInputError>
                    {emailInvalidInputMessage}
                  </C.CardInputError>
                ) : (
                  ""
                )}
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