import emitter from '@/app/utls/mitt/Mit';
import { queryOrganizer } from '@/app/utls/searchUrlFilter/searchUrlFilter';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

let timeout = setTimeout(()=>{},100)
const Form = ({ setLoading, queryParams, sm }) => {
    const params = useSearchParams()
    let query = queryParams;

    const formRef = useRef(null)
    const router = useRouter()
    const submit = (e) => {
        e.preventDefault()
        // console.log(e.target);
    }
    const stockChange = (e) => {
        setLoading(true);
        let target, name, checked;
        target = e.target;
        name = target.name;
        checked = target.checked;
        if (!checked) delete query[name];
        else query[name] = checked;
        if (query?.page) query.page = 0;
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
        setLoading(true)
        query = {};
        for (const [key, value] of params.entries()) {
            query[key] = value;
        }
        query = queryOrganizer(query)
        if (query?.page) query.page = 0;
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
    const queryChangeNumType = (e) => {
        setLoading(true)
        query = {};
        for (const [key, value] of params.entries()) {
            query[key] = value;
        }
        query = queryOrganizer(query)
        if (query?.page) query.page = 0;
        let target, name, checked;
        target = e.target;
        name = target.dataset.name;
        checked = target.checked;
        let category = target.dataset.category;

        // checked on input
        if (checked) {

            //checks if there is an attribute based on the category like ram or cpu 
            if (query[category] && !query[category].includes(Number(name))) query[category].push(Number(name));
            //sets the attribute of that category as an array on the query object
            else query[category] = [Number(name)];
        }
        else {
            if (query[category] && query[category].includes(Number(name))) query[category].splice(query[category].indexOf(Number(name)), 1);
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
    const priceChange = (e) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setLoading(true)
            query = {};
            for (const [key, value] of params.entries()) {
                query[key] = value;
            }
            query = queryOrganizer(query)
            if (query?.page) query.page = 0;

            let target, name, value;
            target = e.target;
            value = target.value;
            name = target.dataset.name;
            query[name] = Number(value);


            //makes an url and pushes to the url stack
            let queryString = "/search?";
            let start = true;
            for (let item in query) {
                if (start) queryString += `${item}=${query[item]}`;
                else queryString += `&${item}=${query[item]}`;
                start = false;
            }
            router.push(queryString)
        }, 1000)

    }
    useEffect(() => {
        if (formRef.current) {
            if (query.inStock) formRef.current['inStock' + sm].checked = true;
            if (query.min) formRef.current['minPrice' + sm].value = query.min;
            else formRef.current['minPrice' + sm].value = 0;
            if (query.max) formRef.current['maxPrice' + sm].value = query.max;
            else formRef.current['maxPrice' + sm].value = 1000000;
            if (query.processor) query.processor.map(ele => { if (formRef.current[ele + sm]) formRef.current[ele + sm].checked = true })
            if (query.ram) query.ram.map(ele => { if (formRef.current[ele + "GB" + sm]) formRef.current[ele + "GB" + sm].checked = true })
            if (query.storage) query.storage.map(ele => { if (formRef.current["s" + ele + sm]) formRef.current["s" + ele + sm].checked = true })
            if (query.graphics) query.graphics.map(ele => { if (formRef.current["g" + ele + "gb" + sm]) formRef.current["g" + ele + "gb" + sm].checked = true })
        }
    }, [sm])
    return (
        <form ref={formRef} className='flex flex-col gap-4 px-4 pb-8' action='/search'>
            <fieldset className='flex gap-2 items-center'>
                <input type="checkbox" name='inStock' id={'inStock' + sm} className='h-4 w-4' onChange={stockChange} />
                <label htmlFor={'inStock' + sm} className='text-sm'>Show only in Stock items</label>
            </fieldset>
            <fieldset className='flex flex-col justify-between items-start'>
                <label htmlFor={'priceRange'} className='font-semibold  pb-2'>Price Range</label>
                <div className=' gap-2 w-full  flex '>
                    <input type='number' onChange={priceChange} data-name="min" id={"minPrice" + sm} placeholder='min' min={0} className='border-2 border-gray-300 rounded p-1  w-24'></input>
                    <input type='number' onChange={priceChange} data-name="max" id={'maxPrice' + sm} placeholder='max' className='border-2 border-gray-300 rounded p-1  w-24 ms-2'></input>
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
                    <input type="checkbox" data-name='2' data-category="ram" onChange={queryChangeNumType} id={'2GB' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'2GB' + sm} >2 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='4' data-category="ram" onChange={queryChangeNumType} id={'4GB' + sm} value={4} className='h-4 w-4' />
                    <label htmlFor={'4GB' + sm} >4 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='8' data-category="ram" onChange={queryChangeNumType} id={'8GB' + sm} value={8} className='h-4 w-4' />
                    <label htmlFor={'8GB' + sm} >8 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='16' data-category="ram" onChange={queryChangeNumType} id={'16GB' + sm} value={16} className='h-4 w-4' />
                    <label htmlFor={'16GB' + sm} >16 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='32' data-category="ram" onChange={queryChangeNumType} id={'32GB' + sm} value={32} className='h-4 w-4' />
                    <label htmlFor={'32GB' + sm} >32 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" data-name='64' data-category="ram" onChange={queryChangeNumType} id={'64GB' + sm} value={64} className='h-4 w-4' />
                    <label htmlFor={'64GB' + sm} >64 GB+</label>

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
