document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('table-form');
    const tableContainer = document.getElementById('table-container');

    function generateTable({ weekType, maxLessons, language }) {
        const days = weekType === '5' ? ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'] :
            ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const translations = {
            ru: days,
            en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        };

        const table = document.createElement('table');
        table.classList.add('schedule-table');

        // Генерация заголовков
        const headerRow = document.createElement('tr');
        const timeHeader = document.createElement('th');
        timeHeader.textContent = language === 'ru' ? 'Время' : 'Time';
        headerRow.appendChild(timeHeader);

        translations[language].slice(0, days.length).forEach(day => {
            const dayHeader = document.createElement('th');
            dayHeader.textContent = day;
            headerRow.appendChild(dayHeader);
        });

        table.appendChild(headerRow);

        for (let i = 1; i <= maxLessons; i++) {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.textContent = `${i}:00`;
            row.appendChild(timeCell);

            for (let j = 0; j < days.length; j++) {
                const cell = document.createElement('td');
                cell.textContent = '';
                row.appendChild(cell);
            }

            table.appendChild(row);
        }

        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);

        localStorage.setItem('tableSettings', JSON.stringify({ weekType, maxLessons, language }));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const weekType = e.target.weekType.value;
        const maxLessons = e.target.maxLessons.value;
        const language = e.target.language.value;

        generateTable({ weekType, maxLessons, language });
    });

    const savedSettings = localStorage.getItem('tableSettings');
    if (savedSettings) {
        const { weekType, maxLessons, language } = JSON.parse(savedSettings);

        generateTable({ weekType, maxLessons, language });
    }
});
