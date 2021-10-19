let productList= [];

function showAllProduct(){
    let content= ""
    for (let i=0; i< productList.length; i++){
        content+= '<tr>\n' +
            '        <td>' + productList[i]+ '</td>\n' +
            '        <td><button style="background-color: green; color: white" type="button" id="edit" onclick="editProduct('+i+')">Edit</button></td>\n' +
            '        <td><button style="background-color: green; color: white" type="button" id="delete" onclick="deleteProduct('+i+')">Delete</button></td>\n' +
            '    </tr>'
    }
    document.getElementById("products").innerHTML= content
    document.getElementById("sumOfProduct").innerHTML= productList.length + " products"
}
showAllProduct();


function addProduct(){
    let newProduct= document.getElementById("new_product_box").value;
    productList.push(newProduct)
    showAllProduct()
    document.getElementById("new_product_box").value= ""
}


function deleteProduct(index){
    productList.splice(index,1)
    showAllProduct()
}


function editProduct(index){
    let newProduct= prompt("Enter product: ", productList[index])
    productList[index]= newProduct
    showAllProduct()
}


