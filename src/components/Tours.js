import React from 'react'
import { Title } from './Title'
import { tours } from '../data'
export const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title='featured' subtitle='tours'></Title>

            <div className="section-center featured-center">
                {tours.map((data) => {
                    return (
                        <article className="tour-card">
                            <div className="tour-img-container">
                                <img src={data.image} className="tour-img" alt="" />
                                <p className="tour-date">{data.date}</p>
                            </div>
                            <div className="tour-info">
                                <h4>{data.title}</h4>
                                <p>
                                    {data.info}
                                </p>
                                <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span> {data.location}
                                    </p>
                                    <p>{data.duration}</p>
                                    <p>{data.price}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}

            </div>
        </section>
    )
}
