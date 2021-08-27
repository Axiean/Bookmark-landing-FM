import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Fade from "react-reveal/Fade";
import "./fancy-example.css";

export default function AccardionFAQ() {
  return (
    <Fade bottom delay={100}>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          {" "}
          <AccordionItemHeading>
            <AccordionItemButton>What is Bookmark?</AccordionItemButton>
          </AccordionItemHeading>{" "}
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I request a new browser?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
              <br /> In ad velit in ex nostrud dolore cupidatat consectetur ea
              in ut nostrud velit. <br /> in irure cillum tempor laboris sed
              adipisicing eu esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Is there a mobile app?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
              <br /> In ad velit in ex nostrud dolore cupidatat consectetur ea
              in ut nostrud velit in.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What about other Chromium browser ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat. <br /> consectetur ea
              in ut nostrud velit in irure cillum tempor laboris sed adipisicing
              eu esse duis nulla non. In ad velit in ex nostrud dolore cupidatat
              consectetur ea in ut nostrud velit in. <br /> irure cillum tempor
              laboris sed adipisicing eu esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Fade>
  );
}
