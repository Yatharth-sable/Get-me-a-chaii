    import mongoose  from "mongoose";
    import Email from "next-auth/providers/email";
    const {Schema,model} = mongoose;

    const userSchema = new Schema({
        email:{type:String,required:true},
        name:{type:String,},
        username:{type:String,required:true},
        profilepic:{type:String},
        razorpayid:{type:String},
        razorpaysecret:{type:String},
        coverpic:{type:String,},
    },{timestamps:true} )

    export default mongoose.models.User || model("User",userSchema);