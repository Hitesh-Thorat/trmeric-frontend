import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TrmericCard from '../Card/TrmericCard';
import { Box } from '@mui/material';
import TrText from '../TrText/TrText';
import { FontSizes } from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  maxWidth: '100%',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderTop: `8px solid #FF8A00`,
  borderRadius: '20px',
  marginBottom: '32px',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  maxWidth: '100%',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  maxWidth: '100%',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className='mt-150'></div>
      <Accordion
        className='w-90'
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Box>
            <TrText
              sx={{
                fontSize: FontSizes.fontEighteen,
                fontFamily: Fonts.Poppins,
                fontWeight: '600',
              }}
            >
              Provider Summary
            </TrText>
            <TrText
              sx={{
                fontSize: FontSizes.fontFourteen,
                fontFamily: Fonts.Poppins,
                fontWeight: '400',
              }}
              title='A brief introduction to the providers background, emphasizing their unique expertise'
            ></TrText>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TrmericCard />
            <TrmericCard />
            <TrmericCard />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Box>
            <TrText
              sx={{
                fontSize: FontSizes.fontEighteen,
                fontFamily: Fonts.Poppins,
                fontWeight: '600',
              }}
            >
              Evaluation
            </TrText>
            <TrText
              sx={{
                fontSize: FontSizes.fontFourteen,
                fontFamily: Fonts.Poppins,
                fontWeight: '400',
              }}
              title='Compare and Assess Providers'
            ></TrText>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Box>
            <TrText
              sx={{
                fontSize: FontSizes.fontEighteen,
                fontFamily: Fonts.Poppins,
                fontWeight: '600',
              }}
            >
              Milestones
            </TrText>{' '}
            <TrText
              sx={{
                fontSize: FontSizes.fontFourteen,
                fontFamily: Fonts.Poppins,
                fontWeight: '400',
              }}
              title='Customize and Track Engagement Stages'
            ></TrText>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
