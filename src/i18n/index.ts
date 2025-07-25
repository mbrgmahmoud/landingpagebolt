import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: "Landing Page Generator",
      subtitle: "Create high-converting bilingual landing pages instantly",
      productUrl: "Product URL",
      productUrlPlaceholder: "Enter product URL (Amazon, AliExpress, Shopify...)",
      language: "Language",
      selectLanguage: "Select Language",
      english: "English",
      arabic: "Arabic",
      generate: "Generate Landing Page",
      preview: "Preview",
      exportHtml: "Export HTML",
      download: "Download",
      generating: "Generating...",
      orderNow: "Order Now",
      specialOffer: "Special Offer",
      customerReviews: "Customer Reviews",
      contactInfo: "Contact Info",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      name: "Full Name",
      phone: "Phone Number",
      address: "Address",
      confirmOrder: "Confirm Order",
      orderConfirmed: "Order confirmed successfully!",
      upsellButton: "I want this offer",
      features: "Key Features",
      description: "Product Description"
    }
  },
  ar: {
    translation: {
      title: "مولد صفحات الهبوط",
      subtitle: "إنشاء صفحات هبوط ثنائية اللغة عالية التحويل فورياً",
      productUrl: "رابط المنتج",
      productUrlPlaceholder: "أدخل رابط المنتج (أمازون، علي إكسبريس، شوبيفاي...)",
      language: "اللغة",
      selectLanguage: "اختر اللغة",
      english: "الإنجليزية",
      arabic: "العربية",
      generate: "إنشاء صفحة الهبوط",
      preview: "معاينة",
      exportHtml: "تصدير HTML",
      download: "تحميل",
      generating: "جاري الإنشاء...",
      orderNow: "اطلب الآن",
      specialOffer: "عرض خاص",
      customerReviews: "آراء العملاء",
      contactInfo: "معلومات الاتصال",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      address: "العنوان",
      confirmOrder: "تأكيد الطلب",
      orderConfirmed: "تم تأكيد الطلب بنجاح!",
      upsellButton: "أريد هذا العرض",
      features: "المميزات الرئيسية",
      description: "وصف المنتج"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;