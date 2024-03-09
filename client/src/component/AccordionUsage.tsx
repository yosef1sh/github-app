import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Repository from '../interface/Repository';


interface AccordionUsageProps {
    repositories: Repository[] | null;
}

const AccordionUsage: React.FC<AccordionUsageProps> = ({ repositories }) => {
  return (
    <div>
      {repositories?.map((repo) => (
        <Accordion key={repo.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${repo.id}-content`} id={`panel-${repo.id}-header`}>
            {repo.name}
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <p>{repo.description}</p>
            </div>
          </AccordionDetails>
          <AccordionActions>
            <Button href={repo.html_url} target="_blank" rel="noopener noreferrer" color="primary">
              Visit Repository
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionUsage;
