import React from 'react';

const UserPersonalPage = ({ nextStep, prevStep, handleChange, values }) => {
    const continueStep = e => {
        e.preventDefault(); // Prevent default form submission
        nextStep(); // Call the nextStep function passed as a prop
    };

    const goBack = e => {
        e.preventDefault(); // Prevent default form submission
        prevStep(); // Call the prevStep function passed as a prop
    };

    return (
        <div className='bg-slate-300 p-4'>
            <h1 className='text-2xl font-bold text-center'>Enter Personal Details</h1>
            <form className='flex flex-col items-center space-y-2 mt-4'>
                <label htmlFor="Occupation">
                    <input
                       className="bg-slate-300 border-b border-slate-600 outline-none text-lg pb-2"
                        type="text"
                        name="occupation"
                        placeholder="Occupation"
                        value={values.occupation}
                        onChange={handleChange('occupation')}
                    />
                </label>
                <br />
                <label htmlFor="City">
                    <input
                        className="bg-slate-300 border-b border-slate-600 outline-none text-lg pb-2"
                        type="text"
                        name="city"
                        placeholder="City"
                        value={values.city}
                        onChange={handleChange('city')}
                    />
                </label>
                <br />
                <label htmlFor="Bio">
                    <textarea
                        className="bg-slate-300 border-b border-slate-600 outline-none text-lg"
                        name="bio"
                        placeholder="Bio"
                        value={values.bio}
                        onChange={handleChange('bio')}
                    />
                </label>
                <br />
                <div className='flex space-x-4'>
                    <button onClick={goBack} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Back</button>
                    <button onClick={continueStep} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default UserPersonalPage;