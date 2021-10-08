// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// ------------------------------------------------------------------------
//
//// Gama Academy | Hiring Coders | [HC] Módulo 07 | React
//
// ------------------------------------------------------------------------
//  src/routes/index.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React from 'react';
// import Router from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
/** Imports (App) */
import BfPage from '../../src/views/pages/sale/blackfriday/index';
import Home from './../views/pages/home';
import Error from './../views/pages/error'
/** training */
import FathersDayPage from "./../assets/lab/frontEnd/indexLandPage";
//
const Routes = () => (
  //
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={BfPage} />
      <Route path='/store' exact component={Home} />
      <Route path='/training' exact component={FathersDayPage} />
      <Route path='*' component={Error} />
      {/* <Route exact path='/gitrepos' component={GitRepos} />
      <Route exact path='/getrepos' component={GetRepos} /> */}
    </Switch>
  </BrowserRouter>
);
//
export default Routes;