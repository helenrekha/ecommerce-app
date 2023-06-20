import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function CartPage()
{
    const{items}=useContext(CartContext);
    return(
        <div>
            {console.log(items)}
            {
                items.map(item=>{
                    return(
                        <div>
                            {item.value.title}
                        </div>
                    )
                })
            }
        </div>
    )
}