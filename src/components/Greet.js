import React from 'react'
/* function Greet(){
    return <h1>Hello Afsal</h1>
} */
const Greet = props => {
    const {name,superhero} = props

return (
    <div>
     <h1>
        Hello {name} aka {superhero} 
     </h1>
    </div>
)
}
export default Greet;

