import CoursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    if (req.query.q) {
      const {q}=req.query
      const courses=await CoursesModel.find({title:{$regex:q}})
      res.json(courses)
    } else {
      const courses = await CoursesModel.find({});

      return res.json(courses);
    }
  } else if (req.method === "POST") {
    try {
      const { title } = req.body;
      if (!title.trim() || title.length < 5) {
        return res.status(422).json({ message: "Title is not valid" });
      }

      await CoursesModel.create({ title });
      return res.status(201).json({ message: "Course created successfully" });
    } catch (err) {
      return res.status(500).json({ message: "Unknown internal Server Error" });
    }
  }
};

export default handler;
