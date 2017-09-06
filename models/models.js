const mongoose = require('mongoose');



const StudentSchema = new mongoose.Schema({
})



const Student = mongoose.model('Student', StudentSchema);


module.exports = {
  Student
}
