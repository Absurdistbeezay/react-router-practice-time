import React, {Component} from 'react';

class Life extends Component{
    //1: get default props

    //2: set default state

    //3: before render
    componentWillMount(){
        console.log('3 before render');
    }

    //4: render jsx

    render(){
        return(
            <div>

            </div>
        )
    }

    //5 after render
    componentDidMount(){
        console.log('after render');
    }
}