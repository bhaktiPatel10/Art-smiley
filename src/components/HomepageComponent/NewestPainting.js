import { Container } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'
import ProductCol from '../ProductCol'

const NewestPainting = () => {
    const product = [1,2,3,4]
  return (
        <>
            <section className='newest-paintings-main'>
                <Container maxWidth='xl'>
                    <div className='heading-main'>
                        <img src={assetImages.HeadingAbovePart} alt="Img" />
                        <h2 className='comman-text'>Newest Paintings</h2>    
                    </div>      
                    <div className='newest-painting-grid'>
                        {product.map((item, i)=>(
                            <ProductCol item={item} key={i} />
                        ))}
                        
                    </div>
                </Container>
            </section>
        </>
  )
}

export default NewestPainting