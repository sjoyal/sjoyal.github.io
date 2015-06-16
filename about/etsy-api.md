## Etsy API

#### How do I make API requests?
  * What is the base URL?

    `https://openapi.etsy.com/v2`

  * Are there any headers or query parameters required?

    API key is required for every request and is passed using the api_key parameter; additional parameters may be passed to query details beyond the base URL

  * What kind of response should I expect?

    * `200` level indicates successful response
    * `400` level indicates an error response (bad request, forbidden, not found)
    * `500` level indicates an internal error with the error with Etsy API

#### How does the API handle authentication?

  * Do I need to authenticate?

    Authentication is required, which is obtained during app registration. An Oauth token is required for write access or for accessing private data.

  * What can I do with an unauthenticated request?

    HTTP response code is 301 on curl attempt? Did not return intended result; public key needed at least

  * How can I authenticate my request?

    Obtain a key during app registration or pursue an OAuth token

#### How do I ask the API for:
  * A list of products belonging to a specific category or collection?

    The `category` parameter

  * Details about a specific product? What details are provided?

    The `listing` parameter; the `state`, `user_id`, `category_id`, `description` fields within the listing result

  * The main and additional images for a product?

    The `ListingImage` parameter

#### Is there a limit to the number of requests I can make?

  * Is there a way of extending that limit?

    With a public `api_key`, 10_000 requests can be made per 24-hour period; 10 per second
    Requests made with private authentication (OAuth) are subject to the same limits

  * What happens when I hit the limit?

    403 forbidden, also could indicate request is for private data

#### What if there is a lot of data returned?
  * How can I ask for more (or less) data from a request?

    `limit` and `offset` parameters can be passed with the request to return more than the default of 25 records per page; max per page is 100.

  * How do I know that there is more data available?

    Responses include a `count` field which specifies the total number of records available through pagination; max value is 50_000
