import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import SecretoChat from './secretochat/secretochat'
import ImageUpload from './testFoto/test'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/secretochat' element={<SecretoChat />}></Route>
                <Route path='/a' element={<ImageUpload />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers