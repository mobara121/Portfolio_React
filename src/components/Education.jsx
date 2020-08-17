import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from "styled-components";

const StyledSpan = styled.span`
  color: #fafafa;
  border-color: #292929;
  font-size: 30px;
  font-weight: 900;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  text-transform: uppercase;
  max-width: 1000px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;


const useStyles = makeStyles((theme) => ({
    modal: {
      margin: "100px auto",
      // marginTop: "200px",
      maxWidth: "80%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "white",
      border: 'none',
      // borderRadius: "2%",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


function Education() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
      <div>
        <Button type="button" onClick={handleOpen}>
          <StyledSpan>Education</StyledSpan>
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h1 id="transition-modal-title">Education</h1>
              <h3 id="transition-modal-description">Eleven Fifty Academy</h3>
              <p id="transition-modal-description"> Web Development course, Front end engineer</p>
              <p id="transition-modal-description"> April, 2020 - July, 2020</p>
              <p></p>
              <h3 id="transition-modal-description">Shinshu University</h3>
              <p id="transition-modal-description"> Bachelor's degree, Agriculture, Agriculture Operations, and Related Sciences</p>
              <p id="transition-modal-description"> April, 1994 - Mar, 1998</p>
            </div>
          </Fade>
        </Modal>
      </div>
  );
}

export default Education;