# instawork-take-home

## How to Deploy

1. **Install Docker**  
   Follow the official [Docker installation guide](https://docs.docker.com/get-docker/) for your operating system.

2. **Set Bash Environment Variable**  
   Open your terminal and set the environment variable `$GITHUB_ROOT` to point to the directory where this repository resides:
   ```bash
   export GITHUB_ROOT=/path/to/your/repository
   ```

3. **Navigate to Project Root**  
   Change to the project directory:
   ```bash
   cd $GITHUB_ROOT/instawork-take-home
   ```

4. **Copy Environment Variables**  
   Navigate to the Docker compose directory and copy the `.env.local` file to `.env`:
   ```bash
   cd infrastructure/docker/compose
   cp .env.local .env
   # Set the environment variables as needed
   # The env variables contain PostgreSQL DB credentials and Django secret key
   # Obtain the Django secret key from [Djecrety](https://djecrety.ir)
   ```

5. **Navigate to Scripts Directory**  
   Change to the scripts directory:
   ```bash
   cd $GITHUB_ROOT/instawork-take-home/infrastructure/scripts
   ```

6. **Give Execute Permissions**  
   Give execute permissions to the deploy file:
   ```bash
   chmod +x deploy-local.sh
   ```

7. **Run and Deploy**  
   Execute the deploy script:
   ```bash
   ./deploy-local.sh
   ```

8. **Access the Website**  
   Once the services are up and running, you can access the website at [http://localhost:5173](http://localhost:5173).
