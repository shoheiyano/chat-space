## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|

### Association
- has_many :groups, though: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|text|string| |
|image|string| |
|name|string|null: false, foreign_key: true|

### Association
- has_many :users, though: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|string|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group