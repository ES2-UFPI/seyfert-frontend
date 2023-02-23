import React, { Children, InputHTMLAttributes } from 'react'
import ButtonAction from '../button-action'
import styles from './styles.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  context: string
  children?: string
  onClickIconRight?: () => void
}

export default function TextArea({context, children, onClickIconRight}: InputProps) {

    function teste() {
        !!onClickIconRight && onClickIconRight();
    }

    if(context === "MEDICO"){
        return (
            <div className={styles.container}>
                <div className={styles.divtextarea}>
                    <textarea 
                        onChange={(e) => teste}
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