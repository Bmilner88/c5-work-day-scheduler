// Current day at the top of the page
$('#currentDay').text(moment().format('MMMM Do YYYY'));

let info = [];

// Load info
function loadInfo() {
    info = JSON.parse(localStorage.getItem('info'));

    if(!info) {
        return false;
    };
    
    for (i = 0; i < info.length; i++) {
        $('.time-block').each(function() {
            if (info[i].key === $(this).attr('id')) {
                $(this).find('textarea').val(info[i].input);
            };
        });
    };
};

// Save info on click
$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    info = [];

    $('.time-block').each(function() {
        info.push({
            key: $(this).attr('id'),
            input: $(this).find('textarea').val()
        });
        localStorage.setItem('info', JSON.stringify(info));
    });
});

// Set box color according to the time
function boxColor() {
    let time = parseInt(moment().format('HH'));

    $('.time-block').each(function() {
        let hour = parseInt($(this).attr('id'));

        // Remove previous classes
        $(this).find('textarea').removeClass('past present future');

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
setInterval(boxColor(), 900000);

boxColor();
loadInfo();