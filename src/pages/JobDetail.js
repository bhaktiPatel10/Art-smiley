import { Container } from '@mui/material';
import React, { useState } from 'react'
import Banner from '../components/Banner'
import JoinOurTeam from '../components/Modals/JoinOurTeam';

const JobDetail = () => {
    const BreadCrumb = {
        defaultPage: "Home",
        currentPage: "Career",
    };
    const [open, setOpen] = useState(false)
    const modalOpen = () => setOpen(true)
    const modalClose = () => setOpen(false)
  return (
    <>
        <Banner bannerTitle="Shopify Developer" BreadCrumb={BreadCrumb} />
        <div className='first-row-of-job-details'>
            <Container maxWidth={'xl'}>
                <div className='inner-box-main'>
                    <div className='sub-row-main'>
                        <div className='left-side-title'>Job Title:</div>
                        <div className='right-side-description'>Shopify Developer</div>
                    </div>
                    <div className='sub-row-main'>
                        <div className='left-side-title'>Experience Required: </div>
                        <div className='right-side-description'>1 to 3 Years</div>
                    </div>
                    <div className='sub-row-main'>
                        <div className='left-side-title'>Salary:</div>
                        <div className='right-side-description'>8 to 10  LPA</div>
                    </div>
                    <div className='sub-row-main'>
                        <div className='left-side-title'>Description:</div>
                        <div className='right-side-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className='apply-now-btn'>
                        <button className='comman-btn' onClick={modalOpen}>Apply Now</button>
                    </div>
                </div>
            </Container>
        </div>

        {/* Join our team */}

        <JoinOurTeam 
            modalopen={open}
            modalClose={modalClose}
        />

    </>
  )
}

export default JobDetail