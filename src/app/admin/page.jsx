import Hero from '@/components/home/hero'
import AdminLogo from '@/components/admin/Logo'
import React from 'react'

const Admin = () => {
  return (
    <div className='text-white bg-black rounded-l-2xl w-full p-8'>
      <AdminLogo/>

      <div className="mt-4">Admin Page is here</div>
    </div>
  )
}

export default Admin