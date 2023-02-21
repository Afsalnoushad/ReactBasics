import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        const {name,superhero} = this.props
        return (
        <h1>
            Welcome {name} aka {superhero}
        </h1>
        )
    }
}

export default Welcome;
