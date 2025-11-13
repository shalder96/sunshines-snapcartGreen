import React from "react";
import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import useTheme from "../contexts/theme";
import { faqs } from "../data/faqs";

const FAQPage = () => {
  const { themeMode } = useTheme();

  return (
    <motion.div
      className="px-1.5 py-16 bg-green-50 dark:bg-black md:px-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-8 text-3xl font-bold text-center text-green-700 md:text-4xl">
        🌿 Frequently Asked Questions
      </h1>

      <p className="mb-8 text-center text-gray-600 dark:text-green-300">
        Have questions about SnapCart Green? We’ve got you covered!  
        Browse through our most asked questions below — or reach out if you need
        more help.
      </p>

      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Accordion
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: themeMode === "dark" ? "#374151" : "#dcfce7",
              color: themeMode === "dark" ? "#f9fafb" : "#111827",
              backgroundImage:
                themeMode === "dark"
                  ? "linear-gradient(135deg, #1f2937, #111827)"
                  : "linear-gradient(135deg, #bbf7d0, #86efac)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                component="span"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <QuestionAnswerIcon sx={{ fontSize: 20, color: "green" }} />
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQPage;
