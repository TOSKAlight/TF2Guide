// Получаем ссылки на элементы формы
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Получаем ссылки на элементы модального окна
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');

// Объект с расширенной информацией для досье
const classData = {
    'Разведчик': 'Имя: Джереми. Место рождения: Бостон, Массачусетс. Особые приметы: слишком много говорит, пьет радиоактивные энергетики. Скорость передвижения максимальна.',
    'Пулеметчик': 'Имя: Михаил. Место рождения: СССР. Особые приметы: тратит 400 000 долларов на стрельбу из пулемета за 12 секунд. Любит бутерброды.'
};

// Функция открытия модального окна (доступна глобально, потому что вызывается из onclick в HTML)
function showInfo(className) {
    modalTitle.textContent = `Досье: ${className}`;
    modalContent.textContent = classData[className] || 'Информация засекречена Администратором.';
    
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('active');
}

// Функция закрытия модального окна
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Закрытие окна при клике на темный фон
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Обработка формы (ТОЛЬКО ОДИН РАЗ!)
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nicknameInput = document.getElementById('nickname');
    const nicknameValue = nicknameInput.value;

    if (nicknameValue.trim() === '') {
        alert('Шпион обнаружен! Позывной не может быть пустым.');
        return;
    }

    formMessage.textContent = `Контракт подписан, ${nicknameValue}. Добро пожаловать на базу!`;
    formMessage.classList.remove('hidden');
    formMessage.classList.add('visible-message');

    contactForm.reset();
});