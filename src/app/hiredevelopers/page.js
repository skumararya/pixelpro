import React from 'react'
import Innerbanner from '../components/Innerbanner'
import Image from 'next/image';
export const metadata = {
  title: "Hire developer",
  description: "Hire developer",
};
const page = () => {
  return (
   <>
   <Innerbanner title={"Hire Developers"} />
   </>
  )
}

export default page
