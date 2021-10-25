import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,updateProfile ,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/Firebase.init";

initializeFirebase()

const UseFirebase = () => {
  const [user,setUser]=useState({})
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [isloged,setisLoged]=useState(false)
  const [error,setError]=useState('')
  const [name,setName]=useState('')
  const auth = getAuth();





// log in function
const logInFunction=()=>{
  const googleprovider = new GoogleAuthProvider();
  signInWithPopup(auth, googleprovider)
  .then((result) => {
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
  setError('')
}

// log out function
const logoutfunction=()=>{
  signOut(auth).then(() => {
    setUser({})
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
  setError('')
}





// emailFunction
const emailFunction=(event)=>{
 setEmail(event.target.value);
}

// password function
const passwordFunction=(event)=>{
setPassword(event.target.value);
}






// log in function
const loginfunction=(email,password)=>{

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
})
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
  setError('')
}

//  resister function
const registerFunction=(email,password)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    updatefunction() 

  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
  setError('')

}



// checkboxFunction
const checkboxFunction=(event)=>{
  setisLoged(event.target.checked);
}


// onSubmitFunction
const onsubmitFunction=(event)=>{
  event.preventDefault();

  !isloged?registerFunction(email,password):
  loginfunction(email,password)
}






//update profile nameFunction
const nameupdatefunction=(e)=>{
const fullname=e.target.value
setName(fullname)
}



const updatefunction=()=>{
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {

  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
  setError('')
}





useEffect(()=>{
  const unsubscribed= onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else{
      setUser({})
    }
  });
  return()=>unsubscribed
},[])







return {
 isloged,
  user,
 error,
 nameupdatefunction,
  emailFunction,
  passwordFunction,
  onsubmitFunction,
    logInFunction,
    logoutfunction,
    checkboxFunction,
  
}

};

export default UseFirebase;