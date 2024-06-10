class Trip:
    
    def __init__(self, clientName, start, duration, price):
        self.clientName = clientName;
        self.start = start;
        self.duration = duration;
        self.end = start + duration;
        self.price = price;
        
    def redefine_hours(self):
        if self.end > 24:
            self.end - 24
            
    def print_trip(self):
        print("Nom : " + self.clientName + 
              " / Départ : " + str(self.start) + 
              "h / Durée : " + str(self.duration) + 
              "h / Prix : " + str(self.price) + 
              "€ / Arrivée : " + str(self.end) + "h")
        

    
roger = Trip("Roger", 0,5,10);
pongo = Trip("Pongo",3,7,14);
perdita = Trip("Perdita",8,10,8);
anita = Trip("Anita",16,14,7);

# trips: list = [roger.print_trip(),
#             pongo.print_trip(),
#             perdita.print_trip(),
#             anita.print_trip()]

def find_compatibilities():
    trips: list = [roger, pongo, perdita, anita]
    for i in trips:
        i.redefine_hours()
        for j in trips:
            if i.end < j.start:
                print("Ok : " + i.clientName, j.clientName)
            elif i.end < j.start:
                print("pas ok : " + i.clientName, j.clientName)
            else:
                print("pas ok : " + i.clientName, j.clientName)
    return trips
        
print(find_compatibilities())