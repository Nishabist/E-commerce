import React from 'react'
import { Card, Flex,Carousel } from 'antd';
import Meta from 'antd/es/card/Meta';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function page(props)  {
  
  return (
    <div>
      <Carousel  autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
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
