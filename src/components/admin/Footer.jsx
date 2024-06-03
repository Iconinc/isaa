"use client"
import { useState } from 'react'
import MagnetIcon from '../common/MagneticIcon'
import { MdModeEditOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import AdminLayout from './AdminLayout';
import AdminCard from '../common/card/AdminCard';
import Input from './Input';
import { MdOutlineAdd } from "react-icons/md";


const AdminFooter = () => {
    const [isActive, setIsActive] = useState(true)
    const [values, setValues] = useState('A visual designer - with skills that havent been replaced by A.I (yet) - making good shit only if the paycheck is equally good.')
    const [reveredvalues, setReversedValues] = useState('Im a selectively skilled product designer with strong focus on producing high quality & impactful digital experience.')

    return (
        <AdminLayout title="Footer" classes="lg:grid-cols-1">
            <AdminCard classes="bg-slate-800 hover:bg-slate-700/50 !p-4 grid grid-cols-1 lg:grid-cols-3">
                <div className="border border-slate-900 flex flex-col gap-2 p-4 items-start justify-start w-full hover:bg-slate-800 hover:bg-slate-800">
                    <h1 className='text-red-500'>Linkedin</h1>
                    <h2 className='text-2xl'>NSABIMANA Isaa</h2>
                    <h2 className='text-sm'>https://www.linkedin.com/in/issansabimana/</h2>
                </div>
                <div className="border border-slate-900 flex flex-col gap-2 p-4 items-start justify-start w-full hover:bg-slate-800">
                    <h1 className='text-red-500'>Instagram</h1>
                    <h2 className='text-2xl'>NOT TIKTOK</h2>
                    <h2 className='text-sm'>https://www.linkedin.com/in/issansabimana/</h2>
                </div>
                <div className="border border-slate-900 flex flex-col gap-2 p-4 items-start justify-start w-full hover:bg-slate-800">
                    <h1 className='text-red-500'>Linkedin</h1>
                    <h2 className='text-2xl'>NSABIMANA Isaa</h2>
                    <h2 className='text-sm'>https://www.linkedin.com/in/issansabimana/</h2>
                </div>
                <div className="border border-slate-900 flex flex-col gap-2 p-4 items-start justify-start w-full hover:bg-slate-800">
                    <h1 className='text-red-500'>Instagram</h1>
                    <h2 className='text-2xl'>NOT TIKTOK</h2>
                    <h2 className='text-sm'>https://www.linkedin.com/in/issansabimana/</h2>
                </div>
                <div className="border border-slate-900 flex flex-col gap-2 p-4 items-start justify-start w-full hover:bg-slate-800">
                    <h1 className='text-red-500'>Linkedin</h1>
                    <h2 className='text-2xl'>NSABIMANA Isaa</h2>
                    <h2 className='text-sm'>https://www.linkedin.com/in/issansabimana/</h2>
                </div>
                <div className="border border-slate-900 flex flex-col gap-2 p-4 items-start justify-start w-full hover:bg-slate-800">
                    <h1 className='text-red-500'>Instagram</h1>
                    <h2 className='text-2xl'>NOT TIKTOK</h2>
                    <h2 className='text-sm'>https://www.linkedin.com/in/issansabimana/</h2>
                </div>
                <div className="flexer">
                <MagnetIcon icon={< MdOutlineAdd />} />
                </div>
            </AdminCard>
        </AdminLayout>
    )
}

export default AdminFooter