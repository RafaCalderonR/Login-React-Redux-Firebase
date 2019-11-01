import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';

const style = {

    backgroundColor:'#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBotton: '10px',
    padding:'10px 15px',
    width: 'calc(100% -30px)',
    

}

interface IInputProps{
    placeholder?: string
    label: string
}


const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = props=>{
    const {label} = props;
    
    return(

        <div>
            <input {...props}  style={style}/>
        </div>
        )
}

export default Input