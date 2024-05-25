import { useEffect, useState } from "react";
import {fetchFilms} from "../../api-film"



export default function HomePage() {

    const [filmData, setFilmData] = useState([])
    useEffect(()=>{
        fetchFilms().then(films => {
           setFilmData(films)
        })

    }, [])

    

    console.log(filmData)
  return <div>{}</div>;
}
