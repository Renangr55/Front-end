import estilos from './Fundamentos.module.css'
import {Botao} from '../componentes/Botao'

export function Fundamentos(){

    const mensagem = (texto) => alert(`Mensagem: ${texto}`)

    return(
        <div className={estilos.conteiner}>
            
            <p className={estilos.titulo}> Fundamentos</p>

            <div className={estilos.conteinerBotoes}>
                <Botao 
                    titulo="Login"
                    acao = {() => mensagem('Entrar')}
                />

                <Botao 
                    titulo="Cadastrar"
                    acao = {() => mensagem('cadastrando')}
                />

                <Botao
                    titulo="Suporte"
                    acao = {() => mensagem('Entrando')}
                />

                <Botao 
                    titulo="Configuração"
                    acao = {() => mensagem('Entrando')}
                />
                
                <Botao 
                    titulo="Editar"
                    acao = {() => mensagem('Editandooooo')}
                />
                
            </div>

            <div className={estilos.conteinerBotaozao}>
                <Botao 
                    titulo='Ok'
                    acao = {() => mensagem('Confirmandooo')}
                />
            </div>


            
        
        </div>
    )   
}