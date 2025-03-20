import React from 'react';

const UserDetailsPage = ({ nextStep, handleChange, values }) => {
    const continueStep = e => {
        e.preventDefault(); // Prevent default form submission
        nextStep(); // Call the nextStep function passed as a prop
    };

    return (
        <div className='bg-slate-300 p-4'>
            <h1 className='text-2xl font-bold text-center'>Enter User Details</h1>
            <form className='flex flex-col items-center space-y-2 mt-4'>
                <label htmlFor="First Name">
                    <input
                        className="bg-slate-300 border-b border-slate-600 outline-none text-lg pb-2"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                    />
                </label>
                <br />
                <label htmlFor="Last Name">
                    <input
                        className="bg-slate-300 border-b border-slate-600 outline-none text-lg pb-2"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                    />
                </label>
                <br />
                <label htmlFor='Email'>
                    <input
                        className="bg-slate-300 border-b border-slate-600 outline-none text-lg pb-2"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </label>
                <br />
                <button onClick={continueStep} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Next</button>
            </form>
        </div>
    );
};

export default UserDetailsPage;