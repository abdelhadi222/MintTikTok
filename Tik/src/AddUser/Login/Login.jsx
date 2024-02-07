import "../Login/Login.css"
import  imaTikTok from "../../Images/tiktokImageNew.png"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
export default function Login() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let nav = useNavigate('')

    let stateUsers = useSelector(state => state.users)
    let stateUserCnx = useSelector(state => state.UserCnx)

    function chck() {
        let y = stateUsers.filter((e)=>{
          return e.email == email
        })

        console.log('r',y);
        if(y.length == 0) {
            alert('You have not Account ')
            return
        }

        if(y[0].password != password ) {
            alert('Your Password Is Wong')
            return
        }
        window.localStorage.setItem('Token',y[0].token)
        nav('/')
        
    }
   
     return(
        <div className="Login">

            <div className="BoxLogin">
             
                 <div style={{textAlign:'center',marginTop:'20px', marginBottom:'20px'}}><img src={imaTikTok} alt="" style={{width:'40Px',height:'40px', borderRadius:'50%'}} /></div>
                      <h2 style={{marginBottom:'20px'}}>Login  </h2>

                 <div>

                    <div className="BoxInp">
                        <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>

                    <div className="BoxInp">
                          <input type="password" placeholder="password"   value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                 </div>

                 <div className="Button" onClick={chck}><button> <FontAwesomeIcon icon={faPaperPlane} style={{marginRight:'15px'}} beat />Send</button></div>

                 
                  <Link to={'/sing'}>Creat Account ?</Link>
            </div>
            
        </div>
     )
}