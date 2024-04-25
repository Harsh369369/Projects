
const addTaskBtn = document.getElementById('addTaskBtn');
        const popup = document.getElementById('popup');
        const prevMonthBtn = document.getElementById('prevMonthBtn');
        const nextMonthBtn = document.getElementById('nextMonthBtn');
        const submitTaskBtn = document.getElementById('submitTaskBtn');
        const currentMonthElement = document.getElementById('currentMonth');
        const daysContainer = document.getElementById('days');
        const scheduleContainer = document.getElementById('schedule');

        const currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();


        function updateCalendar(month, year) {
            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            currentMonthElement.textContent = new Date(year, month).toLocaleDateString('default', { month: 'long', year: 'numeric' });

            daysContainer.innerHTML = '';

            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.textContent = '';
                daysContainer.appendChild(emptyDay);
            }
            for (let i = 1; i <= daysInMonth; i++) {
                const day = document.createElement('div');
                day.textContent = i;
                day.classList.add('inline-block', 'bg-blue-500', 'text-white', 'px-3', 'py-2', 'rounded', 'mr-4');
                daysContainer.appendChild(day);
            }
        }

        function updateSchedule() {
            scheduleContainer.innerHTML = '';

            const currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();

            for (let i = 0; i < 24; i++) {
                const timeBox = document.createElement('div');
                timeBox.classList.add('bg-white', 'p-4');
                const time = document.createElement('div');
                time.classList.add('font-semibold', 'mb-2');
                time.textContent = (i < 10 ? '0' : '') + i + ':00 AM';
                timeBox.appendChild(time);
                scheduleContainer.appendChild(timeBox);
            }
        }

        updateCalendar(currentMonth, currentYear);
        updateSchedule();

        addTaskBtn.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        prevMonthBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            updateCalendar(currentMonth, currentYear);
        });

        nextMonthBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateCalendar(currentMonth, currentYear);
        });

        submitTaskBtn.addEventListener('click', () => {
            const taskInput = document.getElementById('taskInput').value;
            const timeInput = document.getElementById('timeInput').value;
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded');
            taskContainer.textContent = taskInput;
            document.querySelector('.grid').appendChild(taskContainer);
            popup.style.display = 'none';
        });

        

function showPage1() {
    document.getElementById("page1").classList.add("flex");
    document.getElementById("page1").classList.remove("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page2").classList.remove("flex");
}

function showPage2() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page1").classList.remove("flex");
    document.getElementById("page2").classList.add("flex");
    document.getElementById("page2").classList.remove("hidden");
}

function showLoginPage() {
    window.location.href = 'login.html';
}

function showSignupPage() {
    window.location.href = 'signIn.html';
}

function showPage3() {
    window.location.href = 'createGoals.html';
}

function showPage4() {
    window.location.href = 'tracker.html';
}

function showPage5() {
    window.location.href = 'schedule.html';
}

showPage1();