import React from 'react'
import { Navigate } from 'react-router-dom'
import { checkToken } from '../ultis/localstorage'

export default function AuthRoute(props) {
    if(checkToken()) {
        return <Navigate to='/' replace/>
    }
    return props.children
}