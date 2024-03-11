import mongoose, { mongo } from "mongoose";

async function connectaBanco(){

    mongoose.connect('mongodb://enderson:14072002@localhost:27017/admin')

    return mongoose.connection

}


export default connectaBanco