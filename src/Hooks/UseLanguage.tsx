"use client"
import { useLangContext } from '@/context/Context';

const useLanguage = () => {
    const {lang} = useLangContext();

    
    
      const text = (textEn : string, textOther ?: string) => {
        return lang === 'en' ? textEn : textOther ? textOther : textEn;
      };
    
      return {text };
}

export default useLanguage