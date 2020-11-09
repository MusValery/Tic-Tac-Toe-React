import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SHOP_DATA from '../../data/shop.data';
import CollectionItem from '../../components/collection-item/collection-item';
import './collection.styles.scss';
import { addItemToCart } from '../../redux/cart/cart.actions';

const Collection = () => {
    const { collection } = useParams();
    const currentCollection = SHOP_DATA.find(({ routeName }) => routeName === collection);

    const dispatch = useDispatch();

    if(!currentCollection) {
        return null;
    }

    const { title, items } = currentCollection;

    return (
    <section className="collection-preview">
        <h1 className="title">{ title }</h1>
       <div className="preview">
           {
               items.map((item) => 
               (<CollectionItem
                 key={item.id} 
                 {...item} 
                 handleClick={() => dispatch(addItemToCart(item))}
                 />
                ))
           }
       </div>
    </section>
    );
}

export default Collection;