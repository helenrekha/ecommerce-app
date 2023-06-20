import ImageLoader from './ImageLoader';
import './ProductDisplay.scss';
export default function ProductDisplay({product})
{
return(
    <div>
        <ImageLoader product={product}/>
    </div>
)
}