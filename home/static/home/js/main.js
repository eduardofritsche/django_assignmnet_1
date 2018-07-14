// RESERVATION page

// succes alert creation
function alert_success(){
    var alert = "<div class='alert alert-success alert-dismissible fade show' role='alert'>below <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
    var div_alert = document.getElementById('reservation_alert');
    div_alert.innerHTML = alert;
}
document.querySelector('.modal .btn-primary').addEventListener('click', alert_success);

// form submit
document.querySelector('#res_btn').addEventListener('click', function(e){
    // data from reservation page form
    var first_name = document.querySelector('#firstName').value;
    var last_name = document.querySelector('#lastName').value;
    var check_in = document.querySelector('#check-in').value;
    var check_out = document.querySelector('#check-out').value;
    var rooms = document.querySelectorAll('input[name=room]');

    // find which room radio is check
    var room = 0
    rooms.forEach(function(item){
        if(item.checked) room = item;
    });

    // modal just comes up if there is no empty field
    var modal_res = document.querySelector('div[aria-labelledby=modalReservation]');
    if(first_name && last_name && check_in && check_out && (room != 0)){
        modal_res.setAttribute("id", "modalReservation");
    }else{
        modal_res.setAttribute("id", " ");
    }

    // parsing string to Date
    check_in = new Date(check_in);
    check_out = new Date(check_out);

    // room value
    var raw_str_value = document.querySelector('#reservation_rooms #' + room.id + '_span').textContent;
    var room_value = parseInt(raw_str_value.substring(1));

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

    // stop form submit
    e.preventDefault();
});





