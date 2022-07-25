class Person() :
    def __init__(self, hair_color, eye_color, weight, height) :
        self.hair_color = hair_color
        self.eye_color = eye_color
        self.weight = weight
        self.height = height
    
    def getIMC(self) :
        return self.weight / (self.height * self.height)

moi = Person("noir", "noir", 65, 1.85)

moi.getIMC()

class Planet() :
    def __init__(self, diametre, distance_of_sun, name) :
        self.diametre = diametre
        self.distance_of_sun = distance_of_sun
        self.name = name
    
    def get_description(self) :
        print(f"Il s'agit de la planète {self.name} qui a un diamètre de {self.diametre} km et d'une distance au soleil de {self.distance_of_sun} million de km.")
        
Earth = Planet(12104, 150, 'Terre')
Mars = Planet(12756, 227, 'Mars')

Mars.get_description()

Mars.distance_of_sun = 228

Mars.get_description()