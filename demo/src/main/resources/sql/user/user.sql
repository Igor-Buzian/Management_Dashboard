CREATE TABLE IF NOT EXISTS users (
                                     id BIGINT AUTO_INCREMENT PRIMARY KEY,

                                     name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,

    city VARCHAR(100),
    profession VARCHAR(100),

    age INT,
    experience_years INT,

    status VARCHAR(20) DEFAULT 'ACTIVE',

    avatar_url TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
