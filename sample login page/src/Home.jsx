import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Home = () =>{
    return (
        <div> 
            <h1>welcome to the home page dear...................</h1>
            <button onClick={()=> auth.signOut()}>Sign Out</button>
        </div>
    )

}
export default Home;
