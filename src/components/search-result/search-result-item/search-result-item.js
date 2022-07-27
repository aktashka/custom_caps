import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ capsSearchItem, id, allFilteredCaps }) => {
    const newLink = `/prod-info/${capsSearchItem.id}`

    return (
        <div className='catalog-product' id={id}>
            <div className='product-img-container'>
                <Link to={newLink}><div className='caps-product-img'><img src={capsSearchItem.capsimage.photo} /></div></Link>
            </div>
            <div className='caps-product-content'>
                <div className='product-desc'>
                    <h3>{capsSearchItem.brand.name}</h3>
                    <p>{capsSearchItem.name}</p>
                </div>
                <div className='product-desc-price'>{capsSearchItem.price}с</div>
            </div>
        </div >
    )
}

export default SearchResultItem;