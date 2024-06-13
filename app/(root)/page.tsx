"use client";
import { UserButton, SignIn, useUser} from '@clerk/nextjs';
import React from 'react'

const Home = () => {
  const { user } = useUser();
  if (!user) {
    return <SignIn fallbackRedirectUrl='/' />;
  }
  return (
    <div>
      <p>Home</p>      
    </div>
  )
}

export default Home;