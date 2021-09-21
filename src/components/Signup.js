import React, {useRef, useState} from 'react';
import Navigation from './Navigation';
import * as Yup from "yup";
import { Formik } from 'formik';

export default function Signup() {

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
              "Both password need to be the same"
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
                        value={values.email}/>
                        {errors.email && touched.email ? (
                                    <div style={{color: "red"}}>{errors.email}</div>
                                ) : null}
                                </div>
                                <div className="contact-label"><label for="password">Haslo</label>
                                <input type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}/>
                        {errors.password && touched.password ? (
                                    <div style={{color: "red"}}>{errors.password}</div>
                                ) : null}
                                </div>
                                <div className="contact-label"><label for="password">Powtorz haslo</label>
                        <input type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.changepassword}/>
                        {errors.changepassword && touched.changepassword ? (
                                    <div style={{color: "red"}}>{errors.changepassword}</div>
                                ) : null}
                                </div>

                        </form>
                        <div className="login-btns">
                        <a href="/login" 
                                className="signup-btn" 
                                style={{marginRight: "200px"}}
                                >Zaloguj sie</a>
                                <button type="submit" className="signup-btn" onClick={handleSubmit}>Zaloz konto</button>
                            </div>
                        </div>
                        )}
                        </Formik>
        </div>
    )
}


