const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    },
},{ timestamps: true })

UserSchema.pre('save', async function pass(next){
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password,salt)
    this.password=hash
    next()
})

UserSchema.methods.comparePassword = async function check(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch;
}

module.exports = mongoose.model('User',UserSchema)