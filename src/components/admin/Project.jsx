"use client"
import { useState } from 'react'
import MagnetIcon from '../common/MagneticIcon'
import { MdModeEditOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import AdminLayout from './AdminLayout';
import AdminCard from '../common/card/AdminCard';
import Input from './Input';
import Image from 'next/image';
import { MdOutlineAdd } from "react-icons/md";



const AdminProjects = () => {
    const [isActive, setIsActive] = useState(true)
    const [values, setValues] = useState('A visual designer - with skills that havent been replaced by A.I (yet) - making good shit only if the paycheck is equally good.')
    const [reveredvalues, setReversedValues] = useState('Im a selectively skilled product designer with strong focus on producing high quality & impactful digital experience.')

    return (
        <AdminLayout title="Project" classes="lg:!grid-cols-2">
            <AdminCard classes="bg-slate-800 hover:bg-slate-700/50 !py-0">
                <Image src="/assets/project1.png" alt='Project 1' width={300} height={300} className='w-full'/>
                <div className="flex flex-col justify-start items-start gap-4 p-4">
                <h3>Project 1</h3>
                <p>Originally developer from Rwanda, Kigali-based developer Nsabimana Isaa is a young creative brimming with talent and ideas.</p>
                </div>
            </AdminCard>
            <AdminCard classes="bg-slate-900 hover:bg-slate-900/50 !py-0">
                <Image src="/assets/project1.png" alt='Project 1' width={300} height={300} className='w-full'/>
                <div className="flex flex-col justify-start items-start gap-4 p-4">
                <h3>Project 1</h3>
                <p>Originally developer from Rwanda, Kigali-based developer Nsabimana Isaa is a young creative brimming with talent and ideas.</p>
                </div>
            </AdminCard>
            <AdminCard classes="bg-slate-900 hover:bg-slate-900/50 !py-0">
                <Image src="/assets/project1.png" alt='Project 1' width={300} height={300} className='w-full'/>
                <div className="flex flex-col justify-start items-start gap-4 p-4">
                <h3>Project 1</h3>
                <p>Originally developer from Rwanda, Kigali-based developer Nsabimana Isaa is a young creative brimming with talent and ideas.</p>
                </div>
            </AdminCard>
            <AdminCard classes="bg-slate-800 hover:bg-slate-700/50 !py-0">
                <MagnetIcon icon={< MdOutlineAdd />} />
            </AdminCard>
        </AdminLayout>
    )
}

export default AdminProjects