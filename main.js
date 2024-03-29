document.addEventListener('DOMContentLoaded',()=>{

  let bookInventory = [];

  const addBookBtn = document.querySelector('#addBookBtn');
  const removeBookBtn = document.querySelector('#removeBookBtn');
  const updateBookBtn = document.querySelector('#updateBookBtn');
  const msgDiv = document.querySelector('#message');
  const bookListDiv = document.querySelector('#bookList');

  addBookBtn.addEventListener('click',()=>{
    const title = document.querySelector('#title').value ;
    const author = document.querySelector('#author').value;
    const price = document.querySelector('#price').value;
    const quantity = document.querySelector('#quantity').value;

    const newBook = {
      title : title,
      author : author,
      price : price,
      quantity : quantity
    };

    bookInventory.push(newBook);
    displayMessage(`Book ${title} has been added successfully`);
    displayBooks();
  });

  removeBookBtn.addEventListener('click',()=>{
    const titleToRemove = document.querySelector('#title').value;
    const removedBookIndex = bookInventory.findIndex(book=> book.title === titleToRemove);
    if (removedBookIndex !== -1){
      const removedBook = bookInventory.splice(removedBookIndex,1);
      displayMessage(`Book ${titleToRemove} has been removed from the inventory`);
      displayBooks();
    }else{
      displayMessage(`Book ${titleToRemove} not found in the inventory`);
    }
  });

  //Instructions for updating a book.
  //1. Enter the title of the book you want to update in the title field
  //2. Enter the updated information of other fields i.e author,price,quantity
  //3. Click on the update button
  //4. You'll receive a confirmation message if the book is successfully updated, or an error message if the book is not found in the inventory.
  updateBookBtn.addEventListener('click',()=>{
    const titleToUpdate = document.querySelector('#title').value;
    const authorToUpdate = document.querySelector('#author').value;
    const priceToUpdate = document.querySelector('#price').value;
    const quantityToUpdate = document.querySelector('#quantity').value;
    const updatedBookIndex = bookInventory.findIndex(book=>book.title === titleToUpdate);
    if (updatedBookIndex !== -1){
     bookInventory[updatedBookIndex].author= authorToUpdate,
     bookInventory[updatedBookIndex].price = priceToUpdate,
     bookInventory[updatedBookIndex].quantity = quantityToUpdate
      displayMessage(`Book ${titleToUpdate} has been updated`);
      displayBooks();
    }else{
      displayMessage(`Book ${titleToUpdate} not found in the inventory`)
    }
  });
  function displayMessage(msg){
    msgDiv.textContent = msg;
  }
  function displayBooks(){
    bookInventory.forEach(book=>{
      const bookInfo = document.createElement('div');
      bookInfo.textContent = `Title:${book.title},Author:${book.author},Price:${book.price},Quantity:${book.quantity}`;
      bookListDiv.appendChild(bookInfo);
    });
  }

  
});