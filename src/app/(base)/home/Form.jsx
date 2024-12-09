import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const Form = ({ sm = 1 }) => {
    let query = {};

    const formRef = useRef(null)
    const router = useRouter()
    const submit = (e) => {
        e.preventDefault()
        // console.log(e.target);
    }
    const stockChange = (e) => {
        let target, name, checked;
        target = e.target;
        name = target.name;
        checked = target.checked;
        if (!checked) delete query[name];
        else query[name] = checked;
        let queryString = "/search?";
        let start = true;
        for (let item in query) {
            if (start) queryString += `${item}=${query[item]}`;
            else queryString += `&${item}=${query[item]}`;
            start = false;
        }
        router.push(queryString)
    }
    const queryChange = (e) => {
        query = {};
        let target, name, checked;
        target = e.target;
        name = target.dataset.name;
        checked = target.checked;
        let category = target.dataset.category;

        // checked on input
        if (checked) {
            //checks if there is an attribute based on the category like ram or cpu 
            if (query[category] && !query[category].includes(name.toLowerCase())) query[category].push(name.toLowerCase());
            //sets the attribute of that category as an array on the query object
            else query[category] = [name.toLowerCase()];
        }
        else {
            if (query[category] && query[category].includes(name.toLowerCase())) query[category].splice(query[category].indexOf(name.toLowerCase()), 1);
            if (query[category] && query[category].length == 0) delete query[category];
        };



        //makes an url and pushes to the url stack
        let queryString = "/search?";
        let start = true;
        for (let item in query) {
            if (start) queryString += `${item}=${query[item]}`;
            else queryString += `&${item}=${query[item]}`;
            start = false;
        }
        router.push(queryString)
    }
    return (
        <form ref={formRef} className='flex flex-col gap-4 px-4 pb-8' action='/search'>
            <fieldset className='flex gap-2 items-center'>
                <input type="checkbox" name='inStock' id={'inStock' + sm} className='h-4 w-4' onChange={stockChange} />
                <label htmlFor={'inStock' + sm} className='text-sm'>Show only in Stock items</label>
            </fieldset>
            <fieldset className='flex flex-col justify-between items-start'>
                <label htmlFor={'priceRange'} className='font-semibold  pb-2'>Price Range</label>
                <div className=' gap-2 w-full  flex '>
                    <input type='number' id='minPrice' placeholder='min' min={0} className='border-2 border-gray-300 rounded p-1  w-24'></input>
                    <input type='number' id='maxPrice' placeholder='max' className='border-2 border-gray-300 rounded p-1  w-24 ms-2'></input>
                </div>
            </fieldset>
            <fieldset className='flex gap-2 flex-col '>
                <p className='font-semibold'>Processor Brand</p>
                <div className='flex gap-2 items-center'>
                    <input data-name='Intel' data-category="processor" onChange={queryChange} type="checkbox" id={'intel' + sm} className='h-4 w-4' />
                    <label htmlFor={'intel' + sm} >Intel</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input data-name='Amd' data-category="processor" onChange={queryChange} type="checkbox" id={'amd' + sm} className='h-4 w-4' />
                    <label htmlFor={'amd' + sm} >Amd</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input data-name='Apple' data-category="processor" onChange={queryChange} type="checkbox" id={'apple' + sm} className='h-4 w-4' />
                    <label htmlFor={'apple' + sm} >Apple</label>

                </div>

            </fieldset>
            <fieldset className='flex gap-2 flex-col ' >
                <p className='font-semibold'>Ram Size</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='2' data-category="ram" onChange={queryChange} id={'2GB' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'2gb' + sm} >2 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='4' data-category="ram" onChange={queryChange} id={'4GB' + sm} value={4} className='h-4 w-4' />
                    <label htmlFor={'4gb' + sm} >4 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='8' data-category="ram" onChange={queryChange} id={'8GB' + sm} value={8} className='h-4 w-4' />
                    <label htmlFor={'8gb' + sm} >8 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='16' data-category="ram" onChange={queryChange} id={'16GB' + sm} value={16} className='h-4 w-4' />
                    <label htmlFor={'16gb' + sm} >16 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='32' data-category="ram" onChange={queryChange} id={'32GB' + sm} value={32} className='h-4 w-4' />
                    <label htmlFor={'32gb' + sm} >32 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='64' data-category="ram" onChange={queryChange} id={'64GB' + sm} value={64} className='h-4 w-4' />
                    <label htmlFor={'64gb' + sm} >64 GB+</label>

                </div>



            </fieldset>
            <fieldset className='flex gap-2 flex-col '  >
                <p className='font-semibold'>Storage</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='128' data-category="storage" onChange={queryChange} id={'s128' + sm} value={128} className='h-4 w-4' />
                    <label htmlFor={'s128' + sm} >128 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='256' data-category="storage" onChange={queryChange} id={'s256' + sm} value={256} className='h-4 w-4' />
                    <label htmlFor={'s256' + sm} >256 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='512' data-category="storage" onChange={queryChange} id={'s512' + sm} value={512} className='h-4 w-4' />
                    <label htmlFor={'s512' + sm} >512 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='1' data-category="storage" onChange={queryChange} id={'s1' + sm} value={1} className='h-4 w-4' />
                    <label htmlFor={'s1' + sm} >1 TB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='2' data-category="storage" onChange={queryChange} id={'s2' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'s2' + sm} >2 TB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='3' data-category="storage" onChange={queryChange} id={'s3' + sm} value={3} className='h-4 w-4' />
                    <label htmlFor={'s3' + sm} >3 TB+</label>

                </div>
            </fieldset>
            <fieldset className='flex gap-2 flex-col ' >
                <p className='font-semibold'>Graphics Memory</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='0' data-category="graphics" onChange={queryChange} id={'g0gb' + sm} value={0} className='h-4 w-4' />
                    <label htmlFor={'g0gb' + sm} >Shared / Integrated</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='2' data-category="graphics" onChange={queryChange} id={'g2gb' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'g2gb' + sm} >Dedicated 2 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='4' data-category="graphics" onChange={queryChange} id={'g4gb' + sm} value={4} className='h-4 w-4' />
                    <label htmlFor={'g4gb' + sm} >Dedicated 4 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='8' data-category="graphics" onChange={queryChange} id={'g8gb' + sm} value={8} className='h-4 w-4' />
                    <label htmlFor={'g8gb' + sm} >Dedicated 8 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='16' data-category="graphics" onChange={queryChange} id={'g16gb' + sm} value={16} className='h-4 w-4' />
                    <label htmlFor={'g16gb' + sm} >Dedicated 16 GB+</label>

                </div>

            </fieldset>
        </form>
    );
}

export default Form;
