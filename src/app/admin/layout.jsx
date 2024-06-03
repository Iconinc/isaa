import React from 'react'
import { IoMdSwap } from "react-icons/io";
import MagnetIcon from '@/components/common/MagneticIcon';

const layout = ({ children }) => {
    return (
        <div className='max-w-screen min-h-screen bg-slate-800'>
            {children}
            <button className="bottom-0 right-0 m-4 fixed border border-red-100 rounded-full">
                <MagnetIcon icon={<IoMdSwap />} />
            </button>
        </div>
    )
}

export default layout