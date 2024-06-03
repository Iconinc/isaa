import React from 'react'

const AdminLayout = ({ title, children, classes }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start mt-8' >
            <h2 className="text-xl md:text-2xl text-red-500 w-full p-8 border border-slate-900 border-b-0 uppercase ">{title}</h2>
            <div className={`grid md:grid-rows-1 lg:grid-cols-2 gap-4 w-full border border-slate-900 bg-slate-900/10 p-2 lg:p-4 ${classes}`}>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout