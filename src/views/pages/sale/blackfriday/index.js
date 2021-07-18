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
//// Gama Academy | Hiring Coders | [HC] Módulo 07 | React
//
// ------------------------------------------------------------------------
//  src/views/pages/sale/blackfriday/index.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Fragment } from "react";
/** Imports (App) */
import * as SB from "./../../../../assets/styles/sale/blackfriday";
import * as SM from "./../../../../assets/styles/common/forms/email";
/** Imports (Assets) */
import CardImage from "./../../../../assets/images/sale/blackfriday/365Dias_History.png";
// ...
// class BfPage extends Component {
export default function BfPage() {
  //
  const cardHeaderText = "Get It FIRST!";
  const cardAltText = "Sample book front page";
  const cardSubtitleText = "It's Just Simple Like That";
  const cardParagraphText =
    "Get our BEST offers FIRST! Sign up for FREE and receive our PREMIUM books wherever you be";
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navHistory = useHistory();
  //
  const handleForm = () => {
    localStorage.setItem("guestData", [userName, userEmail]);
    navHistory.push("/#");
  };
  //
  return (
    <Fragment>
      <SB.LandingSectionConteiner>
        test landing conteiner
      </SB.LandingSectionConteiner>
      <SB.CardsSectionConteiner>
        test card section conteiner
      </SB.CardsSectionConteiner>
      <SM.FormConteiner>
        <SM.EmailCardConteiner>
          <SM.EmailCardImage src={CardImage} alt={cardAltText} />
          <div>
            <SM.EmailCardDivHeader>{cardHeaderText}</SM.EmailCardDivHeader>
            <SM.EmailCardDivSubtitle>{cardSubtitleText}</SM.EmailCardDivSubtitle>
            <SM.EmailCardDivParagraph>
              <SM.EmailCardParagraph>{cardParagraphText}</SM.EmailCardParagraph>
            </SM.EmailCardDivParagraph>
            <SM.EmailCardDivForm>
              <SM.EmailCardNameInput
                placeholder="Your name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <SM.EmailCardEmailInput
                placeholder="and e-mail..."
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <SM.EmailCardSubmitButton onClick={handleForm}>
                {cardHeaderText}
              </SM.EmailCardSubmitButton>
            </SM.EmailCardDivForm>
            {/* <SocialSharing>
                <p>
                  <img src={Share} alt="Shares" /> 492
                </p>
                <p>
                  <img src={Retweet} alt="Retweets" /> 3,843
                </p>
                <p>
                  <img src={Heart} alt="Likes" /> 1,336
                </p>
              </SocialSharing> */}
          </div>
        </SM.EmailCardConteiner>
      </SM.FormConteiner>
      <SB.FooterSectionConteiner>
        testing footer section conteiner
      </SB.FooterSectionConteiner>
    </Fragment>
  );
}
