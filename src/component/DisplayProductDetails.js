/** 
 * This component displays the details of Product 
 */
export default function DisplayProductDetails({product}){
  
    let {productId, productName, price}=product;
    return(
        <div>
            <ul className="list-group col-md-6">
                <li className="list-group-item">
                    ID: {productId}
                </li>
                <li className="list-group-item">
                    Product name: {productName}
                </li>
                <li className="list-group-item">
                    Price: {price}
                </li>
            </ul>
        </div>    
    );
}