import React from "react";
import { useSelector } from "react-redux";

import { authInstance } from "./GoogleAuth2";
import { IState } from "../reducers";

interface Props {
  text: string;
  className: string;
}

const SignOut = (props: Props) => {
  const { text, className } = props;

  const isSignedIn = useSelector(
    (state: IState) => state.googleAuth2.isSignedIn
  ) as boolean;

  if (isSignedIn === true) {
    return (
      <button className={className} onClick={authInstance.signOut}>
        {text}
      </button>
    );
  }

  return null;
};

SignOut.defaultProps = {
  text: "Sign out",
  className: "",
} as Partial<Props>;

export default SignOut;
