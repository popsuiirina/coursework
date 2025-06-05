document.addEventListener('DOMContentLoaded', function() {
  // Получаем все кнопки и панели
  const buttons = document.querySelectorAll('.tab-button');
  const panes = document.querySelectorAll('.tab-pane');

  // Добавляем обработчик для каждой кнопки
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Убираем активный класс у всех кнопок и панелей
      buttons.forEach(btn => btn.classList.remove('active'));
      panes.forEach(pane => pane.classList.remove('active'));

      // Добавляем активный класс нажатой кнопке
      this.classList.add('active');

      // Находим и показываем соответствующую панель
      const paneId = this.getAttribute('data-tab');
      document.getElementById(paneId).classList.add('active');
    });
  });

  // Карусель
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  if (track && slides.length > 0) {
    let currentSlide = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateCarousel();
    }

    // Обработчики событий
    nextButton?.addEventListener('click', nextSlide);
    prevButton?.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });

    // Автоматический переход на следующий слайд каждые 5 секунд
    setInterval(nextSlide, 5000);
  }
  const bookModal = document.getElementById('bookModal');
  // Обработчик для превью книг
  const bookPreviews = document.querySelectorAll('.book-preview');
  bookPreviews.forEach(preview => {
    preview.addEventListener('click', function() {
      const bookId = this.getAttribute('data-book');
      const bookData = booksData[bookId];
      
      if (bookData) {
        // Заполняем модальное окно данными
        document.querySelector('.modal-book-cover img').src = bookData.image;
        document.querySelector('.modal-book-cover img').alt = bookData.title;
        document.querySelector('.modal-book-title').textContent = bookData.title;
        document.querySelector('.modal-book-author').textContent = `Автор: ${bookData.author}`;
        document.querySelector('.modal-book-designer').textContent = `Художник: ${bookData.designer}`;
        document.querySelector('.modal-book-description').textContent = bookData.description;
        document.querySelector('.modal-book-price').textContent = `Цена: ${bookData.price}`;
        
        // Показываем модальное окно
        bookModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Функция закрытия модального окна книги
  function closeBookModal() {
    if (bookModal) {
      bookModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
// Закрытие модального окна книги при клике на крестик
const bookModalCloseButton = document.querySelector('#bookModal .close-modal');
if (bookModalCloseButton) {
  bookModalCloseButton.addEventListener('click', closeBookModal);
}

// Закрытие при клике вне контента
window.addEventListener('click', function(event) {
  if (event.target === bookModal) {
    closeBookModal();
  }
});

// Закрытие по клавише Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && bookModal.style.display === 'flex') {
    closeBookModal();
  }
});
  
  // Данные о книгах
  const booksData = {
    1: {
      title: "Военная лирика",
      author: "Константин Симонов",
      designer: "Дарья Николаева",
      description: "Сборник стихотворений, написанных в годы Великой Отечественной войны. В книгу вошли самые известные произведения автора, в том числе «Жди меня», «Ты помнишь, Алеша, дороги Смоленщины...» и другие.",
      price: "3000 ₽",
      image: "images/cover_book_1.png"
    },
    11: {
      title: "Стихотворения",
      author: "Иоганн Вольфганг фон Гёте",
      designer: "Стил Ламбрианиди",
      description: "Избранные стихотворения великого немецкого поэта в новых переводах. Издание включает как ранние произведения, так и поздние шедевры автора.",
      price: "3000 ₽",
      image: "images/cover_book_11.png"
    },
    2: {
      title: "Люди",
      author: "Автор неизвестен",
      designer: "Дарья Николаева",
      description: "Уникальное издание, исследующее природу человеческих отношений через призму современного искусства и философии.",
      price: "3000 ₽",
      image: "images/cover_book_2.png"
    },
    3: {
      title: "Холмы",
      author: "Иосиф Бродский",
      designer: "Мария Норкина",
      description: "Сборник избранных стихотворений, объединенных темой природы и человеческого восприятия пространства.",
      price: "3000 ₽",
      image: "images/cover_book_3.jpg"
    },
    4: {
      title: "Азбука механических насекомых",
      author: "",
      designer: "Беатриса Оленева",
      description: "Необычная азбука, где каждая буква представлена в виде фантастического механического насекомого.",
      price: "3000 ₽",
      image: "images/cover_book_4.png"
    },
    5: {
      title: "Азбука эмоций",
      author: "",
      designer: "Дарья Неёлова",
      description: "Иллюстрированное пособие, помогающее детям и взрослым лучше понимать свои эмоции через искусство и творчество.",
      price: "3000 ₽",
      image: "images/cover_book_5.png"
    },
    6: {
      title: "Здравомысленный заяц",
      author: "Михаил Салтыков-Щедрин",
      designer: "Беатриса Оленева",
      description: "Сказка-аллегория о природе власти и конформизма, проиллюстрированная в современном стиле. Издание дополнено комментариями литературоведов и историческими справками.",
      price: "3000 ₽",
      image: "images/cover_book_6.png"
    },
    7: {
      title: "Наедине с грибами",
      author: "",
      designer: "Беатриса Оленева",
      description: "Уникальный артбук, исследующий мир грибов через призму современного искусства. Каждая страница – это новый взгляд на привычные вещи.",
      price: "3000 ₽",
      image: "images/cover_book_7.png"
    },
    8: {
      title: "Ветви слив в цвету",
      author: "Автор неизвестен",
      designer: "Арина Карева",
      description: "Сборник классической японской поэзии, оформленный в традициях японской книжной графики с современным прочтением.",
      price: "3000 ₽",
      image: "images/cover_book_8.png"
    },
    9: {
      title: "Сеанс",
      author: "Евгений Алёхин, Константин Сперанский",
      designer: "Майя Мякотина",
      description: "Экспериментальное издание, соединяющее в себе поэзию и визуальное искусство. Каждый разворот – это отдельный сеанс погружения в мир образов и слов.",
      price: "3000 ₽",
      image: "images/cover_book_9.png"
    },
    10: {
      title: "Трус не играет в хоккей",
      author: "",
      designer: "Мария Попова",
      description: "Книга о спорте, мужестве и преодолении себя. Иллюстрации выполнены в динамичной манере, передающей напряжение спортивных моментов.",
      price: "3000 ₽",
      image: "images/cover_book_10.png"
    }
  };

  // Модальное окно
  const orderModal = document.getElementById('orderModal');
  const closeButtons = document.querySelectorAll('.close-modal');
  const buyButtons = document.querySelectorAll('button.buy-button'); 

  // Функция закрытия модальных окон
  function closeModals() {
    if (orderModal) {
      orderModal.style.display = 'none';
    }
    document.body.style.overflow = '';
  }

  // Функция открытия модального окна заказа
  function openOrderModal() {
    if (orderModal) {
      orderModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  // Обработчик для кнопок "Хочу купить!"
  buyButtons.forEach(button => {
    button.addEventListener('click', openOrderModal);
  });

  // Закрытие модальных окон при клике на крестик
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModals);
  });

  // Закрытие модальных окон при клике вне их области
  window.addEventListener('click', function(event) {
    if (event.target === orderModal) {
      closeModals();
    }
  });

  // Закрытие по клавише Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModals();
    }
  });

  // Инициализация аккордеона
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  if (accordionItems.length > 0) {
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const icon = header.querySelector('.accordion-icon');
      
      // Устанавливаем начальное состояние
      content.style.maxHeight = '0px';
      
      header.addEventListener('click', () => {
        // Закрываем все открытые аккордеоны
        accordionItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.accordion-content').style.maxHeight = '0px';
            otherItem.querySelector('.accordion-icon').textContent = '+';
          }
        });
        
        // Переключаем текущий аккордеон
        const isActive = item.classList.contains('active');
        item.classList.toggle('active');
        
        // Анимируем высоту контента и меняем иконку
        if (!isActive) {
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.textContent = '−';
        } else {
          content.style.maxHeight = '0px';
          icon.textContent = '+';
        }
      });
    });
  }

  // Плавная прокрутка к футеру
  const scrollToFooter = document.querySelector('.scroll-to-footer');
  if (scrollToFooter) {
    scrollToFooter.addEventListener('click', function(e) {
      e.preventDefault();
      const footer = document.querySelector('#footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Обработка отправки формы заказа
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время.');
      closeModals();
    });
  }
});
