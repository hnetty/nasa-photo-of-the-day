import React from 'react'
import Container from './Container'

function Body(props){

    console.log(props);


    const sectionStyling = () => {
        return {
          img: {
            width: `80%`,
            border: `2px solid blue`,
            padding: `5px`,
            borderRadius: `15px`,
          },
          h1: {
            fontSize: `3rem`,
          },
          p: {
              fontSize: `2rem`,
          }
        }
      }


    return(
        <Container>
            <h1 style={sectionStyling().h1}>NASA Photo of the Day</h1>
            <h3>{props.information.title}</h3>
            <p style={sectionStyling().p}>Date: {props.information.date}</p>
            <img style={sectionStyling().img} alt="Pic of the day"
            src = {props.information.url}/>
            <p style={sectionStyling().p}>{props.information.explanation}</p>
        </Container>
        
    )
}



export default Body;