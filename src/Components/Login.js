/** @format */

import React from "react";
import "./Login.css";
import firebase from "firebase";
import { auth, provider } from "../fire";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import yashwin from "../Assets/yashwin.png";
import kshitij from "../Assets/kshitij.jpg";
import pabitra from "../Assets/pabitra.jpeg";
import rahul from "../Assets/rahul.png";
import logo from "../Assets/Logo.png";
import Testimonials from "./TestimonialsName";
import FadeIn from "./FadeIn"

function Login() {
  const contri = [
    { pic: yashwin, text: "Yashwin" },
    { pic: kshitij, text: "Kshitij" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: yashwin, text: "Yashwin" },
    { pic: kshitij, text: "Kshitij" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: yashwin, text: "Yashwin" },
    { pic: kshitij, text: "Kshitij" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: yashwin, text: "Yashwin" },
    { pic: kshitij, text: "Kshitij" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
  ];

  const portraits = [
    { pic: kshitij, text: "Kshitij" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
    { pic: yashwin, text: "Yashwin" },
  ];

  const vel1 = 0;
  const vel2 = 25;

  const signIn = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        localStorage.setItem("isSignedIn", true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const useStyles = makeStyles({
    root: {
      width: 200,
      marginLeft: 50,
    },
    media: {
      height: 150,
    },
  });

  const classes = useStyles();

  return (
    <div className="login">
      <img id="logo" src={logo} />
      
      <div className='login__heading'>
        <h1>Hacking IIITD</h1>
        <h5>For the students, by the students</h5>
      </div>

      <div className='login__buttons'>
        <Button id="signIn" onClick={signIn}>Sign in with Google</Button>
        <Button id="guest">Join as a Guest</Button>
      </div>
      <div className='nameList'>
      <FadeIn delay={350} duration={1550}>
      <div className='login__creators'>
      <h5>Creators</h5>
        <Testimonials portraits={portraits} vel={vel1} scaleFactor={1.5}/>
      </div>
      </FadeIn>
      <FadeIn delay={1250} duration={1550}>
      <div className='login__testimonials'>
      <h5>Contributors</h5>
        <Testimonials id="contributors" portraits={contri} vel={vel2} scaleFactor={1}/>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}

export default Login;
