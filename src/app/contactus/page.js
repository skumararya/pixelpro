import React from 'react'
import Innerbanner from '../components/Innerbanner'
import ContactForm from '../components/ContactForm'
import connectDB from '@/config/database'

const page = async () => {
  await connectDB();
  return (
    <>
    <Innerbanner title={"Contact Us"}/>
      <ContactForm />
    </>
  )
}

export default page
