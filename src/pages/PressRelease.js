import { Container } from '@mui/material';
import React from 'react'
import Banner from '../components/Banner'
import assetImages from '../constant/enum';

const PressRelease = () => {
    const BreadCrumb = {
        defaultPage: "Home",
        currentPage: "Press Releases",
    };
    const press  = [1,2,3,4,5,6,7,8]
  return (
    <>
        <Banner bannerTitle="Press Releases" BreadCrumb={BreadCrumb} />
        <div className='press-releases-first-section'>
            <Container maxWidth={'xl'}>
                <div className='inner-grid-section'>
                    {press.map((item, i) => (
                        <div key={i} item={item} className='grid-col'>
                            <img src={assetImages.PressReleasePic} alt="img" />
                            <div className='press-title'>Galexy On Earth</div>
                            <div className='press-name'>Times of India</div>
                            <div className='sub-description'>Lorem Ipsum is simply dummy text of the printing is and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    </>
  )
}

export default PressRelease