import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import AdvancedMode from '../advancedMode/AdvancedMode';
import BasicMode from '../basicMode/BasicMode';

const AdvancedUser = () => {

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
    }));
    return (
        <>

            <Accordion className="animate__animated animate__fadeInUp">
                <AccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#18A4E0' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ color: '#18A4E0' }}
                >
                    <Typography sx={{ ml: 1 }}>Basic</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BasicMode />
                </AccordionDetails>
            </Accordion>
            <Accordion className="animate__animated animate__fadeInUp">
                <AccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#18A4E0' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ color: '#18A4E0' }}
                >
                    <Typography sx={{ ml: 1 }}>Advanced</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AdvancedMode />
                </AccordionDetails>
            </Accordion>

        </>
    )
}

export default AdvancedUser