import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { addToCart, loadUserHistory } from "../redux/actions";


const Item = ({ item, redeem, addToCart, loadUserHistory }) => (
  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 item">
    <div className={cx({
          "card shadow-sm": true,
          "claimed" : item.incart,
          "disabled": !redeem.can && !item.incart
        })}
        >
      {
        item.img == "" 
        ? <svg className="bd-placeholder-img card-img-top" width="100%" height="212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={item.title} preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>{item.name}</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.name}</text>
        </svg>
        : <img src={item.img} className="card-img-top" alt="..."></img>
      }
      <div className="card-body">
        <span className="horizontal-separator"></span>
        <p className="card-text category">
          {item.category}
        </p>
        <p className="card-text item-name">
          {item.name}
        </p>
      </div>
      <span
        className={cx(
          "item__text",
          item && item.incart && "item__text--completed"
        )}
      >
      </span>
      <div className="hover-details">
        <div className="details-centered">
          <p className="price-details">{item.cost} <img src="./icons/coin.svg"/></p>
          <button className="redeem" onMouseEnter={() =>{
            
          }
        } onClick={() => {
            if(redeem.can){
              loadUserHistory({ id: item.id, incart: item.incart, cost: item.cost });
              addToCart(item.id);
            }
          } 
          }> {redeem.can && item.incart ? "Redeemed!" 
              :
                !redeem.can && !item.incart ? "Need "+ redeem.missing + " more"
                : "Redeem"}</button>
        </div>
    </div>
    </div>
  </div>
);


export default connect(
  null,
  { addToCart, loadUserHistory }
)(Item);
