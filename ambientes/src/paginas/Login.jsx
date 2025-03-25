import estilos from './Login.module.css'

export function Login (){
    return (
        <div className={estilos.conteiner}>
            <p className={estilos.titulo}>Login</p>
            
            <form className={estilos.formularios}>
                <input
                placeholder='E-mail'
                className={estilos.campo}
                
                />

                <input
                placeholder='Senha'
                className={estilos.campo}
                />

                <button
                 className={estilos.botao}>
                    Entrar
                </button>

                

            </form>
        
        </div>

    )
}