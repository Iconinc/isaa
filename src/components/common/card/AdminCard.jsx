import React from 'react'

const AdminCard = ({children, classes}) => {
    return (
        <div className={`flexer flex-col gap-4 w-full py-20 border border-slate-900 ${classes}`}>
            {children}
        </div>
    )
}

export default AdminCard