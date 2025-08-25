import React from "react";
import "./AnimeCard.css"; // Importa los estilos

interface AnimeCardProps {
	id: number;  
	title: string;  
	description: string;  
	genre: Array<string>;  
	releaseYear: number;  
	episodes: number;
	status: string;
	imageURL: string; /* ya esta  */
	rating: number;  
}

const AnimeCard: React.FC<AnimeCardProps> = ({

	id,
	title,
	description,
	genre,
	releaseYear,
	episodes,
	status,
	imageURL,
	rating,

}) => {
  return (
	<div className="anime-card" id={`${id}`}  style={{ backgroundImage: `url(${imageURL})` }}>
		<div className="anime-info">
			<h2>{title}</h2>
			<p><strong>Año:</strong> {releaseYear}</p>
			<p><strong>Categoría:</strong> {genre.join(", ")}</p>
			<p><strong>Calificación:</strong> ⭐ {rating}/10</p>	
			<p><strong>episodios</strong>  {episodes}/10</p>
			<p><strong>status</strong>  {status}/10</p> 

			<p><strong>status</strong>  {status}/10</p> 
			<p><strong>status</strong>  {status}/10</p> 
			<p><strong>status</strong>  {status}/10</p> 
			<p><strong>status</strong>  {status}/10</p> 

			<p className="desc">{description}</p>
		</div>
	</div>
  );
};

export default AnimeCard;