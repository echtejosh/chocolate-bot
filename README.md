## Installation
Make sure you have the required dependencies needed to run this bot. See [here](https://discordjs.guide/preparations/) for more information.

Clone the repo on your system:

    git clone https://github.com/echtejosh/management-bot

Then, navigate to the directory and install the NPM packages:

    npm install


## Credentials

Navigate to `.env.example` and replace the placeholders, after that rename the file to `.env`.

## Usage
To start the project:

    npm start


## Docker

### Credentials
Navigate to `docker-compose.yml` and set variable values inside of environment.

### Build
Before you run, make sure you build the container first:

    docker-compose build

To start the project:

    docker-compose up


### Additional Notes

- For windows, make sure that you use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) when using `docker-compose build`. 
- Make sure you install [FFmpeg](https://ffmpeg.org/) on your system before continuing.
- Mongoose requires Atlas. See [here](https://www.mongodb.com/docs/manual/reference/connection-string/) for more information.
