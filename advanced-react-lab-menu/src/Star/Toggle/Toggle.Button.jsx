import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleButton({children}){
    const value = useContext(ToggleContext)
    console.log(value)
    return(
        <div onClick={value.toggle}>
            {children}
        </div>
    )
}