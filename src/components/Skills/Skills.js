import SkillsCard from './SkillsCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import styles from './Skills.module.scss'

const Skills = () => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        lazyLoad: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000
    };

    return(
        <div className={styles.imageSlider}>
            <Slider {...settings}>
                {SkillsCard.map((item) => (
                  <div key={item.id}>
                    <img src={item.src} alt={item.alt} />
                    <h1>{item.skill}</h1>
                  </div>  
                ))}
            </Slider>
        </div>
    )
}
export default Skills