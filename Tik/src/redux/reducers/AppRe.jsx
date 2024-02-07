import { ADDUSER, ADDUSERCNX, ADDVD, BLOCKVD, LIKEVD } from "../actions/Types";

export const AppRe = (state = {users:[],Vd:[]} , action)=>{
    console.log('Sata ' , state);
    console.log("Action " , action); 
    
        // if(action.type == LIKEVD) {
        //     console.log('Hi');
        // }

     switch(action.type) {
         case ADDUSER : return {...state , users:[...state.users,{
            email:action.email,
            password:action.password,
            name:action.name,
            token:action.token,
            idU:action.idU,
            blockVd:action.blockVd
           
        }]}

         case ADDVD : return {...state , Vd:[...state.Vd,{
            vd:action.vd,
            idV:action.idV,
            tokenUser:action.tokenUser,
            like:action.like,
            block:action.Block
         }]}

          case LIKEVD : {

            let gt = state.Vd.filter((e)=> e.idV == action.idV)
            // let ind  = state.Vd.findIndex((e)=> e.idV == action.idV)
            let ch = gt[0].like.some((e)=>e == action.tokenUser)
            // console.log('r',gt);
            if(ch){
                  for (let i = 0; i < state.Vd.length; i++) {
                  if(state.Vd[i].idV == action.idV){
                    console.log('rio');
                     let o = state.Vd[i].like.map((el,k)=>{
                         return el == action.tokenUser && state.Vd[i].like.splice(k,1)
                     })
                 }
                
             }
             return {...state , Vd:[...state.Vd]}
            }
     
          
              


            
       for (let i = 0; i < state.Vd.length; i++) {
                  if(state.Vd[i].idV == action.idV){
                    console.log('rio One');
                    state.Vd[i].like.push(action.tokenUser)
                 }
                
             }
             return {...state , Vd:[...state.Vd]}



          }



          // Block 
          case BLOCKVD : {

            let gt = state.Vd.filter((e)=> e.idV == action.idV)
            // let getU  = state.users.filter((e)=>e.token == action.tokenUser)
            // let find = getU[0].blockVd.findIndex((e)=>e == action.tokenUser)
            // let ind  = state.Vd.findIndex((e)=> e.idV == action.idV)
            let ch = gt[0].block.some((e)=>e == action.tokenUser)
            // console.log('r',gt);
            if(ch){
                  for (let i = 0; i < state.Vd.length; i++) {
                  if(state.Vd[i].idV == action.idV){
                    console.log('rio');
                     for (let j = 0; j < state.Vd[i].block.length; j++) {
                       if(state.Vd[i].block[j] == action.tokenUser){
                          state.Vd[i].block.splice(j,1)
                        //   getU[0].blockVd.splice(find,1)
                       }
                        
                     }
                 }
                
             }
             return {...state , Vd:[...state.Vd]}
            }
     
          
              


            
       for (let i = 0; i < state.Vd.length; i++) {
                  if(state.Vd[i].idV == action.idV){
                    console.log('rio One');
                    state.Vd[i].block.push(action.tokenUser)
                    // getU[0].blockVd.push(action.tokenUser)
                 }
                
             }
             return {...state , Vd:[...state.Vd]}



          }
         
         default : return state
     }
}

export default AppRe