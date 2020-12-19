import React from 'react'
import Row from "../containers/Row.jsx"
import requests from "../requests.js"
import "./Title.css"
import Navbar from "./Banner.jsx"
import Banner from "./Navbar.jsx"

export default function Title() {
    return (
        <div >
            <Navbar />
            <Banner />
            <Row 
            title="Originales de Netflix" 
            fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow
            />
            <Row title="Mas vistos" fetchUrl={requests.fetchTrending} />
            <Row title="Mejores Votadas" fetchUrl={requests.fetchTopRated} />
            <Row title="Peliculas De Acción" fetchUrl={requests.fetchACtionMovies} />
            <Row title="Peliculas De Comedia" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Peliculas De Terror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Peliculas Romanticas" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} />
            
        </div>
    )
}
