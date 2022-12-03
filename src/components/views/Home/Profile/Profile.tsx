import React from "react";
import { People } from "../../../../utils/types";
import "./Profile.scss";

export const Profile = (props: People) => {
  return (
    <div className="profile">
      <div className="profile__component">
        <img src={props.img} alt={"as"} />
        <div className="profile__component__name">
          <p>{props.name}</p>
          <div>
            <img src="/assets/star.png" alt="" />
            <img src="/assets/check.png" alt="" />
          </div>
        </div>
        <div className="profile__component__info">
          <p className="profile__component__info--age">
            birth date: {props.birthYear}
          </p>
          <p className="profile__component__info--eye">
            eye color: {props.eyeColor}
          </p>
        </div>
      </div>
    </div>
  );
};
