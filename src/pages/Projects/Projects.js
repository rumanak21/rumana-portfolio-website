import React from 'react';
import project1 from './../../img/project1.png';
import project2 from './../../img/project2.png';
import project3 from './../../img/project3.png';

const Projects = () => {
    return (
        <section>

            <div className='min-h-screen bg-base-200'>
                <div className='text-center'><h1 className="text-5xl font-bold">My Projects</h1>
                    <p className="py-6">Some projects that I have built so far.....</p>
                </div>
                <div className='grid grid-cols-3 gap-4'>

                    <div class="card bg-base-100 shadow-xl">
                        <figure> <img style={{ height: 200 }} src={project1} alt="" srcset="" /> </figure>
                        <div class="card-body">
                            <h2 class="card-title">Electric Tools Manufacturer
                            </h2>
                            <p>It is a Manufacturing company's website.</p>
                            <div class="card-actions justify-end">
                                <a class="btn bg-orange-500" href="https://electric-tools-17384.web.app/" target='_blank'>Watch Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure> <img style={{ height: 200 }} src={project2} alt="" srcset="" /> </figure>
                        <div class="card-body">
                            <h2 class="card-title">Book Analysis Website
                            </h2>
                            <p>It is a book analysis website.
                            </p>
                            <div class="card-actions justify-end">
                            <a class="btn bg-orange-500" href="https://book-analysis-website-79cd17.netlify.app/" target='_blank'>Watch Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure> <img style={{ height: 200 }} src={project3} alt="" srcset="" /> </figure>
                        <div class="card-body">
                            <h2 class="card-title">Computer World
                            </h2>
                            <p>It is a Inventory management website
                            </p>
                            <div class="card-actions justify-end">
                            <a class="btn bg-orange-500" href="https://computer-world-3fb97.web.app/" target='_blank'>Watch Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Projects;