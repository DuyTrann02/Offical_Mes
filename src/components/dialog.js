import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slider from './Slider';



function SimpleDialog(props) {
  const { onClose, open } = props;

  

  return (
    <Dialog onClose={onClose} open={open}  maxWidth="lg" >
      <Slider infor={props.infor}/>
      <Button onClick={onClose} sx={{color:"black"}}><b>Đóng</b> </Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  
};

export default function SliderDialog(props) {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    
  };

  return (
    <div>
     
      <Button  onClick={handleClickOpen} sx={{width:"100%"}}>
        <b>Xem thêm</b>
      </Button>
      <SimpleDialog
        infor={props.infor}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}