import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
const CoursesItem = ({ title, _id ,image}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);
  const deleteHandler = async() => {
    const res =await fetch(`/api/courses/${_id}`,{
      method:'DELETE'
    });
    const data=await res.json()
    if(res.status===200){
      setShowDeleteModal(false)
      swal({
        title:"دوره مورد نظر با موفقیت حذف شد",
        icon:"success",
        buttons:"اوکی"
      })
    }
  };
  const editHandler=async(event,title)=>{
    event.preventDefault()
    const res =await fetch(`/api/courses/${_id}`,{
      method:'PUT',
      headers:{
        "Content-Type":"application/json",
        
      },
      body:JSON.stringify({title})
    });
    const data=await res.json()
    if(res.status===200){
      setShowEditModal(false)
      swal({
        title:"دوره مورد نظر با موفقیت بروزرسانی شد",
        icon:"success",
        buttons:"اوکی"
      })
      
    }
  }
  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src={image}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li>
      {showEditModal && <EditModal hideEditModal={hideEditModal} editHandler={editHandler} />}
      {showDeleteModal && (
        <DeleteModal
          hideDeleteModal={hideDeleteModal}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
};

export default CoursesItem;
