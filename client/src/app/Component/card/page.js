import React from 'react'
import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import Link from 'next/link';
function page(props)  {
  
  return (
    <div>
     <Link href={`/products/${props.item._id}`}>
       <Card 
    hoverable
    style={{ width: 240 , display:Flex,gap:5}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta  title={props.item.productName} description={props.item.Description} />
    {props?.item?.createdAt ? diffTime : null}
  </Card>
  </Link>
  
    </div>
  )
}

export default page
