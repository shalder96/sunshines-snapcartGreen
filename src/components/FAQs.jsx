import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import useTheme from '../contexts/theme';
import {faqs} from '../data/faqs';




const FAQSection = () => {
  const [featuredFaqs, setFeaturedFaqs] = useState([]);
  
  useEffect(() => {
    setFeaturedFaqs(faqs.slice(0,5))
  }, [])
  

  const {themeMode, darkTheme, lightTheme} = useTheme()
  return (
    <section className='px-1.5 py-16 bg-green-50 dark:bg-black md:px-12'>
      <h2 className="mb-6 text-3xl font-bold text-center text-green-800 dark:text-green-200">Frequently Asked Questions</h2>
      {featuredFaqs.map((faq, index) => (
        <Accordion 
          key={index} 
          defaultExpanded
          sx={{ 
            backgroundColor: themeMode === 'dark'? '#4B5563' :'#dcfce7', 
            color: themeMode === 'dark'? 'white' : 'black',
            backgroundImage: themeMode === 'dark'? 'linear-gradient(135deg, #374151, #1f2937)' : 'linear-gradient(135deg, #bbf7d0, #86efac)',
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <QuestionAnswerIcon sx={{ fontSize: 20, color: 'green' }} />
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
}

export default FAQSection;