import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';

const Treatment = () => {
    return (
        <div className="lg:w-2/3 mx-auto my-10">
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure className='lg:w-1/2'>
                    <img src={treatment} alt="Album" />
                </figure>
                <div className="lg:w-1/2 card-body flex items-center">
                    <div className='mt-16'>
                        <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions mt-4">
                            <ButtonPrimary>Getting Stared</ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;