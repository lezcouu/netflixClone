import React from 'react'
import Row from "../containers/Row.jsx"
import requests from "../requests.js"

export default function Title() {
    return (
        <div>
            <h2>Hello lez</h2>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            
        </div>
    )
}
