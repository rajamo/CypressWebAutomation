/// <reference types="Cypress" />
///// <reference path="../support/index.d.ts" />

import { UniBetHome } from "../pageObjects/UniBet_Home_page";
import { BASE_URL, SINGLES, BETAMOUNT } from "../config/config";

describe('Web Automation Testing', function () {

   /* before(()=>{
        cy.mockGlobalFeeds();
        cy.mockTags();
    });*/

    it('Unitbet Home Page Test', () => {
        UniBetHome.navigateToUrl(BASE_URL);
        UniBetHome.SportsInPlay(SINGLES, BETAMOUNT);
    });


});
