import React from "react"


export class LYFCHookClass extends React.Component{

    constructor(){

    }

    componentDidMount(){
        // execute when the component is initialized
    }

    componentDidUpdate(){
        // execute when the any state value change (we can update any state based on condition)
    }

    shouldComponentUpdate(){
        // basicyally this method ask a question should re-render or not (if return true component will re-render and if return false won't re-render)
    }

    componentWillUnmount(){
        // execute when component is desproyed
    }


    render(){
        return <>
        
            <h1>Render Method</h1>
        </>
    }
}