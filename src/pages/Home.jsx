import React from 'react'
import Image from '../../public/image/eiffel.jpg'

function Home (){
return (
        <div className="h-screen flex items-center justify-center"
             style={{
                backgroundImage: `url(${Image})`

        }}>
            <h1 className="text-xl font-bold sm:text-3xl xl:text-5xl">Charles Cantin - Photographe</h1>
        </div>
)}

export default Home