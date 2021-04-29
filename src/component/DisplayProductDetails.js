export default function DisplayProductDetails({product}){
    
  //This component display the details of Product
  
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