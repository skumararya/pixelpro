"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import qs from 'qs';

const PopupForm = () => {
  const [showpopup, setshowpopup] = useState(false);

  const toggleModal = () => {
    setshowpopup(!showpopup);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      comapany: '',
      phone: '',
      email: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full Name is required'),
      comapany: Yup.string().required('Company Name is required'),
      phone: Yup.string().required('Phone is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      description: Yup.string().max(500, 'Description must be 500 characters or less'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/messages',
          qs.stringify(values),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
        );
        alert('Query sent successfully. We will reach you shortly.');
        console.log(response);
        resetForm();
      } catch (error) {
        console.error('Error sending description', error);
        alert('Failed to send description');
      }
    },
  });

  const handleInputChange = (e) => {
    formik.handleChange(e);
    if (e.target.value) {
      e.target.classList.add('hasValue');
    } else {
      e.target.classList.remove('hasValue');
    }
  };

  const handleInputBlur = (e) => {
    formik.handleBlur(e);
    if (e.target.value) {
      e.target.classList.add('hasValue');
    } else {
      e.target.classList.remove('hasValue');
    }
  };

  return (
    <>
      <a href="#" onClick={toggleModal} className="commonBtn floatBtnRight popupOpen">
        <span className="btnWrap">
          <i className="fa fa-phone"></i>
          <span className="btnText">Talk to Expert</span>
        </span>
      </a>
      {showpopup && (
        <div className="schduleCall popupWrap" id="schduleCallPop1">
          <div className="popupWrapInnerWrap">
            <h2>Reach Us</h2>
            <a href="#" onClick={toggleModal} className="closePopBtn"> 
              <i className="fa fa-remove"></i>
            </a>
            <div className="popupContent">
              <div className="colsBlockRow cf">
                <div className="colsBlock popupformsWrap1 getInTouch">
                  <h3>Basic Details</h3>
                  <div className="getInTouchFormOuter">
                    <form id="getInTouchForm" onSubmit={formik.handleSubmit}>
                      <div className="feildRow cf">
                        <div className="feildCol">
                          <div className="feildInput">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formik.values.name}
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                              placeholder="Full Name"
                            />
                            <label htmlFor="name">
                              Full Name <em>*</em>
                            </label>
                            {formik.touched.name && formik.errors.name ? (
                              <div className="error">{formik.errors.name}</div>
                            ) : null}
                            <i className="fa fa-user"></i>
                          </div>
                        </div>
                        <div className="feildCol">
                          <div className="feildInput">
                            <input
                              type="text"
                              id="comapany"
                              name="comapany"
                              value={formik.values.comapany}
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                              placeholder="Company Name"
                            />
                            <label htmlFor="comapany">
                              Company/Organization <em>*</em>
                            </label>
                            {formik.touched.comapany && formik.errors.comapany ? (
                              <div className="error">{formik.errors.comapany}</div>
                            ) : null}
                            <i className="fa fa-building"></i>
                          </div>
                        </div>
                      </div>
                      <div className="feildRow cf">
                        <div className="feildCol">
                          <div className="feildInput">
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              value={formik.values.phone}
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                              placeholder="Phone"
                            />
                            <label htmlFor="phone">
                              Phone <em>*</em>
                            </label>
                            {formik.touched.phone && formik.errors.phone ? (
                              <div className="error">{formik.errors.phone}</div>
                            ) : null}
                            <i className="fa fa-phone"></i>
                          </div>
                        </div>
                        <div className="feildCol">
                          <div className="feildInput">
                            <input
                              type="text"
                              id="email"
                              name="email"
                              value={formik.values.email}
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                              placeholder="Email"
                            />
                            <label htmlFor="email">
                              Email <em>*</em>
                            </label>
                            {formik.touched.email && formik.errors.email ? (
                              <div className="error">{formik.errors.email}</div>
                            ) : null}
                            <i className="fa fa-at"></i>
                          </div>
                        </div>
                      </div>
                      <div className="feildRow cf fullWidth messageFeild">
                        <div className="feildCol">
                          <div className="feildInput">
                            <textarea
                              id="description"
                              name="description"
                              value={formik.values.description}
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                              maxLength="500"
                              placeholder="Message"
                            />
                            <label htmlFor="description">Message</label>
                            {formik.touched.description && formik.errors.description ? (
                              <div className="error">{formik.errors.description}</div>
                            ) : null}
                            <i className="fa fa-envelope-o"></i>
                          </div>
                        </div>
                      </div>
                      <div className="btnRowWithCaptch1 cf">
                        <div className="btnRight">
                          <button className="commonBtn contactFormBtn" type="submit">
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupForm;
