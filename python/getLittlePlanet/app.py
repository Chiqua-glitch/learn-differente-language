planet_list= ['Mercure','Vénus','Terre','Mars','Jupiter','Saturne','Uranus','Neptune','Pluton']

diametre_planet_list =[1391, 4880, 12104, 12756, 6805, 142984, 120536, 51312, 49922]

distance_soleil_planet = ['58','108','150','227','778','457','870','500','900']

def find_little_planet (planet_list, diametre_planet_list):
    litttest_diametre = 0
    for i, planet_diametre in enumerate(diametre_planet_list):
        if planet_diametre > litttest_diametre:
            litttest_diametre = planet_diametre
            index_of_little_planet = i
    return planet_list[index_of_little_planet],  litttest_diametre, distance_soleil_planet[index_of_little_planet]

name, diametre, distance = find_little_planet(planet_list, diametre_planet_list)

print(f"The little planet is {name} of diametre {diametre} km with {distance} million km of the sun")

