/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthActions from "../../../Stores/Auth/Actions";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { Platform } from "react-native";

function LoginFacebookButton() {
  let FB;
  const [isSignin, setSignin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === "web") {
      window.addEventListener("FBInit", initFacebookLogin);
    }

    return () => {
      if (Platform.OS === "web") {
        window.removeEventListener("FBInit", initFacebookLogin);
      }
    };
  }, []);

  /**
   * Init FB object and check Facebook Login status
   */
  const initFacebookLogin = () => {
    FB = window.FB;
    console.log("FB", FB);
    checkLoginStatus();
  };

  /**
   * Check login status
   */
  const checkLoginStatus = () => {
    FB.getLoginStatus(facebookLoginHandler);
  };

  /**
   * Check login status and call login api is user is not logged in
   */
  const facebookLogin = () => {
    console.log(FB);
    if (!FB) {
      initFacebookLogin();
      facebookLogin();
      return;
    }

    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        facebookLoginHandler(response);
      } else {
        FB.login(facebookLoginHandler, { scope: "public_profile" });
      }
    });
  };

  /**
   * Handle login response
   */
  const facebookLoginHandler = response => {
    if (response.status === "connected") {
      FB.api("/me", userData => {
        let result = {
          ...response,
          user: userData
        };
        console.log(result);
        setSignin(true);
        dispatch(
          AuthActions.signInSuccess({ ...userData, provider: "facebook" })
        );
      });
    } else {
      setSignin(false);
    }
  };

  return (
    <View>
      {!isSignin && (
        <Button title="Login With Facebook" onPress={facebookLogin} />
      )}
    </View>
  );
}

export default LoginFacebookButton;
