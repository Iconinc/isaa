import React from 'react'
import Sidebar from './sidebar'
import { IoMdSwap } from "react-icons/io";
import MagnetIcon from '@/components/common/MagneticIcon';

const layout = ({ children }) => {
    return (
        <div className='w-screen min-h-screen bg-gray-900 flex gap-2'>
            <Sidebar />
            {children}
            <button className="bottom-0 right-0 m-4 fixed border border-red-100 rounded-full">
                <MagnetIcon icon={<IoMdSwap />} />
            </button>
        </div>
    )
}

export default layout