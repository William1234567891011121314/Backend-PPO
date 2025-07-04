import mongoose, { Schema, Document } from 'mongoose'

const userSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
export default mongoose.model('Users', userSchema)