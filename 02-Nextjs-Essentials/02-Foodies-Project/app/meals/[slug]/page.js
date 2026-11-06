import React from 'react'

const MealPage = ({params}) => {
  return (
        <main style={{marginRight : "auto" , marginLeft : "auto" , width: "1024px" , textAlign : "center"}}>
            <h1>{params.slug}</h1>
        </main>
  )
}

export default MealPage
