import Link from "next/link"

const MealsPage = () => {
  return (
    <main style={{marginRight : "auto" , marginLeft : "auto" , width: "1024px" , textAlign : "center"}}>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share" style={{color : "gray" , textDecoration : "none"}}>Share Meals</Link>
      </p>
      <p style={{display : "flex" , justifyContent : "center" , gap : "1rem"}}>
        <Link href="/meals/meal-1" style={{color : "gray" , textDecoration : "none"}}>Meal 1</Link>
        <Link href="/meals/meal-2" style={{color : "gray" , textDecoration : "none"}}>Meal 2</Link>
        <Link href="/meals/meal-3" style={{color : "gray" , textDecoration : "none"}}>Meal 3</Link>
      </p>
    </main>
  )
}

export default MealsPage
