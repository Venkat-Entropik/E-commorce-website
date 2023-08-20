import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CustomAccordion.css'; 

export default function BasicAccordion() {
  return (
    <div className="custom-accordion-container">
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How much time does it take for shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It takes around 3-5 days for your order to get delivered.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you accept return and refunds?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we accept returns and refunds.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What payment gateway do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At the moment, we offer Cash On Delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
