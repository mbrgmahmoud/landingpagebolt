import { ProductData } from '../types';

// Mock GPT service - replace with actual API integration
export class GPTService {
  static async generateProductData(url: string, language: 'en' | 'ar'): Promise<ProductData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock data based on language
    if (language === 'ar') {
      return {
        title: "سماعات لاسلكية عالية الجودة",
        description: "سماعات بلوتوث متطورة مع تقنية إلغاء الضوضاء وبطارية طويلة المدى تدوم حتى 30 ساعة",
        features: [
          "تقنية إلغاء الضوضاء النشطة",
          "بطارية تدوم 30 ساعة",
          "مقاومة للماء والعرق",
          "صوت عالي الوضوح",
          "اتصال بلوتوث سريع"
        ],
        price: "299 ريال",
        images: [
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
        ],
        reviews: [
          {
            name: "أحمد محمد",
            rating: 5,
            comment: "منتج رائع، جودة صوت ممتازة"
          },
          {
            name: "فاطمة علي",
            rating: 5,
            comment: "مريحة جداً ولا تسقط من الأذن"
          },
          {
            name: "محمد الأحمد",
            rating: 5,
            comment: "البطارية تدوم فعلاً كما هو مذكور"
          }
        ]
      };
    } else {
      return {
        title: "Premium Wireless Headphones",
        description: "Advanced Bluetooth headphones with noise cancellation technology and long-lasting battery up to 30 hours",
        features: [
          "Active Noise Cancellation",
          "30-hour battery life",
          "Water and sweat resistant",
          "High-definition sound",
          "Fast Bluetooth connection"
        ],
        price: "$79.99",
        images: [
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
        ],
        reviews: [
          {
            name: "John Smith",
            rating: 5,
            comment: "Amazing product, excellent sound quality"
          },
          {
            name: "Sarah Johnson",
            rating: 5,
            comment: "Very comfortable, doesn't fall out"
          },
          {
            name: "Mike Davis",
            rating: 5,
            comment: "Battery really lasts as described"
          }
        ]
      };
    }
  }

  static generateLandingPageHTML(productData: ProductData, language: 'en' | 'ar'): string {
    const isRTL = language === 'ar';
    const dir = isRTL ? 'rtl' : 'ltr';
    
    return `
<!DOCTYPE html>
<html lang="${language}" dir="${dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${productData.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        ${isRTL ? "@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap');" : ""}
        
        * {
            font-family: ${isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
        }
        
        .fade-in {
            animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .pulse-button {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Header -->
        <header class="text-center mb-12 fade-in">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                ${productData.title}
            </h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                ${productData.description}
            </p>
        </header>

        <!-- Product Images -->
        <section class="mb-12 fade-in">
            <div class="grid md:grid-cols-2 gap-6">
                ${productData.images.map(img => `
                    <div class="relative overflow-hidden rounded-2xl shadow-xl">
                        <img src="${img}" alt="${productData.title}" 
                             class="w-full h-80 object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Features -->
        <section class="mb-12 fade-in">
            <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                ${language === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${productData.features.map(feature => `
                    <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div class="text-blue-500 mb-3">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p class="font-semibold text-gray-800">${feature}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Reviews -->
        <section class="mb-12 fade-in">
            <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                ${language === 'ar' ? 'آراء العملاء' : 'Customer Reviews'}
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
                ${productData.reviews.map(review => `
                    <div class="bg-white p-6 rounded-xl shadow-lg">
                        <div class="flex mb-4">
                            ${'⭐️'.repeat(review.rating)}
                        </div>
                        <p class="text-gray-700 mb-4 italic">"${review.comment}"</p>
                        <p class="font-semibold text-gray-800">- ${review.name}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Special Offer -->
        <section class="mb-12 fade-in">
            <div class="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 rounded-2xl text-center">
                <h2 class="text-3xl font-bold mb-4">
                    ${language === 'ar' ? 'عرض خاص' : 'Special Offer'}
                </h2>
                <p class="text-xl mb-6">
                    ${language === 'ar' ? 'اشتري 2 بسعر أقل - وفر 40%' : 'Buy 2 for Less - Save 40%'}
                </p>
                <button onclick="selectUpsell()" 
                        class="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors pulse-button">
                    ${language === 'ar' ? 'أريد هذا العرض' : 'I want this offer'}
                </button>
            </div>
        </section>

        <!-- Order Form -->
        <section class="mb-12 fade-in">
            <div class="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                    ${language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </h2>
                <form id="orderForm" class="space-y-6">
                    <input type="hidden" name="offer" value="normal" id="offerType">
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            ${language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                        </label>
                        <input type="text" name="name" required 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            ${language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                        </label>
                        <input type="tel" name="phone" required 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            ${language === 'ar' ? 'العنوان' : 'Address'}
                        </label>
                        <textarea name="address" required rows="3"
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all pulse-button">
                        ${language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'} - ${productData.price}
                    </button>
                </form>
                
                <div id="orderConfirmed" class="hidden text-center py-8">
                    <div class="text-green-500 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-green-600 mb-2">
                        ${language === 'ar' ? 'تم تأكيد الطلب بنجاح!' : 'Order confirmed successfully!'}
                    </h3>
                    <p class="text-gray-600">
                        ${language === 'ar' ? 'سنتواصل معك قريباً' : 'We will contact you soon'}
                    </p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="text-center text-gray-600 py-8 border-t">
            <div class="space-x-6 mb-4">
                <a href="#" class="hover:text-blue-500 transition-colors">
                    ${language === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}
                </a>
                <a href="#" class="hover:text-blue-500 transition-colors">
                    ${language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
                <a href="#" class="hover:text-blue-500 transition-colors">
                    ${language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
                </a>
            </div>
            <p>&copy; 2025 ${language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
        </footer>
    </div>

    <script>
        function selectUpsell() {
            document.getElementById('offerType').value = 'special';
            alert('${language === 'ar' ? 'تم اختيار العرض الخاص!' : 'Special offer selected!'}');
        }

        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const order = {
                id: Date.now().toString(),
                name: formData.get('name'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                offer: formData.get('offer'),
                timestamp: new Date().toISOString(),
                product: ${JSON.stringify(productData)}
            };
            
            // Store in localStorage
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Show confirmation
            document.getElementById('orderForm').style.display = 'none';
            document.getElementById('orderConfirmed').classList.remove('hidden');
        });
    </script>
</body>
</html>`;
  }
}