class Person() :
    def __init__(self, hair_color, eye_color, weight, height) :
        self.hair_color = hair_color
        self.eye_color = eye_color
        self.weight = weight
        self.height = height
    
    def getIMC(self) :
        return self.weight / (self.height * self.height)
    
#Crée une variable qui sera égal à la class pour pouvoir le lui donnée les valeurs définit dans le init
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

class Animal() :
    def __init__(self, sexe, race, color) :
        self.sexe = sexe
        self.__race = race
        self.color = color
        
    #getter permet de récupérer le race
        
    def get_race(self) :
        return self.__race
    
    #setter permet de donnée une nouvelle valeur sur le race
    
    def set_race1(self, new_race) :
        self.__race = new_race
    
    def set_race2(self, new_race) :
        self.__race = new_race

lion = Animal("mal", "lion", "white")

lion.set_race1("Lion de la savanne")

print(lion.get_race())

lion.set_race2("Lion de la jungle")

print(lion.get_race())