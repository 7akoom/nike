import React from 'react';
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReview = () => {
    return (
        <section className='max-container'>
            <h3 className='font-palanquin text-center text-4xl font-bold'>
                What Our
                <span className='text-coral-red '> Customers </span>
                Say?
            </h3>
            <p className='info-text m-auto mt-4 max-w-lg text-center'>
                Hear genuine stories from our satisfied customers about their exceptional experience with us.
            </p>
            <div className='mt-24 flex flex-1 justify-evenly item-center max-lg:flex-col gap-14'>
                {reviews.map((rev) => (
                    <ReviewCard
                        key={rev.customerName}
                        imgURL={rev.imgURL}
                        customerName={rev.customerName}
                        rating={rev.rating}
                        feedback={rev.feedback}
                    />
                ))}
            </div>
        </section>
    );
}

export default CustomerReview;
