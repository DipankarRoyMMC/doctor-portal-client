import React from 'react';

const Review = ({ review }) => {
    const { name, img, feedback, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{feedback}</p>
                <div className="flex items-center mt-4">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                    <div className='ml-3'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;