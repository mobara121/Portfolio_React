import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    modal: {
        margin: "200px auto",
        maxWidth: "450px",
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: ".SFNSText-Regular",
    },
    paper: {
      backgroundColor: "white",
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    contact: {
        width: '100%',
        margin: '10px auto',

    },
    input:{
        width: '95%',
        fontSize: '20px',
        height: '40px',
        padding: '10px',
        lineHeight: '1.2',
    },
    textarea: {
        width: '97%',
        fontSize: '20px',
        height: '120px',
        padding: '5px',
    },
    button: {
        width: '25%',
        fontSize: '20px',
        fontWeight: '900',
        height: '40px',
    },
}));

function Contact(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div>
            <Button type="button" onClick={handleOpen} id="contact-btn">
                Contact
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
                    <form>
                        <div className={classes.contact}>
                            <input className={classes.input} type="email" name="email" id="exampleEmail" placeholder="Name"/>
                        </div>
                        <div className={classes.contact}>
                            <input className={classes.input}type="email" name="email" id="exampleEmail" placeholder="Company" />
                        </div>
                        <div className={classes.contact}>
                            <input className={classes.input} type="email" name="email" id="exampleEmail" placeholder="Position"  />
                        </div>
                        <div className={classes.contact}>
                            <input className={classes.input} type="email" name="email" id="exampleEmail" placeholder="Email"  />
                        </div>
                        <div className={classes.contact}>
                            <textarea className={classes.textarea} type="email" name="email" id="exampleEmail" placeholder="Message" ></textarea>
                        </div>
                        <button type="submit" className={classes.button} data-toggle="button" aria-pressed="false">Send</button>  
                    </form>
                </div>
            </Fade>
            </Modal>
            
        </div>

    );
}

export default Contact;