import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import New from "../components/New"
import Detail from '../components/Detail'


const AppRoute = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<New />} />
                <Route path='/detail' element={<Detail />} />
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default AppRoute