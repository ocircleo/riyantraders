import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const Form = ({ sm = 1 }) => {
    const formRef = useRef(null)
    const router = useRouter()
    const submit = (e) => {
        e.preventDefault()
        // console.log(e.target);
    }
    const change = (e) => {
        if (!formRef.current) return;
        const data = {
            inStock: formRef.current['inStock' + sm].checked,  // boolean
            priceRange: {
                min: parseFloat(formRef.current['minPrice'].value) || 0,
                max: parseFloat(formRef.current['maxPrice'].value) || Infinity,
            },
            processorBrand: [],
            processorGeneration: [],
            ramSize: [],
            storage: [],
            graphicsMemory: []
        };

        // Processor brand checkboxes
        ['intel', 'amd', 'apple'].forEach((brand) => {
            if (formRef.current[brand + sm].checked) data.processorBrand.push(brand);
        });

        // Processor generation checkboxes
        [8, 9, 10, 11, 12, 13, 14].forEach((gen) => {
            if (formRef.current[`${gen}th${sm}`].checked) data.processorGeneration.push(gen);
        });

        // RAM size checkboxes
        [2, 4, 8, 16, 32, 64].forEach((ram) => {
            if (formRef.current[`${ram}gb${sm}`].checked) data.ramSize.push(ram);
        });

        // Storage checkboxes
        [128, 256, 512, 1, 2, 3].forEach((storage) => {
            if (formRef.current[`s${storage}${sm}`].checked) data.storage.push(storage);
            // console.log(formRef.current);
        });

        // Graphics memory checkboxes
        [0, 2, 4, 8, 16].forEach((graphics) => {
            if (formRef.current[`g${graphics}gb${sm}`].checked) data.graphicsMemory.push(graphics);
        });

        console.log('Query Object:', data);
        router.push(`/search?inStock=${data.inStock}&min=${data.priceRange.min}&max=${data.priceRange.max}&processor=${data.processorBrand}&gen=${data.processorGeneration}&ram=${data.ramSize}&storage=${data.storage}&graphics=${data.graphicsMemory}`)
        // Send 'data' to the backend via API call here
    }
    return (
        <form ref={formRef} className='flex flex-col gap-4 px-4 pb-8' action='/search' onChange={change}>
            <fieldset className='flex gap-2 items-center'>
                <input type="checkbox" id={'inStock' + sm} className='h-4 w-4' />
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
                    <input type="checkbox" id={'intel' + sm} className='h-4 w-4' />
                    <label htmlFor={'intel' + sm} >Intel</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'amd' + sm} className='h-4 w-4' />
                    <label htmlFor={'amd' + sm} >Amd</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'apple' + sm} className='h-4 w-4' />
                    <label htmlFor={'apple' + sm} >Apple</label>

                </div>

            </fieldset>
            <fieldset className='flex gap-2 flex-col ' >
                <p className='font-semibold'>Processor Generation</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'8th' + sm} value={5} className='h-4 w-4' />
                    <label htmlFor={'8th' + sm} >8th Gen</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'9th' + sm} value={5} className='h-4 w-4' />
                    <label htmlFor={'9th' + sm} >9th Gen</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'10th' + sm} value={10} className='h-4 w-4' />
                    <label htmlFor={'10th' + sm} >10th Gen</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'11th' + sm} value={11} className='h-4 w-4' />
                    <label htmlFor={'11th' + sm} >11th Gen</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'12th' + sm} value={12} className='h-4 w-4' />
                    <label htmlFor={'12th' + sm} >12th Gen</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'13th' + sm} value={13} className='h-4 w-4' />
                    <label htmlFor={'13th' + sm} >13th Gen</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'14th' + sm} value={14} className='h-4 w-4' />
                    <label htmlFor={'14th' + sm} >14th Gen</label>

                </div>



            </fieldset>
            <fieldset className='flex gap-2 flex-col ' >
                <p className='font-semibold'>Ram Size</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'2gb' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'2gb' + sm} >2 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'4gb' + sm} value={4} className='h-4 w-4' />
                    <label htmlFor={'4gb' + sm} >4 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'8gb' + sm} value={8} className='h-4 w-4' />
                    <label htmlFor={'8gb' + sm} >8 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'16gb' + sm} value={16} className='h-4 w-4' />
                    <label htmlFor={'16gb' + sm} >16 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'32gb' + sm} value={32} className='h-4 w-4' />
                    <label htmlFor={'32gb' + sm} >32 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'64gb' + sm} value={64} className='h-4 w-4' />
                    <label htmlFor={'64gb' + sm} >64 GB+</label>

                </div>



            </fieldset>
            <fieldset className='flex gap-2 flex-col '  >
                <p className='font-semibold'>Storage</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'s128' + sm} value={128} className='h-4 w-4' />
                    <label htmlFor={'s128' + sm} >128 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'s256' + sm} value={256} className='h-4 w-4' />
                    <label htmlFor={'s256' + sm} >256 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'s512' + sm} value={512} className='h-4 w-4' />
                    <label htmlFor={'s512' + sm} >512 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'s1' + sm} value={1} className='h-4 w-4' />
                    <label htmlFor={'s1' + sm} >1 TB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'s2' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'s2' + sm} >2 TB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'s3' + sm} value={3} className='h-4 w-4' />
                    <label htmlFor={'s3' + sm} >3 TB+</label>

                </div>
            </fieldset>
            <fieldset className='flex gap-2 flex-col ' >
                <p className='font-semibold'>Graphics Memory</p>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'g0gb' + sm} value={0} className='h-4 w-4' />
                    <label htmlFor={'g0gb' + sm} >Shared / Integrated</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'g2gb' + sm} value={2} className='h-4 w-4' />
                    <label htmlFor={'g2gb' + sm} >Dedicated 2 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'g4gb' + sm} value={4} className='h-4 w-4' />
                    <label htmlFor={'g4gb' + sm} >Dedicated 4 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'g8gb' + sm} value={8} className='h-4 w-4' />
                    <label htmlFor={'g8gb' + sm} >Dedicated 8 GB</label>

                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id={'g16gb' + sm} value={16} className='h-4 w-4' />
                    <label htmlFor={'g16gb' + sm} >Dedicated 16 GB+</label>

                </div>

            </fieldset>
            <button type='submit'>submit</button>
        </form>
    );
}

export default Form;
