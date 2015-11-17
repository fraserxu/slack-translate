# slack-translate
A simple node server use slash command to do translation

![translator](https://cloud.githubusercontent.com/assets/1183541/11204529/cdb77948-8d3a-11e5-91f3-96d6e444e3d7.png)

## Usage

1. Go to the Slash Command page `https://[YOUR_TEAM].slack.com/services/new/slash-commands` to add a slack command
2. Choose a Command `/translate`
3. Update the settings in Slack

In your slack channel, type `/translate [phrase]`

## Deploy to Heroku

1. Clone this repo `git clone git@github.com:fraserxu/slack-translate.git`
2. Add a Heroku remote: `heroku git:remote -a slack-translation`
3. Commit your code to Heroku `git push heroku master`

## License
MIT
