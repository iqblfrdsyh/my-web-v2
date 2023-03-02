import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import NotFound from './notFound/notFound'
import SecretoChat from './secretochat/secretochat'


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/message' element={<SecretoChat />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers