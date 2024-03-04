import React from 'react'

export const Table = ({children}: {children: React.ReactNode}) => {
    return (
        <table className='border-[1px] w-full border-black'>{children}</table>
    )
}

export const TableRow = ({children}: {children: React.ReactNode}) => {  
    return (
        <tr className='border-[1px] border-black'>{children}</tr>
    )
}

export const TableHead = ({children}: {children: React.ReactNode}) => {  
    return (
        <th className='border-[1px] border-black'>{children}</th>
    )
}

export const TableCell = ({children}: {children: React.ReactNode}) => {  
    return (
        <td className='border-[1px] border-black items-center text-center'>{children}</td>
    )
}