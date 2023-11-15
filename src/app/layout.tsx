import ContextWrapper from '@/context/Context'
import '../Styles/Styles.css'
import Sidebar from '@/Components/Sidebar/Sidebar'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
// import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'

export const metadata = {
    title: 'Civil Engineering Excellence and Training in Lebanon',
    description: `Elevate your engineering skills with [Company Name] - Your partner in civil engineering services and professional training in Lebanon. Benefit from authorized certified instructors, enhance software proficiency. `,
    icons: {
        icon:`https://ucarecdn.com/662aba9b-005a-4bb8-a4a1-c939111c8898/275633496_1156231295147805_2239147006843652299_n.jpg`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html id='body' lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    {/* <ScrollToTop/> */}

                     {children}
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}