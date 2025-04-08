import estilos from './Disciplinar.module.css'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

export function Disciplinar() {

    const disciplinarSchema = z.object ({
        
        nome: z.string().min(2,{message:'o nome deve ter pelo menos 2 caracteres'})
                        .max(80,{message: 'o nome deve menos de 80 caracteres'}),
        
        curso: z.string().min(2,{message:'minímo 2 caracteres no curso'}),

        cargaHoraria: z.number().min(1,{message:'minímo 1 numero na carga horária'}),

            
        descricao: z.string().min(1,{message: 'minímo 1 caracter na descrição '}),

        professor: z.string().min(1,{message: 'insira o professor responsavel por essa disciplina'}),
        
        



        
    })

    const {register, 
        handleSubmit,
        formState: {errors
        }} = useForm({resolver:
            zodResolver(disciplinarSchema)
        })

        function autenticarDisciplina (data) {
            console.log(data.nome)
            console.log(data.cargo)
            console.log(data.carga_horaria)
            console.log(data.descricao)
            console.log(data.professor)
        }

        return (
             <div className={estilos.conteiner}>
                <p className={estilos.titulo}>Insira as informações</p>

                <form
                    onSubmit={handleSubmit(autenticarDisciplina)}
                    className={estilos.formulario}
                >
                    
                    <input
                    {...register('nome')}
                    placeholder='Nome'
                    className={estilos.campo}
                    />

                    {errors.nome && (<p className={estilos.message}>
                        {errors.Ni.message}
                    </p>)}

                    
                    <input
                    {...register('curso')}
                    placeholder='Curso'
                    className={estilos.campo}
                    />

                    {errors.curso && (<p className={estilos.message}>
                        {errors.curso.message}
                    </p>)}

                    
                    <input
                    {...register('cargaHoraria')}
                    placeholder='carga Horaria'
                    className={estilos.campo}
                    />

                    {errors.cargaHoraria && (<p className={estilos.message}>
                        {errors.cargaHoraria.message}
                    </p>)}
                    
                    <input
                    {...register('descricao')}
                    placeholder='Descricao'
                    className={estilos.campo}
                    />

                    {errors.descricao && (<p className={estilos.message}>
                        {errors.descricao.message}
                    </p>)}

                    
                    <input
                    {...register('professor')}
                    placeholder='Professor'
                    className={estilos.campo}
                    />

                    {errors.professor && (<p className={estilos.message}>
                        {errors.professor.message}
                    </p>)}

                    <button type='submit'
                        className={estilos.botao}>
                            Entrar
                    </button>

                </form>

            </div>
        )
}
    
    
   

    

