import React from "react";
import { hot } from "react-hot-loader/root";
import CesiumGlobe from "./components/cesium";
import './styles.css';

const App = () => (
  <>
    <div className="innerlayer">
      < CesiumGlobe/>
    </div>

  <div className="overlay"></div>
  </>
);
export default hot(App);
