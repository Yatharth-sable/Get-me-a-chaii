import mongoose  from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(`mongodb+srv://sableyash10_db_user:h95X3cXhag9QxKUJ@chaicluster.xmja1uv.mongodb.net/chaii`,
            {
                useNewUrlParser:true,
            }
        )
        // console.log(`MongoDB connected: {conn.connection.host}`);
    } catch(err){
        console.log("err.message")
        process.exit(1);
    }
}

export default connectDB;
