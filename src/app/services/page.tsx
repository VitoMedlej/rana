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
      icon:`https://www.flaticon.com/free-icon/languages_3898082`,    title: text(
        'Translation',
        'الترجمة'
      ),
      desc: text(
       `IATT translates to and from all languages. We work with complex technical, legal, medical, scientific, and financial documents. We also translate websites, brochures, contracts, patents, computer software, CVs, and videos. Thus, we work on marketing, media, video, and E-commerce translation. Our highly adept staff will custom-tailor a translation program to help you meet your strategic globalization goals.`,
       ` تقوم IATT بترجمة من وإلى جميع اللغات. نحن خبراء في التعامل مع الوثائق التقنية والقانونية والطبية والعلمية والمالية
       المعقدة.
        كما نقوم بترجمة المواقع الإلكترونية والكتيبات والعقود وبراءات الاختراع وبرامج الكمبيوتر والسير الذاتية ومقاطع الفيديو.
        بالتالي، نعمل على ترجمة المحتوى التسويقي والإعلامي والفيديوهات على أنواعها ومحتوى التجارة الإلكترونية. 
       يقوم فريق عملنا ذوو المهارة العالية بتصميم برنامج ترجمة مخصصة لمساعدتك في تحقيق أهدافك الاستراتيجية للعولمة.
       `
      ),
        
    },   
    {
      icon:`https://www.flaticon.com/free-icon/interpreter_12631917`,    title: text(
        'Interpretation',
        'الترجمة الفورية'
      ),
      desc: text(
        `We speak all the languages where business is spoken!
        • Multilingual conferences
        • Contract negotiations
        • Telephone interpreting
        • Medical emergencies
        • Depositions
        `,
        `لدينا فريق عمل متمكن من جميع اللغات التي تُستخدم في مجال الأعمال!
        •	المؤتمرات المتعددة اللغات
        •	المفاوضات التابعة للعقود
        •	ترجمة شفوية عبر الهاتف
        •	حالات الطوارئ الطبية
        •	الإفادات والاقرارات
        `
      ),
    },
    {
      icon:`https://www.flaticon.com/free-icon/placeholder_9385535`,    title: text(
        'Website Localization and Translation',
        'تعريب المواقع الإلكترونية '
      ),
      desc: text(
       `We help you grow online sales because we make it easy for your website to be multilingual. Are you looking to increase your sales through a multilingual website? Our website translation services reduce the complexity, cost, and time of getting your site into multiple languages. Over 80 languages supported. Multilingual SEO assistance. Plug-and-play WordPress integration. API and CMS integration. Translators get in-context views of their translations – no staging cycle is required.`,
       `هل تسعى إلى زيادة مبيعاتك من خلال موقع إلكتروني متعدد اللغات؟ 
       نحن هنا لنساعدك على زيادة مبيعاتك عبر الإنترنت لأننا نضفي اللغات الاجنبية على موقعك . 
       نسعى لتقليل الصعوبة والتكلفة والوقت اللازم لترجمة موقعك إلى لغات متعددة. 
       نقوم بترجمة أكثر من 80 لغة وتحسين محركات البحث للغات متعددة من أولوياتنا: الووردبرس احدى مهاراتنا بالاضافة الى التكامل مع واجهة برمجة التطبيقات وأنظمة إدارة المحتوى.
        يحصل المترجمون على وجهات نظر في سياق ترجماتهم - لا يتطلب دورة تجريبية.
       `,
      ),

    },
    {
      icon:`https://www.flaticon.com/free-icon/culture_4127193?term=culture&page=1&position=3&origin=search&related_id=4127193`,    title: text(
        'Transcreation',
        'الترجمة الإبداعية'
      ),
      desc: text(
       `In Germany, you swat two flies with one slap. In Japan, you catch two fish on one hook. In England and the U.S., you kill two birds with one stone.

       If you were to “just translate” these words, you’d confuse both: your brand and your customer. The goal of Transcreation is to move an idea into a target culture.
       
       Advertisements, Landing Pages, and Marketing Material typically have elements that need to be transcreated.
       `,
        `في ألمانيا، تضرب ذبابتين بلكمة واحدة. في اليابان، تصطاد سمكتين بسنارة واحدة. في إنجلترا والولايات المتحدة، تقتل عصفورين بحجر واحد.

        إذا كنت "تترجم فقط" هذه الكلمات، فسوف تخلط بينهما: علامتك التجارية وعميلك. 
        الهدف من الترجمة الإبداعية هو نقل فكرة إلى الثقافة المستهدفة.
        
        عادةً ما تحتوي الإعلانات والصفحات التي يتم الانتقال إليها والمواد التسويقية على عناصر تحتاج إلى ترجمة ابداعية.
        `
      ),
    },
    {
      icon:``,    title: text(
        'Writing Services',
        'خدمات الكتابة'
      ),
      desc: text(
        'Our writers will find the right tone for your audience - from crisp web copy to polished research articles. Experienced specialist writers, dedicated project managers, a wide range of styles and tones, and a five-step integrated process. We write: media and marketing documents, financial reports, scientific articles, technical documentation, etc.',
        `سيجد كتّابنا اللهجة المناسبة لجمهورك-بدءًا من نسخة الويب الواضحة وصولًا الى المقالات البحثية المصقولة. 
        كتّاب متخصصون ذوي خبرة ومديري مشاريع ومجموعة واسعة من الأساليب والنغمات وعملية متكاملة ذات خطوات خمسة. من كتاباتنا: الوثائق الإعلامية والتسويقية والتقارير المالية والمقالات العلمية والوثائق الفنية، إلخ.
        `
      ),
    },
    {
      icon:`https://www.flaticon.com/free-icon/edit_2921179?term=editing&related_id=2921179`,    title: text(
        'Editing Services',
        'خدمات التحرير'
      ),
      desc: text(
        'Take the pressure off and leave it to our editors and proofreaders to ensure your message is error-free. Error-free texts, a scalable, flexible solution: use it as and when you need it. Quick time-to-market thanks to fast turnaround times. Your information and data remain secure and confidential. We offer three levels of Editing: Proofreading, Linguistic editing, and Specialist editing.',
        `تخلص من ضغط المراجعة واترك الأمر للمحررين والمدققين للتأكد من أن محتواك خالي من الأخطاء.
        نصوص خالية من الأخطاء وحل قابل للتطور ذات مرونة عالية: استخدمه عند الحاجة.
        وقت سريع لاختراق سوق العمل بفضل أوقات التسليم السريعة. 
       سرية معلوماتك وبياناتك من أولوياتنا.
        نقدم ثلاثة مستويات من التحرير: التدقيق اللغوي، التحرير اللغوي، والتحرير المتخصص.
       `,
      ),
    },
    {
      icon:`https://www.flaticon.com/free-icon/proofreading_10493585?term=proofreading&related_id=10493585`,    title: text(
        'Proofreading',
        'التدقيق اللغوي'
      ),
      desc: text(
        'Make sure your text is free of spelling and punctuation errors. In-depth grammar check by expert linguists, correcting document layout, typography, and table of contents, uniform formatting. For improvement in the tone and style of your texts, see our Linguistic editing.',
        `تأكد من أن نصك خالٍ من الأخطاء الإملائية وأخطاء علامات الترقيم. 
        تدقيق نحوي متعمق من قبل لغويين خبراء اضافة الى تعديل تصاميم الوثائق وتصحيح اخطاء الطباعة وجدول المحتويات والعمل على تنسيق متماثل. 
        كي تحصل على نص فريد من نوعه، راجع قسم التحرير اللغوي في الأكاديمية.
        `,
        ),
    },
    {
      icon:`https://www.flaticon.com/free-icon/subtitle_5352419?term=subtitling&page=1&position=8&origin=search&related_id=5352419`,    title: text(
        'Get Your Videos Professionally Translated',
        'ترجم مقاطع الفيديو باحترافية'
      ),
      desc: text(
        'Do you need your video or audio files transcribed? We have world-leading transcription services which make it easy to translate them into many different languages. Our translation services are seamlessly integrated with our captioning and transcription services.',
          `هل تحتاج إلى تفريغ صوتي لملفات الفيديو أو الملفات الصوتية؟ 
          نقدم خدمات تفريغ صوتي للنصوص الرائدة عالمياً، مما يسهل ترجمتها إلى العديد من اللغات المختلفة. 
          خدماتنا متكاملة بشكل سلس مع خدمات الترجمة والتفريغ الصوتي.
          `,
      ),
    },
    {
      icon:`https://www.flaticon.com/free-icon/transcription_5137096?term=transcription&page=1&position=15&origin=search&related_id=5137096`,    title: text(
        'Easy Transcript Translation',
        'ترجمة المحاضرة بسهولة'
      ),
      desc: text(
        `Our transcript translation service is the easiest way to translate your video transcription files:
        • Simply upload your source file
        • Choose your source and target languages
        • Get an instant quote and place your order all within minutes. Our professional translators, who are native speakers, are equipped to translate XLS, Word, SRT, TTML and many other file formats.
        `,
        `ان ترجمتنا للنصوص تعتبر أسهل طريقة لترجمة ملفات التفريغ الصوتي:
        •	قم بتحميل الملف الاساسي الذي ترغب بترجمته
        •	اختر اللغة المصدر و اللغة الهدف
        •	احصل على سعر فوري وارسل طلبك خلال دقائق. 
        يتمتع مترجمونا المحترفون أصحاب اللغة الأم، بالقدرة على ترجمة ملفات XLS، Word، SRT، TTML والعديد من الملفات الأخرى.
        `
        ),
    },
    {
      icon:`https://www.flaticon.com/free-icon/online-learning_2436874?term=courses&page=1&position=2&origin=search&related_id=2436874`,    title: text(
        'Translation Courses',
        `دورات الترجمة`
      ),
      desc: text(
       `• Internship
       • Diploma in preparing a sworn translator
       • Basics of Translation
       • Cat Tools
       • Subtitling
       • General Translation
       • Copywriting
       • Content Writing
       • Legal Translation
       • Professional Translation
       `,
       `•	التدريب العملي
       •	دبلوم إعداد مترجم محلف
       •	أسس الترجمة
       •	الكات تولز
       •	ترجمة الأفلام
       •	الترجمة العامة
       •	كتابة المحتوى التسويقي
       •	كتابة المحتوى
       •	الترجمة القانونية
       •	الترجمة الاحترافية
       `
    )},
    {
      icon:`https://www.flaticon.com/free-icon/language_4324220?term=language+courses&page=1&position=12&origin=search&related_id=4324220`,    title: text(
        'Language Courses',
        'دورات اللغات'
      ),
      desc: text(
       `• English
       • French
       • Arabic
       • Turkish
       • German
       • Spanish
       • Italian
       `,
`•	الإنكليزية
•	الفرنسية
•	العربية
•	التركية
•	الألمانية
•	الإسبانية
•	الإيطالية
`
      ),
    }
//     {
//       icon:``,    title:  text('Personalized Guidance', 'محتوى موثوق به'),
//       desc:
//           text('Led by Dr. Rana CHEHAB, our elite team provides personalized education. Join us for hands-on courses tailored to your success.', 'تم إنشاؤها بواسطة خبراء، مكتبة الدروس والتمارين الموثوقة في Khan Academy تغطي مواضيع الرياضيات والعلوم وأكثر. دائمًا مجانية للمتعلمين والمعلمين.')
//         ,
//         icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',

//   },    
//   {
//     icon:``,    title: text('Service 1', 'أسعار معقولة'),
//     desc:  text('17 years of excellence. Specialized programs. Practical learning. Choose us for unparalleled expertise in translation and training.', 'يمارس الطلاب بوتيرة خاصة بهم، يقومون أولاً بسد الفجوات في فهمهم ثم يسرعون في عملية التعلم.'),
//     icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',
  
// },
//   {
//       icon:``,    title:
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
       { text('Professional translation services are available in all major languages.', `خدمات الترجمة الإحترافية متاحة في جميع اللغات الرئيسية`)}
        </Typography>
        <Typography  className=' auto center text-center' sx={{
      direction:text(`ltr`,'rtl'),
          
          py:2,color:'#4b4e55',maxWidth:'600px'}}>

        {
  text('we work on marketing, media, video, and E-commerce translation.', `نعمل على ترجمة المحتوى التسويقي والاعلامي والفيديوهات ومحتوى التجارة الإلكترونية.`)
}
        </Typography>
        <Box sx={{pt:2}} className="flex gap gap2 auto center">

        <Btn
                                onClick={()=>router.push('/#contact')}
        
        >
        {
  text('Contact', 'اتصل بنا')
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
       { text('Our Services.', `خدماتنا`)}
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
                      height:{xs:'320px',sm:'350px'},
                      borderRadius:'5px',
                      py:{xs:3,sm:4},
                      px:{xs:2,sm:2},
                    
                      minWidth:{xs:'95%',md:'350px'},
                      width:{xs:'95%',sm:'32%',md:'22%'},mt:6,flex:1}}>
                            <Box sx={{width:'50px'}}>
                                <img src={`${i?.icon}`} alt="" className="img contain" />
                            </Box>
                        <Typography  component='h1'sx={{
                        fontSize:'1.65em',fontWeight:400,py:1,color:'#1865f2 !important'}}>
                            {i.title}
                        </Typography>
                        <Typography className='clr pre' sx={{fontWeight:600,fontSize:'.9em',px:1,pt:1}}>
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
            {text(`Our quotations, no matter how complex, are free of charge, and we aim to respond to you promptly with a word count, price, and schedule for completion to your specified deadline. For all enquiries or for a quote, please email Chehab.translation@gmail.com or call 
+ 961 79192959
`,
`نقدم عرض الأسعار بغض النظر عن صعوبة الملف وتعقيده بشكل مجاني ونسعى للرد بشكل سريع بعدد الكلمات والسعر والجدول الزمني للانتهاء ضمن المهلة المحددة.
لمعرفة المزيد، يرجى إرسال بريد إلكتروني على البريد الوارد أدناه
Chehab.translation@gmail.com
أو الاتصال على هذا الرقم
+ 961 79192959
`
)}
              </Typography>
            </Box>
              <Divider></Divider>
            <Box className='auto col center flex' sx={{maxWidth:'800px',gap:2,py:4}}>
           
              <Box sx={{width:'50px'}}>
                                <img src={`https://www.flaticon.com/free-icon/languages_3898082?related_id=3898082`} alt="" className="img contain" />
                            </Box>
            <Typography sx={{
      direction:text(`ltr`,'rtl'),


            }} >
            <b>

              {text('Languages covered', 'اللغات المتاحة')}
            </b>
              </Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text(
`IATT language specialists and strong global presence mean your project is developed at any time, for any industry, in any languages.
Every major language

For your writing, editing, and translation projects in the following languages:
`,
` والحضور العالمي الفعال يعني أن مشروعك سيتم ترجمته في أي وقت، في أيIATTإن متخصصي اللغات 
مجال عمل ولأي لغة تختارها.
`

      )}</Typography>
   
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text('Every major language', 'كل لغة رئيسية')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text('For your writing, editing, and translation projects in the following languages:', 'لمشاريع الكتابة والتحرير والترجمة الخاصة بك في اللغات التالية:')}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}><b>
      
      {text('European languages', 'اللغات الأوروبية')}</b></Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text(`Bulgarian, Catalan, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hungarian, Irish, Italian, Icelandic, Latvian, Lithuanian, Maltese, Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Slovene, Spanish, Swedish`,
      
      `البلغارية، الكتالانية، التشيكية، الدنماركية، الهولندية، الإنجليزية، الإستونية، الفنلندية، الفرنسية، الألمانية، اليونانية، الهنغارية، الإيرلندية، الإيطالية، الأيسلندية، اللاتفية، الليتوانية، المالطية، النرويجية، البولندية، البرتغالية، الرومانية، الروسية، السلوفاكية، السلوفينية، الإسبانية، السويدية`
      )}</Typography>
     <Typography sx={{     
       direction:text(`ltr`,'rtl')}}><b>{text('Asian languages', 'اللغات الآسيوية')}</b></Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text(`Bahasa Melayu, Bahasa Indonesia, Bengali, Burmese, Chinese, Hindi, Japanese, Khmer, Korean, Lao, Punjabi, Urdu, Tagalog, Tamil, Thai, Vietnamese`,
      
      `البهاسا ملايو، البهاسا إندونيسيا، البنغالية، البورمية، الصينية، الهندية، اليابانية، الخميرية، الكورية، اللاَوية ، البنجابية، الأوردية ، التاغالوغية، التاميلية، التايلاندية، الفيتنامية`
      )}</Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}><b>
      
      {text('Middle Eastern languages', 'لغات الشرق الأوسط')}</b></Typography>
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text(`Arabic, Turkish
.... and many more
`, `العربية والتركية غيرها من اللغات
`)}</Typography>
      
    
     <Typography sx={{      direction:text(`ltr`,'rtl')}}>
      
      {text(`IATT has experience in all major business sectors and languages – we’ll make sure your message is heard.`,
      
      ` تتمتع IATT بخبرة واسعة في جميع المجالات الرئيسية للأعمال واللغات - سنتأكد من تلقّي رسالتك. `
      )}</Typography>
     <Typography sx={{    
        direction:text(`ltr`,'rtl')}}>{
        
        text(`Please contact us with your specific language requirements and combinations.`,
        `يُرجى الاتصال بنا لإبلاغنا بمتطلباتك وزوجك اللغوي.`
        )}</Typography>
            </Box>
      </Box>
    </>

  )
}

export default Page