SELECT * FROM user_info
JOIN credentials ON credentials.user_id = user_info.user_id
WHERE email = $1;