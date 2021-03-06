import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './shop.style.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /* Used as starting data for ShopPage */
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} /> 
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;