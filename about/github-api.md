## APIs

### What is an API?
An **[API](http://en.wikipedia.org/wiki/Application_programming_interface)** (Application Programming Interface) is a set of routines, protocols and tools for building software applications. It expresses a software component in terms of its operations, inputs, outputs and underlying types. Generally presented in a library format, an API can make it easier to develop GUI components.

#### Authentication - What is it?
Authentication is a process that began in order to secure sensitive traffic from a client to a server and back, via encryption, etc. In its most basic form, it can be as simple as a username and password, otherwise known as HTTP Basic Authentication.
  * Additional methods of authentication include:
    * Form Based Authentication
      * Relies on SSL
      * Still in use today)
    * Digest Authentication
      * 1-way hash
      * Never gained widespread popularity because of design contraints)
    * OAuth 1.0, 2.0
      * Preferred method today
      * Developed as an idea between Twitter API and Ma.gnolia to allow Ma.gnolia users access to twitter without those users needing to give Ma.gnolia their twitter passwords
      * Result is like a valet key for an API; a token giving a single client or website access to an API on behalf of one user (_credential dance_ process takes place to exchange secret token between API and client/website)

#### Github API v3

##### Authentication
3 ways to authenticate through Github API:
    * Basic authorization
    * OAuth2 token (sent in header)
    * OAuth2 token (sent as parameter)

  * Authentication required to view select data such as private repositories
  * If user is logged in, he or she is the default authenticated user (SSH key?)

##### Requests
1) To request specific user profile information from the API:
  * `GET /users/:username` or (`curl -i https://api.github.com/users/USERNAME`)
2) To request repository information from a specific user:
  * `GET /users/:username/repos` or (`curl -i https://api.github.com/users/USERNAME/repos`)
3) How to retrieve recent public activity for a specific user:
  * `GET /users/:username/events/public` or (`curl -1 https://api.github.com/users/USERNAME/events/public`) _research this further_

##### Rate Limit
1) Is there a limit to the number of requests that can be made to the API?
  * Unauthenticated requests = 60/hour (tracked by IP address)
  * Authenticated requests (via Basic or OAuth) = 5,000/hour
2) Is there a way to increase the limit?
  * For unauthenticated requests, the limit can be increased by passing the app's client id and secret as part of the query string (`https://api.github.com/users/USERNAME?client-id=xxxx&client_secret=yyyy`)
3) What happens if the rate limit is exceeded?
  * Error response is displayed - 403 forbidden; RateLimit-remaining = 0

##### Data Return
1) If a large amount of data is returned, what happens?
  * Paginated to 30 items by default
  * Specify further information with the '?page' parameter
  * Specify less information by restricting items returned per page with the '?per-page' parameter
  * View infromation on data available in the pagination info within the 'Link Header'
