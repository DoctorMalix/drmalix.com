import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import './../globals.css'
export default function Contact() {
  return (
    <div>
      
           

      <Image className="h-auto max-w-lg rounded-lg"
          src="/image-home/contactus.jpeg" // Route of the image file
          height={100} // Desired size with correct aspect ratio
          width={200} // Desired size with correct aspect ratio
          alt="Contact Us"
        />

<p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        On our Contact Page, we open the door to seamless communication and the opportunity to connect with us at HomeoPathy Haven. Your inquiries, feedback, and thoughts matter to us, and we're eager to assist you on your path to well-being.
        Feel free to reach out through the provided contact form, sharing your questions or concerns. We are committed to responding promptly and providing the guidance you need to navigate the world of homeopathy and our services.
        Alternatively, you can connect with us directly through the contact information listed on this page. Whether you prefer phone or email, we're here to ensure your inquiries are met with attentive and informative responses.
        Your journey towards holistic wellness starts with a simple message or call. Let's embark on this path together, towards a healthier, happier you. We look forward to hearing from you!
&ensp; &ensp;
     <p></p>   
      E-Mail: DoctorMalix@gmail.com
 </p>   
 <div className="grid__item grid__item--tablet-up-half grid__item--tablet-up-pull-half join-img">
      <img className="image join-img__back" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/affiliates/join-image2-small-446838050caf9a8bb8da6a75224726bedce310347e19eb6cdf2177fca08ed059.jpg 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/affiliates/join-image2-large-4b03f705553818cc0b3c08f75328b22324cdaabe6907e1a66587ebbf2dfcfb34.jpg?quality=50 2x" alt="" />
      <img className="image join-img__front" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/affiliates/join-image1-small-a5784d1e1a7ccca3a4908b71859fff0d2c201d9118094bc1b4bcb24454914ec1.jpg 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/affiliates/join-image1-large-373a94ccae71c3de5facdcfbec77ddd1e1aa2aed9c1c4d731c4a50522362a818.jpg?quality=50 2x" alt="" />
</div>
    </div>
  )
}

