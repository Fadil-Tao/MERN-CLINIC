import About from '../Components/Ui/About';
import Branding from '../Components/Ui/Branding';
import HeroBanner from '../Components/Ui/HeroBanner';
import ReviewCarousell from '../Components/Ui/ReviewCarousell';
import Services from '../Components/Ui/Services';
import Specialists from '../Components/Ui/Specialist';

const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <div className='px-12 md:px-20'>
                <Services />
                <About />
                <Branding />
                <Specialists/>
            </div>
            <ReviewCarousell/>
        </>
    );
};

export default HomePage;
