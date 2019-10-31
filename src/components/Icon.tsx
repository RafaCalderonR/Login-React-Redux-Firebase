import * as React from 'react'


export default class Icon extends React.Component{
    public render(){
        const {children} = this.props

        return(
            <i>{children}</i>
        )
    }
};