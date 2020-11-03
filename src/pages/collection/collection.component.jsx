import React from 'react';
import { useParams } from 'react-router-dom';
import SHOP_DATA from '../../data/shop.data';
import CollectionItem from '../../components/collection-item/collection-item';
import './collection.styles.scss';

const Collection = () => {
    const { collection } = useParams();
    const currentCollection = SHOP_DATA.find(({ routeName }) => routeName === collection);
    if(!currentCollection) {
        return null;
    }

    const { title, items } = currentCollection;

    return (
    <section className="collection-preview">
        <h1 className="title">{ title }</h1>
       <div className="preview">
           {
               items.map((item) => <CollectionItem key={item.id} {...item} />)
           }
       </div>
    </section>
    );
}

export default Collection;