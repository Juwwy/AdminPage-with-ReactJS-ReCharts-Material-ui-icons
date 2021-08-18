import './newProduct.css'

function NewProduct() {
    return (
        <div className="newProduct">
            <h2 className="newProductTitle">New Product</h2>
            <form  className="newProductForm">
            <div className="addproductItem">
                <label>Image</label>
                <input type="file" id="file"/>
            </div>
            <div className="addproductItem">
                <label>Name</label>
                <input type="text" placeholder="Product Name"/>
            </div>
            <div className="addproductItem">
                <label>Sales</label>
                <input type="number" placeholder="123"/>
            </div>
            <div className="addproductItem">
                <label>Active</label>
                <select name="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
            </div>
                <button className="addNewProduct">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
