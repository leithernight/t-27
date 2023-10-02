//1
let score = 0;

document.querySelector('.b1').onclick = () => {
    document.querySelector('.answer1').innerHTML = '';
    score = 0;
    if (document.querySelector('#q1_2').checked) {
        score += 2;
    }
    if (document.querySelector('#q2_1').checked) {
        score += 2;
    }
    if (document.querySelector('#q3_3').checked) {
        score += 2;
    }

    document.querySelector('.answer1').innerHTML = 'Ваш результат: ' + score;
}

//2
let nextDate = '';

document.querySelector('.b2').onclick = () => {
    document.querySelector('.answer').innerHTML = '';
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = +document.querySelector('#dat1').value;
    let month = +document.querySelector('#dat2').value;
    let year = +document.querySelector('#dat3').value;
    if (month > 0 && month < 13 && day > 0 && year > 0 && day < 32) {
        if (year % 4 === 0 && month === 2) {
            if (day < days[month-1] + 1) {
                day++;
            }
            else {
                day = 1;
                if (month === 12) {
                    month = 1;
                    year++;
                }
                else {
                    month++;
                }
            }
        }
        else {
            if (day < days[month - 1]) {
                day++;
            }
            else {
                day = 1;
                if (month === 12) {
                    month = 1;
                    year++;
                }
                else {
                    month++;
                }
            }
        }
    }
    document.querySelector('.answer').innerHTML = day + '/' + month + '/' + year;
}