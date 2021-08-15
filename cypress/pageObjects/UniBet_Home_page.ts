/// <reference types="Cypress" />

import { click, clickContainsElement, clickLast, enter, verifyTextContent } from "../support/actions";

const InPlayEle = 'In-Play';
const anyLastBetEle = '.KambiBC-betty-outcome';
const inputBetEle = '.mod-KambiBC-stake-input__container';
const singlesEle = '.mod-KambiBC-betslip__header-tab-title';
const betPlaceEle = '.mod-KambiBC-betslip__place-bet-btn';

export const UniBetHome = {

    navigateToUrl(url) {
       cy.visit(url)
        //   .viewport('macbook-15');
    },

    //navigate(url){},
 
    SportsInPlay(SinglesText, BetAmount){
        clickContainsElement (InPlayEle);
        clickLast (anyLastBetEle);
        enter (inputBetEle, BetAmount);
        verifyTextContent(singlesEle, SinglesText);
        click(betPlaceEle);
    },

  
}
