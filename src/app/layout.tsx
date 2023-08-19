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
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&display=swap" rel="stylesheet"/>
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