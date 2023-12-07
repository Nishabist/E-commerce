import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, UseSelector } from 'react-redux';
import { Avatar, Divider, Tooltip ,Button, Popover, ConfigProvider} from 'antd';

function page() {
  const {userDetail} = useSelector(state=>state.user)
  const text = <span>{userDetail.email}</span>;
  const content = (
    <div>
      <p>Profile</p>
      <p>logout</p>
    </div>
  );
  return (
    <div>
     <div >
        <ul className="main">
            <li> <Link href='./login'><Image src="/Sahayogi.png" width={80} height={80} alt="Picture of the author" /></Link> </li>
            <li>Category</li>
            <li><input type='search' placeholder='Search....'/></li>
            {/* <li> <Search
      placeholder="Enter Your Traking Order"
      enterButton="Search"
      size="medium"
      suffix={suffix}
      onSearch={onSearch}
    /> */}
      {/* </li> */}
  
            <li>New Product</li>
            <li>
      
            <div
        style={{
          marginInlineStart: 80,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Popover placement="bottomLeft" title={text} content={content}>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </Popover>
        
      </div>
        </li>
            <li><Link href='./login'>login</Link></li>
            <li><Link href='./register'>register</Link></li>
        </ul>
     </div>
    </div>
  )
}

export default page
