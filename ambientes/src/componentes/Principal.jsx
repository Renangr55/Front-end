import estilos from './Principal.module.css'

export function Principal(){
    return(
        <main className={estilos.conteiner}>
            <p className={estilos.text}>Welcome</p>
        </main>
    )
}