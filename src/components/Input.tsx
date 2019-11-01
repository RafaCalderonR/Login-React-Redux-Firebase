import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';
import IInputProps from '../models/components.interface';

const style = {

    backgroundColor:'#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBotton: '10px',
    padding:'10px 15px',
    width: 'calc(100% -30px)',
    

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