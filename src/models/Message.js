// models/Message.js

import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'], // Added required validation
    },
    email: {
      type: String,
      required: [true, 'Email is required'], // Added required validation
    },
    phone: {
      type: String,  
    },
    comapany: { 
      type: String,
    },
    description: {
      type: String,
    },
   
  },
  {
    timestamps: true,
  }
);

const Message = models.Message || model('Message', MessageSchema);

export default Message;
