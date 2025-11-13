import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changetheme = () => {
        setTheme('dark')
    }

    return (
        <div>
            <button
                onClick={changetheme}>
                Change Theme
            </button>
        </div>
    )
}

export default Button