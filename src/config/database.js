import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  if (connected) {
    console.log('MongoDB is already connected.');
    return;
  }

  try {
    const uri = "mongodb+srv://skumararyaarya:nityasatish@cluster0.vbwix5m.mongodb.net/laradata"; 
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    connected = true;
    console.log('MongoDB connected...'); 
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
