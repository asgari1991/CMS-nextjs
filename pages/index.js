import Course from "@/components/templates/index/Course";
import CoursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = ({courses}) => {
  return <Course courses={courses} />;
};
export async function getStaticProps(context) {
  connectToDB()
  const courses=await CoursesModel.find({})
  return{
    props:{
      courses:JSON.parse(JSON.stringify(courses))
    },
    revalidate:60*60*12
}
}
export default index;
