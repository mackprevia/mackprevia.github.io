import {createI18n} from 'vue-i18n'
import {defaultLocale} from "@/i18n/index";


const getLanguage = () => {
 const browserLanguage = navigator.language;
 if (browserLanguage.includes("-")) {
     return browserLanguage.split("-")[0];
 }
 return browserLanguage;
}

const i18n = createI18n({
    locale: getLanguage(),
    fallbackLocale: defaultLocale,
    globalInjection: true,
    availableLocales: ["pt", "en"],
    fallbackWarn: false,
    messages: {
        pt: {
            titles: {
                home: "Início",
                extractor: "Extrator",
                contact: "Contato",
                about: "Quem Somos",
                404: "404"
            }
        },
        en: {
            titles: {
                home: "Home",
                extractor: "Extractor",
                contact: "Contact",
                about: "About",
                404: "404"
            }
        }
    }
})

export default i18n;
