MERGE INTO users (email, name, city, profession, age, experience_years, status, avatar_url)
    KEY (email)
    VALUES
    ('john@test.com', 'John Smith', 'New York', 'Developer', 29, 5, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=John'),
    ('alice@test.com', 'Alice Brown', 'London', 'Designer', 26, 3, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Alice'),
    ('mike@test.com', 'Mike Wilson', 'Berlin', 'DevOps', 34, 8, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mike'),
    ('emma@test.com', 'Emma Davis', 'Paris', 'QA Engineer', 28, 4, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Emma'),
    ('oliver@test.com', 'Oliver White', 'London', 'Developer', 31, 6, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver'),
    ('lucas@test.com', 'Lucas Green', 'New York', 'Manager', 38, 12, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Lucas'),
    ('mia@test.com', 'Mia Hall', 'Berlin', 'Designer', 24, 2, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mia'),
    ('noah@test.com', 'Noah King', 'Madrid', 'Developer', 27, 4, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Noah'),
    ('ava@test.com', 'Ava Scott', 'Rome', 'Product Owner', 35, 10, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ava'),
    ('liam@test.com', 'Liam Turner', 'Dublin', 'Developer', 30, 5, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Liam'),
    ('sophia@test.com', 'Sophia Moore', 'Paris', 'QA Engineer', 29, 5, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sophia'),
    ('ethan@test.com', 'Ethan Young', 'Berlin', 'Developer', 33, 7, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ethan'),
    ('isabella@test.com', 'Isabella Lee', 'New York', 'HR', 41, 15, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Isabella'),
    ('james@test.com', 'James Walker', 'London', 'DevOps', 36, 9, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=James'),
    ('amelia@test.com', 'Amelia Harris', 'Amsterdam', 'Designer', 25, 3, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Amelia'),
    ('ben@test.com', 'Ben Martin', 'Prague', 'Developer', 28, 4, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ben'),
    ('charlotte@test.com', 'Charlotte Clark', 'Vienna', 'Manager', 39, 13, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Charlotte'),
    ('daniel@test.com', 'Daniel Lewis', 'Warsaw', 'Developer', 32, 6, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Daniel'),
    ('ella@test.com', 'Ella Robinson', 'Stockholm', 'QA Engineer', 27, 4, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ella'),
    ('jack@test.com', 'Jack Thompson', 'Helsinki', 'Developer', 35, 8, 'ACTIVE', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jack');
