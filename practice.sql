--chal1
SELECT
    DATE_FORMAT(MIN(created_at),'%b %D %Y' ) AS earliest_date
FROM users;

--chal2
SELECT email, created_at
FROM users
WHERE created_at = (SELECT MIN(created_at) FROM users);

--chal3
SELECT MONTHNAME(created_at) AS month, COUNT(*) AS count
FROM users
GROUP BY month;

--chal4
SELECT COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com';

--chal5
SELECT
    CASE
        WHEN email LIKE '%@gmail.com' THEN 'gmail'
        WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;
    