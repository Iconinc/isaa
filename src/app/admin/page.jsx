import Hero from '@/components/home/hero'
import AdminLogo from '@/components/admin/Logo'
import React from 'react'
import AdminHero from '@/components/admin/Hero'
import AdminAbout from '@/components/admin/About'
import AdminExperience from '@/components/admin/Experience'
import AdminWorks from '@/components/admin/Works'
import AdminFooter from '@/components/admin/Footer'
import AdminProjects from '@/components/admin/Project'

const Admin = () => {
  return (
    <div className='text-white w-full p-8'>
      <AdminLogo />

      <AdminHero />
      <AdminAbout />
      <AdminExperience />
      <AdminProjects/>
      <AdminWorks/>
      <AdminFooter/>

    </div>
  )
}

export default Admin