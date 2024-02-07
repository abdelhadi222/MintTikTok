import "../Sing/Sing.css"
import  imaTikTok from "../../Images/tiktokImageNew.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddUser } from "../../redux/actions/Data";
import { Link, useNavigate } from "react-router-dom";

export default function Sing() {

     let dispatch = useDispatch()
     let [test,setTest] = useState(false)
        let [vd,setVD] = useState('')
     let [tk,setTk] = useState('')
    let stateUsers = useSelector(state => state.users)
    let stateUserCnx = useSelector(state => state.UserCnx)
    let token = []
    let nav  =useNavigate()
    let tok = "A66YTIUEFhsgdhdgh65E6BOOJDHJJfdfFDtTvhLJHJD873FVV3CSEKEC74V7VVVhdRVRVVjhdjHKghGfT09DHEJFCKaz"

  function tooo() {
      for (let i = 0; i < 100; i++) {
                let rand = Math.floor(Math.random() * tok.length)
                token.push(tok[rand])
               }

  }

  useEffect(()=>{

     if( Array.isArray(stateUsers) && stateUsers.length > 0 ){
                    let h = stateUsers.filter((e)=> e.token == tk)
    
               if(h.length > 0) {
                 window.localStorage.setItem('Token',h[0].token )
                      nav('/')
               }
     }
  
  },[test])
//   useEffect(()=>{
//      tooo()
//   },[])
    console.log('ALl User = ' , stateUsers);
   
        let [email,setEmail] = useState('')
        let [password,setPassword] = useState('')
        let [name,setName] = useState('')

        function sendData(em , pas , na  ) {
            tooo()
            setTk(token.join(''))

              let chck =  Array.isArray(stateUsers)  &&   stateUsers.length >0 && stateUsers.some((user) => user.email == email )
               if(chck){
                alert('Email Is Readt Exsit')
                return
            }
                
                dispatch(AddUser(em,pas,na,token.join('')))
                let y = window.localStorage.getItem('Users')
                window.localStorage.setItem('Users' , parseInt(y) + 1 )
                setTest(p=>!p)
           
    
        }

    const imageOnChange = (e) => {
    //   setNewLogo(e.target.files[0])
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (ev) => {
            return setVD(ev.target.result);
        };
    };

     return(
           <div className="Sing">

            <div className="BoxSing">
                 <div style={{textAlign:'center',marginTop:'20px', marginBottom:'20px'}}><img src={imaTikTok} alt="" style={{width:'30Px',height:'30px', borderRadius:'50%'}} /></div>
                 <h2 style={{marginBottom:'20px'}}>Register</h2>

                 <div>

                    <div className="BoxInp">
                        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  />
                    </div>

                    <div className="BoxInp">
                        <input type="text" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="BoxInp">
                          <input type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                 </div>

                 <div className="Button" onClick={()=>sendData(email , password , name, token.join('') )}><button> <FontAwesomeIcon icon={faPaperPlane} style={{marginRight:'15px'}} beat /> Send</button></div>
                  
                  <Link to={'/login'}>Login in your Account</Link>
              

            </div>
            
        </div>
     )
}