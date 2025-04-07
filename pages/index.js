import Course from "@/components/templates/index/Course";
import CoursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = () => {
  return <Course />;
};
export async function getStaticProps(context) {
  connectToDB()
  const courses=await CoursesModel.find({})
  return{
    props:{}
  }
}
export default index;
