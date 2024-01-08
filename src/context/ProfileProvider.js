import React, {useContext, createContext, useState, useEffect} from 'react'

const ProfileContext= createContext();

export const useProfile= ()=>{
  return(
    useContext(ProfileContext)
  )
}

function ProfileProvider({children}){
  const [profile, setProfile]= useState(null);

  useEffect(() => {
    const storedProfile= localStorage.getItem('Profile')
    if(storedProfile){
      setProfile(storedProfile)
    }
  }, []);

  useEffect(()=>{
    const storedProfile= localStorage.getItem('Profile')
    const nav= document.getElementsByClassName('')
    if(storedProfile){
      nav.className= "is-logged-in"
    }
    else{
      nav.className= "not-logged-in"
    }
  }, [profile])

  function LoginProfile({userId}) {
    setProfile(userId);
  }

  function LogoutProfile() {
    setProfile(null);
  }

  const ProfileContextValue= {
    profile, LoginProfile, LogoutProfile
  }

  return(
    <ProfileContext.Provider value={ProfileContextValue}>
      {children}
    </ProfileContext.Provider>
  )

}