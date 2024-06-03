"use client"
import { useState } from 'react'
import MagnetIcon from '../common/MagneticIcon'
import { MdModeEditOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import AdminLayout from './AdminLayout';
import AdminCard from '../common/card/AdminCard';
import Input from './Input';


const AdminHero = () => {
    const [isActive, setIsActive] = useState(true)
    const [values, setValues] = useState('Making good shit since 2021')
    const [reveredvalues, setReversedValues] = useState('Hidding great shit since 2021')

    return (
        <AdminLayout title="Hero Section">
            <AdminCard classes="bg-slate-800 hover:bg-slate-700/50">
                {isActive ?
                    <>
                        <h1 className='text-3xl md:text-5xl uppercase font-black text-center px-[8vw] md:px-[20vw]'>
                            {values}
                        </h1>
                        <MagnetIcon icon={<MdModeEditOutline />} click={() => setIsActive(false)} />
                    </>
                    :
                    <div className='flexer flex-col gap-4 w-full'>
                        <form className="border border-red-500 rounded-md flex gap-1 justify-center w-[90%]">
                            <Input value={values} change={(e) => setValues(e.target.value)} classes="w-full bg-transparent p-8" />
                            <button type="submit" className="bg-red-400 px-4 py-2 rounded-sm border-none outline-none"> <GrUpdate /> </button>
                        </form>
                        <MagnetIcon icon={< IoCloseSharp />} click={() => setIsActive(true)} />
                    </div>

                }
            </AdminCard>
            <AdminCard classes="bg-slate-900 hover:bg-slate-900/50">
                {isActive ?
                    <>
                        <h1 className='text-3xl md:text-5xl uppercase font-black text-center px-[8vw] md:px-[20vw]'>
                            {reveredvalues}
                        </h1>
                        <MagnetIcon icon={<MdModeEditOutline />} click={() => setIsActive(false)} />
                    </>
                    :
                    <div className='flexer flex-col gap-4 w-full'>
                        <form className="border border-red-500 rounded-md flex gap-1 justify-center w-[90%]">
                            <Input value={reveredvalues} change={(e) => setReversedValues(e.target.value)} classes="w-full bg-transparent p-8" />
                            <button type="submit" className="bg-red-400 px-4 py-2 rounded-sm border-none outline-none"> <GrUpdate /> </button>
                        </form>
                        <MagnetIcon icon={< IoCloseSharp />} click={() => setIsActive(true)} />
                    </div>

                }
            </AdminCard>
        </AdminLayout>
    )
}

export default AdminHero