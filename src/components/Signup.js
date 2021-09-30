
import React, { useRef, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase"
import Navigation from './Navigation';
import * as Yup from "yup";
import { Formik } from 'formik';
// import app from '../firebase'


export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
  
    const register = () => {

      registerWithEmailAndPassword( email, password);
    };
  
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/dashboard");
    }, [user, loading]);
   

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("*Email musi być ważny")
            .required("*Email jest wymagany"),
        password: Yup.string()
        .min(6, "*haslo musi posiadac min 6 znakow")
        .required("*Pole jest wymagane"),
        changepassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Hasła musza być takie same"
            )
          })
    });



    return (
        <div className="container">
            <Navigation/>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    changepassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {({ values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                        }) => (
                            <div className="login-container">
                        <h1>Zaloz konto</h1>
                        <div className="header-image"></div>
                        <form className="login-form">
                        <div className="contact-label"><label for="email">Email</label>
                        <input type="email" id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                       
                        {!errors.email && touched.email ? (
                                    <div style={{color: "red"}}>{errors.email}</div>
                                ) : null}
                                
                                </div>
                                <div className="contact-label"><label for="password">Haslo</label>
                                <input
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
            value={values.password}

              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
                        {!errors.password && touched.password ? (
                                    <div style={{color: "red"}}>{errors.password}</div>
                                ) : null}
                                </div>
                                <div className="contact-label"><label for="password">Powtorz haslo</label>
                                <input
              type="password"
              name="changepassword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.changepassword}
            />
                        {!errors.changepassword && touched.changepassword ? (
                                    <div style={{color: "red"}}>{errors.changepassword}</div>
                                ) : null}
                                </div>

                        </form>
                        <div className="login-btns">
                        <a href="/login" 
                                className="signup-btn" 
                                style={{marginRight: "200px"}}
                                >Zaloguj sie</a>
                                <button type="submit" className="signup-btn" 
                                onClick={handleSubmit}
                                onClick={register}
                                >Zaloz konto</button>
                            </div>
                        </div>
                        )}
                        </Formik>
        </div>
    )
}


