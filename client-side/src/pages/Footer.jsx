import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className='bg-gray-900 text-white text-base pt-16 pb-5 footer-sec'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="">
                        <Link to="/" className='mb-4 inline-block'>
                            {/* <LogoLight width="170"></LogoLight> */}
                            <h3 className="text-white">Logo</h3>
                        </Link>
                        <p className='text-white text-base'>In the real estate business you learn more about people and you learn more about community issues, you learn more about life, you learn more about the impact of government, probably than any other profession that I know of</p>
                    </div>
                    <div className="text-white">
                        <h4 className='mb-4 text-white'>Contact Info</h4>
                        <p>Unicoder Design Agency 301 The Greenhouse, Custard Factory, London, E3 8DY.</p>
                        <p>+1 246-345-0695</p>
                        <p>helpline@homex.com</p>
                    </div>
                    <div className="">
                        <h4 className='mb-4 text-white'>Quick Links</h4>
                        <ul>
                            <li><a href="">Our Services</a></li>
                            <li><a href="">Investment Solution</a></li>
                            <li><a href="">Frequenly Ask Question</a></li>
                            <li><a href="">How It Work</a></li>
                            <li><a href="">Become a Member</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center flex-wrap border-t border-white/50 pt-5 mt-10">
                    <p className='!m-0'>© 2022 Uniland All right reserved</p>
                    <a href="" className='hover:underline hover:text-primary'>Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;