import React from 'react'
import { Link } from 'react-router-dom'
const ProductPage = () => {
    return (
        <div className="border bg-success text-light rounded w-75 m-auto" style={{height: "300px"}}>
            <div>
                <button className="m-10">
                    <Link to='/'>Back Home</Link>
                </button>
            </div>
            <div>
                this is the product detail page
            </div>
        </div>
    )
}

export default ProductPage
