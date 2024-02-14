"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { loadState, saveState } from "@/Utilts/LocalstorageFn";
import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from "@mui/material";


export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');



 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
        const [open,
            setOpen] = useState(false);
        const [cartOpen,
            setCartOpen] = useState(false);
            const [cates,
                setCates] = useState([]);
                const [lang,
                    setLang] = useState('en');
                        // Load language from localStorage on component mount
    useEffect(() => {
        const savedLang = loadState('Savedlanguage');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    // Save language to localStorage whenever it changes
    useEffect(() => {
        saveState('Savedlanguage', lang);
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p , a , code , pre, button');
        elements.forEach((element) => {
          element.classList.remove('en', 'ar'); // remove both classes first
          element.classList.add(lang); // then add the selected language class
        });
      }, [lang]);


  


    const theme = createTheme({
        // typography: {
        //   allVariants: {
        //     fontFamily: lang === 'en' ? "'Times New Roman', sans-serif" : "'Simplified Arabic'",
        //   },
        // },
      
        
      });
    
            return (
                <ThemeProvider theme={theme}>
  <CssBaseline />
  <GlobalStyles styles={{
        // 'body, button, a , pre, code': {
        //   fontFamily: theme.typography.fontFamily,
        // },
      }}/>
      
                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{cates, setCates}}>
            
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>

        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
            </LangContext.Provider>
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
    </ThemeProvider>

            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(Categories);
export const useLangContext = () => useContext(LangContext);