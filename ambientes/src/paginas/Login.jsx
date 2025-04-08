import estilos from './Login.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


export function Login (){

    const loginSchema = z.object({


        email: z.string()
            .email({message:'informe um e-mail válido'}), 

        senha: z.string()
            .min(6, {message: 'defina uma senha de caracteres!'})

    })

    const {register,
        handleSubmit,
        formState: {errors
        }} = useForm({resolver: 
            zodResolver(loginSchema)
        })

    function autenticarUsuario (data) {
        console.log(data.email)
        console.log(data.senha)
    }

    return(
        <div className={estilos.conteiner}>
            <p className={estilos.titulo}>Login</p>
            
            <form 
                onSubmit={handleSubmit(autenticarUsuario)}
                className={estilos.formulario}
                    
            >
                
                <input
                {...register(('email'))}
                placeholder='E-mail'
                className={estilos.campo}
                
                />

                {errors.email &&
                (<p className={estilos.message}>
                    {errors.email.message}
                </p>)}

                <input
                {...register(('senha'))}
                placeholder='Senha'
                className={estilos.campo}
                />

                {errors.senha &&
                    (<p className={estilos.message}>{errors.senha.message}
                </p>)}


                <button type='submit'
                 className={estilos.botao}>
                    Entrar
                </button>

                
                <div className={estilos.trocar}>
                    <ul>
                        <a href="">Esqueci minha senha</a>
                    </ul>
                </div>

            </form>

            
        
        </div>

    )
}