from django.shortcuts import render
from datetime import datetime

from rooms.utilities.samples import rooms
from rooms.utilities.find import findRoomById

def index(request):
    context = {
        'rooms': rooms,
    }
    return render(request, 'reservation/index.html', context)

def confirmation(request):
    # variables definition
    # room = findRoomById(rooms, request.POST['room'])
    # room.first_name = request.POST.get('first-name')
    # room.last_name = request.POST.get('last-name')
    # room.check_in = datetime.strptime(request.POST.get('check-in'), '%Y-%m-%d')
    # room.check_out = datetime.strptime(request.POST.get('check-out'), '%Y-%m-%d')

    # context = {
    #     'room': room,
    # }
    return render(request, 'reservation/confirmation.html')