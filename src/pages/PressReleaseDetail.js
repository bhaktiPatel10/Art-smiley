import { Container } from '@mui/material';
import React from 'react'
import Banner from '../components/Banner'
import assetImages from '../constant/enum';

const PressReleaseDetail = () => {
   const BreadCrumb = {
      defaultPage: "Home",
      currentPage: "Press Releases",
   };
  return (
    <>
        <Banner bannerTitle="Press Releases" BreadCrumb={BreadCrumb} />
        <Container maxWidth={'xl'}>
            <div className='main-press-release-section'>
                <img src={assetImages.PressDetailBanner} alt="img" />
                <div className='heading-text-title'>Galexy On Earth</div>
                <div className='sub-text'>Times of India</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet pellentesque enim, non dignissim mauris, accumsan viverra elementum. Aliquam lobortis amet faucibus id rutrum. Vestibulum volutpat pellentesque fames augue sit elementum. Auctor eget nisi ultrices aenean egestas sodales odio erat. Ultricies cursus dolor mattis nunc. In eget quis ut pulvinar sit in malesuada. Viverra integer fringilla eu et. Proin ullamcorper facilisi diam, eleifend augue sed.</p>
                <p>Qquam pellentesque justo montes, dignissim pharetra. Magna eleifend nam amet arcu leo suspendisse. Ullamcorper commodo amet integer nullam viverra sapien mattis. Massa mollis scelerisque nisi, tortor purus leo sed sit. Justo id id nec dui a varius. Ligula sodales feugiat consequat amet. Leo id orci dignissim dignissim lectus turpis non rhoncus feugiat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet pellentesque enim, non dignissim mauris, accumsan viverra elementum. Aliquam lobortis amet faucibus id rutrum. Vestibulum volutpat pellentesque fames augue sit elementum. Auctor eget nisi ultrices aenean egestas sodales odio erat. Ultricies cursus dolor mattis nunc. In eget quis ut pulvinar sit in malesuada. Viverra integer fringilla eu et. Proin ullamcorper facilisi diam, eleifend augue sed.</p>
                <p>Qquam pellentesque justo montes, dignissim pharetra. Magna eleifend nam amet arcu leo suspendisse. Ullamcorper commodo amet integer nullam viverra sapien mattis. Massa mollis scelerisque nisi, tortor purus leo sed sit. Justo id id nec dui a varius. Ligula sodales feugiat consequat amet. Leo id orci dignissim dignissim lectus turpis non rhoncus feugiat.</p>
            </div>
        </Container>
    </>
  )
}

export default PressReleaseDetail