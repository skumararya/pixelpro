
import { NextResponse } from 'next/server';
import connectDB from '../../../config/database';
import Message from '../../../models/Message';

export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData(); // Parse form data

    // Extract fields from formData
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const comapany = formData.get('comapany');
    const description = formData.get('description'); 

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const newMessage = new Message({
      name,
      email,
      phone,
      comapany,
      description,
      
    });
    await newMessage.save();
    return NextResponse.json({ message: 'Message Sent' }, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}



 


export const GET = async(request) =>{
  try{
   await connectDB();
   const allmessage = await Message.find({});
    // console.log('this is my first response')
return new Response(JSON.stringify(allmessage) , {status:200});
  } catch(err){
    console.log(err);
    return new Response('Something went worng', {status:500});
  }
}