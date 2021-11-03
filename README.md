# TwitchDiscordConnector
 # A very simple app to get chat messages of users in your discord server.
![image](https://user-images.githubusercontent.com/16251746/140000183-933b3304-26e7-448e-81f1-f4042803ad2f.png)

# Setup
Right click a channel on discord and click edit channel

![image](https://user-images.githubusercontent.com/16251746/140009789-4f5eee01-bc2d-4d26-88ab-208ed3edd931.png)

Select integrations

Select view webhooks

Select copy webhook url 

![image](https://user-images.githubusercontent.com/16251746/140009837-39a9a0ca-489b-4b1c-897a-4d784d64a467.png)

Copy paste your webhook into the json

Channels are the channels that the application will monitor for messages, users are the users that the application will look for

![Untitled](https://user-images.githubusercontent.com/16251746/140009961-dee72442-68e0-42a1-93ee-9a8b71316e5f.png)


![image](https://user-images.githubusercontent.com/16251746/140010065-ed2b7b6f-14a1-4fdc-af40-a4fb17ff905e.png)

You can use regex by adding a "custom" key that is an array of regular expressions.
A catch all regex is shown above.

Install packages with npm install
Rename config.example.json to config.json
Edit config.json to suit your needs
run with  npm run start
