import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel autoplay>
    <div>
    <Image
      src="/Sahayogi.png"
      width={80}
      height={80}
      alt="Picture of the author"
    />
    </div>
    <div>
    {/* <Image
      src="https://buysellgraphic.com/images/graphic_preview/large/ecommerce_website_banner_template_customers_sketch_flat_design_55246.jpg"
      width={1400}
      height={200}
      alt="Picture of the author"
    /> */}
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;