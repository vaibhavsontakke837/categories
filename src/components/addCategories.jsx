import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import "./addCategories.css"

const AddCategories = () => {
    const [item, setItem] = useState();
    const navigate = useNavigate()
    const { userId } = useParams()

    //post data in database
    const data = {
        task: item,
        taskDetails: ""
    }
    const addCategories = (e) => {
        e.preventDefault();
        alert("hiii")
        axios.post("http://localhost:5000/categories", data)
            .then(res => {
                alert("Data Submitted");
                navigate("/")
            })
            .catch(err => alert(err))
    }

    //update data in database
    useEffect(() => {
        axios.get(`http://localhost:5000/categories/${userId}`)
            .then(res => {
                setItem(res.data[0].task)
                // console.log(item)
            })
    }, [])

    const updateDetails = (e) => {
        e.preventDefault()
        const data = {
            task: item,
        }

        axios.put(`http://localhost:5000/categories/${userId}`, data)
            .then(res => {
                alert("Data Updated");
                navigate("/")
            })
            .catch(err => alert(err))
    }
    //     const newCategory = {
    //       id: Math.random().toString(36).slice(2),
    //       task: item,
    //       taskDetails:Math.random().toString(36).slice(2)
    //     };
    //     setData([...data, newCategory]);
    //     localStorage.setItem("categoriesData",JSON.stringify(data))
    //     // navigate("/")
    //     // console.log(JSON.parse(localStorage.getItem("categoriesData")))   
    //     // console.log(JSON.parse(localStorage.getItem("categoriesData")))
    return (
        <div className="add">
                <input type="text" placeholder="add your categories" value={item} onChange={(e) => setItem(e.target.value)} />
                <div className="buttons">
                    <button className="addButton" onClick={addCategories}>Add</button>
                    <button className="updateButton" onClick={updateDetails}>Update</button>
                </div>
        </div>
    )
}
export default AddCategories