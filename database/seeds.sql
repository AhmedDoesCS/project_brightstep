INSERT INTO users (first_name, last_name)
VALUES ('Test', 'User');

INSERT INTO activities (name, category)
VALUES ('Why Questions', 'Cognitive');

INSERT INTO skills (name, description)
VALUES ('Reasoning', 'Explaining cause and effect');

INSERT INTO prompts (skill_id, prompt_type, prompt_text, difficulty_level)
VALUES
(1, 'WHY', 'Why are you going there?', 'Beginner'),
(1, 'WHY', 'Why did you do that?', 'Beginner'),
(1, 'WHY', 'Why do you need that item?', 'Beginner');

