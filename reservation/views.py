from django.shortcuts import render

from rooms.utilities.samples import rooms
from rooms.utilities.find import findRoomById

def index(request):
    context = {
        'rooms': rooms
    }
    return render(request, 'reservation/index.html', context)

def confirmation(request):
    room = findRoomById(rooms, request.POST['room'])
    # room.date = request.POST['check_in']
    # room.date = request.POST.get('check-in')
    fname = request.POST.get('fname')
    context = {
        'room': room,
        'fname': fname,
    }
    return render(request, 'reservation/confirmation.html', context)