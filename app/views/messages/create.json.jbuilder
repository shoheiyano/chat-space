json.(@message, :content, :image)
json.created_at @message.created_at.to_s(:default)
json.user_name @message.user.name
json.image @message.image.url
json.id @message.id