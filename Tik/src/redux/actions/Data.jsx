import { ADDUSER, ADDUSERCNX, ADDVD, BLOCKVD, LIKEVD } from "./Types"

export const AddUser = (email,password,name, token)=>{
    console.log('email' , email);
    console.log('name' , name);
    console.log('password' , password);
    return {
        type:ADDUSER,
        name:name,
        email:email,
        password:password,
        token:token,
        blockVd:[]
        // idU:idU,
       
    }
}

export const AddVd = (vd,idV,tokenUser)=>{
    return {
        type:ADDVD,
        vd:vd,
        idV:idV,
        tokenUser:tokenUser,
        like:[],
        Block:[]
    }
}

export const Block = (tokenUser,id)=>{
    console.log('e' , id);
    return {
        type:BLOCKVD,
        tokenUser:tokenUser,
        idV:id
        
    }
}

export const Like = (tokenUser,idV)=>{
    return {
        type:LIKEVD,
        tokenUser:tokenUser,
        idV:idV
    }
}

export const AddUserCnx = ()=>{
    return {
        type:ADDUSERCNX
    }
}