import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../ProductCard/ProductCard.css';

function ProductCardSkeleton() {
    return (
        <section className="productCard">
            <div className="productImage"><Skeleton height="250px" width="100%" baseColor="#f2f2f2"/></div>
            <div className="productContent">
                <div className="productHeader">
                    <Skeleton width={100} height={20} />
                    <Skeleton width={60} height={20} baseColor="#f2f2f2" />
                </div>
                <div className="productTitle"><Skeleton width={`100%`} height={40}/></div>
                
                <div className="productFooter">
                    <Skeleton retangle height="100%" width={60} baseColor="#dcb9ff"/>
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