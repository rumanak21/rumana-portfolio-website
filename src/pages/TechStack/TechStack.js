import React from 'react';
import { TbBrandJavascript, TbBrandReactNative, TbBrandBootstrap, TbBrandTailwind} from 'react-icons/tb';
import { IoLogoNodejs, IoLogoFirebase} from 'react-icons/io';
import { SiExpress, SiVisualstudiocode} from 'react-icons/si';
import { BsGithub} from 'react-icons/bs';


const TechStack = () => {
    return (
        <section>
            <div className="hero bg-base-200 ">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">My Tech Stack</h1>
                        <p className="py-6">I have been working with these technologies recently.</p>
                        <div className='text-4xl flex flex-auto lg:text-7xl space-x-24  '>
                            <div className='bg-yellow-500 m-5'><TbBrandJavascript/></div>
                            <div  className='text-cyan-500 m-5'><TbBrandReactNative/></div>
                            <div className='bg-indigo-500 text-white m-5'><TbBrandBootstrap/></div>
                            <div className='text-cyan-500' m-5><TbBrandTailwind/></div>
                            <div className='bg-green-500 m-5'><IoLogoNodejs/></div>
                            <div className='m-5'><SiExpress/></div>
                            <div className='m-5'><BsGithub/></div>
                            <div className='text-cyan-500 m-5'><SiVisualstudiocode/></div>
                            

                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;