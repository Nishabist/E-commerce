'use client'
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/footer.module.css'

function page() {
  return (
    <div>
     <div className={styles.main}>
     
        <div>
            <p>
        <Image
  src="/Sahayogi.png"
  width={80}
  height={80}
  alt="Picture of the author"
/> </p>
<p>This is nice place ti do shopping</p>
<p>Contact with us through different social media account</p>
        </div>

        <div>
            <h4>Explore</h4>
            <ul>
                <li>Resources</li>
                <li>Blog</li>
                <li>Docs</li>
                <li>Pricing</li>
                <li>Discount</li>
            </ul>
            </div>

        <div>
           <h4>product</h4> 
           <ul>
            <li>Product description </li>
            <li>Data Governance</li>
            <li>Virtual Event</li>
            <li>Connect</li>
           </ul>
        </div>

        <div>
            <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Partners</li>
                <li>Customer</li>
                <li>Careers</li>
            </ul>
        
     </div>
    
    </div>
    </div>
  )
}

export default page




