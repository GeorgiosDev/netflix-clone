import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
return (
    <div>
        <Main/>
        <Row rowId ="1" title="Up coming" fetchURL={requests.requestUpcoming} />
        <Row rowId ="2" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowId ="3" title="Trending" fetchURL={requests.requestTrending} />
        <Row rowId ="4" title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row rowId ="5" title="Crime" fetchURL={requests.requestCrime} />

    </div>
)
}

export default Home
