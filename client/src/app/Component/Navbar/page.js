import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <div>
     <div >
        <ul className="main">
            <li> <Link href='./login'><Image src="/Sahayogi.png" width={80} height={80} alt="Picture of the author" /></Link> </li>
            <li>Category</li>
            <li><input type='search' placeholder='Search....'/></li>
            <li>New Product</li>
            <li><Link href='./login'>login</Link></li>
            <li><Link href='./register'>register</Link></li>
        </ul>
     </div>
    </div>
  )
}

export default page
