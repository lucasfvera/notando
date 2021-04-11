import React, { useState } from "react";
import "./form.css";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import Snackbar from "@material-ui/core/Snackbar";
// import Alert from '@material-ui/lab/Alert';

const Form = ({ addNote }) => {
  const [noteContent, setNoteContent] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setNoteContent(e.target.value);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteContent) {
      setOpen(true);
      // setErrorMsg('La nota no puede estar vacía');
      return null;
    }
    addNote(noteContent);
    setNoteContent("");
    // setErrorMsg("");
  };

  return (
    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
      <label className="label-container">
        <p className="add-note-label">Escribí tu nota</p>
        {/* <span className="error-msg-text">{errorMsg}</span> */}
        <input
          className="add-note-field"
          type="text"
          name="content"
          value={noteContent}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit" className="add-btn">
        <AddIcon />
      </button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
		message="La nota no puede estar vacía"
		action={
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
		}
      />
    </form>
  );
};

export { Form };
