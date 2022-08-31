import { StyleSheet, Text, View, Button, Platform } from "react-native";
import React from "react";
import { theme } from "./src/constants/theme";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk-next";
import appleAuth, {
  appleAuthAndroid,
} from "@invertase/react-native-apple-authentication";
const App = () => {
  const onPress = () => {
    GoogleSignin.configure({
      // androidClientId: androidClientId,
      iosClientId:
        "194173652108-hteh4q890qq0ogasurnadtn94s4fl8kj.apps.googleusercontent.com",
      // offlineAccess: true,
      // offlineAccess: true,
      // webClientId: webClientId,
      androidClientId:
        "194173652108-865ltkk1flq0p89q22n6qdd54c5l4t07.apps.googleusercontent.com",
    });
    GoogleSignin.hasPlayServices()
      .then((hasPlayService) => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then((userInfo) => {
              console.log("userInfo", userInfo);
            })
            .catch((e) => {
              console.log("DevErrs", e);
            });
        }
      })
      .catch((e) => {
        console.log("eeee", e);
      });
  };
  const getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: "id,name,first_name,last_name,email",
      },
    };
    const profileRequest = new GraphRequest(
      "/me",
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, user) => {
        if (error) {
          console.log("login info has error: " + error);
        } else {
          console.log("result:", user);
          const body = {
            email: user.email,
            facebook_id: user.id,
            type: "facebook",
            password: "password",
            confirm_password: "password",
          };
          dispatch(actions.signupUserRequest(body));
        }
      }
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  const logInWIthFb = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else {
          // console.log(
          //   "==> Login success with permissions: " +
          //     result.grantedPermissions.toString()
          // );
          // console.log(result);
          AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
            console.log("accessToken", accessToken);
          });
        }
      },
      function (error) {
        console.log("==> Login fail with error: " + error);
      }
    );
  };
  const appleLogin = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      console.log("appleAuthRequestResponse", appleAuthRequestResponse);
    } catch (error) {
      console.log("error", error);
    }
    s;
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button title="SigIn with googles" onPress={() => onPress()} />
      <Button title="SigIn with Facebook" onPress={() => logInWIthFb()} />
      {Platform.OS === "ios" && (
        <Button title="SigIn with Apple" onPress={() => appleLogin()} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
