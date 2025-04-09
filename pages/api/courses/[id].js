import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "DELETE") {
    const { id } = req.query;
    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndDelete({ _id: id });
        return res.json({ messege: "Course removed successfully" });
      } catch (error) {
        return res.status(500).json({ messege: "Internal Server Error" });
      }
    } else {
      return res.status(422).json({ messege: "Course ID is not valid" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const {title}=req.body
    if (isValidObjectId(id)) {
        try {
            await coursesModel.findOneAndUpdate({_id:id},{title})
        return res.json({ messege: "Course updated successfully" });
          } catch (error) {
            return res.status(500).json({ messege: "Internal Server Error" });
          }
        
      
    } else {
      return res.status(422).json({ messege: "Course ID is not valid" });
    }
  }
};
export default handler;
