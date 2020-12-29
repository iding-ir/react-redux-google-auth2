import React from "react";
import { useSelector } from "react-redux";

import { authInstance } from "./GoogleAuth2";
import { IState } from "../reducers";

interface Props {
  text: string;
  className: string;
}

const SignIn = (props: Props) => {
  const { text, className } = props;

  const isSignedIn = useSelector(
    (state: IState) => state.googleAuth2.isSignedIn
  ) as boolean;

  if (isSignedIn === false) {
    return (
      <button className={className} onClick={authInstance.signIn}>
        {text}
      </button>
    );
  }

  return null;
};

SignIn.defaultProps = {
  text: "Sign in",
  className: "",
} as Partial<Props>;

export default SignIn;
