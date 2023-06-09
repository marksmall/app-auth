import mongoose from 'mongoose';

/**
 * Connect to the mongodb instance defined in the Environment Variable
 * DB_URI.
 */
export const connectToDB = async () => {
  if (!process.env.DB_URI) {
    throw new Error('DB Environment Variable not specified');
  }

  mongoose.set('strictQuery', false);

  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to Database');
  } catch (error) {
    console.log('Mongoose connection error: ', error);
    process.exit(1);
  }
};
