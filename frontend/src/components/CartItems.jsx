import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { TbTrash } from 'react-icons/tb'



const CartItems = () => {

  const { all_products, cartItems, removeToCart } = useContext(ShopContext)

  return (
    <section>
      <div>
        <table>
          <thead>
            <tr>
              <th className="p-1 py-2">Products</th>
              <th className="p-1 py-2">Title</th>
              <th className="p-1 py-2">Price</th>
              <th className="p-1 py-2">Quantity</th>
              <th className="p-1 py-2">Total</th>
              <th className="p-1 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if(cartItems[e.id] > 0){ // Si algún item del all_products tiene un valor > 0 se muestra
              console.log(e.id)
                return (
                  <tr key={e.id}>
                    <td>
                      <img src={e.image} alt="productImg" height={55} width={55} />
                    </td>
                    <td>
                      <div>
                        {e.name}
                      </div>
                    </td>
                    <td>${e.new_price}</td>
                    <td>{cartItems[e.id]}</td>
                    <td>${e.new_price * cartItems[e.id]}</td>
                    <td>
                      <div>
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
      </div>
    </section>
  )
}

export default CartItems