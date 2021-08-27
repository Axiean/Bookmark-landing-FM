import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "react-reveal/Fade";
import "./fancy-example.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "45%",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",

    margin: "auto",
    marginTop: "3vw",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function AccardionFAQ() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="accardion1"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accardion1" className={classes.heading}>
            What is Bookmark?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion__panel">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            How can I request a new browser?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion__panel">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            Is there a mobile app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion__panel">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            What about other Chromium browser ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion__panel">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    // <Fade bottom delay={100}>
    //   <Accordion allowZeroExpanded >
    //     <AccordionItem>
    //       {" "}
    //       <AccordionItemHeading>
    //         <AccordionItemButton>What is Bookmark?</AccordionItemButton>
    //       </AccordionItemHeading>{" "}
    //       <AccordionItemPanel>
    //         <p>
    //           Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    //           occaecat ut occaecat consequat est minim minim esse tempor laborum
    //           consequat esse adipisicing eu reprehenderit enim.
    //         </p>
    //       </AccordionItemPanel>
    //     </AccordionItem>{" "}
    //     <AccordionItem>
    //       <AccordionItemHeading>
    //         <AccordionItemButton>
    //           How can I request a new browser?
    //         </AccordionItemButton>
    //       </AccordionItemHeading>
    //       <AccordionItemPanel>
    //         <p>
    //           In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
    //           nostrud velit in irure cillum tempor laboris sed adipisicing eu
    //           esse duis nulla non.
    //           <br /> In ad velit in ex nostrud dolore cupidatat consectetur ea
    //           in ut nostrud velit. <br /> in irure cillum tempor laboris sed
    //           adipisicing eu esse duis nulla non.
    //         </p>
    //       </AccordionItemPanel>
    //     </AccordionItem>
    //     <AccordionItem>
    //       <AccordionItemHeading>
    //         <AccordionItemButton>Is there a mobile app?</AccordionItemButton>
    //       </AccordionItemHeading>
    //       <AccordionItemPanel>
    //         <p>
    //           In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
    //           nostrud velit in irure cillum tempor laboris sed adipisicing eu
    //           esse duis nulla non.
    //           <br /> In ad velit in ex nostrud dolore cupidatat consectetur ea
    //           in ut nostrud velit in.
    //         </p>
    //       </AccordionItemPanel>
    //     </AccordionItem>
    //     <AccordionItem>
    //       <AccordionItemHeading>
    //         <AccordionItemButton>
    //           What about other Chromium browser ?
    //         </AccordionItemButton>
    //       </AccordionItemHeading>
    //       <AccordionItemPanel>
    //         <p>
    //           In ad velit in ex nostrud dolore cupidatat. <br /> consectetur ea
    //           in ut nostrud velit in irure cillum tempor laboris sed adipisicing
    //           eu esse duis nulla non. In ad velit in ex nostrud dolore cupidatat
    //           consectetur ea in ut nostrud velit in. <br /> irure cillum tempor
    //           laboris sed adipisicing eu esse duis nulla non.
    //         </p>
    //       </AccordionItemPanel>
    //     </AccordionItem>
    //   </Accordion>
    // </Fade>
  );
}
