import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    lastName: {
          type: String,
          required: [true, 'Last name is required'],
          trim: true,
    },
    favoriteColor: {
         type: String,
         trim: true,
    },
    birthday: {
       type: Date,
    },
    createdAt : {
        type: Date,
        default: Date.now(),
    }
});



const Contact = mongoose.model('Contact', contactSchema);

export default Contact;