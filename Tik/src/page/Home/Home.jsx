import "../Home/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquarePlus , faHeart, faBan ,faRightFromBracket ,faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddUser, AddVd, Block, Like } from "../../redux/actions/Data";
import { useNavigate } from "react-router-dom";
export default function Home() {

    let [showAdd,setShowAdd] = useState(false)
    let [user,setUser] = useState('')
    let [vd,setVd] = useState(false)
      let [filterVd,setFilterVd] = useState([])
     let [relode,setRelode] = useState(false)
    let [idVBan,setIdVBan] = useState(false)
    let [va,setVa] = useState({})
     let [showBan,setShowBan] = useState(false)
    let [s,setS] = useState(false)
    let [allVd,setAllVd] = useState([])
    let nav = useNavigate()

     let stateUser = useSelector(state => state.users)
     let stateVd = useSelector(state => state.Vd)
     let stateUserCnx = useSelector(state => state.UserCnx)
     let dispatch = useDispatch()
     console.log('State is ' , stateUser);

     useEffect(()=>{
           alert('Welcome Please Enter Small-Sized Videos Qo they Can e saved')
     },[])

    //  console.log('Vd' , vd);

    // useEffect(()=>{
    //  if(localStorage.getItem('AllVd')){
    //     let vi = JSON.parse(window.localStorage.getItem('AllVd'))
        
    //     let gg = vi.filter((e)=>{
    //          return e.block != window.localStorage.getItem('Token')
    //     })

    //    setAllVd(gg)
    //  }
    // },[relode])

    useEffect(()=>{
       if(stateVd.length > 0) {
          let gg = stateVd.filter((e)=>{
             return e.block != window.localStorage.getItem('Token')
        })
        setAllVd(gg)
       }
    },[relode])

    console.log('fhfhfvjv' , stateVd);



     function addVd() {
        document.querySelector('.k').classList.add('P')
        setShowAdd(true)
     }


         const imageOnChange = (e) => {

        //  let y  =  URL.createObjectURL(e.target.files[0])
        //  let date = new Date()

        //  window.localStorage.setItem('ii',`localhost:5173/${date}/${y}`)

      setVa(e.target.files[0])
      setS(true)
      
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (ev) => {
            return setVd(ev.target.result);
        };
    };

    

    useEffect(()=>{
        setUser(stateUser.filter((e)=>e.token == window.localStorage.getItem('Token')))
    },[relode])
console.log('USER cnx ' , user);


    function sendToRedux(vda) {



        let idV = parseInt(window.localStorage.getItem('Vd')) + 1
        dispatch(AddVd(vda,idV,window.localStorage.getItem('Token')))
        setShowAdd(false)
        document.querySelector('.k').classList.remove('P')
        window.localStorage.setItem('Vd',parseInt(window.localStorage.getItem('Vd')) + 1)
        setRelode(p=>!p)
    }


    function logOut() {
        window.localStorage.removeItem('Token')
        nav('/sing')
    }

    function like(idV) {
       dispatch(Like(window.localStorage.getItem('Token'),idV))
       setRelode(p=>!p)
    }


    function ban(idV) {
      setIdVBan(idV)
      let i = stateVd.filter((el)=> el.idV == idV)  
      let j = i[0].block.some((el)=> el == window.localStorage.getItem('Token'))
      console.log('jjjj' , j);
      if(j){
         dispatch(Block(window.localStorage.getItem('Token'),idV))
         alert('Video is DeBlockd')
         setRelode(p=>!p)
        return
      } 
      document.querySelector('.k').classList.add('P')
      setShowBan(true)
      setRelode(p=>!p)
      
    }

    function banRedux(id) {
      console.log("eee",id);
      dispatch(Block(window.localStorage.getItem('Token'),id))
        document.querySelector('.k').classList.remove('P')
      setShowBan(false)
      setRelode(p=>!p)
      alert('Video is Blockd')
    }


      return (
        <div className="k">
         <div className="Box">
          


             

               {Array.isArray(allVd)  && allVd.length > 0 &&
                allVd.map((e,i)=>{
                   return  <div key={i} style={{position:'relative'}} >
                    {
                        <div>
                           <div style={{position:'absolute',right:'20px',top:'8%',display:'flex',flexDirection:'column',gap:'20px',zIndex:"3000"}}>

                        {e.like.length > 0 && e.like.some((el)=> el == window.localStorage.getItem('Token'))?<div onClick={()=>like(e.idV)}><FontAwesomeIcon icon={faHeart} style={{fontSize:'30px',cursor:'pointer',color:'red'}} /></div>:<div onClick={()=>like(e.idV)}><FontAwesomeIcon icon={faHeart} style={{fontSize:'30px',cursor:'pointer'}} /></div>}
                        { e.block.length > 0 && e.block.some((ele)=> ele == window.localStorage.getItem('Token')) ?<div style={{ cursor:'pointer'}} onClick={()=>ban(e.idV)}><FontAwesomeIcon icon={faBan} style={{fontSize:'30px',zIndex:'1000',color:'red'}} /></div>:<div style={{ cursor:'pointer'}} onClick={()=>ban(e.idV)}><FontAwesomeIcon icon={faBan} style={{fontSize:'30px',zIndex:'1000'}} /></div>}
                         </div>
                      
                           <video src={e.vd} controls autoPlay style={{width:'100%',height:'90vh'}}/>
                        </div>
                    }
                       
                   </div>
                })
             }

             {showAdd && 
               <div className="whiet">
                <p>Enter Your Video</p>
                   <div onClick={()=>{
                    document.querySelector('.k').classList.remove('P')
                     setShowAdd(false)
                   }} style={{position:'absolute',right:'-5px',top:'-7Px',color:'red'}}><FontAwesomeIcon icon={faCircleXmark} /></div>
                   <input className="File" type="file" onChange={imageOnChange} />
                   <button className="FileButton" onClick={()=>sendToRedux(vd)}>Send </button>
                   {/* {va != {} && s  && <video autoPlay controls src={URL.createObjectURL(va)}/>} */}
               </div>
             }

              
              {showBan &&
                   <div className="c" >
                      <h3>Do You Want To Ban The Video</h3>
                      <div style={{display:'flex',gap:'20px',justifyContent:'center'}}>
                        <button onClick={()=>banRedux(idVBan)}>Yes ,sure</button>
                        <button onClick={()=>{
                             document.querySelector('.k').classList.remove('P')
                              setShowBan(false)
                        }}>No</button>
                      </div>  
                   </div>
              }


         </div>
         <div className="foot">
                 {/* <div onClick={like}><FontAwesomeIcon icon={faHeart} /></div> */}
                 <div onClick={addVd}><FontAwesomeIcon icon={faSquarePlus} /></div>
                 {/* <div><FontAwesomeIcon icon={faBan} /></div> */}
             </div>
             <button onClick={logOut} className="nn"> <FontAwesomeIcon icon={faRightFromBracket} />LogOut</button>
        </div> 
      )
}



  // function sendToRedux() {
    //   if(va == "") return
    //   let v = ""
    //   // dispatch(AddVd)
    //   if(window.localStorage.getItem('AllVd')){
    //      v = JSON.parse(window.localStorage.getItem('AllVd'))
    //   }
    //   let numvd = window.localStorage.getItem('Vd')



    //   // console.log('ff ' , va);
    //   //     console.log('ff ' , va.name);
    //   //     let r = JSON.stringify(va)
    //   // let dz= new FormData()
    //   // dz.append('Image',va) 

    //   let ob = {
    //      Vd:vd,
    //      idVd : parseInt(numvd) + 1,
    //      tokenUser : window.localStorage.getItem('Token')
    //   }
    //   if(v != ""){
    //          window.localStorage.removeItem('AllVd')
    //           v[v.length] = ob
    //          window.localStorage.setItem('AllVd', JSON.stringify(v));
    //          window.localStorage.setItem('Vd',parseInt(numvd) + 1)
    //          setShowAdd(false)
    //          document.querySelector('.k').classList.remove('P')
    //          return
    //   }

    //   //  window.localStorage.removeItem('AllVd')
   
    //     window.localStorage.setItem('AllVd',  JSON.stringify([ob]));

    //     window.localStorage.setItem('Vd',parseInt(numvd) + 1)
    //      setShowAdd(false)
    //       document.querySelector('.k').classList.remove('P')

    //   console.log('Is Done');

    // }