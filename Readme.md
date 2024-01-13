## Used Technologies

- `Backend`: Symfony 6
- `Frontend`: Vue.js
- `Environment`: Docker

## Local setup

```sh
# For building the containers and migrating the database
make init
```

```sh
# For Running the console command to fetch the fruits data from third-party.
make api.sync-fruits

# Or you can run this manually using the below command:
docker exec -it docker exec -it NUTRITIONS_PHP php bin/console app:fruits-fetch
```

> Now the project should be up and running on http://localhost:8080
> NOTE: You can check the mail (mailhog) on http://localhost:8082
