import AnimeCard from "../../../../components/Form/components/Card.tsx/AnimeCard"
import NavBar from "../../../../components/navbar/NavBar"

export const Home = () => {
	return (
	<>
		<NavBar/>

		<div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
			<AnimeCard 
				id={1}
				imageURL="https://images.justwatch.com/poster/244481506/s718/naruto-shippuden.jpg"
				title="Naruto Shippuden"
				releaseYear={2007}
				description="Naruto regresa a la aldea después de entrenar con Jiraiya y se enfrenta a nuevos enemigos."
				genre={["Acción / Aventura"]}
				rating={9}
				episodes={500}
				status="Finalizado"
			/>
		</div>
	</>
	)
}