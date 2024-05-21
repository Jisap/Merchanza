import React from 'react'
import { FaStar, FaHeart } from 'react-icons/fa'

const ProductDisplay = (props) => {

  const { product } = props;

  return (
    <section>
      {/* left side */}
      <div>
        <div>
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10'/>
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10' />
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10' />
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10' />
        </div>
        <div>
          <img src={product.image} alt="BigImg" className='rounded-xl bg-gray-10' />
        </div>
      </div>
      {/* right side */}
      <div>
        <h3>{product.name}</h3>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>(223)</p>
        </div>
        <div>
          <div>${product.new_price}.00</div>
          <div>${product.old_price}.00</div>
        </div>
        <div>
          {/* products colors and icons buttons*/}
          <div>
            <div>
              <h4>Select Color:</h4>
              <div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryYellow"></div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryBlue"></div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDisplay