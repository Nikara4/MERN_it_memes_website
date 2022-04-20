import { createUseStyles } from 'react-jss';

export default createUseStyles({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      heading: {
        color: "#B31F48",
      },
      image: {
        marginLeft: "15px",
      },
      '@media (min-width: 640px)': {
        mainContainer: {
          flexDirection: "column-reverse",
        },
        heading: {
          fontSize: 40,
        },
        image: {
          height: 40,
        },
      },
  });