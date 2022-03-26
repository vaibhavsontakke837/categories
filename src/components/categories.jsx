import CategoriesItem from "./cateroriesItem"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./categories.css"
import { useState } from "react"
import { useEffect } from "react"
import {GoDiffAdded} from "react-icons/go"
import MenuIcon from '@mui/icons-material/Menu';
import Img from "./headerImg.jpeg"

const Categories = () => {

    // const navigate=useNavigate()

    const data = [
        {
            id: "1",
            task: "Personal",
            taskDetails: "12 Tasks"
        },
        {
            id: "2",
            task: "Shopping",
            taskDetails: "19 Tasks"
        },
        {
            id: "3",
            task: "Sport",
            taskDetails: "2 Tasks"
        },
        {
            id: "4",
            task: "Event",
            taskDetails: "5 Tasks"
        },
        {
            id: "5",
            task: "Five",
            taskDetails: "6 Tasks"
        }
    ]
    const [oldData, setOldData] = useState(data)
    const [categoriesData, setCategoriesData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/categories")
            .then(res => {
                setCategoriesData(res.data)
                // console.log(categoriesData)
            })
            .catch(err => alert(err))
    }, [])
    // const[receiveData,setReceiveData]=useState()
    // const[categoriesData,setCategoriesData]=useState(data)
    // useEffect(async ()=>{
    //     setReceiveData(await JSON.parse(localStorage.getItem("categoriesData")))
    //     setCategoriesData([categoriesData,  ... await receiveData])
    //     console.log("categories Data",categoriesData)
    //     // console.log( "received Data",receiveData)
    // },[])

    const catItems = categoriesData.map((row) => {
        return <CategoriesItem categoriesData={row} key={row._id} />
    });

    return (
        <div className="containers">
            <div className="header">
                <MenuIcon />
                <h1>Categories</h1>
                <GoDiffAdded className="addIcon"  onClick={() => navigate("/addcategories")} className="addCategories" />
            </div>
            <img src={Img} alt="img" className="imgHeader" />
            {catItems}

        </div>
    )
}
export default Categories;