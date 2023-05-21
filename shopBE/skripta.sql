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
INSERT INTO shops (name, id) VALUES ('Konzum', 'abc1');
INSERT INTO shops (name, id) VALUES ('Elipso', 'abc2');
INSERT INTO shops (name, id) VALUES ('Dubravica', 'abc3');
INSERT INTO shops (name, id) VALUES ('Mango', 'ab4');

-- employees
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('John', 'manager', '2023-01-01', 'abc1');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Emily', 'employee', '2023-02-01', 'abc1');

INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Robert', 'manager', '2022-03-01', 'abc2');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Samantha', 'employee', '2022-04-01', 'abc2');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Michael', 'employee', '2022-05-01', 'abc2');

INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Sarah', 'manager', '2021-06-01', 'abc3');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('William', 'employee', '2021-07-01', 'abc3');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Jessica', 'employee', '2021-08-01', 'abc3');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Jacob', 'employee', '2021-09-01', 'abc3');

INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Emma', 'manager', '2021-10-01', 'abc4');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Joseph', 'employee', '2021-11-01', 'abc4');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Sophia', 'employee', '2021-12-01', 'abc4');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Ethan', 'employee', '2022-01-01', 'abc4');
INSERT INTO employees (name, role, startdate, shop_id) VALUES ('Ava', 'employee', '2022-02-01', 'abc4');
