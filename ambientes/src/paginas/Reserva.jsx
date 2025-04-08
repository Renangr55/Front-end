import estilos from './Reserva.module.css'
import { get, useForm} from 'react-hook-form'
import {date, z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

export function Reserva() {

    const reservaSchema = z.object ({
        
        dataInicio: z.string().length(10,{message: 'a data de inicío deve ser informada'}),

        dataTermino: z.string().length(10,{message: 'a data de inicío deve ser informada'}),

        periodo: z.string()
            .min(1,{message:'informe o período'}),

        salaReservada: z.string()
            .min(1,{message:'infrome a sala reservada'}),
            
        professor: z.string()
            .min(1,{message: 'inisra as informações do professor'}),

        discplina: z.string()
            .min(1,{message: 'insira as informações da disciplina'}),

        
    })

    const {register, 
        handleSubmit,
        formState: {errors
        }} = useForm({resolver:
            zodResolver(reservaSchema)
        })

        function autenticarReserva (data) {
            console.log(data.dataInicio)
            console.log(data.dataTermino)
            console.log(data.nome)
            console.log(data.periodo)
            console.log(data.salaReservada)
            console.log(data.professor)
            console.log(data.discplina)
        }

        return (
             <div className={estilos.conteiner}>
                <p className={estilos.titulo}>Insira as informações sobre o Ambiente</p>

                <form
                    onSubmit={handleSubmit(autenticarReserva)}
                    className={estilos.formulario}
                >
                    
                    <input
                    {...register('dataInicio')}
                    placeholder='Data de início'
                    className={estilos.campo}
                    />

                    {errors.dataInicio && (<p className={estilos.message}>
                        {errors.dataInicio.message}
                    </p>)}


                    <input
                    {...register('dataTermino')}
                    placeholder='Data de término'
                    className={estilos.campo}
                    />

                    {errors.dataTermino && (<p className={estilos.message}>
                        {errors.dataTermino.message}
                    </p>)}

                    
                    <input
                    {...register('nome')}
                    placeholder='Nome'
                    className={estilos.campo}
                    />

                    {errors.nome && (<p className={estilos.message}>
                        {errors.nome.message}
                    </p>)}
                    
                    <input
                    {...register('periodo')}
                    placeholder='Período'
                    className={estilos.campo}
                    />

                    {errors.periodo && (<p className={estilos.message}>
                        {errors.periodo.message}
                    </p>)}

                    
                    <input
                    {...register('salaReservada')}
                    placeholder='Sala Reservada'
                    className={estilos.campo}
                    />

                    {errors.salaReservada && (<p className={estilos.message}>
                        {errors.salaReservada.message}
                    </p>)}

                    <input
                    {...register('professor')}
                    placeholder='Professor'
                    className={estilos.campo}
                    />

                    {errors.professor && (<p className={estilos.message}>
                        {errors.professor.message}
                    </p>)}

                    <input
                    {...register('disciplina')}
                    placeholder='Disciplina'
                    className={estilos.campo}
                    />

                    {errors.discplina && (<p className={estilos.message}>
                        {errors.discplina.message}
                    </p>)}

                    <button type='submit'
                        className={estilos.botao}>
                            Entrar
                    </button>

                </form>

            </div>
        )
}
    
    
   

    

