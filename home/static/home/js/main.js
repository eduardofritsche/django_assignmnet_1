// RESERVATION page
var res_btn = document.querySelector('#res_btn');
res_btn.addEventListener('click', function(){
    // data from reservation page form
    var first_name = document.querySelector('#firstName').value;
    var last_name = document.querySelector('#lastName').value;
    var check_in = new Date(document.querySelector('#check-in').value);
    var check_out = new Date(document.querySelector('#check-out').value);
    var rooms = document.querySelectorAll('input[name=room]');

    // find the radio input that is checked
    var room = 0
    rooms.forEach(function(item){
        if(item.checked) room = item;
    });

    // room value
    var value_raw_str = document.querySelector('#reservation_rooms #' + room.id + '_span').textContent;
    var room_value = parseInt(value_raw_str.substring(1));

    // days difference between check-in and check-out
    var days_difference = Math.abs(check_out - check_in);
    days_difference = parseInt(new Date(days_difference).getDate());

    // final cost
    var final_cost = room_value * days_difference

    // confirmation modal
    var modal_first_name = document.querySelector('#modal_first_name');
    var modal_last_name = document.querySelector('#modal_last_name');
    var modal_check_in = document.querySelector('#modal_check_in');
    var modal_check_out = document.querySelector('#modal_check_out');
    var modal_final_cost = document.querySelector('#modal_final_cost');
    modal_first_name.innerHTML = '<strong>First Name:</strong> ' + first_name;
    modal_last_name.innerHTML = '<strong>Last Name:</strong> ' + last_name;
    modal_check_in.innerHTML = '<strong>Check-in:</strong> ' + check_in;
    modal_check_out.innerHTML = '<strong>Check-out:</strong> ' + check_out;
    modal_final_cost.innerHTML = '<strong>Total Cost:</strong> $' + final_cost;
});


