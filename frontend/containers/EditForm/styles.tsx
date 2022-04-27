import { createUseStyles } from 'react-jss';

export default createUseStyles({
    root: {
      "& .MuiTextField-root": {
        margin: 10,
      },
    },
    paper: {
      padding: 10,
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    fileInput: {
      width: "97%",
      margin: "10px 0",
    },
    buttonSubmit: {
      display: "block",
      margin: "10px 0",
    },
  });