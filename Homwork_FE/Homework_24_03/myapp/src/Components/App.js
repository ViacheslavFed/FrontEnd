import ProductItem from "../ProductItem/ProductItem"
import {useState} from 'react'
import style from './App.module.css'

function App() {

  const data = [ 
      {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
      {id: 2, name: 'Самокат', price: 700, count: 1}, 
      {id: 3, name: 'Ролики', price: 1300, count: 2}, 
      {id: 4, name: 'Сноуборд', price: 19000, count: 4}
      ]
      
      let [products, setProducts] = useState(data)

      const addProduct = () => {
          let newProduct = {
              id: Date.now(), 
              name: prompt('название товара'),     
              price: prompt('цена'),
              count: prompt('количество')
          }   
          setProducts([newProduct, ...products])
      }


      const pluse = (id)=> {
          const newArray = products.map(elem =>{
            if(elem.id == id){
              elem.count++
            }
            return elem
          })
          setProducts(newArray)
      }


      const minuse = (id)=> {
        const newArray = products.map(elem =>{
          if(elem.id == id){
            elem.count--
          }
          return elem
        })
        setProducts(newArray)
    }


    const deletProduct = (id,event) => {
      event.preventDefault()
      const newArray = products.filter(elem => elem.id != id)
      setProducts(newArray)
    }


return (
  <div >
      <div className = {style.addButton}>
      <button onClick={addProduct}>Добавить товар</button></div>
  <div className={style.div_app_style}> {
    products.map(el => <ProductItem key={el.id} {...el} pluse = {pluse} minuse = {minuse} deletProduct = {deletProduct} />)
  }</div>
  </div>
)
}

export default App