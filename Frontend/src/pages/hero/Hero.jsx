import { Fragment } from "react";
import img from "../../images/img";
import data from "../../utils/data";
import Nahmii from "../../images/nahmii-logo.svg";

import "./hero.scss";
const Hero = () => {
  return (
    <Fragment>
      <div className="body">
        <div className="head-section">
          <div className="nahmii-logo">
            <img src={Nahmii} alt="" />
          </div>
          <div className="title">
            Securing liquidity for protocols across DeFi
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <ul>
              <li>Bonds</li>
              <li>Payout Asset</li>
              <li>Discount</li>
              <li>TBV</li>
              <li></li>
            </ul>
            {data &&
              data.map((items) => {
                return (
                  <ul>
                    <li>{`${items.bondImage} - ${items.bondName}`}</li>
                    <li>{`${items.payoutAssetImage} - ${items.payoutAssetTokenPrice}`}</li>
                    <li>{items.discount}</li>
                    <li>{items.tbv}</li>
                    <li className="bond-action">{items.action}</li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Hero;
