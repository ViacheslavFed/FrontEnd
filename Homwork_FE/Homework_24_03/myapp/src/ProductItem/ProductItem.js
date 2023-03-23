import style from './ProductItem.module.css'

function ProductItem(props){

    
    const {id,name, price, count, pluse, minuse, deletProduct} = props


    
    return(
        <div className={style.div_container} onDoubleClick={(event)=>deletProduct(id,event)}>
            <p>{name}</p>
            <p>Price:{price}</p>
            <div className={style.count_button}>
        <button onClick={() => pluse(id)}>+</button>
        <p>{count}</p>
        <button onClick={() => minuse(id)}>-</button>
      </div>
        </div>
    )
}


export default ProductItem