import React from 'react';
import rumana from './../../img/Rumana-canva.png'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Full stack Developer",
    "Frontend Developer",
    "React Developer",

];

const Header = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className=' mx-40' style={{ height: 300 }} src={rumana} />
                    <div>
                        <h2 className=" text-4xl font-bold ">Hi <br /> My name is Rumana K. I am a
                            <h1 className='text-orange-500'>
                                <TextTransition
                                    text={TEXTS[index % TEXTS.length]}
                                    springConfig={presets.wobbly}
                                />
                            </h1>

                            and, highly passionate about programming.
                        </h2>
                        
                        <button className="btn bg-orange-500 mt-6 mx-6">Contact Me</button>
                        <button className="btn bg-orange-500">Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;