import React, { forwardRef, useState } from 'react'
import './contact.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Modal from './modal'

const Contact = forwardRef((props, refw) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().required("Required").email("Please enter a valid email"),
    message: yup.string().min(25, "Message must be at least 25 characters long").required("Required")
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  })

  const [visible, setVisible] = useState(false)

  const close = () => setVisible(false)
  const open = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setVisible(true);
      setIsSubmitting(false);
      formik.resetForm()
    }, 800);
  }

  const isSubmitDisabled = !formik.isValid || !formik.dirty || formik.isSubmitting;

  return (
    <div  ref={refw} className='pb-24'>
      <div className='font-bold text-7xl text-center pb-12'>Let's Work Together</div>
      <form>
        <label htmlFor='name'></label>
        <input 
          value={formik.values.name} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          id='name' 
          type='text' 
          placeholder='Your Name' 
          className={formik.errors.name && formik.touched.name ? "input-error" : ""}
        />
        {formik.errors.name && formik.touched.name && <p className='error text-sm'>{formik.errors.name}</p>}

        <label htmlFor='email'></label>
        <input 
          value={formik.values.email} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          id='email' 
          type='text' 
          placeholder='Your Email' 
          className={formik.errors.email && formik.touched.email ? "input-error" : ""}
        />
        {formik.errors.email && formik.touched.email && <p className='error text-sm'>{formik.errors.email}</p>}

        <label htmlFor='message'></label>
        <input 
          value={formik.values.message} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          id='message' 
          type='text' 
          placeholder='Your Message' 
          className={formik.errors.message && formik.touched.message ? "input-error" : ""}
        />
        {formik.errors.message && formik.touched.message && <p className='error text-sm'>{formik.errors.message}</p>}
        
        <button 
          disabled={isSubmitDisabled || isSubmitting} 
          onClick={open} 
          className='modal-close-button mt-8'>
            {isSubmitting && <div className="spinner"></div>}
            {isSubmitting ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {visible && <Modal close={close} />}
    </div>
  )
})

export default Contact
