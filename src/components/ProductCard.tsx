import { useParams } from "react-router-dom"

const ProductCard = () => {
  const {id} = useParams()

    return (
    <div>
        <p>text {id}</p>
    </div>
  )
}

export default ProductCard