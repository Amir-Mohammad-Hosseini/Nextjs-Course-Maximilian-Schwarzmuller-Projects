import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <section style={{display : "flex", justifyContent : "center" , alignItems : "center" , gap : "1rem"}}>

      <p>
        <Link href="/meals" style={{color : "gray" ,  textDecoration : "none"}} >Meals</Link>
      </p>
      <p>
        <Link href="/community" style={{color : "gray" ,  textDecoration : "none"}} >Community</Link>
      </p>
      </section>
    </main>
  );
}
