a = [i for i in range(1)]

print(a)

b = []

for i in range(1) :
    b.append(i)

print(b)

c = []
d = 0

array1 = ["toto", "tata", 1, 90]
array2 = [90, "toto", 4, 8]
array3 = []

for i in array1 :
    for o in array2 :
        if i == o :
            array3.append(i)
print(array3)