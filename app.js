function addProduct(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);
    injectTRToDOM(newTR);
    clearForm();

}
function collectDataFromForm() {
    const name = document.getElementById('nameProduct').value;
    const price = document.getElementById('priceProduct').value;
    const category = document.getElementById('categoryProduct').value;
    const pic = document.getElementById('picURL').value;
    return {
        name,
        price,
        category,
        pic
    }
}
function generateTR(data) {
    const newTR = `
    <tr>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td>${data.category}</td>
        <td><img width="100px" src="${data.pic}"></td>
        <td> <button onclick="deleteRow(this)">✘</button> </td>
        
    </tr>
    `
    return newTR;
}
function injectTRToDOM(newTR) {
    document.getElementById("product-list").innerHTML += newTR
}
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
function clearForm() {
    document.getElementById('productForm').reset()
}