var mongoose = require('mongoose');
const {
  DateTime
} = require("luxon");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maxLength: 100
  },
  family_name: {
    type: String,
    required: true,
    maxLength: 100
  },
  date_of_birth: {
    type: Date
  },
  date_of_death: {
    type: Date
  },
});

// Virtual for author's full name
AuthorSchema
  .virtual('name')
  .get(function () {
    return this.family_name + ', ' + this.first_name;
  });

// Virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function () {
    return '/catalog/author/' + this._id;
  });

AuthorSchema
  .virtual('lifespanini')
  .get(function () {
    let life_str = '( ';
    this.date_of_birth ? life_str += DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : life_str += '';
    life_str += ' - ';
    this.date_of_death ? life_str += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : life_str += '';
    life_str += ' )';
    return life_str;
  });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);