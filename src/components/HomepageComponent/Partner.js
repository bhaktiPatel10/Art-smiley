import { Container } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'

const Partner = () => {
    const partners = [1,2,3,4,5,6]
  return (
    <>
        <section className='partner-section-main'>
            <Container maxWidth='xl'>
                <div className='heading-main'>
                    <img src={assetImages.HeadingAbovePart} alt="Img" />
                    <h2 className='comman-text'>Partners</h2>    
                </div>
                <div className='partner-logo-row'>
                    {partners.map((item, i) => (
                        <div item={item} key={i}  className='grid-col-main'>
                             <img src={assetImages.FirstLogo} alt="img" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>

    </>
  )
}

export default Partner