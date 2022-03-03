# Hacker News feed
This is a small app that fetches top 20 posts from [Hacker News](https://news.ycombinator.com/)

It's a project I built as part of my application to [Gofore](https://gofore.com/en/)

## The assignment
You should get the 20 best stories from Hacker News and display them in a nicely organized list, providing the user with some extra usable and informative features that will be described here in the instructions.
 
You may use any library you want too, as long as it makes sense in a React application.
 
### Hacker News API
 
To get the ids of the best stories in order from hacker news use: https://hacker-news.firebaseio.com/v0/beststories.json
 
To get a single story by the id (123456 in the example) use: https://hacker-news.firebaseio.com/v0/item/123456.json
 
To get details of a user by id (userid in the example) use: https://hacker-news.firebaseio.com/v0/user/userid.json
 
You may use the query _?print=pretty_ at the end of the url to get a more readable JSON in case you use the browser to visualize the requests.
 
More information on the API: https://github.com/HackerNews/API
 
### Required features
 
1. A view showing a list of the 20 best stories, including: title, creator, score, human readable created time, and a link to open that story in another tab.
2. User can open a detailed view of the story's creator, which contains creator's id, human readable created time, karma (which is a kind of score), and number of submitted interactions.
3. The UI should work nicely in any screen size.
 
### Nice-to-have features
 
1. It would be nice if the app keeps track of the information and minimizes API calls via state management or by library usage.
2. It would be nice if the user would be able to sort the visible results by some of the properties, like score or creator, for example.
3. It would be nice if the user would be able to filter the visible results by some of the properties, like minimum or maximum score, or even by selecting a user name in a list, or typing for keywords in the title, for example.
 
### Avoid pitfalls
 
- Do not overengineer just to impress us
- It does not have to be the prettiest UI software
 
### Evaluation criteria
 
You will be evaluated by:
 
- Achieving all of the required features
- Explaining the reasoning behind your decisions
- Code organization and readability
- Usability and responsiveness
- Bonus points from: Achieving some of the nice-to-have features

# LIVE DEMO
https://anttituomola.fi/hacker-news/build/
