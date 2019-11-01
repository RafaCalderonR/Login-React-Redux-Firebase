import * as React from 'react'
import { style } from "../assets/styles/components/center.style";




export default class Center extends React.Component{
    public render(){
    
        return(
            <div {...this.props} style={style}/>
        )
    }
}