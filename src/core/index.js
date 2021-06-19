
import { API } from './config'

export const signUp = (user) => {
    return fetch(`${API}signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })

        .catch(err => {
            console.log(err);

        })
}

export const signin = (user) => {
    
    return fetch(`${API}signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })

        .catch(err => {
            console.log(err);
        })

}

export const authenticate = (data,next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data));
        next();
    }
}

export const signout = (next)=>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/signout`,{
            method:"GET",
        })
        .then(res=>{
            console.log("signout",res);
        })
        .catch(err => console.log(err));
    }
}

export const isAuthenticated = ()=>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false;
    }
}


export const makephone = (data)=>{
    if(data){
        let jwt=[]
        if(typeof window == 'undefined'){
            return false;
        }
        if(localStorage.getItem('jwt')){
            jwt=JSON.parse(localStorage.getItem('jwt'));
            jwt.user.veryfied_phone=true;
            localStorage.setItem('jwt',JSON.stringify(jwt));
            return true
    
        }else{
            return false;
        }
    }
}