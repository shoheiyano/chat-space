
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|

### Association
- has_many :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|text|string| |
|image|string| |
|group_name|string|null: false, foreign_key: true|

### Association
- has_many :user