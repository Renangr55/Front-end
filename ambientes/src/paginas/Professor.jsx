import estilos from './Professor.module.css'
import {useForm} from 'react-hook-form'
import {date, z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


export function Professor() {

    const professorSchema = z.object ({

        Ni: z.string().length({message:'informe um Ni válido'}),

        telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'O telefone deve estar no formato (XX) XXXXX-XXXX'),

        nome: z.string().min(3,{message:'informe seu nome'}),

        email: z.string().email({message:'informe um e-mail válido'}), 

        dataNascimento: z.string().refine((nascimento) => { let data_nascimento = new Date(nascimento)
            return data_nascimento <= new Date()
        }, 'A data precisa ser no presente'),
        
        dataContratacao: z.string().length(10,{message: 'a data de inicío deve ser informada'}),
        
        disciplinas: z.string().min(3,{message:'informe sua disciplina:'})
        
    })

    const {register,
         handleSubmit, 
         formState: {errors
         }} = useForm({resolver:
            zodResolver(professorSchema)
         })

        function autenticarProfessor (data){
            console.log(data.Ni)
            console.log(data.nome)
            console.log(data.email)
            console.log(data.telefone)
            console.log(data.dataNascimento)
            console.log(data.data_contratacao)
            console.log(data.disciplinas)
            
        } 

        return (
            <div className={estilos.conteiner}>
                <p className={estilos.titulo}>Insira as informações</p>

                <form
                    onSubmit={handleSubmit(autenticarProfessor)}
                    className={estilos.formulario}
                >
                    
                    <input
                    {...register('Ni')}
                    placeholder='Ni'
                    className={estilos.campo}
                    />

                    {errors.Ni && (<p className={estilos.message}>
                        {errors.Ni.message}
                    </p>)}

                    
                    <input
                    {...register('nome')}
                    placeholder='nome'
                    className={estilos.campo}
                    />

                    {errors.nome && (<p className={estilos.message}>
                        {errors.nome.message}
                    </p>)}

                    
                    <input
                    {...register('email')}
                    placeholder='email'
                    className={estilos.campo}
                    />

                    {errors.email && (<p className={estilos.message}>
                        {errors.email.message}
                    </p>)}
                    
                    <input
                    {...register('telefone')}
                    placeholder='telefone'
                    className={estilos.campo}
                    />

                    {errors.telefone && (<p className={estilos.message}>
                        {errors.telefone.message}
                    </p>)}

                    
                    <input
                    {...register('dataNascimento')}
                    placeholder='Data de Nascimento'
                    className={estilos.campo}
                    />

                    {errors.dataNascimento && (<p className={estilos.message}>
                        {errors.dataNascimento.message}
                    </p>)}

                    <input
                    {...register('dataContratacao')}
                    placeholder='Data de Contratação'
                    className={estilos.campo}
                    />
                    
                    {errors.dataContratacao && (<p className={estilos.message}>
                        {errors.dataContratacao.message}
                    </p>)}

                    <input
                    {...register('disciplinas')}
                    placeholder='disciplinas'
                    className={estilos.campo}
                    />

                    {errors.disciplinas && (<p className={estilos.message}>
                        {errors.disciplinas.message}
                    </p>)}

                    <button type='submit'
                        className={estilos.botao}>
                            Entrar
                    </button>

                </form>

            </div>
        )
    





}