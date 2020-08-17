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
      // marginTop: "100px",
      maxWidth: "80%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: ".SFNSText-Regular",
    },
    paper: {
      backgroundColor: "white",
      border: 'none',
      // borderRadius: "25%",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function AboutMe() {
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
        <StyledSpan>About Me</StyledSpan>
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
            <h1 id="transition-modal-title">About Me</h1>
            <p id="transition-modal-description">Japanese/English Bilingual professional with a newfound passion for web development. In my past life, I've worked in laboratories discovering new flavors for ice cream, managed inventories for multi-national companies, even acted as a cultural liaison for Japanese citizens living in America. I'm currently on my new journey to become a full-stack developer by studying HTML5, CSS, JavaScript, React, and C# at Eleven Fifty Academy. </p>
            <p id="transition-modal-description">日本語と英語両方のスキルを活用してこれまで日本とアメリカで会社員として働いてきました。フロントエンドデベロッパーとして今後は活動すべく、日英バイリンガルに加えてHTML5、CSS、Javascript、React、そしてC#をEleven Fifty Academyで勉強中です。LinkedinやGithubも是非ご覧ください。</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AboutMe;