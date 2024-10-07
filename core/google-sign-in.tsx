import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { Button } from "tamagui";

GoogleSignin.configure({
  webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
  iosClientId: process.env.GOOGLE_IOS_CLIENT_ID,
});

export default function GoogleSigninButton() {
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const userInfo = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.data!.idToken
    );

    return auth().signInWithCredential(googleCredential);
  }
  return (
    <Button
      onPress={() =>
        onGoogleButtonPress().then(() => console.log("Signed in with Google!"))
      }
    >
      Google signin
    </Button>
  );
}
