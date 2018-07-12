
def findRoomById(rooms, room_id):
    room_id = int(room_id)
    for room in rooms:
        if room.room_id == room_id:
            return room
        else:
            pass