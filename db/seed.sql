users table

-- create table users
-- (
-- user_id serial primary key,
-- username varchar(80),
-- email varchar(80)
-- )

------------------------------------

products table

-- create table products

-- (product_id serial primary key, product text, price decimal, description varchar(80), image_url text)



------------------------------------

adding users

-- insert into users
-- (username, email)
-- values('John', 'John@gmail.com')

add products

-- insert into products
-- (product, price, description, image_url)
-- values
-- ('Monitor', 200.00, '32 inch ultrawide monitor from Samsung', 'https://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/5998cdd3be42d6f75f9a99ed/5b817fd44fa51af3faf2ea8c/1535406751162/24-009-847-16.jpg?format=750w')
-------------
-- insert into products
-- (product, price, description, image_url)
-- values
-- ('Motherboard', 130.00 , 'ASRock Z370 Extreme4 LGA 1151 (300 Series) Intel Z370 HDMI SATA 6Gb/s USB 3.1 ATX Intel Motherboard', 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/13-157-789-V01.jpg')




-----------------------------------

carts table

-- create table carts (
-- cart_id serial primary key, 
-- product_id integer REFERENCES products (product_id), 
-- user_id integer REFERENCES users (user_id)
-- )


-----------------------------------
get_user_cart

-- SELECT *
-- FROM users u 
-- JOIN carts c ON u.user_id = c.user_id
-- JOIN products p ON p.product_id = c.product_id
-- WHERE u.user_id = $1;