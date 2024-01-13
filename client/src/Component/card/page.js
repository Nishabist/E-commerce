import React from 'react'
import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import Link from 'next/link';
import styles from '../../styles/page.module.css'
function page(props)  {
  
  return (
    <div>
     <Link href={`/products/${props.item._id}`}>
       <Card className={styles.card}
    hoverable 
    style={{ width: 240 , display:Flex,gap:5}}
    cover={<img style={{width:'240px',height:'300px',overflow:'hidden',}} alt="example" src={`http://localhost:4000/products-image?productId=${props.item._id}` }/>}
  >
    <Meta   title={props.item.productName} description={props.item.Description}/>
    {props?.item?.createdAt ? diffTime : null}
  </Card>
  </Link>
  
    </div>
  )
}

export default page
