import react from 'react'
import '@/styles/globals.css'

const Hero = () => {
    return (
        <div className="flex flex-row">
            <div>
            </div>
            <div className="w-screen bg-black object-cover object-center"> 
                <div className=" text-center font-serif font-extrabold">
                   Srinivas Reddy
                   <h1 className="text-4xl font-bold">Hello there!!Welcome to My Website!</h1>
                </div>
                <div className="text-center font-serif font-extrabold">
                    <h1 className="text-4xl font-bold">I am a Full Stack Developer</h1>
                  </div>
            </div>
        </div>
    )
}
export default Hero