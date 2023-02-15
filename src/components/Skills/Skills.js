import j from '../../assets/Json.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SkillsCard from './SkillsCard'
export default function Skills(){
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return(
        <div>
            <Slider {...settings}>
            <SkillsCard name='Javascript' image=''/>
            <SkillsCard name='React' image=''/>
            <SkillsCard name='MongoDB' image=''/>
            <SkillsCard name='HTML5' image=''/>
            <SkillsCard name='CSS' image=''/>
            <SkillsCard name='JSON' image={j}/>
            <SkillsCard name='BootStrap' image=''/>
            <SkillsCard name='VSCode' image=''/>
            <SkillsCard name='Nodejs' image=''/>    
            </Slider>
        </div>
    )
}