import image from "../assets/image.jpg"
import { Link } from "react-router-dom"
import Login from "./Login"
const PageNotFound = () =>{
    return (
        <div>
            <h1>
                This page is not found error 404.
            </h1>
            <img className="w-100" src={image} alt="404" />
            <Link to="/Login">Login</Link>
        </div>
    )
}

export default PageNotFound
