import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.styles.scss';
import Collection from '../../pages/collection/collection.component';

const CollectionPreview = ({ collection: {title, items } }) => {
    const dispatch = useDispatch();

    const handleClick = (item) => dispatch(addItemToCart(item));

    return (
        <div className="collection-preview">
        <h2 className="collection-preview__title">{ title }</h2>
        <div className="collection-preview__wrapper">
          {
            items.slice(0, 4).map((item) => (
              <CollectionItem key={item.id} {...item} handleClick={() => handleClick(item)} />
            ))
          }
        </div>
      </div>
  
    )
};

export default CollectionPreview;
