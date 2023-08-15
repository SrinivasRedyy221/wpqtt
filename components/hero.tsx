import react from 'react'
import '@/styles/globals.css'

const Hero = () => {
    return (
        <div className="flex flex-row">
            <div>
            </div>
            <div className="w-screen object-cover object-center"> 
                <div className=" text-center font-serif font-extrabold">
                   Srinivas Reddy
                   <h1 className="text-4xl font-bold">Hello there!!Welcome to Our Website!</h1>
                </div>
                <div className="text-center font-serif font-extrabold">
                    <h1 className="text-4xl font-bold">We are Creating A website to show case our talent in terms of education</h1>
                  </div>
            </div>
        </div>
    )
}
export default Hero