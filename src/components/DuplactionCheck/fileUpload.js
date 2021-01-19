import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DropzoneArea} from 'material-ui-dropzone'
import {DropzoneDialog} from 'material-ui-dropzone'
import CryptoJS from 'crypto-js';
import Button from '@material-ui/core/Button'
import {setHashedPackages} from '../../store/actions/hashedPackagesActions'
import { connect } from "react-redux";

const useStyles = makeStyles(theme => createStyles({
  previewChip: {
    minWidth: 0,
    maxWidth: 0
  },
}));

const FileUpload = (props) => {
  //  const [files, setFiles] = React.useState([])
   const classes = useStyles();

   const [open, setOpen] = React.useState(false);
   const [files, setFiles] = React.useState([])
   const [proccessedPackages, setProccessedPackages] = React.useState([])

   const handleOpen = () => {
     setOpen(open => true)
     
   };
 
   const handleClose = () => {
    setOpen(open => false)
   };
   let packages = []

    const  handleSave = (files, event) => {  
      files.forEach(function (item) {
      var reader = new FileReader();
      reader.onload = e =>  {
        var file_result = e.result; // this == reader, get the loaded file "result"
        var file_wordArr = CryptoJS.lib.WordArray.create(file_result); //convert blob to WordArray , see https://code.google.com/p/crypto-js/issues/detail?id=67
        var sha1_hash = CryptoJS.SHA1(file_wordArr); //calculate SHA1 hash
        var finalSha = sha1_hash.toString()
        var newPackagesArr = proccessedPackages
        let newPackage = {packageName: item.name, sha1: finalSha}
        newPackagesArr.push({packageName: item.name, sha1: finalSha})
        setProccessedPackages(newPackagesArr)
        setHashedPackages(newPackage, props.hashedPackages)
        setOpen(open => false)
      };
      reader.readAsArrayBuffer(item);
    })
    
	
   };
   


   React.useEffect(() => {
    if (proccessedPackages.length == files.length && proccessedPackages.length > 0) {
        alert("zulbaaa")
    }   
  }, [props.hashedPackages]);
   React.useEffect(() => {
      if (proccessedPackages.length == files.length && proccessedPackages.length > 0) {
          alert("zulbaaa")
      }   
    }, [proccessedPackages]);

   
   return (
    <div>
      {props.hashedPackages.length}
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        Add Image
      </Button>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        showPreviews={false}
        maxFileSize={5000000}
        onClose={handleClose}
        cancelButtonText={"Cancel"}
        submitButtonText={"Submit"}
        showFileNamesInPreview={true}
        dialogTitle={"Duplicate checker"}
        dropzoneText={"bla?"}
      />
      {packages.length}
      {proccessedPackages.length != 0 ? 'blaaa' : 'mimi' }

    </div>
   )
    
}

const mapStateToProps = (state) => {
  return {
      hashedPackages: state.hashedPackages,      
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHashedPackages: (newPackage, packagesArray) => dispatch(setHashedPackages(newPackage, packagesArray)),
      
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (FileUpload)