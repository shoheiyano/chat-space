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
- has_many :groups, though: :group_users
- has_many :groups_users
- has_many :messages
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has_many :users, though: :groups_users
- has_many :groups_users
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string| |
|image|string| |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group