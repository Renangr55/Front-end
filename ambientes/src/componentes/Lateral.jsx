import estilos from './Lateral.module.css'
import foto from '../assets/spotify.png'
import { HiAcademicCap } from "react-icons/hi2";
import { FaBookBookmark } from "react-icons/fa6";
import { AiFillEnvironment } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { Link } from 'react-router'

export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            
            <header>
                <img className={estilos.imagemCabecalho}
                    src={'https://plus.unsplash.com/premium_photo-1738377176285-1726d45f8cb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />

                <div className={estilos.conteinerUsuario}>
                    <img 
                        className={estilos.fotoUsuario}
                        src={foto}
                    />
                    <p className={estilos.nomeUsuario}>Usuário</p>
                </div>

            </header>
            
            <section className={estilos.conteinerBotoes}>

                <Link 
                    className={estilos.botao}
                    to={'/professor'}
                >
                    <HiAcademicCap className={estilos.icon} size={20} color={'rgb(0, 0, 0)'}/>
                    Professor 
                </Link>

                <Link className={estilos.botao}
                    to={'/disciplinar'}
                >
                    <FaBookBookmark  className={estilos.icon} size={20} color={'rgb(0, 0, 0)'}/>
                    Disciplinas
                </Link>

                <Link className={estilos.botao}
                    to={'/inicial'}
                >
                    <AiFillEnvironment className={estilos.icon} size={20} color={'rgb(0, 0, 0)'}/>
                    Ambientes
                </Link>
                
                <Link className={estilos.botao}
                    to={'/Sala'}
                >
                    <PiStudentFill className={estilos.icon} size={20} color='rgb(0, 0, 0)'/>
                    Sala
                </Link>

            </section>
            
            
        </aside>
    )
}