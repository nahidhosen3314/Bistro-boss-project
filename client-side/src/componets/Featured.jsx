
import FeaturedImg from '../../src/assets/featured.jpg'
import SectionTitle from './SectionTitle';

const Featured = () => {
    return (
        <div className="lg:py-20 py-10 mb-16 relative">
            <img className='absolute h-full bg-fixed w-full left-0 top-0 object-cover -z-10' src={FeaturedImg} alt="" />
            <div className="absolute h-full w-full left-0 top-0 object-cover bg-[#151515]/70 -z-10"></div>
            <div className="container">
                <SectionTitle
                    subHading={'Check it out'}
                    heading={'FROM OUR MENU'}
                    headingStyle={{ color: 'white' }}
                ></SectionTitle>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="">
                        <img className='w-[550] aspect-[1/.6] object-cover' src={FeaturedImg} alt="" />
                    </div>
                    <div className="">
                        <span className='text-white'>March 20, 2023</span>
                        <h4 className='mb-3 pt-2 text-white'>WHERE CAN I GET SOME?</h4>
                        <p className='mb-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='bg-transparent border-b-2 border-white hover:border-transparent hover:bg-light'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;