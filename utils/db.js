const { default: mongoose } = require("mongoose")

const connectToDB=async ()=>{
    try {
        if (mongoose.connections[0].readyState) {
            return false
        }else{
            await mongoose.connect('mongodb://localhost:27017/next-cms')
            console.log("Connected to DB ");
            
        }
    }catch(err){
console.log("DB Connection Error=>",err);

    }
    
  
}

export default connectToDB