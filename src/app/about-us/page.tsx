"use client"
import Btn from '@/Components/Btn/Btn'
import Title from '@/Components/Title'
import useLanguage from '@/Hooks/UseLanguage'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import {AiFillContacts} from 'react-icons/ai';




const reasons= [
    {
  title:'Industry Experts',
       desc:'Engage with a well-written and organized content along with exercises and practicing resources',
        icon: AiFillContacts
    },
        {
  title:'Industry Experts',
       desc:'Engage with a well-written and organized content along with exercises and practicing resources',
        icon: AiFillContacts
    },    {
  title:'Industry Experts',
       desc:'Engage with a well-written and organized content along with exercises and practicing resources',
        icon: AiFillContacts
    },
    {
  title:'Industry Experts',
  desc:'Engage with a well-written and organized content along with exercises and practicing resources',

        icon: AiFillContacts
    }
]

const Index = () => {
    const router = useRouter()
    const {text} = useLanguage()

  return (
    <Box sx={{pb:8}}>
    <Box sx={{minHeight:'500px'}}>
           <Box
          className='flex center col  items-center justify-center'

                            sx={{
                                position:'relative',

                                height: '100%',
                            width:'100%'
                        }}>
                            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.5}} className="absolute">

                            </Box>
                            <Box
          className='flex center col items-center justify-center'
                            
                            sx={{
                                top:'50%',
                                px:6,
                                maxWidth:'700px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                margin :'0 auto',
                                position:'absolute'}}>
                             <Typography sx={{textAlign:'center',color:'white',fontSize:{xs:'1.95em',sm:'2.5em',md:'3em'},fontWeight:600}}>
                             {/* Redefining Excellence in Engineering and Architecture */}
                             {text('High-quality translation and learning courses to the globle', `ترجمة عالية الجودة ودورات تعليمية للعالم`)}
                                </Typography>
                                <Typography sx={{color:'white',textAlign:'center',fontSize:{xs:'.75em',sm:'.9em'},mt:1,maxWidth:'500px'}}>
                                {text('We aim to foster an environment that encourages intellectual growth and cultural exchange.', `نهدف إلى تعزيز بيئة تشجع على النمو الفكري والتبادل الثقافي.`)}



                                </Typography>
                                <Btn
                                                              onClick={()=>router.push('/#contact')}
                                sx={{mt:3,width:'220px'}}>
                              {text('Contact Us Now', `اتصل بنا الآن`)}
                                </Btn>
                            </Box>
                            <Box sx={{height:'500px',width:'100%'}}>

                            <img
            
                                className={`img pointer  cover
                                `}
                                // ${item?.className}
                                src={`https://ucarecdn.com/64fd9c9b-40da-4b04-b64f-0ff58eaa252f/download.jfif`}
                                alt="Main Carousel Image"/>
                            </Box>

                        </Box>
    
                        <Box className='center ' sx={{mt:16}}>
                <Title sx={{textAlign:'center'}}>
                {text('Why Choose IATT?', `لماذا تختار IATT؟`)}

                </Title>
                <Typography className='auto' sx={{color:'black',px:1,maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
                {text(`Everyone talks about quality and service. These are more than words — they are part of our core values and driving principles.
We recognize that translations can be a daunting or confusing industry. We are experts in removing the confusion and taking one more worry off of your mind. When you partner with us, we ensure quality and accuracy from start to finish.
`, `الجميع يتحدث عن الجودة والخدمة. هذه أكثر من مجرد كلمات، فهي جزء من قيمنا الأساسية ومبادئنا الدافعة.
نحن ندرك أن الترجمات يمكن أن تكون صناعة شاقة أو مربكة. نحن خبراء في إزالة الارتباك وإزالة أي قلق آخر من عقلك. عندما تكون شريكًا معنا، فإننا نضمن الجودة والدقة من البداية إلى النهاية.`)}

                </Typography>
    </Box>
    <Box className='center ' sx={{mt:16}}>
                <Title sx={{textAlign:'center'}}>
                {text('Top reasons to partner with us:', `أهم الأسباب للشراكة معنا:`)}

                </Title>
                <Typography className='auto pre' sx={{color:'black',px:1,maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
                {text(`Quality: mature processes, six-sigma efficiencies and quality checkpoints result in world-class excellence.
•	Expertise: a diverse group of linguists who are experts in their language set and subject matter. Many have been with us for over 10 years!
•	Pricing: competitive industry rates on all services. We utilize a proprietary pricing model which removes dependencies on CAT tools—meaning more savings for you!
•	Speed & Flexibility: we are nimble—we have a great track record of fast turnaround times. We can customize our processes and timelines to fit your needs.
We utilize a proprietary workflow automation tool which optimizes our processes and lowers our overhead.

`, `الجودة: تؤدي العمليات الناضجة وكفاءات ستة سيجما ونقاط فحص الجودة إلى التميز على مستوى عالمي.
• الخبرة: مجموعة متنوعة من اللغويين الذين هم خبراء في مجموعة لغتهم وموضوعهم. لقد كان الكثير معنا لأكثر من 10 سنوات!
• التسعير: أسعار صناعية تنافسية على جميع الخدمات. نحن نستخدم نموذج تسعير خاص يزيل التبعيات على أدوات CAT، مما يعني المزيد من التوفير بالنسبة لك!
• السرعة والمرونة: نحن نتمتع بالذكاء، ولدينا سجل حافل من أوقات التسليم السريعة. يمكننا تخصيص عملياتنا وجداولنا الزمنية لتناسب احتياجاتك.
نحن نستخدم أداة أتمتة سير العمل الخاصة التي تعمل على تحسين عملياتنا وتقليل النفقات العامة.`)}

                </Typography>
    </Box>
    <Grid sx={{my:8}} container maxWidth='xl'>
        {/* <Grid item xs={12} sm={4}>
            <Box>
                <Title>
                    Our Specialties 
                </Title>
                <Btn 
                   onClick={()=>router.push('/')}
                sx={{mx:2}}>
                    Register Now
                </Btn>
            </Box>
        </Grid> */}
        <Grid sx={{mx:1}} xs={12} sm={8}>
            <Box>
            {/* <Box sx={{justifyContent:'space-between'}} className="flex wrap">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex  col' sx={{width:{xs:'48%'}, mt:6}}>
                            <i.icon fontSize={'3em'} className='clr' />
                        <Typography sx={{fontSize:'1.5em',fontWeight:600,color:'black'}}>
                            {i.title}
                        </Typography>
                        <Typography sx={{maxWidth:'400px',fontSize:'.8em',color:'black'}}>
                        {i.desc}

                        </Typography>
                    </Box>
                })
            }
            </Box> */}
            </Box>
        </Grid>
        <Grid sx={{mt:16}} xs={12} sm={6}>
        <Box sx={{height:'100%',minHeight:'500px'}}>

<img

    className={`img pointer  
    `}
    // ${item?.className}
    src={`https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
    alt="Main Carousel Image"/>
</Box>
        </Grid>
        <Grid sx={{mt:{sm:16},background:'#000818 '}} className='flex  white center items-center' item xs={12} sm={6}>
            <Box sx={{px:{xs:2,sm:4,md:5},py:8}}>
            {/* <Title sx={{color:'white'}}>
            {text('We offer a wide range of courses, including:', `نحن نقدم مجموعة واسعة من الدورات ، بما في ذلك:`)}

                </Title>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                {text('Translation Studies: This course provides students with the skills necessary to translate texts accurately and effectively between various languages.', `دراسات الترجمة: يوفر هذا البرنامج للطلاب المهارات اللازمة لترجمة النصوص بدقة وفعالية بين اللغات المختلفة.`)}

                </Typography>
                <Typography sx={{color:'white',mx:1,mt:1}}>
             
                </Typography> */}
  <Box>
  <Typography sx={{py:1}}>
      {text(
        'Our Core Values are the guidelines that define our professional behaviour and constitute the backbone of our work ethic. They are, in short, the daily essence of our client relations and company culture.',
        'قيمنا الأساسية هي الإرشادات التي تحدد سلوكنا المهني وتشكل عمود فقري لأخلاقيات عملنا. إنها، ببساطة، جوهر يومي لعلاقاتنا مع العملاء وثقافة الشركة.'
      )}
    </Typography>

    <Box>
    <Typography sx={{py:1}}>

    {text(
      'PROFESSIONALISM: Behaving in a business-like manner, with skill, competence, and character; keeping promises.',
      'الاحترافية: السلوك بطريقة تجارية، بمهارة وكفاءة وشخصية؛ الوفاء بالوعود.'
    )}
    </Typography>
    <Typography sx={{py:1}}>

    {text(
      'RESPONSIVENESS: Timely, attentive, and empathetic communication leading to greater trust and rapport.',
      'الاستجابة: التواصل في الوقت المناسب، وباهتمام وتعاطف، مما يؤدي إلى بناء الثقة وتعزيز التواصل.'
    )}
    </Typography>
    <Typography sx={{py:1}}>

    {text(
      'CONGENIALITY: A pleasant disposition, friendly and sociable; working together harmoniously.',
      'المحبة للآخرين: التصرف بطابع لطيف، ودود واجتماعي؛ العمل معًا بتناغم.'
    )}
 </Typography>
 <Typography sx={{py:1}}>
    {text(
      'COURTESY: Polite or considerate behaviour with willingness, generosity, and civility.',
      'اللباقة: التصرف بلطف أو اهتمام مع الاستعداد والسخاء والأدب.'
    )}
    </Typography>
    <Typography sx={{py:1}}>

    {text(
      'HUMILITY: Modesty and empathy; the ability to say, “I don’t know, but I’m willing to learn.”',
      'التواضع: التواضع والتعاطف؛ القدرة على قول "لا أعلم، ولكنني على استعداد للتعلم".'
    )}
    </Typography>
    <Typography sx={{py:1}}>

    {text(
      'EFFORT: The use of physical or mental energy to accomplish something; achievement through exertion.',
      'الجهد: استخدام الطاقة الجسدية أو العقلية لتحقيق شيء ما؛ التحقيق من خلال البذل.'
    )}
    </Typography>

  </Box>

 
  </Box>
                <Btn
                                onClick={()=>router.push('/#contact')}
                
                v2  sx={{color:'white',mx:1,my:3}}>
                              {text('Contact Us Now', `اتصل بنا الآن`)}

                </Btn>
            </Box>
        </Grid>
    </Grid>

    </Box>
    </Box>
  
  )
}

export default Index