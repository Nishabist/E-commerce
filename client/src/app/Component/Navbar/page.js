import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import { AudioOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip ,Button, Popover, ConfigProvider} from 'antd';
import { handleLogout } from '@/redux/reducerSlices/userSlice';
import styles from '../../../styles/navbarstyle.module.css'
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
function page() {
  const dispatch=useDispatch()
  const {userDetail,isLoggedIn} = useSelector(state=>state.user)
  const text = <span>{userDetail.email}</span>;
  const content = (
    <div>
      <p>Profile</p>
      <p onClick={()=>dispatch(handleLogout())}>logout</p>
    </div>
  );
  return (
    <div>
     <div >
        <ul className={styles.main}>
            <li> <Link href='./login'><Image src="/Sahayogi.png" width={80} height={80} alt="Picture of the author" /></Link> </li>
            <li>Category</li>
           <li>Brand</li>
           <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      width="100px"
      suffix={suffix}
      onSearch={onSearch}
    />
       
  
            <li>New Product</li>
            
      {isLoggedIn ?(<li> <div
        style={{
          marginInlineStart: 80,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Popover placement="bottomLeft" title={text} content={content}>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </Popover>
        
      </div> </li>):(
      <>
      <li><Link href='./login'>login</Link></li>
      <li><Link href='./register'>register</Link></li>
      </>
      )}
           
       
            
        </ul>
     </div>
    </div>
  )
}

export default page
