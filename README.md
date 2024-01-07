# blog-hub

### How to run this project?
***
1. First and foremost, install `docker` and `Docker Desktop` to your machine.

2. Secondly, set the environment variables for the server side. For this, create a file called as `.env` in the root of `server` folder (do not create this file under the `src` folder). The .env pattern can be found in `.env-example.txt` file.

3. Then, you need to do the following commands: 
    * ```
      cd server
      yarn
      ```

    * ```
      cd web
      yarn
      ```

4. Make sure that the PORT is setted 3000 in the .env file since the docker uses that port.
    * If you had an error with this step, like `PORT is in use`, then you can change the PORT numbers in the docker-compose.yml file based on your necessary.

5. Then, write the command `docker compose up --build` in the root directory of the project.

6. After this step is completed, the only thing that you've to type is `docker compose up -d`. You'll able to see the 3 different docker containers on your docker desktop app.

7. To kill the containers, you'll need to type `docker compose down`.