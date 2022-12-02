import React from "react";
import { Button } from "../../../common/Button/Button";
import "./Profile.scss";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__component">
        <img src="https://picsum.photos/200" alt={"as"} />
        <div className="profile__component__name">
          <p>Name</p>
          <div>
            <img src="/assets/star.png" alt="" />
            <img src="/assets/check.png" alt="" />
          </div>
        </div>
        <div className="profile__component__info">
          <p className="profile__component__info--age">age:</p>
          <p className="profile__component__info--eye">eye color:</p>
        </div>
      </div>
      <Button title="next profiles" color="green" size="small" />
    </div>
  );
};
