import * as React from "react";
import { ethers } from "ethers";
import ParticlesBg from "particles-bg";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <ParticlesBg color="#81D99C" type="cobweb" bg={true} />
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label="Love">
            👋
          </span>{" "}
          Hey there!
        </div>

        <div className="bio">
          <p>I am delta and I am learning to build an Ethereum dApp!</p>
          <p>Connect your Ethereum wallet and wave at me!</p>
        </div>

        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
