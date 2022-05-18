import React from 'react';

const Review = ({ review }) => {
    const {img} = review
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;