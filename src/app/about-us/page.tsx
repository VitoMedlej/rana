"use client"
import Btn from '@/Components/Btn/Btn'
import Title from '@/Components/Title'
import useLanguage from '@/Hooks/UseLanguage'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import {AiFillContacts} from 'react-icons/ai';


const content = {
  english: {
    quality: "Quality: mature processes, six-sigma efficiencies and quality checkpoints result in world-class excellence",
    expertise: "Expertise: a diverse group of linguists who are experts in their language set and subject matter. Many have been with us for over 10 years!",
    pricing: "Pricing: competitive industry rates on all services. We utilize a proprietary pricing model which removes dependencies on CAT tools—meaning more savings for you!",
    speedFlexibility: "Speed & Flexibility: we are nimble—we have a great track record of fast turnaround times. We can customize our processes and timelines to fit your needs."
  },
  arabic: {
    quality: "تؤدي العمليات الناضجة وفعالية منهجية سيغما السداسية واختبارات الجودة إلى تحقيق التميّز العالمي.",
    expertise: "مجموعة كبيرة من اللغويين الذين يتمتّعون بخبرة واسعة باللغة والمواضيع التي يترجمونها. فالكثير منهم يعمل معنا لأكثر من 10 سنوات.",
    pricing: "أسعار خدماتنا تنافسية جدًا، إذ إنّنا نستعين بنموذج تسعير ملائم لا يعتمد على أدوات الترجمة بمساعدة الحاسوب (CAT tools)، ما يجعلك توفّر المزيد من المال!",
    speedFlexibility: "نتمتّع بالذكاء والفطنة، فسجلنا حافل بأوقات التسليم السريعة. ويمكننا أن نخصص عملياتنا وجداولنا الزمنية لتلبية احتياجاتك، إذ نستعين بأداة خاصة لأتمتة تدفق العمل تحسّن عملياتنا وتقلل نفقاتنا."
  }
}
 const translationInfoAR = [
  "إجازة في الترجمة",
  "ماجستير في الأدب الفرنسي",
  "شهادة الدكتوراه الفخرية الصادرة عن جامعة وأكاديمية سمارت العالمية وجامعة سفانة الأكاديمية",
  "شهادة الدكتوراه الفخرية الصادرة عن البورد الأميركي الكندي",
  "شهادتي 'تدريب المدربين' و'المدرب الدولي'",
  "مترجمة محلّفة ومعتمدة أمام المحاكم والدوائر الرسمية والسفارات والوزارات في لبنان لأكثر من 17 عامًا.",
  "محاضرة ومترجمة في جامعة الشعب University of People",
  "الدورات التي تقدّمها الأكاديمية: أدوات الترجمة بمساعدة الحاسوب (CAT tools) والتدريب والترجمة الاقتصادية وأسس الترجمة وترجمة الأفلام وmemoQ، إلخ...",
  // "الدورات التي تقدّمها الأكاديمية:",
  // "أدوات الترجمة بمساعدة الحاسوب (CAT tools) والتدريب والترجمة الاقتصادية وأسس الترجمة وترجمة الأفلام وmemoQ، إلخ...",
  "معتمدة من 'مترجمون بلا حدود'",
  "معتمدة من المنظمة العربية للمترجمين المحترفين",
  "عضو في الاتحاد الدولي للغات والترجمة (رقم 648)",
  "حاصلة على شهادة ISO 9001",
  "معتمدة من قبل البورد الأميركي الكندي",
];
const renderBoldLabels = (text : any) => {
  // Check if the text ends with a colon (":") and make it bold if true
  return text.endsWith(":") ? <strong>{text}</strong> : text;
};

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
                             <Typography sx={{
      direction:text(`ltr`,'rtl'),
                              
                              textAlign:'center',color:'white',fontSize:{xs:'1.95em',sm:'2.5em',md:'3em'},fontWeight:600}}>
                             {/* Redefining Excellence in Engineering and Architecture */}
                             {text('High-quality translation and learning courses to the globle', `خدمات ترجمة عالية الجودة ودورات تعليمية للطلاب من حول العالم`)}
                                </Typography>
                                <Typography sx={{
      direction:text(`ltr`,'rtl'),
                                  
                                  color:'white',textAlign:'center',fontSize:{xs:'.75em',sm:'.9em'},mt:1,maxWidth:'500px'}}>
                                {text('We aim to foster an environment that encourages intellectual growth and cultural exchange.', `هدفنا هو أن نعزز بيئة تشجّع على النمو الفكري والتبادل الثقافي`)}



                                </Typography>
                                <Btn
                                                              onClick={()=>router.push('/#contact')}
                                sx={{mt:3,width:'220px'}}>
                              {text('Contact Us Now', `تواصل معنا الآن `)}
                                </Btn>
                            </Box>
                            <Box  sx={{height:'500px',width:'100%'}}>


                            <img
            
                                className={`img pointer  cover
                                `}
                                // ${item?.className}
                                src={`https://www.alucare.fr/wp-content/uploads/2022/10/une-agence-de-traduction-en-ligne.jpg`}
                                alt="Main Carousel Image"/>
                            </Box>

                        </Box>
    
                        <Box className='center ' sx={{mt:14}}>
                <Title  sx={{fontWeight:800,textAlign:'center'}}>
                {text('Why Choose IATT?', `لماذا تختار الأكاديمية الدولية للترجمة والتدريب`)}

                </Title>
                <Typography className='auto clr' sx={{
      direction:text(`ltr`,'rtl'),
                  
                  color:'black',px:1,maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
                {text(`Everyone talks about quality and service. These are more than words — they are part of our core values and driving principles.
We recognize that translations can be a daunting or confusing industry. We are experts in removing the confusion and taking one more worry off of your mind. When you partner with us, we ensure quality and accuracy from start to finish.
`, `يتحدّث الجميع عن الجودة والخدمة. إذًا، هاتان الكلمتان مألوفتان – غير أنّهما ليستا مجرد كلمتين، بل هما جزء من قيمنا الأساسية ومبادئنا التوجيهية. فنحن ندرك أنّ مجال الترجمة قد يكون شاقًا أو مربكًا. لذا، نحن نتمتّع بالخبرة اللازمة لنزيل الارتباك والمخاوف من ذهنك. فعندما تتعاون معنا، نضمن لك الجودة والدقة من البداية حتى النهاية.  `)}

                </Typography>
    </Box>






    <Box className='flex center auto wrap ' sx={{py:16,maxWidth:'lg'}}>
    <Box sx={{ 
      display:text('none','flex'),
      height:'300px',width:{xs:'95%',sm:'300px'}}} className=' center items-center rounded'>
      <img
    
      src="https://www.lisedunetwork.com/wp-content/uploads/2014/03/Knowledge-Classification-and-Book-Classification.jpg" alt="" 
      className="img rounded" />
    </Box>


    <Box className='center ' sx={{width:{xs:'95%',sm:'60%'}}}>
                <Title sx={{
                  px: '0 !Important',
      direction:text(`ltr`,'rtl'),
                  
                  fontWeight:800,textAlign: text('left','right')}}>
                {text('Top reasons to partner with us:', `أهم الأسباب التي تشجّعك على التعاون معنا:`)}

                </Title>

                {/* {
                    [  
                    ].map(i=>{
                      return  <Typography className=' clr' sx={{ 
                        direction:text(`ltr`,'rtl'),
                    
                    color: 'black', px: 1, maxWidth: '700px', mx: 1, mt: 1, textAlign: text('left','right') }}>
                    
                    {
                      
                      renderBoldLabels(content.english.expertise)
                    }
                  </Typography>
                    })
                } */}
                <Box sx={{
                  
                  display:text(`block`,'none')}}>
      <p>
        <strong>Quality:</strong> mature processes, six-sigma efficiencies and quality checkpoints result in world-class excellence.
      </p>
      <p>
        <strong>Expertise:</strong> a diverse group of linguists who are experts in their language set and subject matter. Many have been with us for over 10 years!
      </p>
      <p>
        <strong>Pricing:</strong> competitive industry rates on all services. We utilize a proprietary pricing model which removes dependencies on CAT tools—meaning more savings for you!
      </p>
      <p>
        <strong>Speed & Flexibility:</strong> we are nimble—we have a great track record of fast turnaround times. We can customize our processes and timelines to fit your needs.
      </p>
    </Box>
    <Box sx={{
      direction: 'rtl',
      display:text(`none`,'block')}}>
    <p>
        <strong>الجودة:</strong> تؤدي العمليات الناضجة والكفاءة في منهجية السداسية ونقاط فحص الجودة إلى تحقيق التميّز العالمي.
      </p>
      <p>
        <strong>الخبرة:</strong> مجموعة كبيرة من اللغويين الذين يتمتّعون بخبرة واسعة باللغة والمواضيع التي يترجمونها. فالكثير منهم يعمل معنا لأكثر من 10 سنوات.
      </p>
      <p>
        <strong>السعر:</strong> أسعار خدماتنا تنافسية جدًا، إذ إنّنا نستعين بنموذج تسعير ملائم لا يعتمد على أدوات الترجمة بمساعدة الحاسوب (CAT tools)، ما يجعلك توفّر المزيد من المال!
      </p>
      <p>
        <strong>السرعة والمرونة:</strong> نتمتّع بالذكاء والفطنة، فسجلنا حافل بأوقات التسليم السريعة. ويمكننا أن نخصص عملياتنا وجداولنا الزمنية لتلبية احتياجاتك، إذ نستعين بأداة خاصة لأتمتة تدفق العمل تحسّن عملياتنا وتقلل نفقاتنا.
      </p>
    </Box>
                 
                {/* <Typography className='auto pre' sx={{color:'black',px:1,maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
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

                </Typography> */}

{/* <Typography className=' clr' sx={{ 
      direction:text(`ltr`,'rtl'),
  
  color: 'black', px: 1, maxWidth: '700px', mx: 1, mt: 1, textAlign: text('left','right') }}>
<strong>
{text("Quality:", "الجودة:")}
{' '}
        </strong>   
  {text(`
    mature processes, six-sigma efficiencies and quality checkpoints result in world-class excellence.
  `, `
   تؤدي العمليات الناضحة وفعالية منهجية سيغما السداسية واختبارات الجودة إلى تحقيق التميّز العالمي
  `)}
</Typography>
<Typography className=' clr ' sx={{
      direction:text(`ltr`,'rtl'),
  
  color: 'black', px: 1, maxWidth: '700px', mx: 1, mt: 1,


textAlign: text('left','right') }}>
 
      <strong>
      {text("Expertise:", "الخبرة:")}
{' '}

        </strong>          
  {text(`
    a diverse group of linguists who are experts in their language set and subject matter. Many have been with us for over 10 years!
  `, `
  مجموعة كبيرة من اللغويين الذين يتمتّعون بخبرة واسعة باللغة والمواضيع التي يترجمونها. فالكثير منهم يعمل معنا لأكثر من 10 سنوات
  `)}
</Typography>
<Typography className='  clr' sx={{ color: 'black', px: 1, maxWidth: '700px', mx: 1, mt: 1, textAlign: text('left','right') }}>
 
<strong>
{text("Pricing:", "السعر:")}
{' '}

        </strong>   
      <>
  {text(`
     competitive industry rates on all services. We utilize a proprietary pricing model which removes dependencies on CAT tools—meaning more savings for you!
     `, `
   أسعار صناعية تنافسية على جميع الخدمات. نحن نستخدم نموذج تسعير خاص يزيل التبعيات على أدوات الترجمة بمساعدة الحاسوب مما يعني المزيد من التوفير بالنسبة لك!
     `)}
     </>
</Typography>
<Typography className=' clr' sx={{ 
  
  direction:text(`ltr`,'rtl'),
  
  color: 'black', px: 1, maxWidth: '700px', mx: 1, mt: 1, textAlign: text('left','right') }}>
<strong>
{text("Speed & Flexibility:", "السرعة والمرونة:")}
{' '}

        </strong>  
  {text(`
     we are nimble—we have a great track record of fast turnaround times. We can customize our processes and timelines to fit your needs.
    We utilize a proprietary workflow automation tool which optimizes our processes and lowers our overhead.
  `, `
  نتمتّع بالذكاء والفطنة، فسجلنا حافل بأوقات التسليم السريعة. ويمكننا أن نخصص عملياتنا وجداولنا الزمنية لتلبية احتياجاتك، إذ نستعين بأداة خاصة لأتمتة تدفق العمل تحسّن عملياتنا وتقلل نفقاتنا 
  `)}
</Typography> */}
    

    </Box>
    <Box sx={{ 
      display:text('flex','none'),
      height:'300px',width:{xs:'95%',sm:'300px'}}} className=' center items-center rounded'>
      <img
    
      src="https://www.lisedunetwork.com/wp-content/uploads/2014/03/Knowledge-Classification-and-Book-Classification.jpg" alt="" 
      className="img rounded" />
    </Box>
    </Box>





    <Grid sx={{my:6}} container maxWidth='xl'>
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
        {/* <Grid sx={{mt:16}} xs={12} sm={6}>
        <Box sx={{height:'100%',minHeight:'500px'}}>

<img

    className={`img pointer  
    `}
    src={`https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
    alt="Main Carousel Image"/>
</Box>
        </Grid>
        <Grid sx={{mt:{sm:16},background:'#000818 '}} className='flex  white center items-center' item xs={12} sm={6}>
            <Box sx={{px:{xs:2,sm:4,md:5},py:8}}>
       
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
        </Grid> */}

        <Grid className=' items-center justify-evenly space-evenly' 
        sx={{
  
          
          
          py:8,background:'#0000000a'}} container>
            <Grid sx={{
                  direction:text(`ltr`,'rtl'),
              mx:1}} item xs={12} sm={6}>
              <Box>
                <Typography sx={{pb:.1,fontSize:'2em',fontWeight:600}}>
                 {text(`Our Vision`,`الرؤية`)}
                </Typography>
                <Typography sx={{fontSize:'.87em'}}>
                  {
                    text(`
                The International Academy for Translation and Training IATT would envision a future where language barriers are broken and communication flourishes across cultures. By offering comprehensive training programs and fostering collaboration between professionals, such an academy would aim to equip translators with the skills and knowledge to navigate the ever-evolving translation landscape. This would ensure high-quality translations that bridge cultural nuances and serve as effective tools for international cooperation.
                    
                    `,
                    
                    `تسعى الأكاديمية الدولية للترجمة والتدريب (IATT) إلى استشراف مستقبل تُكسر فيه الحواجز اللغوية ويزدهر فيه التواصل بين الثقافات. ومن خلال تقديم برامج تدريبية شاملة وتعزيز التعاون بين المهنيين، فإن مثل هذه الأكاديمية تهدف إلى تزويد المترجمين بالمهارات والمعارف اللازمة للتنقل في مجال الترجمة الذي يتطور باستمرار. وهذا من شأنه ضمان جودة الترجمات التي تردم الفجوات الثقافية وتعمل كأدوات فعالة للتعاون الدولي.`
                    )
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid sx={{mx:1}} item xs={12} sm={5}>
              <Box sx={{width:'100%',height:'100%'}}>
              <img style={{borderRadius:'7px'}} src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?t=st=1710333039~exp=1710336639~hmac=515bac9f9170ef2f557b7da7d434a76cee609b4b08e821ff587dd0dcac381d28&w=740" alt="" className="img" />
              </Box>
            </Grid>
        </Grid>



        <Grid className=' items-center justify-evenly space-evenly'
         sx={{
          mb:4,py:8,background:'#0000000a'}} container>
          
            <Grid sx={{mx:1}} item xs={12} sm={5}>
              <Box sx={{width:'100%',height:'100%'}}>
              <img style={{borderRadius:'7px'}} src="https://st3.depositphotos.com/14431644/34729/i/450/depositphotos_347298024-stock-photo-conceptual-hand-writing-showing-our.jpg" alt="" className="img" />
              </Box>
            </Grid>

            <Grid sx={{mx:1,  direction:text(`ltr`,'rtl'),}} item xs={12} sm={6}>
              <Box>
                <Typography sx={{pb:.1,fontSize:'2em',fontWeight:600}}>
                {text(`Our Mission`,`الرسالة`)}

                </Typography>
                <Typography component='h1' sx={{fontSize:'.87em'}}>

                {
                    text(`
                    The International Academy for Translation and Training strives to be a global hub for fostering excellence in translation and promoting intercultural understanding.  Through innovative training programs, resource development, and professional exchange, their mission is to empower a new generation of translators and equip them with the skills to bridge linguistic and cultural divides.  The Academy is dedicated to setting the highest standards in the field and ensuring effective communication in an increasingly interconnected world.
                    
                    `,
                    
                    `
                    تسعى الأكاديمية الدولية للترجمة والتدريب (IATT) إلى أن تكون مركزًا عالميًا لتعزيز التميز في الترجمة وتعزيز التفاهم بين الثقافات.
من خلال برامج التدريب المبتكرة وتطوير الموارد والتبادل المهني، تتمثل مهمتها في تمكين جيل جديد من المترجمين وتزويدهم بالمهارات اللازمة لسد الفجوة اللغوية والثقافية.
تلتزم الأكاديمية بوضع أعلى المعايير في هذا المجال وضمان فعالية الاتصال في عالم مترابط بشكل متزايد.
                    `
                    )
                  }
                </Typography>
              </Box>
            </Grid>
        </Grid>


    <Grid sx={{pt:2}} container>
<Grid item xs={12} sm={6}>
  <Box className='auto flex' sx={{pt:{xs:0,sm:5},maxWidth:'400px'}}>
    <img src="https://ucarecdn.com/95ad162a-fbab-4120-b434-494de1736cba/rana.jpg" alt="" className="img" />
  </Box>
</Grid>
<Grid item xs={12} sm={6}>
        <Box sx={{maxWidth:'600px',px:1,pt:{xs:2,sm:5}}}>
          <Typography component={'h1'} 
          sx={{textAlign:text('left !important','end !important'),fontWeight:800,fontSize:'2.65em'}}>
            {text(`Founder of the Academy:`,`مؤسس الأكاديمية`)}
          </Typography>
          <Typography component={'h1'} sx={{textAlign:text('left !important',
          
          'end !important'),
          textDecoration:'underline',
          fontWeight:800,fontSize:'2.65em',pb:4,pt:.25,}}>
            {text(`Rana Mahmoud Chehab `,`الاستاذة رنا محمود شهاب `)}
          </Typography>
          
        </Box>
        <Box sx={{maxWidth:'600px',px:1}}>
       
        {/* {
         [
          { en: "BA degree in Translation", ar: "إجازة في الترجمة"},
          { en: "MA degree in French literature", ar: "ماجستير في الأدب الفرنسي" },
          { en: "Higher Honorary Doctorate Certificate issued by the International University of Smart and Academic University of Safana",
           ar: "شهادة الدكتوراه الفخرية الصادرة عن جامعة وأكاديمية سمارت العالمية وجامعة سفانة الأكاديمية" },
          { en: "Higher honorary doctorate issued by the American Canadian Board", 
          ar: "شهادة الدكتوراه الفخرية الصادرة عن البورد الأميركي الكندي" },
          { en: "“Training of Trainers” and “International Trainer” certificate.",
           ar: `شهادتي "تدريب المدربين" و"المدرب الدولي"` },
          { en: "Sworn translator, certified before courts, official departments, embassies and ministries in Lebanon for more than 17 years.",
           ar: "مترجمة محلّفة ومعتمدة أمام المحاكم والدوائر الرسمية والسفارات والوزارات في لبنان لأكثر من 17 عامًا." },
          { en: "Lecturer and Translator at the University of People", ar: "University of People محاضرة ومترجمة في " },
          { en: "My courses are not limited to: ( Cat tools, Internship, Economic translation, Professional Translation, Basics of Translation, Subtitling, Memoq etc..)", 
          
          ar: " أدوات الترجمة بمساعدة الحاسوب (CAT tools) والتدريب والترجمة الاقتصادية وأسس الترجمة وترجمة الأفلام وmemoQ، إلخ..." },
          { en: "Certified by Translators without Borders",
           ar: `معتمدة من "مترجمون بلا حدود ` },
          { en: "Certified by the Arab Organization of Professional Translators",
           ar: "معتمدة من المنظمة العربية للمترجمين المحترفين  " },
          { en: "Member of the International Union of Languages and Translation (No. 648)",
          
          ar: "عضو في الاتحاد الدولي للغات والترجمة (رقم 648)" },
          { en: "ISO 9001 certified", ar: "حاصلة على شهادة ISO 9001" },
          { en: "Accredited by the American and Canadian Board",
           ar: "معتمدة من قبل البورد الأميركي الكندي" }
        ].map(i=>{
            return <Typography key={i?.en} className=' ' sx={{py:.5,textAlign:text('left !important','end !important')}}>
              <strong 
              style={{textAlign:'left'}}
              
              className={text('init','none')}>
              •
              {' '}
              </strong>
            
              <span>

            {text(`${i?.en}`,`${i?.ar}`)}
              </span>
              <strong
              style={{textAlign:'right'}}
              className={`${text('none','init')}  `}>
              {' '}
              •
              </strong>
 </Typography>


          })
        } */}
  <Box sx={{
                  
                  display:text(`none`,'block')}}>

        {
          translationInfoAR.map(i=>{
            return  <Typography key={i} className=' ' sx={{py:.5,direction:'rtl'}}>
            <strong  >
            •
            {' '}
            </strong>

            <span>
              {i}
            </span>
         
</Typography>
          })
        }
                  </Box>

                  <Box sx={{
                  
                  display:text(`block`,'none')}}>
                    
                
{
          [
            "BA degree in Translation",
            "MA degree in French literature",
            "Higher Honorary Doctorate Certificate issued by the International University of Smart and Academic University of Safana",
            "Higher honorary doctorate issued by the American Canadian Board",
            "“Training of Trainers” and “International Trainer” certificate",
            "Sworn translator, certified before courts, official departments, embassies and ministries in Lebanon for more than 17 years",
            "Lecturer and Translator at the University of People",
            "My courses are not limited to: Cat tools, Internship, Economic translation, Professional Translation, Basics of Translation, Subtitling, Memoq etc.",
            "Certified by Translators without Borders",
            "Certified by the Arab Organization of Professional Translators",
            "Member of the International Union of Languages and Translation (No. 648)",
            "ISO 9001 certified",
            "Accredited by the American and Canadian Board",
          ].map(i=>{
            return  <Typography key={i} className=' ' sx={{py:.5,direction:'ltr'}}>
            <strong  >
            •
            {' '}
            </strong>

            <span>
              {i}
            </span>
         
</Typography>
          })
        }
          </Box>
        </Box>
</Grid>
    </Grid>

    </Grid>

    </Box>
    </Box>
  
  )
}

export default Index