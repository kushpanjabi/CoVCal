CREATE TABLE sites (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR (100) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);