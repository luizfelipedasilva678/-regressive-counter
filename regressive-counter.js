var timeLeft, finalDate, milliseconds, day, seconds, minutes, now, hours, days;
day = 19;

finalDate = new Date();
finalDate.setDate(day);
finalDate.setHours(12);
finalDate.setMinutes(0);
finalDate.setSeconds(0);
milliseconds = Date.parse(finalDate);

var timer = setInterval(function() {
	now = new Date();

	dateDiff = milliseconds - Date.parse(Date());
	timeLeft = new Date(dateDiff);

	seconds = Math.floor((timeLeft / 1000) % 60);
	minutes = Math.floor((timeLeft / 1000 / 60) % 60);
	hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
	days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

	if(days < 0 && minutes < 0 && hours < 0 && seconds < 0) {
		var newDay = day >= 1 && day <= 31 ? day + 3 : day=1;

		finalDate = new Date();
		finalDate.setDate(newDay);
		finalDate.setHours(12);
		finalDate.setMinutes(0);
		finalDate.setSeconds(0);
		milliseconds = Date.parse(finalDate);
	}

	if(days >= 0 && minutes >= 0 && hours >= 0 && seconds >= 0) {
		$('.timer .count-timer .days').text(addLeftZero(days));
		$('.timer .count-timer .hours').text(addLeftZero(hours));
		$('.timer .count-timer .minutes').text(addLeftZero(minutes));
		$('.timer .count-timer .seconds').text(addLeftZero(seconds));
	}
}, 1000)

function addLeftZero(number) {
	return number < 10 ? '0' + number : number;
}
