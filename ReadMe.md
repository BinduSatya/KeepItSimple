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

# Front-End



# Back-End