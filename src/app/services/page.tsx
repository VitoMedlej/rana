"use client"
import Btn from '@/Components/Btn/Btn'
import useLanguage from '@/Hooks/UseLanguage'
import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {
  const {text} = useLanguage()
  const router = useRouter()

  const reasons= [
    {
      title: text(
        'Translation',
        'الترجمة'
      ),
      desc: text(
        'IATT translates to and from all languages. We work with complex technical, legal, medical, scientific, and financial documents. We also translate websites, brochures, contracts, patents, computer software, CVs, and videos. Thus, we work on marketing, media, video, and E-commerce translation. Our highly adept staff will custom-tailor a translation program to help you meet your strategic globalization goals.',
        'تقدم IATT خدمات الترجمة إلى ومن جميع اللغات. نعمل على ترجمة وثائق تقنية، قانونية، طبية، علمية، ومالية معقدة. نقوم أيضًا بترجمة مواقع الويب، الكتيبات، العقود، البراءات، البرمجيات، السير الذاتية، ومقاطع الفيديو. وبالتالي، نعمل على ترجمة مجالات التسويق، ووسائل الإعلام، والفيديو، والتجارة الإلكترونية. سيقوم فريق العمل الخبير لدينا بتخصيص برنامج ترجمة لمساعدتك في تحقيق أهدافك الاستراتيجية للعولمة.',
      ),
    },   
    {
      title: text(
        'Interpretation',
        'التفسير'
      ),
      desc: text(
        'We speak all the languages where business is spoken!\n• Multilingual conferences\n• Contract negotiations\n• Telephone interpreting\n• Medical emergencies\n• Depositions',
        'نحن نتحدث جميع اللغات التي يُجرى فيها الأعمال التجارية!\n• المؤتمرات متعددة اللغات\n• مفاوضات العقود\n• تفسير الهاتف\n• حالات الطوارئ الطبية\n• الإفادات'
      ),
    },
    {
      title: text(
        'Website Localization and Translation',
        'ترجمة وتهيئة المواقع الإلكترونية'
      ),
      desc: text(
        'We help you grow online sales because we make it easy for your website to be multilingual. Are you looking to increase your sales through a multilingual website? Our website translation services reduce the complexity, cost, and time of getting your site into multiple languages. Over 80 languages supported. Multilingual SEO assistance. Plug-and-play WordPress integration. API and CMS integration. Translators get in-context views of their translations – no staging cycle is required.',
        'نساعدك في زيادة المبيعات عبر الإنترنت لأننا نجعل من السهل جعل موقع الويب الخاص بك متعدد اللغات. هل تبحث عن زيادة مبيعاتك من خلال موقع ويب متعدد اللغات؟ تقلل خدمات ترجمة المواقع الخاصة بنا من التعقيد والتكلفة والوقت اللازم لتوفير موقعك بلغات متعددة. أكثر من 80 لغة معتمدة. مساعدة في تحسين محركات البحث للعديد من اللغات. تكامل سهل مع ووردبريس. تكامل مع واجهات برمجة التطبيقات ونظم إدارة المحتوى. يحصل المترجمون على رؤى في السياق لترجماتهم – لا يتطلب دورة تجريبية.',
      ),
    },
    {
      title: text(
        'Transcreation',
        'تركيب المضمون'
      ),
      desc: text(
        'In Germany, you swat two flies with one slap. In Japan, you catch two fish on one hook. In England and the U.S., you kill two birds with one stone.\n\nIf you were to “just translate” these words, you’d confuse both: your brand and your customer. The goal of Transcreation is to move an idea into a target culture.\n\nAdvertisements, Landing Pages, and Marketing Material typically have elements that need to be transcreated.',
        'في ألمانيا، تقضي على ذبابتين بلكمة واحدة. في اليابان، تصطاد سمكتين بسنارة واحدة. في إنجلترا والولايات المتحدة، تقتل طائرين بحجر واحد.\n\nإذا كنت ستترجم هذه الكلمات "فقط"، فستربك كل من علامتك التجارية وعميلك. هدف تركيب المضمون هو نقل فكرة إلى ثقافة معينة.\n\nالإعلانات وصفحات الهبوط والمواد التسويقية عادةً ما تحتاج إلى تركيب مضمون.',
      ),
    },
    {
      title: text(
        'Writing Services',
        'خدمات الكتابة'
      ),
      desc: text(
        'Our writers will find the right tone for your audience - from crisp web copy to polished research articles. Experienced specialist writers, dedicated project managers, a wide range of styles and tones, and a five-step integrated process. We write: media and marketing documents, financial reports, scientific articles, technical documentation, etc.',
        'سيجد كتّابنا اللهجة المناسبة لجمهورك - من نسخ الويب الشفافة إلى المقالات البحثية المصقولة. كتّاب متخصصون ذوو خبرة، مديري مشاريع مخصصين، مجموعة واسعة من الأنماط والألحان، وعملية متكاملة من خمس خطوات. نكتب: وثائق الإعلام والتسويق، تقارير مالية، مقالات علمية، وثائق تقنية، وما إلى ذلك.'
      ),
    },
    {
      title: text(
        'Editing Services',
        'خدمات التحرير'
      ),
      desc: text(
        'Take the pressure off and leave it to our editors and proofreaders to ensure your message is error-free. Error-free texts, a scalable, flexible solution: use it as and when you need it. Quick time-to-market thanks to fast turnaround times. Your information and data remain secure and confidential. We offer three levels of Editing: Proofreading, Linguistic editing, and Specialist editing.',
        'ابتعد عن الضغط واترك التحرير والتصحيح لمحررينا ومدققي النصوص لضمان أن يكون رسالتك خالية من الأخطاء. نصوص خالية من الأخطاء، حلاً قابلاً للتوسع ومرنًا: استخدمه عند الحاجة. وقت سريع حتى السوق بفضل سرعة التسليم. معلوماتك وبياناتك تظل آمنة وسرية. نقدم ثلاث مستويات من التحرير: التدقيق اللغوي والتدقيق اللغوي والتحرير المتخصص.'
      ),
    },
    {
      title: text(
        'Proofreading',
        'خدمات التصحيح'
      ),
      desc: text(
        'Make sure your text is free of spelling and punctuation errors. In-depth grammar check by expert linguists, correcting document layout, typography, and table of contents, uniform formatting. For improvement in the tone and style of your texts, see our Linguistic editing.',
        'تأكد من أن نصك خالٍ من الأخطاء الإملائية والترقيم. فحص لغوي عميق من قبل لغويين خبراء، تصحيح تخطيط الوثيقة والطباعة وفهرس المحتويات، تنسيق موحد. لتحسين نبرة وأسلوب نصوصك، انظر إلى خدماتنا في التحرير اللغوي.'
      ),
    },
    {
      title: text(
        'Get Your Videos Professionally Translated',
        'الحصول على ترجمة احترافية لأشرطتك الفيديو'
      ),
      desc: text(
        'Do you need your video or audio files transcribed? We have world-leading transcription services which make it easy to translate them into many different languages. Our translation services are seamlessly integrated with our captioning and transcription services.',
        'هل تحتاج إلى تحول ملفات الفيديو أو الصوت إلى نص مكتوب؟ لدينا خدمات التحول الصوتي الرائدة عالميًا التي تجعل من السهل ترجمتها إلى العديد من اللغات المختلفة. تم دمج خدماتنا في الترجمة بسلاسة مع خدماتنا في وضع التسميات والتحول.'
      ),
    },
    {
      title: text(
        'Easy Transcript Translation',
        'ترجمة المحاضرة بسهولة'
      ),
      desc: text(
        'Our transcript translation service is the easiest way to translate your video transcription files:\n• Simply upload your source file\n• Choose your source and target languages\n• Get an instant quote and place your order all within minutes. Our professional translators, who are native speakers, are equipped to translate XLS, Word, SRT, TTML and many other file formats.',
        'خدمة ترجمة المحاضرة لدينا هي أسهل طريقة لترجمة ملفات نصوص الفيديو الخاصة بك:\n• قم ببساطة بتحميل ملف المصدر الخاص بك\n• اختر لغات المصدر والهدف الخاصة بك\n• احصل على تقدير فوري وقدم طلبك في غضون دقائق. مترجمونا المحترفون، الذين هم أحد الناطقين الأصليين، مجهزون لترجمة ملفات XLS وWord وSRT وTTML والعديد من تنسيقات الملفات الأخرى.'
      ),
    },
    {
      title: text(
        'Translation Courses',
        'دورات الترجمة'
      ),
      desc: text(
        '• Internship\n• Diploma in preparing a sworn translator\n• Basics of Translation\n• Cat Tools\n• Subtitling\n• General Translation\n• Copywriting\n• Content Writing\n• Legal Translation\n• Professional Translation',
        '• التدريب\n• دبلوم في تأهيل مترجم محلف\n• أساسيات الترجمة\n• أدوات تحرير الترجمة (CAT)\n• إعداد الترجمة الفورية\n• ترجمة عامة\n• كتابة النصوص التسويقية (Copywriting)\n• كتابة المحتوى\n• ترجمة قانونية\n• ترجمة محترفة'
      ),
    },
    {
      title: text(
        'Language Courses',
        'دورات اللغات'
      ),
      desc: text(
        '• English\n• French\n• Arabic\n• Turkish\n• German\n• Spanish\n• Italian',
        '• الإنجليزية\n• الفرنسية\n• العربية\n• التركية\n• الألمانية\n• الإسبانية\n• الإيطالية'
      ),
    }
//     {
//       title:  text('Personalized Guidance', 'محتوى موثوق به'),
//       desc:
//           text('Led by Dr. Rana CHEHAB, our elite team provides personalized education. Join us for hands-on courses tailored to your success.', 'تم إنشاؤها بواسطة خبراء، مكتبة الدروس والتمارين الموثوقة في Khan Academy تغطي مواضيع الرياضيات والعلوم وأكثر. دائمًا مجانية للمتعلمين والمعلمين.')
//         ,
//         icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',

//   },    
//   {
//     title: text('Service 1', 'أسعار معقولة'),
//     desc:  text('17 years of excellence. Specialized programs. Practical learning. Choose us for unparalleled expertise in translation and training.', 'يمارس الطلاب بوتيرة خاصة بهم، يقومون أولاً بسد الفجوات في فهمهم ثم يسرعون في عملية التعلم.'),
//     icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',
  
// },
//   {
//       title:
//           text('Your Success, Our Focus', 'مدرسون معتمدون')
//         ,
//       desc: text('Your success matters. Explore specialized courses, learn from industry experts, and earn international accreditation. Enroll now for a successful journey.', 'مع Khan Academy، يمكن للمعلمين تحديد الفجوات في فهم طلابهم، ضبط التعليم، وتلبية احتياجات كل طالب.'),
//       icon: 'https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png',

//   }
]

  return (
    <>
    <Container maxWidth='lg' className='auto'>
      <Box className='auto' sx={{py:4,width:{xs:'99%',sm:'450px'}}}>
        <img src={text("https://ucarecdn.com/c773e905-3f5b-4f9e-8dd3-9730d4de98b0/WhatsAppImage20240202at125659.jpeg",'https://ucarecdn.com/d1832239-aeda-4779-b02a-cec1bba38e4c/WhatsAppImage20240202at125742.jpeg')} alt="" className="img" />
      </Box>
      <Box>
      <Box>
        <Typography component="h1" className='clr auto center text-center' 
        sx={{fontWeight:400,maxWidth:'500px',
      direction:text(`ltr`,'rtl'),
        
        fontSize:'2.5em'}}>
       { text('Professional translation services are available in all major languages.', 'تتوفر خدمات الترجمة الاحترافية بجميع اللغات الرئيسية.')}
        </Typography>
        <Typography  className=' auto center text-center' sx={{
      direction:text(`ltr`,'rtl'),
          
          py:2,color:'#4b4e55',maxWidth:'600px'}}>

        {
  text('we work on marketing, media, video, and E-commerce translation.', 'نحن نعمل على ترجمة التسويق والإعلام والفيديو والتجارة الإلكترونية')
}
        </Typography>
        <Box sx={{pt:2}} className="flex gap gap2 auto center">

        <Btn
                                onClick={()=>router.push('/#contact')}
        
        >
        {
  text('Contact', 'تواصل')
}
        </Btn>
        <Btn
                                onClick={()=>router.push('/courses')}
        
        sx={{color:' #1865f2',ml:1,border:'1px solid',background:'transparent'}}>
        {
  text('Courses', 'الدورات')
}
        </Btn>
        </Box>
      </Box>
      </Box>
    

    </Container>
    <Box sx={{mt:8,background:'#f5f5f5',px:{xs:2},py:6}}>
      <Typography component="h1" className='clr auto center text-center' 
        sx={{
      direction:text(`ltr`,'rtl'),
          
          fontWeight:400,maxWidth:'500px',fontSize:'2em'}}>
       { text('Our Services.', 'لكل طالب، في كل فصل دراسي. نتائج حقيقية.')}
        </Typography>
      <Box
             sx={{width:'100%',
             maxWidth:'lg',
             justifyContent:{xs:'center',sm:'space-between'},
             pt:4,
             flexDirection:{}}} className="flex wrap  auto  ">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex  col' sx={{
      direction:text(`ltr`,'rtl'),

                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      mx:.7,
                      height:'320px',
                      borderRadius:'5px',
                      py:{xs:3,sm:4},
                      px:{xs:2,sm:2},
                    
                      minWidth:{xs:'95%',md:'350px'},
                      width:{xs:'95%',sm:'32%',md:'22%'},mt:6,flex:1}}>
                            {/* <Box sx={{width:'90px'}}>
                                <img src={i.icon} alt="" className="img" />
                            </Box> */}
                        <Typography  component='h1'sx={{
                        fontSize:'1.65em',fontWeight:400,py:1,color:'#1865f2 !important'}}>
                            {i.title}
                        </Typography>
                        <Typography className='clr pre' sx={{fontSize:'.9em',px:1,pt:1}}>
                        {i.desc}
                        </Typography>
                    </Box>
                })
            }
            </Box>
            <Box className='auto center flex text-center' sx={{py:8}}>
              <Typography sx={{
      direction:text(`ltr`,'rtl'),
                
                fontSize:'1.2em',maxWidth:'700px',py:8}}>
              Our quotations, no matter how complex,
               are free of charge, and we aim to respond to
                you promptly with a word count, price, and schedule for completion to your 
                specified deadline. For all enquiries or for a quote, please email
                 ----------------------- or call + 961 79192959 
              </Typography>
            </Box>
              <Divider></Divider>
            <Box className='auto col center flex' sx={{maxWidth:'800px',gap:2,py:4}}>
           
            <Typography sx={{
      direction:text(`ltr`,'rtl'),


            }} >
            <b>

              {text('Languages covered', 'اللغات المشمولة')}
            </b>
              </Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('IATT language specialists and strong global presence mean your project is developed at any time, for any industry, in any languages.', 'تعني اختصاصيو اللغات في IATT والوجود العالمي القوي أن مشروعك يمكن تطويره في أي وقت، لأي صناعة، بأي لغة.')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('Every major language', 'كل لغة رئيسية')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('For your writing, editing, and translation projects in the following languages:', 'لمشاريع الكتابة والتحرير والترجمة الخاصة بك في اللغات التالية:')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}><b>{text('European languages', 'اللغات الأوروبية')}</b></Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('Bulgarian, Catalan, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hungarian, Irish, Italian, Icelandic, Latvian, Lithuanian, Maltese, Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Slovene, Spanish, Swedish', 'البلغارية، الكتالونية، التشيكية، الدنماركية، الهولندية، الإنجليزية، الإستونية، الفنلندية، الفرنسية، الألمانية، اليونانية، الهنغارية، الأيرلندية، الإيطالية، الأيسلندية، اللاتفية، الليتوانية، المالطية، النرويجية، البولندية، البرتغالية، الرومانية، الروسية، السلوفاكية، السلوفينية، الإسبانية، السويدية')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}><b>{text('Asian languages', 'اللغات الآسيوية')}</b></Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('Bahasa Melayu, Bahasa Indonesia, Bengali, Burmese, Chinese, Hindi, Japanese, Khmer, Korean, Lao, Punjabi, Urdu, Tagalog, Tamil, Thai, Vietnamese', 'باهاسا ملايو، باهاسا إندونيسيا، البنغالية، البورمية، الصينية، الهندية، اليابانية، الخميرية، الكورية، اللاوسية، البنجابية، الأردية، التاغالوغية، التاميلية، التايلاندية، الفيتنامية')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}><b>{text('Middle Eastern languages', 'اللغات الشرقية الأوسط')}</b></Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('Arabic, Turkish', 'العربية، التركية')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('.... and many more', '.... وغيرها الكثير')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('IATT has experience in all major business sectors and languages – we’ll make sure your message is heard.', 'IATT لديها خبرة في جميع القطاعات الرئيسية للأعمال واللغات - سنتأكد من سماع رسالتك.')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>{text('Please contact us with your specific language requirements and combinations.', 'الرجاء الاتصال بنا للحصول على متطلبات وتركيبات لغتك المحددة.')}</Typography>
            </Box>
      </Box>
    </>

  )
}

export default Page