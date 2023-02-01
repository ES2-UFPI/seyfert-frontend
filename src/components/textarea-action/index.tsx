import React, { Children } from 'react'
import ButtonAction from '../button-action'
import styles from './styles.module.css'

type TextAreaProps = {
  context: string
  children?: string
}

export default function TextArea({context, children}: TextAreaProps) {
    if(context === "MEDICO"){
        return (
            <div className={styles.container}>
                <div className={styles.divtextarea}>
                    <textarea 
                        id='textarea-comentario'
                        defaultValue={!children ? "SEM COMENTÁRIO NO MOMENTO" : children}
                        className={styles.textarea}
                        name="comentario-medico" 
                    />
                </div>
                <div className={styles.group_buttons}>
                    <ButtonAction type='red'>Atualizar</ButtonAction>
                    <ButtonAction type='green'>Comentar</ButtonAction>
                </div>
            </div>
        );
    }else if(context === "PACIENTE"){
        return (
            <div className={styles.container}>
                <div className={styles.divtextarea}>
                    <textarea 
                        id='textarea-comentario'
                        value={children}
                        defaultValue={!children ? "SEM COMENTÁRIO NO MOMENTO" : children}
                        className={styles.textarea}
                        name="comentario-medico" 
                        readOnly={true}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            
        </div>
    )
}