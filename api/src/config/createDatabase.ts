export const user = `CREATE TABLE IF NOT EXISTS lcqqpl5pd6dme6c8.users (
  email VARCHAR(100) NOT NULL,
  name VARCHAR(100) NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (email))`

export const rocket = `CREATE TABLE IF NOT EXISTS lcqqpl5pd6dme6c8.rockets (
  name VARCHAR(50) NOT NULL,
  speed FLOAT NULL,
  cost FLOAT NULL,
  image VARCHAR(100) NULL,
  capacity FLOAT NULL,
  PRIMARY KEY (name));`

export const sollar_systems = `CREATE TABLE IF NOT EXISTS lcqqpl5pd6dme6c8.sollar_systems (
  name VARCHAR(100) NOT NULL,
  location VARCHAR(50) NULL,
  direction VARCHAR(20) NULL,
  star VARCHAR(100) NULL,
  radius FLOAT NULL,
  PRIMARY KEY (name))`

export const planets = `CREATE TABLE IF NOT EXISTS lcqqpl5pd6dme6c8.planets (
  name VARCHAR(100) NOT NULL,
  size FLOAT NULL,
  mass FLOAT NULL,
  image VARCHAR(100) NULL,
  distance FLOAT NULL,
  sollar_systems VARCHAR(100) NOT NULL,
  PRIMARY KEY (name),
  CONSTRAINT fk_planets_sollar_systems1
    FOREIGN KEY (sollar_systems)
    REFERENCES lcqqpl5pd6dme6c8.sollar_systems (name)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
`

export const travel = `CREATE TABLE IF NOT EXISTS lcqqpl5pd6dme6c8.travel (
  id INT NOT NULL AUTO_INCREMENT,
  cost FLOAT NULL,
  distance FLOAT NULL,
  user_mail VARCHAR(100) NOT NULL,
  rockets_name VARCHAR(50) NOT NULL,
  start_planet VARCHAR(100) NOT NULL,
  destiny_planet VARCHAR(100) NOT NULL,
  date_start VARCHAR(100) NOT NULL,
  date_arrival VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_travel_users
    FOREIGN KEY (user_mail)
    REFERENCES lcqqpl5pd6dme6c8.users (email)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_travel_rockets1
    FOREIGN KEY (rockets_name)
    REFERENCES lcqqpl5pd6dme6c8.rockets (name)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_travel_planets1
    FOREIGN KEY (start_planet)
    REFERENCES lcqqpl5pd6dme6c8.planets (name)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_travel_planets2
    FOREIGN KEY (destiny_planet)
    REFERENCES lcqqpl5pd6dme6c8.planets (name)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)`