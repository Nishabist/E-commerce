import React from 'react'
import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';

function page(props)  {
  
  return (
    <div>
     
       <Card 
    hoverable
    style={{ width: 240 , display:Flex,gap:5}}
    cover={<img alt="example" src="" />}
  >
    <Meta  title={props.item.productName} description={props.item.Description} />
  </Card>
    </div>
  )
}

export default page
