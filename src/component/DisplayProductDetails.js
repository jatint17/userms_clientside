export default function DisplayProductDetails({product}){
    let {productId, productName, price}=product;
    return(
        <div>
            id: {productId}
            <br/>
            product name: {productName}
            <br/>
            price: {price}
        </div>    
    );
}