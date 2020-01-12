import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthActions from "../../Stores/Auth/Actions";
import { View, StyleSheet, Platform } from "react-native";
import { Button, Input, Text, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Helpers, Fonts, Colors } from "../../Theme";
import NavigationService from "../../Services/NavigationService";
import LoginGoogleButton from "./Components/LoginGoogleButton";
import LoginFacebookButton from "./Components/LoginFacebookButton";

function Login() {
  const styles = StyleSheet.create({
    loginForm: {
      backgroundColor: "white",
      marginLeft: 15,
      marginRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      // height: hp(60),
      borderRadius: 10
    },
    containerInput: {
      marginBottom: 15,
      borderWidth: 1,
      borderColor: Colors.mediumGreen,
      borderRadius: 5
    },
    inputContainerStyle: {
      borderBottomWidth: 0
    },
    containerStyleCheckbox: {
      backgroundColor: "white",
      borderWidth: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginBottom: 0
    },
    titleStyle: {
      fontSize: 14
    }
  });

  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [form, setForm] = useState({
    isRemember: false,
    username: "",
    password: "",
    provider: "form"
  });

  const { auth } = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      NavigationService.navigateAndReset("Home");
    }
  }, [auth]);

  const signin = () => {
    if (form.username === "" || form.password === "") {
      usernameInputRef.current.shake();
      passwordInputRef.current.shake();
      return;
    }
    dispatch(AuthActions.signInSuccess(form));
  };

  const renderForm = () => (
    <React.Fragment>
      <View styles={[]}>
        <Text style={Fonts.h1}>Login</Text>
      </View>
      <View style={[Helpers.column, { width: "90%", paddingTop: 10 }]}>
        <Input
          ref={usernameInputRef}
          containerStyle={styles.containerInput}
          inputContainerStyle={styles.inputContainerStyle}
          underlineColorAndroid="transparent"
          placeholder="username"
          onChangeText={text => {
            setForm({
              ...form,
              username: text
            });
          }}
          value={form.username}
          leftIcon={
            <Icon name="user" size={15} color="gray" className="input-icon" />
          }
          className="input"
        />

        <Input
          ref={passwordInputRef}
          labelStyle={Fonts.medium}
          inputStyle={Fonts.medium}
          containerStyle={styles.containerInput}
          inputContainerStyle={styles.inputContainerStyle}
          underlineColorAndroid="white"
          secureTextEntry
          placeholder="password"
          onChangeText={text => {
            setForm({
              ...form,
              password: text
            });
          }}
          value={form.password}
          leftIcon={
            <Icon name="lock" size={15} color="gray" className="input-icon" />
          }
          className="input"
        />
        <View
          style={[Helpers.row, Helpers.mainSpaceBetween, Helpers.fullWidth]}
        >
          <CheckBox
            title="Remember Me"
            containerStyle={styles.containerStyleCheckbox}
            checked={form.isRemember}
            onIconPress={() => {
              console.log(usernameInputRef.current);
              setForm({
                ...form,
                isRemember: !form.isRemember
              });
            }}
          />
          <Button
            titleStyle={styles.titleStyle}
            title="Sign In"
            onPress={signin}
            className="btn"
          />
        </View>
      </View>
    </React.Fragment>
  );

  return (
    <View style={[Helpers.fill, Helpers.colMain]}>
      <View style={[Helpers.center, styles.loginForm]}>
        {renderForm()}
        <View style={{ marginTop: "50px" }}>
          <LoginGoogleButton />
          <LoginFacebookButton />
        </View>
      </View>
    </View>
  );
}

export default Login;
