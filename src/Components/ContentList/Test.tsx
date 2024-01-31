import { Box } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function App() {
  const text = "This opportunity will help you enhance your knowledge and experience to enter the job market of translation confidently.\n\n <u> PROGRAM OF THE INTERNSHIP </u> : \n \n               - Introduction to the translation, types and qualities of a successful translator\n                - Steps of translation and fields\n                - Fields of translation texts Legal Translation, Technical Translation, Marketing Translation, Business translation, Financial Translation, Website Translation, Subtitle translation services\n                - A translator’s job description: Sworn translation, subtitling, transcription, content writing, copywriting, proofreading, editing, tutoring\n                - Improved your resume\n                - Find Your Future Employer (from prices to receipts)\n                - Freelancing terms, Time Zone and Types of Freelancers\n                - Learn Work Skills (including teamwork, office etiquette, timekeeping, customer service, using office equipment)\n                - Improve Your Communication Skills\n                - Understand the Challenges of Translation (translating idioms and expressions)\n                - Importance of Social Media accounts in your job\n                - Gained the leadership experience\n                - Team communication\n                - file types\n                - Typing\n                - Google drive sheets\n                - Google drive forms\n                - Email cc and Bcc\n                - conditions to be sworn translator\n                - Examples for websites providing online courses\n                - Platforms and agencies\n                - Samples\n                - ⁠Online dictionaries and Specialized"

  return (
    <Box sx={{whiteSpace:'pre-wrap'}}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{`${text}`}</ReactMarkdown>
    </Box>
  );
}

export default App;
