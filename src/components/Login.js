
import React, {useRef, useState} from "react";
import Navigation from "./Navigation";
import * as Yup from "yup";
import { Formik } from 'formik';

export default function Login() {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("*Email musi być ważny")
            .required("*Email jest wymagany"),
        password: Yup.string()
        .min(6, "*haslo musi posiadac min 6 znakow")
        .required("*Pole jest wymagane"),
    });
    return (
        <div className="container">
            <Navigation/>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
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
                        <h1>Zaloguj sie</h1>
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
                        <input type="password" id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}/>
                        {errors.password && touched.password ? (
                                    <div style={{color: "red"}}>{errors.password}</div>
                                ) : null}
                                </div>
                        </form>
                        <div className="login-btns">
                                <a href="/signup" className="signup-btn">Zaloz konto</a>
                                <button type="submit" 
                                className="login-btn" 
                                style={{marginLeft: "200px"}}
                                onClick={handleSubmit}>Zaloguj sie</button>
                            </div>
        
                    </div>
                       )}
            
            </Formik>
        </div>
    
    )
}
