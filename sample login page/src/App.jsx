import UserAuth from "./UserAuth"
import { useEffect, useState } from "react"
import { auth } from "./firebase"
import Home from "./Home"

const App = () => {
  const [presentUser, setPresentUser] = useState(null)
  // this use effect will show the  which user is logged in  the browser console
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user.uid,
          email: user.email,
          
        });
      } else {
        setPresentUser(null)
      }
    });
  }, []);
  return (
    <div>
      <center>
      <h2> USER PROFILE </h2>
      {presentUser ? <Home/> : <UserAuth/>}
       
      </center>
    </div>
  )
}
export default App