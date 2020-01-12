/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthActions from "../../../Stores/Auth/Actions";
import { Button } from "react-native-elements";
import { Platform, View } from "react-native";

function LoginGoogleButton() {
  const [isSignin, setSignin] = useState(false);
  const { auth } = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === "web") {
      document.addEventListener("google-loaded", renderGoogleLoginButton);
      window.gapi && renderGoogleLoginButton();
    }

    return () => {
      if (Platform.OS === "web") {
        document.removeEventListener("google-loaded", renderGoogleLoginButton);
      }
    };
  }, []);

  const onSignIn = googleUser => {
    let user = googleUser.getBasicProfile();
    let id_token = googleUser.getAuthResponse().id_token;

    console.log("google user obj", user);
    console.log("google_id_token", id_token);
    dispatch(
      AuthActions.signInSuccess({
        ...user,
        id_token,
        provider: "google"
      })
    );
    // plus any other logic here
  };

  const renderGoogleLoginButton = () => {
    console.log("rendering google signin button");
    window.gapi.signin2.render("my-signin2", {
      scope: "profile email",
      width: 250,
      height: 40,
      longtitle: true,
      theme: "dark",
      onsuccess: onSignIn,
      onFailure: onFailure
    });
  };

  const onFailure = error => {
    alert(`Something Wrong when signin to google : ${error}`);
  };

  const logout = async () => {
    console.log("logout");

    let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
    console.log(auth2, "auth2 instance");
    if (auth2) {
      try {
        const response = await auth2.signOut();
        setSignin(false);
        console.log("Logged out successfully");
      } catch (error) {
        console.log("Error while logging out", error);
      }
    } else {
      console.log("error while logging out");
    }
  };

  return (
    <React.Fragment>
      {Platform.OS === "web" ? (
        <div>
          <div id="my-signin2" style={{ paddingTop: 10 }} />
          <br />
        </div>
      ) : (
        <View style={{ paddingBottom: 20 }}>
          <Button title="Login With Google" />
        </View>
      )}
    </React.Fragment>
  );
}

export default LoginGoogleButton;
