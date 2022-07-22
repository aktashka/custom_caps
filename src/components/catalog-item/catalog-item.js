import React from "react";
import './catalog-item.css'

const CatalogItem = ({ cap }) => {
    const { brand, name, price, capsimage, id } = cap
    const newLink = `/prod-info/${cap.id}`
    return (
        <div className='catalog-product'>
            <div className='product-img-container'>
                <a href={newLink}><img src={capsimage.photo} className='caps-product-img' alt='prod-img'/></a>
            </div>
            <div className='caps-product-content'>
                <div className='product-desc'>
                    <h3>{brand.name}</h3>
                    <p>{name}</p>
                </div>
                <div className='product-desc-price'>{price}c</div>
            </div>
        </div> 
    );
};

export default CatalogItem;
