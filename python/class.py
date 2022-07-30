class Person :
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

class Animal :
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

class Felin :
    nombre_de_patte = 4
    carnivore = True
    
    def __init__(self, color, food, friends) :
        self.__color = color
        self.__food = food
        self.friends = friends
        
    def get_color(self) :
        return self.__color
    
    def set_color(self, new_color) :
        self.__color = new_color
    
    def get_food(self) :
        return self.__food
    
    def set_food(self, new_food) :
        self.__food = new_food

class Lynx(Felin) :
    def __init__(self, race, name, color, food, friends) :
        super().__init__(color, food, friends)
        self.__race = race
        self.name = name
    
    def get_race(self) :
        return self.__race
    
timothe_le_linx = Lynx("Lynx", "Timothé", "bleu", "viande", "pumba")

print(timothe_le_linx.get_food())

class Guepard(Felin) :
    def __init__(self, race, name, color, food, friends) :
        super().__init__(color, food, friends)
        self.__race = race
        self.name = name
        
    def get_race(self) : 
        return self.__race

Theo_le_guepard = Guepard("Guepard", "Theo", "noir", "viande", "pumba")

print(Theo_le_guepard.get_race())
