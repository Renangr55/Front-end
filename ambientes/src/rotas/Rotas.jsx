import ReactDom from "react-dom/client";
import { BrowserRouter ,  Routes, Route} from "react-router-dom";
import { Login } from "../paginas/Login"
import { Reserva } from "../paginas/Reserva";
import { Disciplinar } from "../paginas/Disciplinar";
import { Professor } from "../paginas/Professor";
import { Inicial } from "../paginas/Inicial";
import {Sala} from "../paginas/Sala";



export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Login />}/>
                <Route path='inicial'  element={<Inicial />}>
                    <Route index element={<Reserva />} />
                </Route>
                <Route path='professor' element={<Professor />}/>
                <Route path='disciplinar' element={<Disciplinar />}/>
                <Route path='sala' element={<Sala />}/>
    

            </Routes>
        </BrowserRouter>
    )
}