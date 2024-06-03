"use client"
import { useState } from 'react'
import MagnetIcon from '../common/MagneticIcon'
import { MdModeEditOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import Input from './Input';

const AdminLogo = () => {
  const [isActive, setIsActive] = useState(true)
  const [Name1, setName1] = useState('NSABIMANA')
  const [Name2, setName2] = useState('ISSSA')
  return (
    <div className="flex flex-col gap-2 justify-start items-start ">
      {isActive &&
        <h1 className="text-red-500  flex items-center gap-2 duration-150">
          <span className="hidden md:block duration-200">NSABIMANA</span> Isaa <MagnetIcon icon={<MdModeEditOutline />} click={() => setIsActive(false)} />
        </h1>
        // <button>Edit</button>
      }

      {!isActive &&
        <div className='flexer gap-2'>
          <form className="border border-red-500 rounded-md flex gap-1 justify-center">
            <Input value={Name1} change={(e) => setName1(e.target.value)} />
            <Input value={Name2} change={(e) => setName2(e.target.value)} />
            <button type="submit" className="bg-red-400 px-4 py-2 rounded-sm border-none outline-none"> <GrUpdate /> </button>
          </form>
          <MagnetIcon icon={< IoCloseSharp />} click={() => setIsActive(true)} />
        </div>
      }
    </div>
  )
}

export default AdminLogo