document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('table-form');
    const tableContainer = document.getElementById('table-container');
    const saveSettingsButton = document.getElementById('save-settings');
    const loadSettingsButton = document.getElementById('load-settings');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const weekType = document.getElementById('week-type').value;
        const maxLessons = document.getElementById('max-lessons').value;
        const language = document.getElementById('language').value;

        const days = weekType === '5' ? ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'] :
            ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const translations = {
            ru: days,
            en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        };

        const table = document.createElement('table');
        table.classList.add('schedule-table');

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
    });

    saveSettingsButton.addEventListener('click', () => {
        const weekType = document.getElementById('week-type').value;
        const maxLessons = document.getElementById('max-lessons').value;
        const language = document.getElementById('language').value;

        localStorage.setItem('tableSettings', JSON.stringify({ weekType, maxLessons, language }));
        alert('Настройки сохранены!');
    });

    loadSettingsButton.addEventListener('click', () => {
        const savedSettings = localStorage.getItem('tableSettings');
        if (savedSettings) {
            const { weekType, maxLessons, language } = JSON.parse(savedSettings);
            document.getElementById('week-type').value = weekType;
            document.getElementById('max-lessons').value = maxLessons;
            document.getElementById('language').value = language;
            alert('Настройки загружены!');
        } else {
            alert('Сохранённые настройки не найдены.');
        }
    });
});
