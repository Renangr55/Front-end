import estilos from './Professor.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


export function Sala() {

    const salaSchema = z.object ({

        descricao: z.string().min(3,{message:'informe seu nome'})
                             .max(80),

        localizacao: z.string().min(3,{message:'informe seu nome'})
                               .max(80),
    })

    const {register,
         handleSubmit, 
         formState: {errors
         }} = useForm({resolver:
            zodResolver(salaSchema)
         })

        function autenticarSala (data){
            console.log(data.descricao)
            console.log(data.localizacao)
        } 

        return (
            <div className={estilos.conteiner}>
                <p className={estilos.titulo}>Insira as informações sobre a Sala</p>

                <form
                    onSubmit={handleSubmit(autenticarSala)}
                    className={estilos.formulario}
                >
                    
                    <input
                    {...register('descricao')}
                    placeholder='Descrição'
                    className={estilos.campo}
                    />

                    {errors.descricao && (<p className={estilos.message}>
                        {errors.Ni.message}
                    </p>)}

                    
                    <input
                    {...register('localizacao')}
                    placeholder='Localização'
                    className={estilos.campo}
                    />

                    {errors.localizacao && (<p className={estilos.message}>
                        {errors.localizacao.message}
                    </p>)}

                    
                    <button type='submit'
                        className={estilos.botao}>
                            Entrar
                    </button>

                </form>

            </div>
        )
    





}