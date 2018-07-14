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
    return render(request, 'reservation/confirmation.html')