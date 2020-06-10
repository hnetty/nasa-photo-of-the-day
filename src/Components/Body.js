import React from 'react'


function Body(props){

    console.log(props);



    return(
        <div class = "container">
            <h1>NASA Photo of the Day</h1>
            <img alt="Pic of the day"
            src = {props.information.hdurl}/>
        </div>
    )
}



export default Body;