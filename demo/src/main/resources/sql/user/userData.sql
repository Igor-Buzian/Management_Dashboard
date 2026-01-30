MERGE INTO users (name, email)
    KEY(email)
    VALUES
    ('John', 'john@test.com'),
    ('Alice', 'alice@test.com');
