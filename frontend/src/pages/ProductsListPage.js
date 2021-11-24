import React from 'react'
import products from '../assets/data'
import ListItem from '../components/ListItem'
import { Link } from 'react-router-dom'
const ProductsListPage = () => {
    return (
        <div className="border bg-success text-light rounded w-75 m-auto" >
            {products.map((product) => (
                <div className="p-2">
                    <div >
                        <Link to='product' className="btn btn-light link">
                            <ListItem product={product} />
                        </Link>
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default ProductsListPage
