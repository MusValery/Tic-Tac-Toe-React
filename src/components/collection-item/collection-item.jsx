import React from 'react';
import './collection-item.styles.scss'
import './custom-buttom.styles.scss'

const CollectionItem = ({imageUrl, name, price}) => (
    <div className="collection-item">
        <img className="image" src={imageUrl} alt={name}/>
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>
        <button type="button" className="custom-button">ADD TO CART</button>
    </div>
);

export default CollectionItem;