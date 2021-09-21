import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as Yup from "yup";
import { Formik } from 'formik';

export default function ContactForm() {

    const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const sendAPI = (e) => {
        e.preventDefault;
        fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    
    }
    



    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "*Imię musi posiadać min 2 znaki")
            .max(20, "*Imię nie może przekraczać 20 znaków")
            .required("*Imię jest wymagane"),
        email: Yup.string()
            .email("*Email musi być ważny")
            .max(70, "*Email nie może posiadać więcej niż 70 znaków")
            .required("*Email jest wymagany"),
        message: Yup.string()
        .min(120, "*Wpisz minimum 120 znaków")
        .required("*Pole jest wymagane"),
    });
    return (
        <div className="container">
          <div className="contact-form-container" id="contact-form">
            
            
            
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
                       isSubmitting  }) => (
                    <div>
                        <h1 className="contact-form-header">Skontaktuj się z nami</h1>
                        <form className="contact-form"  onSubmit={handleSubmit}>
                    <div className="header-image"></div>
                    <div className="input-data">
                        <div className="contact-label"><label for="name">Wpisz swoje imię</label>
                        <input type="text" id="name" placeholder="Petro"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.name}/>
                        {errors.name && touched.name ? (
                                    <div style={{color: "red"}}>{errors.name}</div>
                                ) : null}</div>
                        <div className="contact-label"><label for="email">Wpisz swój email</label>
                        <input type="email" id="email" placeholder="mail@gmail.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}/>
                        {errors.email && touched.email ? (
                                    <div style={{color: "red"}}>{errors.email}</div>
                                ) : null}
                                </div>
                    </div>
                    <div className="contact-label">
                        <label for="message">Wpisz swoj wiadomość</label>
                        <textarea rows="7" cols="10" id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                         onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}/>
                         {errors.message && touched.message ? (
                                    <div style={{color: "red"}}>{errors.message}
                                    </div>
                                ) : null}
                    </div>
                    <div className="contact-form-btn"><button
                    type="submit"
                    // onClick={handleSubmit}
                    onClick={sendAPI}
                    >Wyślij</button></div> 
                    </form>
                   </div>
                )}
            </Formik>
            
             
             <footer className="footer">
                <h6>Copyright by Coders Lab</h6>
                <div className="social-media">
                <FontAwesomeIcon icon={faFacebookSquare} className="icon-user facebook" />
                <FontAwesomeIcon icon={faInstagram} className="icon-user instagram" />
                    </div>
            </footer>
         </div>  
        </div>
    )
}


