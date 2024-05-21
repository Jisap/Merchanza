import React from 'react'
import { FaStar, FaHeart } from 'react-icons/fa'

const ProductDisplay = (props) => {

  const { product } = props;

  return (
    <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
      
      {/* left side */}
      <div className="flex gap-x-2 xl:flex-1 py-5">
        <div className="flex flex-col gap-[7px] flex-wrap">
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10'/>
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10' />
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10' />
          <img src={product.image} alt="ProdcutImg" className='max-h-[84px] rounded-lg bg-gray-10' />
        </div>
        <div className="max-h-[355px] w-auto flex">
          <img src={product.image} alt="BigImg" className='rounded-xl bg-gray-10' />
        </div>
      </div>

      {/* right side */}
      <div className="flex-col flex xl:flex-[1.5] bg-white py-2 rounded-xl">
        <h3 className="h3">{product.name}</h3>
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
            <div>
              <h4>Select Size:</h4>
              <div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">S</div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">M</div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">L</div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">XL</div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mb-8 max-w-[555px]">
            <button className="btn-dark rounded-md">Add to cart</button>
            <button className="btn-secondary rounded-md !px-4"><FaHeart /></button>
          </div>
          <p><span>Category :</span> Women | Jacket | Winter</p>
          <p><span>Tags :</span> Modern | New Arrivals </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDisplay