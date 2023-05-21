CREATE TABLE public.shops (
	id int NULL,
	name varchar NULL
);

CREATE TABLE public.employees (
	"name" varchar NULL,
	shop_id int NULL,
	"role" varchar NULL,
	startdate date NULL
);



-- populating db

-- shops
INSERT INTO shops (name) VALUES ('Konzum');
INSERT INTO shops (name) VALUES ('Elipso');
INSERT INTO shops (name) VALUES ('Dubravica');
INSERT INTO shops (name) VALUES ('Mango');

-- employees
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('John', 'manager', '2023-01-01', 1);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Emily', 'employee', '2023-02-01', 1);

INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Robert', 'manager', '2022-03-01', 2);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Samantha', 'employee', '2022-04-01', 2);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Michael', 'employee', '2022-05-01', 2);

INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Sarah', 'manager', '2021-06-01', 3);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('William', 'employee', '2021-07-01', 3);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Jessica', 'employee', '2021-08-01', 3);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Jacob', 'employee', '2021-09-01', 3);

INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Emma', 'manager', '2021-10-01', 4);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Joseph', 'employee', '2021-11-01', 4);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Sophia', 'employee', '2021-12-01', 4);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Ethan', 'employee', '2022-01-01', 4);
INSERT INTO employees (name, role, start_date, shop_id) VALUES ('Ava', 'employee', '2022-02-01', 4);
