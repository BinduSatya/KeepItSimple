# Tasks

- To Shorten URL's
- To Redirect
- Custom URL (if necessary)
- Analytics of the Link
- User Signup

## How it works

### When user want to shorten the link

- Client asks the Frontend to shorten the URl
- Url is sent to Backend
- Backend generates the shorten URL with the required logics
- Then the backend stores the shortlink and original link in the DB
- DB contains id, Short URL, Long URL, no.of.clicks, user generated, expiry time

### When the short URL is clicked/called

- When the short link is clicked redirected to Backend
- Database checks the shortURL and sends the longURL to Backend
- Backend gets redirected to Original Long URL

## TanStack Query

- Used for data retreival, or updation in database to the frontend
- Tanstack Query has a mehtod called **useQuery** which needs a key and function.

  - [Key] is used to cache the retrieved data from the backend, for a certain period of time, so that whenever user asks the same data again, the unneccesary network calls can be prohibited and app runs more smoothly.
  - [Function] is used to get the data from the backend by using fetch/axios (here we are using axios).
  - Along with the required data, it also provides various extra functionalities like **_isLoading, isPending, error_** which can be used to make the frontend for the client more interactive.

- Tanstack Query has another method called **Mutation** which is used to change the data from the backend
  - Mutate changes the required existing data from the backend via api calls and it invalidates the particular related key in the cache memory.
  - By invalidating the key, when user tries to get that data, since it is not cached in the memory, the necessary api call will be held and the updated data from the backend will be fetched.

# Front-End

# Back-End
