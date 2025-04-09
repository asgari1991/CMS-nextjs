import Courses from "@/components/templates/search/Courses";
import CoursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = ({courses}) => {
  return <Courses courses={courses} />;
  
};
export async function getServerSideProps(context) {
    const {query}=context
    console.log(query);
    
  connectToDB()
  const courses=await CoursesModel.find({title:{$regex:query.q}})
  return{
    props:{
      courses:JSON.parse(JSON.stringify(courses))
    }
}
}
export default index;
