import img1 from '../../src/assets/chef-service.jpg'

const Cover = ({heading, subContent, imgUrl, headingStyle, subContentStyle, bgColor}) => {
    const image = imgUrl ? imgUrl : img1
    const bgOverlay = bgColor ? bgColor : 'bg-black/50'
    return (
        <div className="mb-16">
            <div className="">
                <div className="relative lg:p-24 md:p-16 sm:p-8 p-4">
                    <img className='absolute h-full w-full left-0 top-0 object-cover' src={image} alt="" />
                    <div className={`${bgOverlay} relative lg:p-16 md:p-8 p-4 text-center`}>
                        <h2 style={headingStyle} className='mb-6 uppercase'>{heading}</h2>
                        <p style={subContentStyle}>{subContent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;

