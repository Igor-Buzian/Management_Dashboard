MERGE INTO users (email, name, city, profession, age, experience_years, status, avatar_url)
    KEY (email)
    VALUES
    ('john@test.com', 'John Smith', 'New York', 'Developer', 29, 5, 'ACTIVE', 'https://i.pravatar.cc/150?img=1'),
    ('alice@test.com', 'Alice Brown', 'London', 'Designer', 26, 3, 'ACTIVE', 'https://i.pravatar.cc/150?img=2'),
    ('mike@test.com', 'Mike Wilson', 'Berlin', 'DevOps', 34, 8, 'ACTIVE', 'https://i.pravatar.cc/150?img=3'),
    ('emma@test.com', 'Emma Davis', 'Paris', 'QA Engineer', 28, 4, 'ACTIVE', 'https://i.pravatar.cc/150?img=4'),
    ('oliver@test.com', 'Oliver White', 'London', 'Developer', 31, 6, 'ACTIVE', 'https://i.pravatar.cc/150?img=5'),
    ('lucas@test.com', 'Lucas Green', 'New York', 'Manager', 38, 12, 'ACTIVE', 'https://i.pravatar.cc/150?img=6'),
    ('mia@test.com', 'Mia Hall', 'Berlin', 'Designer', 24, 2, 'ACTIVE', 'https://i.pravatar.cc/150?img=7'),
    ('noah@test.com', 'Noah King', 'Madrid', 'Developer', 27, 4, 'ACTIVE', 'https://i.pravatar.cc/150?img=8'),
    ('ava@test.com', 'Ava Scott', 'Rome', 'Product Owner', 35, 10, 'ACTIVE', 'https://i.pravatar.cc/150?img=9'),
    ('liam@test.com', 'Liam Turner', 'Dublin', 'Developer', 30, 5, 'ACTIVE', 'https://i.pravatar.cc/150?img=10'),
    ('sophia@test.com', 'Sophia Moore', 'Paris', 'QA Engineer', 29, 5, 'ACTIVE', 'https://i.pravatar.cc/150?img=11'),
    ('ethan@test.com', 'Ethan Young', 'Berlin', 'Developer', 33, 7, 'ACTIVE', 'https://i.pravatar.cc/150?img=12'),
    ('isabella@test.com', 'Isabella Lee', 'New York', 'HR', 41, 15, 'ACTIVE', 'https://i.pravatar.cc/150?img=13'),
    ('james@test.com', 'James Walker', 'London', 'DevOps', 36, 9, 'ACTIVE', 'https://i.pravatar.cc/150?img=14'),
    ('amelia@test.com', 'Amelia Harris', 'Amsterdam', 'Designer', 25, 3, 'ACTIVE', 'https://i.pravatar.cc/150?img=15'),
    ('ben@test.com', 'Ben Martin', 'Prague', 'Developer', 28, 4, 'ACTIVE', 'https://i.pravatar.cc/150?img=16'),
    ('charlotte@test.com', 'Charlotte Clark', 'Vienna', 'Manager', 39, 13, 'ACTIVE', 'https://i.pravatar.cc/150?img=17'),
    ('daniel@test.com', 'Daniel Lewis', 'Warsaw', 'Developer', 32, 6, 'ACTIVE', 'https://i.pravatar.cc/150?img=18'),
    ('ella@test.com', 'Ella Robinson', 'Stockholm', 'QA Engineer', 27, 4, 'ACTIVE', 'https://i.pravatar.cc/150?img=19'),
    ('jack@test.com', 'Jack Thompson', 'Helsinki', 'Developer', 35, 8, 'ACTIVE', 'https://i.pravatar.cc/150?img=20');
