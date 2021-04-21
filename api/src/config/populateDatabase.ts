export const populateUser = `INSERT INTO users (name, email, password)
VALUES 
("Denner Azevedo", "denner.azevedo@aluno.ufop.edu.br"), 
("João", "joao@teste.com"), 
("Maria", "maria@teste.com"),
("Raimundo", "raimundo@teste.com"),
("Aparecida", "aparecida@teste.com")`

export const populateRocket = `INSERT INTO rockets (name, speed, capacity, cost, image)
VALUES 
("CHEETAH", 0.798, 300, 222.54, "sem_link"),
("ORBIT", 0.054, 1200, 66.12, "sem_link"),
("ANTARES", 0.103, 900, 80.92, "sem_link"),
("FALCON", 0.355, 450, 96.27, "sem_link"),
("REDSTONE", 0.254, 555, 101.66, "sem_link")`

export const populateSollar_systems = `INSERT INTO sollar_systems (name, location, direction, star, radius)
VALUES 
("B22A", "596,32AL", "X=12,Y=278,Z=223", "ST0546", 150), 
("65A7", "152,62AL", "X=226,Y=2,Z=54", "AA0236", 120), 
("99H1", "51,12AL", "X=226,Y=2,Z=54", "DNR25", 57),
("53FA", "289DL", "X=13,Y=2,Z=21", "AU78P", 300),
("WW89", "89,12AN", "X=89,Y=89,Z=89", "DIR89", 89)`

export const populatePlanets = `INSERT INTO planets (name, size, mass, image, distance, sollar_systems)
VALUES 
("Earch", 12742, 5.972, "sem_link", 0.054, "B22A"),
("Mars", 6779, 3.389, "sem_link", 0.08, "B22A"),
("Júpter", 139820, 2.439, "sem_link", 2.13, "B22A"),
("H1265AS", 556, 106, "sem_link", 4, "65A7"),
("H66654S", 236, 51, "sem_link", 4, "65A7"),
("Psophia", 5239, 613, "sem_link", 29, "65A7"),
("Arctogalidia", 1669, 225,"sem_link", 73, "99H1"),
("Macropus", 3032, 3156, "sem_link", 2, "99H1"),
("Hyaena", 13005, 3594, "sem_link", 13, "53FA"),
("Boselaphus", 713, 2705, "sem_link", 68, "53FA"),
("Phylurus", 10, 55, "sem_link", 8, "WW89")
`