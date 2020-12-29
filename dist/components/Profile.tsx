import React from "react";
import { useSelector } from "react-redux";

import { IState } from "../reducers";
import { User } from "./GoogleAuth2";

interface Props {
  className?: string;
}

const Profile = (props: Props) => {
  const { className } = props;

  const isSignedIn = useSelector(
    (state: IState) => state.googleAuth2.isSignedIn
  ) as boolean;

  const user = (useSelector(
    (state: IState) => state.googleAuth2.user
  ) as unknown) as User;

  if (isSignedIn === true) {
    return (
      <div className={className}>
        <img src={user.image} alt={user.name} title={user.name} />

        <span title={user.email}>{user.name}</span>
      </div>
    );
  }

  return null;
};

Profile.defaultProps = {
  className: "",
} as Partial<Props>;

export default Profile;
