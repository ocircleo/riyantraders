import Image from 'next/image';
import eye from "/public/eye.png"
const Preview = () => {
    return (<>
       
        <Image height={10} width={30} src={eye} alt='preview' className='bg-white p-2 cursor-pointer active:scale-90 duration-100 hover:bg-blue-500' title='Compare Laptops'></Image>

    </>
    );
}

export default Preview;
