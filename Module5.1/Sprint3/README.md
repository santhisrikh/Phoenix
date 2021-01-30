### Zomato - Pagination

-  Use `React Redux Hooks and Material UI`


- Use the Zomato API

- register for it on `https://developers.zomato.com/api`

- read the documentation `https://developers.zomato.com/documentation`

- use the `/search` endpoint

- `https://developers.zomato.com/api/v2.1/search`

- use the API key to pass the `user-key` as a header when making Axios request, try in postman as well

- Create an application which will do the following things

  - User should be able to search based on the given query.

  - On submit get the relevant restaurant details

  - Display the details in the form of cards `https://material-ui.com/components/cards/#complex-interaction`  with the information obtained from the response.

  - Implement Pagination using material UI  refer to this link `https://material-ui.com/components/pagination/#controlled-pagination`

  - Use `start` and `count` parameters from the Zomato API to implement pagination. (keep count = 10 for now if you want you can take a dropdown with different count per page 5,10, or 20 onChange display the results)

  - For example on clicking page number 1  display first 10 results of a query q = pizza

  - So `start` should be 0 and  `count`  should be 10  similarly for page 2 the start = (page number - 1 ) * count(start = 10 and count = 10 )

  - `https://developers.zomato.com/api/v2.1/search?q=pizza&start=10&count=10&sort=cost&order=asc`
  - Keep a dropdown menu to sort results by  `cost, rating and real_distance` as options (can refer zomato document) and order by  `asc` and `desc` as options.

  ![](https://i.imgur.com/rlpRWL1.png)

  ### Features 

  - User Should be able to search restaurants by a keyword.

  - Able to display 10 results per page implement pagination using Material UI.

  - On clicking page number pass start and count params and display the results

  - Able to sort the results by rating cost and real_distance.

  - Use hooks, follow the coding standards and good naming convention.
		

### Rules for Submission

- Submissions after the deadline will not be evaluated. (no reasons entertained)
- Screenshots are not acceptable, record a video switch on your camera and explain the features.  
- Length of the video should be less than 2min.
