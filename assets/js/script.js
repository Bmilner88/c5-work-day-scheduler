// Current day at the top of the page
$('#currentDay').text(moment().format('MMMM Do YYYY'));

// Load info
function loadInfo() {
    $('#9').find('textarea').val(localStorage.getItem('9'));
    $('#10').find('textarea').val(localStorage.getItem('10'));
    $('#11').find('textarea').val(localStorage.getItem('11'));
    $('#12').find('textarea').val(localStorage.getItem('12'));
    $('#13').find('textarea').val(localStorage.getItem('1'));
    $('#14').find('textarea').val(localStorage.getItem('2'));
    $('#15').find('textarea').val(localStorage.getItem('3'));
    $('#16').find('textarea').val(localStorage.getItem('4'));
    $('#17').find('textarea').val(localStorage.getItem('5'));
};

// Save info on click
$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    localStorage.setItem('9', $('#9').find('textarea').val());
    localStorage.setItem('10', $('#10').find('textarea').val());
    localStorage.setItem('11', $('#11').find('textarea').val());
    localStorage.setItem('12', $('#12').find('textarea').val());
    localStorage.setItem('1', $('#13').find('textarea').val());
    localStorage.setItem('2', $('#14').find('textarea').val());
    localStorage.setItem('3', $('#15').find('textarea').val());
    localStorage.setItem('4', $('#16').find('textarea').val());
    localStorage.setItem('5', $('#17').find('textarea').val());
});

// Set box color according to the time
function boxColor() {
    let time = parseInt(moment().format('HH'));

    $('.time-block').each(function() {
        let hour = parseInt($(this).attr('id'));

        if (hour < time) {
            $(this).find('textarea').addClass('past');
        }
        else if (hour === time) {
            $(this).find('textarea').addClass('present');
        }
        else {
            $(this).find('textarea').addClass('future');
        };
    });
};

// Checks the box color every 15 mins
setInterval(function() {
    boxColor();
}, 900000);

boxColor();
loadInfo();