import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface FormTextFieldPopUpProps{
    open: boolean;
    title: string;
    value: string;
    textCancelBtn: string;
    textAcceptBtn: string;
    handleClose: (param?: any)=>any;
    handleAccept: (param?: any)=>any;
    handleFieldChange: (param?: any)=>any;
}

const FormTextFieldPopUp = (props: FormTextFieldPopUpProps) => {

    return (
        <Dialog open={props.open} onClose={()=>props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
                </DialogContentText> */}
                <TextField
                autoFocus
                margin="dense"
                id="note"
                label="Note content"
                type="text"
                value={props.value}
                onChange={props.handleFieldChange}
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="secondary">
                {props.textCancelBtn}
                </Button>
                <Button onClick={props.handleAccept} variant='contained' disableElevation color="primary">
                {props.textAcceptBtn}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormTextFieldPopUp
