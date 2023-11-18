"use client"
import Link from 'next/link';
import {Box, Typography } from '@mui/material'
import '@/Styles/Footer.css'
import { useRouter } from 'next/navigation';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';
import {CiFacebook,CiInstagram,CiLinkedin} from 'react-icons/ci'
import useLanguage from '@/Hooks/UseLanguage';

const Footer = () => 
{
  const {text} = useLanguage()

  const router= useRouter()
  return (
  <Box component='footer' className="site-footer  relative " sx={{backgroundRepeat:'no-repeat',
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
            <img className='img ' src='https://pps.whatsapp.net/v/t61.24694-24/395029516_3182848785354113_8126807764435523565_n.jpg?ccb=11-4&oh=01_AdR_csxoLCW4KqBi0Cn_pujUGUS3L3s_ILNg7zRy1gp8fA&oe=6560B819&_nc_sid=e6ed6c&_nc_cat=104' alt="Footer Logo" />
            </Link>
          </div>
          <Typography component='p' sx={{ fontWeight:300,fontSize: '1.2em' ,color:'white' }}  className='footer-p  '>
{
  text('The International Academy for Translation and Training in Lebanon is a renowned institution dedicated to providing high-quality education in the field of translation. Established with a commitment to excellence, the academy serves as a hub for individuals aspiring to build successful careers in the dynamic world of language translation.', 'الأكاديمية الدولية للترجمة والتدريب في لبنان هي مؤسسة مشهورة ملتزمة بتقديم تعليم عالي الجودة في مجال الترجمة. تأسست بالتزام بالتميز، تعتبر الأكاديمية محورًا للأفراد الطموحين الذين يسعون لبناء مهن ناجحة في عالم الترجمة اللغوية الدينامي.')
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
              Site links
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
              Contact
              </Typography>
              </li>
            {/* <li><Link href="#"> Lebanon</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/onBeirut/" target="_blank" rel="noreferrer" >onBeirut Instagram</a></li>
            <li><a href={'https://wa.me/79192959'} rel="noreferrer" target='_blank' >{` +961 79192959 `}</a></li>
            
      <Box className='flex white' sx={{fill:'white',mt:1}}>

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
            
            
          </Box>
          </ul>
        </div>
      </div>
    </div>

    <div className="center text-center  relative " style={{background:'#030c1e',textAlign:'center',color:'black',borderTop:"1px solid #0000001f"}}>
      <div className=" bg white " style={{}}>
        <Box sx={{py:2}}>Website Developed By{' '}
          <a className='white' href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></Box>
      </div>
    </div>
  </Box>
);

}


export default Footer
