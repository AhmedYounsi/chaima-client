const mongoose = require('mongoose');
const UserShema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    minlength: 5,
  },
  date_naissance: {
    type: String,
    required: true,
  },

  tel: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },

  office: {
    type: Schema.Types.ObjectId,
    ref: 'Office',
    required: true,
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: 'PostTitle',
    required: true,
  },
  reportsTo: {
    type: String,
  },

  typeContrat: {
    type: String,
    required: true,
  },

  from: {
    type: Date,
  },
  created_at: {
    type: String,
  },
});

const User = mongoose.model('User', UserShema);

module.exports = User;
