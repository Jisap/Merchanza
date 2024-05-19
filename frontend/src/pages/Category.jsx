import { VscSettings } from 'react-icons/vsc'
import all_products from '../assets/all_products.js'
import Item from '../components/Item'
import { Link } from 'react-router-dom'

const Category = ({ banner, category }) => {
  return (
    <section>
      <div>
        <div>
          <img src={banner} alt=""/>
        </div>
        <div>
          <h5>
          <span>
            Showing 1-12
          </span>
          out of 36 products
          </h5>
          <Link to={"/"}>
            <VscSettings />
          </Link>
        </div>
        {/* container */}
        <div>
          {all_products.map((item) => {
            if(category === item.category){
              return (
                <Item 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price} />
              )
            }
          })}    
        </div>
      </div>
    </section>
  )
}

export default Category