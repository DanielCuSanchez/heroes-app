import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    //history.push("/");
    const lastPath = localStorage.getItem("lastPath") || "";
    dispatch({
      type: types.login,
      payload: {
        name: "Daniel",
        logged: true,
      },
    });
    history.replace(lastPath);
  };
  return (
    <div className="container">
      <h1>Login Screen</h1>
      <hr />
      <div className="row justify-content-center">
        <button onClick={handleClick} className="btn btn-md btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};
