import React from "react";

import SetSvgColors from "./data/SetSvgColors";
import ScrollToTop from "./ScrollToTop";

import Nav from "./nav/Nav";

import CheatSheet from "./CheatSheet.jsx";
import Config from "./Config.jsx";
import Docs from "./docs";
import Logos from "./Logos";

import Tiles from "./tiles";
import Tile from "./pages/Tile.jsx";

import Home from "./Home";
import Game from "./Game";

import Footer from "./Footer";

import { isElectron } from "./util";

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

// Test to see if we're running in electron or not. If so use a hash router
// since it's based on files
const Router = isElectron() ? HashRouter : BrowserRouter;

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="App">
        <Switch>
          <Route path="/" exact />
          <Route path="/:game">
            <Nav />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cheat" exact>
            <CheatSheet />
          </Route>
          <Route path="/config" exact>
            <Config />
          </Route>
          <Route path="/docs/:id?" exact>
            <Docs />
          </Route>
          <Route path="/logos" exact>
            <Logos />
          </Route>
          <Route path="/tile/:id">
            <Tile />
          </Route>
          <Route path="/tiles">
            <Tiles />
          </Route>
          <Route path="/:game">
            <Game />
          </Route>
        </Switch>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{height:0,width:0,position:"absolute"}}>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                    markerWidth="5" markerHeight="5"
                    markerUnits="strokeWidth"
                    orient="auto-start-reverse">
              <path d="M 0 0 L 8 4 L 8 6 L 0 10 z"
                    strokeLinejoin="round"
                    strokeLinecap="round" />
            </marker>
            <mask id="hexMask">
              <rect x="-100" y="-100" width="200" height="200" fill="black"/>
              <polygon points="-86.0252,0 -43.0126,-74.5 43.0126,-74.5 86.0252,0 43.0126,74.5 -43.0126,74.5"
                       fill="white"
                       stroke="white"
                       strokeWidth="2" />
            </mask>
            <mask id="hexBleedMask">
              <rect x="-100" y="-100" width="200" height="200" fill="black"/>
              <polygon points="-98.1495,0 -49.07475,-85 49.07475,-85 98.1495,0 49.07475,85 -49.07475,85"
                       fill="white"
                       stroke="white"
                       strokeWidth="2" />
            </mask>
            <mask id="hexBleedMaskOffset">
              <rect x="-100" y="-100" width="200" height="200" fill="black"/>
              <polygon points="-86.6025,0 -92.376,-9.999995337 -54.84825,-75 -43.30125,-75 -37.52775,-85 37.52775,-85 43.30125,-75 54.84825,-75 92.376,-9.999995337 86.6025,0 92.376,9.999995337 54.84825,75 43.30125,75 37.52775,85 -37.52775,85 -43.30125,75 -54.84825,75 -92.376,9.999995337"
                       fill="white"
                       stroke="white"
                       strokeWidth="2" />
            </mask>
            <mask id="hexBleedMaskDie">
              <rect x="-100" y="-100" width="200" height="200" fill="black"/>
              <polygon points="-98.1495,0 -54.84825,-75 54.84825,-75 98.1495,0 54.84825,75 -54.84825,75"
                       fill="white"
                       stroke="white"
                       strokeWidth="2" />
            </mask>
            <mask id="hexBleedMaskDieTop">
              <rect x="-100" y="-100" width="200" height="200" fill="black"/>
              <polygon points="-98.1495,0 -49.07475,-85 49.07475,-85 98.1495,0 54.84825,75 -54.84825,75"
                       fill="white"
                       stroke="white"
                       strokeWidth="2" />
            </mask>
            <mask id="hexBleedMaskDieBottom">
              <rect x="-100" y="-100" width="200" height="200" fill="black"/>
              <polygon points="-98.1495,0 -54.84825,-75 54.84825,-75 98.1495,0 49.07475,85 -49.07475,85"
                       fill="white"
                       stroke="white"
                       strokeWidth="2" />
            </mask>
          </defs>
        </svg>
        <Route exact path="/">
          <Footer />
        </Route>
      </div>
      <SetSvgColors />
    </ScrollToTop>
  </Router>
);

export default App;
