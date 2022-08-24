import { Backdrop, Button, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const JoinOurTeam = (props) => {
  const {modalopen, modalClose} = props
  return (
    <>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalopen}
        onClose={modalClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalopen}>
          <Box className="modal-box join-our-team-modal">
                <div className="modal-body">
                    <div className="close-btn" onClick={modalClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="modal-title">Join our Team</div>
                    <div className="ask-question-form-main">
                        <div className="first-row-main">
                            <div className="labal-text">First Name*</div>
                            <input  type="text" />
                        </div>
                        <div className="first-row-main">
                            <div className="labal-text">Last Name*</div>
                            <input  type="text" />
                        </div>
                        <div className="first-row-main">
                            <div className="labal-text">Email Address*</div>
                            <input  type="text" />
                        </div>
                        <div className="first-row-main">
                            <div className="labal-text">Message</div>
                            <textarea placeholder="Enter Message"></textarea>
                        </div>
                        <div className="first-row-main file-upload-row">
                            <div className="labal-text">Attachment*</div>
                            <div className="inner-box-main">
                            <Button variant="contained" component="label"> 
                                Choose File
                                <input type="file" hidden />
                            </Button>
                            <i className="fa-solid fa-paperclip"></i>
                            </div> 
                        </div>
                        <div className="submit-row">
                            <button type="submit" className="comman-btn">Submit</button>
                        </div>
                    </div>
                </div>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default JoinOurTeam