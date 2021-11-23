import React from 'react'

const ListItem = ({product}) => {
    return (
        <div>
            <h4>
                {product.body}
            </h4>
        </div>
    )
}

export default ListItem
