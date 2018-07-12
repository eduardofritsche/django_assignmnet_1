from django.shortcuts import render

from .utilities.find import findRoomById
from .utilities.room import Room
from .utilities.samples import rooms

def index(request):
    context = {
        'rooms': rooms
    }
    return render(request, 'rooms/index.html', context)

def detail(request, room_id):
    room = findRoomById(rooms, room_id)
    context = {
        'room': room,
    }
    return render(request, 'rooms/detail.html', context)