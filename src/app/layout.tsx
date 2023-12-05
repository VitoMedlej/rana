import ContextWrapper from '@/context/Context'
import '../Styles/Styles.css'
import Sidebar from '@/Components/Sidebar/Sidebar'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
// import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'

export const metadata = {
    title: `ITAA: Lebanon's Premier Translation & Training Hub`,
    description: `Unlock career growth with expert translation services and cutting-edge training at the International Academy. Elevate your skills in Lebanon's leading language institution.`,
    icons: {
        icon:`https://ucarecdn.com/cd42fd12-91e8-4fdb-ba51-d5a68865e578/logorana.png`
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
                <Footer/>
                </ContextWrapper>
            </body>
        </html>
    )
}