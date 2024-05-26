import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { TbTrash } from 'react-icons/tb'



const CartItems = () => {

  const { all_products, cartItems, removeToCart } = useContext(ShopContext)

  return (
    <section className="max-padd-container bg-primary rounded-3xl">
      <div className="py-10">
        <table className="w-full mx-auto">
          <thead>
            <tr className="border border-tertiary/90 bg-tertiary/90 text-white regular-16 sm:regular-18 text-start py-12">
              <th className="p-1 py-2">Products</th>
              <th className="p-1 py-2">Title</th>
              <th className="p-1 py-2">Price</th>
              <th className="p-1 py-2">Quantity</th>
              <th className="p-1 py-2">Total</th>
              <th className="p-1 py-2">Remove</th>
            </tr>
          </thead>
          <tbody className="border border-slate-900/20">
            {all_products.map((e) => {
              if(cartItems[e.id] > 0){ // Si algún item del all_products tiene un valor > 0 se muestra
              console.log(e.id)
                return (
                  <tr key={e.id} className="border-b border-slate-900/20 text-gray-20 p-6 medium-14 text-center">
                    <td className="flex items-end justify-center">
                      <img 
                        src={e.image} 
                        alt="productImg" 
                        height={55} 
                        width={55} 
                        className="rounded-lg ring-1 ring-slate-900/5 m-3 p-1"
                      />
                    </td>
                    <td>
                      <div className="line-clamp-3">
                        {e.name}
                      </div>
                    </td>
                    <td>${e.new_price}</td>
                    <td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
                    <td>${e.new_price * cartItems[e.id]}</td>
                    <td>
                      <div className="bold-22 relative left-1/2">
                        <TbTrash onClick={() => { removeToCart(e.id)}}/>
                      </div>
                    </td>
                  </tr>
                )
                  return null
              }
            })}
          </tbody>
        </table>
        {/* cart details */}
        <div>
          <div>
            <h4>Summary</h4>
            <div>
              <div>
                <h4>Subtotal:</h4>
                <h4>${0}</h4>
              </div>
              <hr />
              <div>
                <h4>Shipping Fee:</h4>
                <h4>Free</h4>
              </div>
              <hr />
              <div>
                <h4>Total:</h4>
                <h4>${0}</h4>
              </div>
            </div>
            <button>Checkout</button>
          </div>
          <div>
            <h4>Your coupon code enter here</h4>
            <div>
              <input type="text" placeholder="Coupon code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartItems