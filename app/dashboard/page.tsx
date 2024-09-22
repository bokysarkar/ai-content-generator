'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

function Dashboard() {
    const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
        <div><SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} /></div>
        <div><TemplateListSection userSearchInput={userSearchInput} /></div>
    </div>
  )
}

export default Dashboard;