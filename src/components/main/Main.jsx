import React, { useEffect } from 'react'
import './Main.css'
import img1 from '../accest/pexels-martin-péchy-1028225.jpg'
import img2 from '../accest/pexels-mudassir-ali-1878293.jpg'
import img3 from '../accest/pexels-nien-tran-dinh-1654748.jpg'
import img4 from '../accest/pexels-pixabay-64271.jpg'
import img5 from '../accest/pexels-robert-so-14392638.jpg'
import img6 from '../accest/pexels-serg-alesenko-14392989.jpg'
import img7 from '../accest/pexels-siegfried-poepperl-8694360.jpg'
import img8 from '../accest/pexels-sudipta-mondal-1603650.jpg'
import img9 from '../accest/pexels-vincent-gerbouin-1174732.jpg'
import { GoLocation } from 'react-icons/go'
import { BsClipboardCheck } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const data = [
        {
            id: 1,
            imgSrc: img1,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 2,
            imgSrc: img2,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 3,
            imgSrc: img3,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 4,
            imgSrc: img4,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 5,
            imgSrc: img5,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 6,
            imgSrc: img6,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 7,
            imgSrc: img7,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 8,
            imgSrc: img8,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
        {
            id: 9,
            imgSrc: img9,
            descTitle: ' Du Lịch Đà Nẵng ',
            location: 'Đà Nẵng',
            garade: 'Biệt Thự',
            fees: '$900',
            description: 'Du lịch Đà Nẵng được yêu thích với vẻ đẹp giao hòa giữa thiên nhiên và văn hóa; giữa thành thị sôi động và người dân hiếu khách. Xứng danh điểm đến hàng đầu Việt Nam, Đà Nẵng luôn thu hút du khách phương xa với vẻ đẹp của riêng mình; đó là biển Mỹ Khê trong xanh, bán đảo Sơn Trà với hệ sinh thái độc đáo, Bà Nà Hill đẹp như trời Âu, hay đặc sản địa phương đa dạng...'
        },
    ]
    return (
        <section className='main container section'>


            <div className='secTitle'>
                <h3 data-aos="fade-up" className='title'>
                    Most Visited destinations
                </h3>
            </div>

            <div className='secContent grid'>
                {
                    data.map(({ id, imgSrc, descTitle, location, garade, fees, description }) => {
                        return (
                            <div data-aos="fade-up" key={id} className="singleDes">
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt="2" />
                                    {descTitle}
                                </div>

                                <div className='cardInfo'>
                                    <h4 className='descTitle'> {descTitle}</h4>
                                    <span className='continent flex'>
                                        <GoLocation className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className='fees flex'>

                                        <div className='grede'>
                                            <span> {garade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>

                                    </div>
                                    {/*  */}
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'> DATAILS <BsClipboardCheck className='icon' /></button>

                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}

export default Main