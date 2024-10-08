

// Selecting the hamburger menu and navbar elements
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Event listener for hamburger menu toggle
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const books = [
      { title: 'Book 1', image: './images/book1.jpg', pdf: 'book1.pdf' },
      { title: 'Book 2', image: './images/book2.jpg', pdf: 'book2.pdf' },
      { title: 'Book 3', image: './images/book3.jpg', pdf: 'book2.pdf' },
      { title: 'Book 4', image: './images/book4.jpg', pdf: 'book2.pdf' },
      { title: 'Book 5', image: './images/book5.jpg', pdf: 'book2.pdf' },
      { title: 'Book 6', image: './images/book6.jpg', pdf: 'book2.pdf' },
      { title: 'Book 7', image: './images/book7.jpg', pdf: 'book2.pdf' },
      { title: 'Book 8', image: './images/book8.jpg', pdf: 'book2.pdf' },
      { title: 'Book 9', image: 'book2.jpg', pdf: 'book2.pdf' },
      { title: 'Book 10', image: 'book2.jpg', pdf: 'book2.pdf' },
      { title: 'Book 11', image: 'book2.jpg', pdf: 'book2.pdf' },
      { title: 'Book 12', image: 'book2.jpg', pdf: 'book2.pdf' },
      // Add more books here...
    ];
  
    const bookGrid = document.getElementById('bookGrid');
    const searchInput = document.getElementById('bookSearch');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    
    let currentBookCount = 10;
  
    // Function to generate book cards
    const generateBooks = (count) => {
      bookGrid.innerHTML = ''; // Clear previous content
      books.slice(0, count).forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card', 'scroll-animate');
        card.setAttribute('data-title', book.title);
  
        card.innerHTML = `
          <div class="book-image">
            <img src="${book.image}" alt="${book.title}">
          </div>
          <button class="download-btn" onclick="window.location.href='${book.pdf}'"><span class="button-content">Download PDF </span></button>
        `;
        bookGrid.appendChild(card);
      });
  
      AOS.init(); // Reinitialize AOS after adding elements
    };
  
    // Show initial books
    generateBooks(currentBookCount);
  
    // Event listener for See More button
    seeMoreBtn.addEventListener('click', () => {
      currentBookCount += 5;
      generateBooks(currentBookCount);
  
      if (currentBookCount >= books.length) {
        seeMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
      }
    });
  
    // Event listener for Show Less button
    showLessBtn.addEventListener('click', () => {
      currentBookCount = 10;
      generateBooks(currentBookCount);
  
      seeMoreBtn.style.display = 'block';
      showLessBtn.style.display = 'none';
    });
  
    // Search functionality
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
      bookGrid.innerHTML = ''; // Clear current grid
      filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute('data-title', book.title);
  
        card.innerHTML = `
          <div class="book-image">
            <img src="${book.image}" alt="${book.title}">
          </div>
          <button class="download-btn" onclick="window.location.href='${book.pdf}'">Download PDF</button>
        `;
        bookGrid.appendChild(card);
      });
  
      AOS.init(); // Reinitialize AOS after adding elements
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const books2 = [
      { title: 'New Book 1', image: './images/book1.jpg', pdf: 'book1.pdf' },
      { title: 'New Book 2', image: './images/book2.jpg', pdf: 'book2.pdf' },
      { title: 'New Book 3', image: './images/book3.jpg', pdf: 'book3.pdf' },
      { title: 'New Book 4', image: './images/book4.jpg', pdf: 'book4.pdf' },
      { title: 'New Book 5', image: './images/book5.jpg', pdf: 'book5.pdf' },
      { title: 'New Book 6', image: './images/book6.jpg', pdf: 'book6.pdf' },
      { title: 'New Book 7', image: './images/book7.jpg', pdf: 'book7.pdf' },
      { title: 'New Book 8', image: './images/book8.jpg', pdf: 'book8.pdf' },
      { title: 'New Book 9', image: 'book9.jpg', pdf: 'book9.pdf' },
      { title: 'New Book 10', image: 'book10.jpg', pdf: 'book10.pdf' },
      { title: 'New Book 11', image: 'book11.jpg', pdf: 'book11.pdf' },
      { title: 'New Book 12', image: 'book12.jpg', pdf: 'book12.pdf' },
      // Add more books here...
    ];
  
    const bookGrid2 = document.getElementById('bookGrid2');
    const searchInput2 = document.getElementById('bookSearch2');
    const seeMoreBtn2 = document.getElementById('seeMoreBtn2');
    const showLessBtn2 = document.getElementById('showLessBtn2');
    
    let currentBookCount2 = 10;
  
    // Function to generate book cards for the second section
    const generateBooks2 = (count) => {
      bookGrid2.innerHTML = ''; // Clear previous content
      books2.slice(0, count).forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute('data-title', book.title);
  
        card.innerHTML = `
          <div class="book-image">
            <img src="${book.image}" alt="${book.title}">
          </div>
          <button class="download-btn" onclick="window.location.href='${book.pdf}'"><span class="button-content">Download PDF </span></button>
        `;
        bookGrid2.appendChild(card);
      });
  
      AOS.init(); // Reinitialize AOS after adding elements
    };
  
    // Show initial books for the second section
    generateBooks2(currentBookCount2);
  
    // Event listener for See More button in the second section
    seeMoreBtn2.addEventListener('click', () => {
      currentBookCount2 += 5;
      generateBooks2(currentBookCount2);
  
      if (currentBookCount2 >= books2.length) {
        seeMoreBtn2.style.display = 'none';
        showLessBtn2.style.display = 'block';
      }
    });
  
    // Event listener for Show Less button in the second section
    showLessBtn2.addEventListener('click', () => {
      currentBookCount2 = 10;
      generateBooks2(currentBookCount2);
  
      seeMoreBtn2.style.display = 'block';
      showLessBtn2.style.display = 'none';
    });
  
    // Search functionality for the second section
    searchInput2.addEventListener('input', function () {
      const searchTerm2 = searchInput2.value.toLowerCase().trim();
      const filteredBooks2 = books2.filter(book => book.title.toLowerCase().includes(searchTerm2));
      bookGrid2.innerHTML = ''; // Clear current grid
      filteredBooks2.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute('data-title', book.title);
  
        card.innerHTML = `
          <div class="book-image">
            <img src="${book.image}" alt="${book.title}">
          </div>
          <button class="download-btn" onclick="window.location.href='${book.pdf}'">Download PDF</button>
        `;
        bookGrid2.appendChild(card);
      });
  
      AOS.init(); // Reinitialize AOS after adding elements
    });
  });


  

  

 