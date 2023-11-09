import React from 'react';
import Card from '../../../shared/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { dataContext } from '../../../private/provider/Data_Provider';

const Sales = () => {
    const { initialData } = useContext(dataContext)

    return (
        <div className='my-16 md:px-12 md:py-12 bg-[#F7F6FF]'>
            <div className="text-center md:px-12 mb-10 p-5  ">
                <h1 className="text-4xl font-bold mb-3">Featured Properties for Sales</h1>
                <span className="w-4 h-1.5 bg-[#FD3358] inline-block rounded-2xl mr-1.5"></span>
                <span className="w-12 h-1.5 bg-[#FD3358] inline-block rounded-2xl"></span>
                <span></span>
                <p className="text-lg text-slate-400 pt-4">Hand-Picked selection of quality places</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 p-5 py-5' data-aos="fade-down" data-aos-anchor-placement="top-center">
                {
                    initialData.map(ele => <Card key={ele._id} data={ele}></Card>)
                }
            </div>
        </div>
    );
};

export default Sales;