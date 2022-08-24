import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ReCreateModal = (props) => {
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
        <Fade in={props.modalopen}>
          <Box className="modal-box">
            <div className="modal-body">
              <div className="close-btn" onClick={modalClose}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="modal-title">Recreate</div>
              <div className="ask-question-form-main">
                <div className="first-row-main">
                  <div className="labal-text">Email</div>
                  <input type="text" placeholder="Enter email" />
                </div>
                <div className="first-row-main">
                  <div className="labal-text">Message</div>
                  <textarea placeholder="Enter Message"></textarea>
                </div>
                <div className="submit-row">
                  <button type="submit" className="comman-btn">
                    Send
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

export default ReCreateModal;
