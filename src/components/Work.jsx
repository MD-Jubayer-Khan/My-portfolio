import React from 'react';
import MangoValley from '../assets/mangoValley.png'
import Mongso from '../assets/MongSo.png'
import Bluejestic from '../assets/Bluejestic.png'
import MotoGears from '../assets/moto-gears-cf6ba.web.app_.png'
import rp from '../assets/rp.png'
import suggestify from '../assets/suggestify.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>



          <div
            style={{ backgroundImage: `url(${Mongso})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 rotate- -180 duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                - Next JS Application
                <br />
                Client Project
                 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mongso.vercel.app/'  target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>



            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Bluejestic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 rotate- -180 duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Internship Project
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.bluejestic.com/shop/'  target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>



            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MangoValley})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 rotate- -180 duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Full stack React JS
                <br />
                Django  Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mangovalley.netlify.app/'  target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/MD-Jubayer-Khan/mango_valley_backend'
                target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>






            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MotoGears})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 rotate- -180 duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Full stack
                <br />
                 React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://moto-gears-cf6ba.web.app/'  target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/MD-Jubayer-Khan/manufacture-site-code-link'
                target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${rp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 rotate- -180 duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Data Science project MIT ET6
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.canva.com/design/DAGws29UjBY/Y2pk53733bpOPWbjNnKA_w/edit?utm_content=DAGws29UjBY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'  target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Presentation
                  </button>
                </a>
                <a href='https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-05-repo'
                target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${suggestify})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 rotate- -180 duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Python Package
              </span>
              <div className='pt-8 text-center'>
                <a href='https://pypi.org/project/suggestify/'  target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Documentation
                  </button>
                </a>
                <a href='https://github.com/MD-Jubayer-Khan/suggestify'
                target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
