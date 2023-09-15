import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const Row = ({ title, fetchURL,rowId }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setMovies(response.data.results)
            })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft size={40} className="left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    onClick={slideLeft} />
                <div id={"slider" + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((movie, id) => {
                        return (
                            <Movie key={id} item={movie} />
                        )
                    })}
                </div>
                <MdChevronRight size={40} className=" right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideRight} />
            </div>
        </div>
    )
}

export default Row