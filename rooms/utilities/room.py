class Room:
    id = 0

    def __init__(self, name, value, description):
        self.room_id = type(self).id
        type(self).id += 1
        self.name = name
        self.value = value
        self.description = description

    def __str__(self):
        return self.name
