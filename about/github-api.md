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

#### GitHub API v3

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

##### Endpoints
Endpoints are the full URL required to retrieve a specific .json file within an endpoint category in the GitHub API.

**Endpoints for fetching:**
1) User profile data: `https://api.github.com/users/USERNAME`
2) User organizations: `https://api.github.com/users/USERNAME/orgs`
3) Repos created by user: `https://api.github.com/users/USERNAME/repos?type=owner`
4) Filtered list of repositories - `tbd`
5) Sorted list of repositories: `https://api.github.com/users/USERNAME/repos?sort=PARAMETER`
6) List of user public activity: `https://api.github.com/users/USERNAME/events/public`

**Public activity requests:**
1) The default number of results for a public activity requests is 30 items
2) To retrieve more results in one request, the custom page size can be increased to 100 using the `?per_page` parameter:

`https://api.github.com/user/repos?per_page=100`

For more results, the user must submit additional requests for a different page of results using the `?page` parameter

3) What is the basic structure of the results?

    * A multidimensional array of object literals

4) What fields are included in each result?

    * id, type, actor, repo, payload, public, created at

5) What are the data types for each field?

    * Booleans, numbers, strings, and object literals

6) What are some of the different values for the `type` field?

    * DeleteEvent, PushEvent, PullRequestEvent, IssueCommentEvent, CreateEvent, IssuesEvent

Using the Github API to:
  * Get all the comments for a particular issue?

    `https://api.github.com/repos/:owner/issues/:issue/comments`

  * Add a comment to an issue?

    `POST https://api.github.com/repos/:owner/:repo/issues/:number/comments`

Using the jQuery API to:
  * Get the HTML contents of an element?

    `.html()` Examples:
    ```
    <div class="foo">
      <div class="bar"><span>&#8853;</span><p>This is a foobar demonstration</p>
    </div> <!--.foo-->

    <script>
    $(.foo).html();
    // yields <div class="bar"><span>&#8853;</span><p>This is a foobar demonstration</p>
    </script>
    ```

  * Create a _new_ HTML element?

    `.clone()`
    `.html()`

  * Add an HTML element to the page?

    `.html()`
    `.append()`
    `.prepend()`

Using the Lodash API to:
  * Replace placeholders with values from an object?

    `_.assign()`

  * Repeat code for every item of an array?

    `.forEach()`
