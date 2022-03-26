import "./categoriesItem.css"
import axios from "axios";
import { useNavigate } from "react-router-dom"

const CategoriesItem = ({ categoriesData }) => {
    const navigate = useNavigate()

    const updateHandler = () => {
        navigate(`/addcategories/${categoriesData._id}`)
    }

    const deleteHandler = () => {

        const confirmBox = window.confirm("Do you really want to delete");

        if (confirmBox) {
            axios.delete(`http://localhost:5000/categories/${categoriesData._id}`)
                .then(res => alert("Data Deleted"))
                .catch(err => alert(err))
        }
    }


    return (
        <div className="container">
            <div className="itemLeft">
                <h1 className="task">{categoriesData.task}</h1>
                <p className="taskDetails">{categoriesData.taskDetails}</p>
            </div>
            <div className="itemRight">
                <button className="edit" onClick={updateHandler}>Edit</button>
                <button className="delete" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}
export default CategoriesItem