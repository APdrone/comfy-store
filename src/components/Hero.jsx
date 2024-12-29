import React from 'react'
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import { Link } from 'react-router-dom';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>We're changing the way people shop.</h1>
                <p className='mt-8 max-w-xl text-lg leading-8'>Discover a new way to shop for furniture that blends style, comfort, and affordability.
                    At Comfy, we bring you cozy sofas, elegant dining sets, and smart storage solutions
                    designed to elevate your space. Create a home you love with furniture that’s crafted
                    for your lifestyle.</p>
                <div className="mt-10">
                    <Link to="products" className='btn btn-primary'>Our Products</Link>
                </div>
            </div>
            <div>
                <div className="hidden h-[28rem] lg:carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
                    {carouselImages.map((image, index) => {
                        return <div className="carousel-item" key={index}>
                            <img
                                src={image}
                                className="rounded-box h-full w-80 object-cover" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero