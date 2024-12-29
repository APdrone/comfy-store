import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>

        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Welcome to Comfy, your destination for stylish, comfortable furniture.
        Explore cozy sofas, elegant dining sets, and smart storage solutions
        designed to elevate your home. Blending quality and affordability,
        Comfy helps you create spaces that feel as good as they look.
      </p>
    </>
  )
}

export default About