let crntDay = moment().format('MMMM Do YYYY');
let crntDayEl = $('#currentDay');
let detailsEl = $('.details')

crntDayEl.text(crntDay);

detailsEl.addClass('bg-secondary');