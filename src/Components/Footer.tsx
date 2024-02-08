"use client"
import Link from 'next/link';
import {Box, Typography } from '@mui/material'
import '@/Styles/Footer.css'
import { useRouter } from 'next/navigation';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';
// import {CiFacebook,CiInstagram,CiLinkedin} from 'react-icons/ci'
import useLanguage from '@/Hooks/UseLanguage';

const Footer = () => 
{
  const {text} = useLanguage()

  const router= useRouter()
  return (
  <Box component='footer' className="site-footer  relative " sx={{backgroundRepeat:'no-repeat',
  direction:text(`ltr`,'rtl'),
 backgroundPosition: {xs:'center !important',md:'center !important'},
    background:'#0b2149 !important',
  backgroundSize:{xs:'cover !important',md:'cover !important'}
  
  ,marginTop:'3em',color:'black'}}>
    <Box sx={{display:'flex',width:'100%',position:'absolute',height:'100%',background:'black',opacity:.5,top:0,right:0}}>

    </Box>

    <div className="container relative " style={{zIndex:2414,background:'transparent',color:'black'}}>
      <div className="site-footer__top  relative">
        <div className="site-footer__description relative">
          <div className='logos cursor relative'>
           
            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='https://ucarecdn.com/cd42fd12-91e8-4fdb-ba51-d5a68865e578/logorana.png' alt="Footer Logo" />
            </Link>
          </div>
          <Typography component='p' sx={{ fontWeight:300,fontSize: '1.2em' ,color:'white', direction: text('ltr','rtl') }}  className='footer-p  '>
{
  text(`IATT is a professional translation company based in Lebanon, providing translation, interpretation, transcreation, transcription, subtitling, localization, writing/copywriting and editing/proofreading services in over 60 languages and all courses related to translation.`,
   `
   IATT هي شركة ترجمة محترفة مقرها في لبنان، تقدم خدمات الترجمة التحريرية والفورية والترجمة الإبداعية والتفريغ الصوتي وترجمة الأفلام والتوطين وكتابة المحتوى وكتابة المحتوى التسويقي والتحرير/التدقيق اللغوي بأكثر من 60 لغة وجميع الدورات التدريبية المتعلقة بمجال الترجمة.
   `)
}

          </Typography>
        

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className=" white site-footer__links relative ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className='white ul-white'>
            <li className='white link-title'>
              <Typography sx={{fontSize:'1.45em',fontWeight:600}} component='h1'>
              {text(`Site links`,`روابط الموقع`)}
              </Typography>
              </li>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            {/* <li><Link href="/certifications">Certifications</Link></li> */}
            {/* <li><Link href="/recipes">Recipes</Link></li> */}

            {/* <li><Link href="/cart">Cart</Link></li> */}
            <li><Link href="/courses">Courses</Link></li>
        
          </ul>
     
          <ul  className='ul-white white' style={{color:'black'}}>
          <li className='link-title white'>
              <Typography 
              onClick={()=>router.push('#contact')}
              sx={{fontSize:'1.45em',fontWeight:600}} component='h1'>
              {text('Contact','التواصل')}
              </Typography>
              </li>
            {/* <li><Link href="#"> Lebanon</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.facebook.com/profile.php?id=61552420779348&mibextid=ZbWKwL" target="_blank" rel="noreferrer" >
              {`International Academy for Translation & Training (IATT)`}</a></li>
            <li><a href="https://instagram.com/i.a.t.t2023?igshid=eWdndzdzcTh2cmxm" target="_blank" rel="noreferrer" >Instagram: i.a.t.t2023</a></li>
            <li><a href="https://www.tiktok.com/@internationalacademytt?_t=8hFXyHXnt5E&_r=1" target="_blank" rel="noreferrer" >TikTok: I.A.T.T</a></li>
            <li><a href="https://youtube.com/@me.ranachehab1643?si=5-V1U79Nv4hIL5Pd" target="_blank" rel="noreferrer" >Youtube: Me.Rana CHEHAB</a></li>
            <li><a href={`
            https://www.linkedin.com/in/rana-chehab1985?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
            
            `} target="_blank" rel="noreferrer" >LinkedIn: Rana Chéhab</a></li>
            
            <li><a href={'https://wa.me/79192959'} rel="noreferrer" target='_blank' >Mobile: {` +961 79192959 `}</a></li>
            <li><a href={'https://wa.me/9617260091'} rel="noreferrer" target='_blank' >Telephone: {` +961 7260091 `}</a></li>
           
      {/* <Box className='flex white' sx={{fill:'white',mt:1}}>

          <Box className='cursor pointer white'  sx={{width:'50px'}}>
         <a href=' https://www.facebook.com/onBeirut' style={{color:'white',fill:'white'}} className='white' target='_blank' rel='noopener' >
            
              <CiFacebook fontSize='2em' fill='white !important' color='white'></CiFacebook>
         </a>
           
            </Box>
            <Box fontSize='2em' className='cursor pointer' sx={{width:'50px'}}>
         <a href='https://www.instagram.com/onBeirut/' style={{color:'white',fill:'white'}} className='white' target='_blank' rel='noopener' >
              <CiInstagram></CiInstagram>
         </a>
        
            </Box>
            <Box fontSize='2em' className='cursor pointer' sx={{width:'50px'}}>
         <a href='https://www.linkedin.com/in/civil-enguide-974799202/' style={{color:'white',fill:'white'}} className='white' target='_blank' rel='noopener' >
              
              <CiLinkedin></CiLinkedin>
         </a>
            
            </Box>
            
            
          </Box> */}
          </ul>
        </div>
      </div>
    </div>

    <div className="center text-center  relative " style={{background:'##000818 !important',textAlign:'center',color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="  white " style={{background:'##000818 !important',}}>
        <Box sx={{py:2}}>Website Developed By{' '}
          <a className='white' href={`${'htts://www.onbeirut.com'}`}>OnBeirut Agency </a></Box>
      </div>
    </div>
  </Box>
);

}


export default Footer
