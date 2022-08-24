import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MakeOfferModal = (props) => {
  const { modalopen, modalClose } = props;
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
          <Box className="modal-box">
            <div className="modal-body">
              <div className="close-btn" onClick={modalClose}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="modal-title">Make an Offer</div>
              <div className="ask-question-form-main make-an-offer-modal">
                <div className="first-row-main">
                  <div className="labal-text">Email</div>
                  <input type="text" placeholder="Enter email" />
                </div>
                <div className="offer-extra-field">
                  <div className="first-row-main">
                    <div className="labal-text">First name</div>
                    <input type="text" placeholder="Enter name" />
                  </div>
                  <div className="first-row-main">
                    <div className="labal-text">Last Name</div>
                    <input type="text" placeholder="Enter name" />
                  </div>
                </div>
                <div className="offer-extra-field">
                  <div className="first-row-main">
                    <div className="labal-text">Phone number</div>
                    <input type="text" placeholder="Enter number" />
                  </div>
                  <div className="first-row-main">
                    <div className="labal-text">Offer</div>
                    <input type="text" placeholder="Enter offer" />
                  </div>
                </div>
                <div className="first-row-main">
                  <div className="labal-text">Message</div>
                  <textarea placeholder="Enter Message"></textarea>
                </div>
                <div className="submit-row">
                  <button type="submit" className="comman-btn">
                    Make Offer
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default MakeOfferModal;
