import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../ProductCard/ProductCard.css';
import Loading from '../Loading/Loading'

function ProductCardSkeleton() {
    return (
        <section className="productCard">
            {/* <div className="productImage"><Skeleton height="250px" width="100%" baseColor="#f2f2f2"/></div> */}
            <div className="productImage"><Loading/></div>
            <div className="productContent">
                <div className="productHeader">
                    <Skeleton width={100} height={20} />
                    <Skeleton width={60} height={20} baseColor="#f2f2f2" />
                </div>
                <div className="productTitle"><Skeleton width={`100%`} height={60}/></div>
                
                <div className="productFooter">
                    <Skeleton retangle height={55} width={60} baseColor="#dcb9ff" highlightColor="#e0cef2"/>
                    <div className="productPrices">
                        <Skeleton width={90} height={20} />
                        <Skeleton width={140} height={30} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCardSkeleton;
