import Hero from "./Hero"
import { useState, useEffect } from 'react';
import axios from "axios";
import findBgColor from "../helpers/bgColor";
import Tilt from "react-parallax-tilt";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const [searchTerm, setSearchTerm] = useState("");
    const [pokeData, setPokeData] = useState([]);
    const [bgColor, setBgColor] = useState('bg-red-400');
    const [imgSrc, setImgSrc] = useState('');

    const getData = async (searchTerm) => {
        let address = 'https://pokeapi.co/api/v2/pokemon/' + searchTerm;
        const response = await axios.get(address);
        setBgColor(findBgColor(response.data.types[0].type.name))
        
        setImgSrc(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`);
        if (response.data.error || response.data.previous === null) {
            return;
        } else {
            setPokeData(response);
            setIsLoading(false);
            console.log(response.data)
        }
    }
    
    // useEffect(() => {
    //     getData();
    // }, [searchTerm]);

    let timeoutId;

    const handleChange = (e) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // setSearchTerm(e.target.value);
            getData(e.target.value)
            e.target.value = '';

        }, 1000)
    };

  return (
    <div className="flex flex-col border-8 box-border border-blue-500 h-screen font-press-start overflow-hidden bg-stone-100">
        <Hero />
        <div className="container flex flex-col self-center h-5/6 ">

            <label className="self-center py-5 text-center w-4/6"><b>search for your favorite pokémon by name or id:</b></label>
            <input type="text" onChange={handleChange} className="input border text-center w-1/5 min-w-fit border-black self-center text-black" />

            {!isLoading && (
                <div id="card" className={`${bgColor} d-flex flex-col w-3/4 sm:w-1/2 px-5 h-2/3  min-h-fit self-center mt-10 rounded-lg border-8 border-yellow-400 text-white max-w-md shadow-lg transition-all md:hover:scale-110`}>
                    <div className="results-container py-3 rounded-md">

                        <div className="name-display text-center text-2xl">
                            it's <span className="text-2xl">{pokeData.data.name}</span>!
                        </div>
                        <Tilt>
                            <div className="flex flex-col bg-white rounded-lg text-black mt-5 items-center">
                                <div id="img-container">
                                    <img className="object-cover h-48 transition-all hover:scale-125" src={imgSrc} />
                                </div>
                            </div>
                        </Tilt>
                        <div className="pt-3 lg:py-7">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr>
                                        <td className="border border-spacing-1 text-center w-1/2">id no.</td>
                                        <td className="border border-spacing-1 text-center">type</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-spacing-1 text-center">00{pokeData.data.id}</td>
                                        <td className="border border-spacing-1 text-center">{pokeData.data.types[0].type.name}</td>
                                    </tr>
                                </tbody>
                            </table>
                           
                            <table className=" w-full mt-4 text-sm md:text-md">
                                <thead>
                                    <tr>
                                        <td className="border border-spacing-1 text-center w-1/2">move 1</td>
                                        <td className="border border-spacing-1 text-center">move 2</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-spacing-1 text-center">{pokeData.data.moves[0].move.name}</td>
                                        <td className="border border-spacing-1 text-center">{pokeData.data.moves[1].move.name}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            )}

        </div>
        <footer className="flex flex-auto w-100 justify-items-end">

        </footer>
    </div>
  )
}
export default Main