import React from "react";
import Button from "@material-ui/core/Button";
import { DropzoneDialog } from "material-ui-dropzone";

const initialState = {
  open: false,
  files: []
};

// ref: https://github.com/Yuvaleros/material-ui-dropzone
export default function DropzoneDialogExample() {
  const [state, setState] = React.useState(initialState);

  const handleOpen = () => {
    setState({
      ...state,
      open: true
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false
    });
  };

  const handleSave = files => {
    setState({
      ...state,
      files: files,
      open: false
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        Add Image
      </Button>
      <DropzoneDialog
        open={state.open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
        cancelButtonText={"取消"}
        submitButtonText={"上傳"}
        showFileNamesInPreview={true}
        dialogTitle={"上傳圖片"}
        dropzoneText={"拖曳或點選上傳檔案"}
      />
    </div>
  );
}
