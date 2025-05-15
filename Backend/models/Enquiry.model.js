import mongoose from "mongoose";

const enquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (value) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Allows numbers with optional '+', spaces, and dashes
        const phoneRegex = /^\+?[1-9][0-9\s\-]{9,19}$/;
        return phoneRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number.`,
    },
  },
  contact_purpose:{
    type:String,
    enum:["Free Consultation", "Want to Collaborate", "Have a Project",]
  }
});
