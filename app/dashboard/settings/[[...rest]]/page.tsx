import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex justify-center border-none shadow-none'>
        <UserProfile />
    </div>
  )
}

export default Settings