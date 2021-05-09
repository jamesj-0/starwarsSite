## How to Install & Run

1. Clone the repo
2. Run `npm i`
3. Run tests with `npm test` *all tests should pass*
4. Start the application with `npm start`


## Deliverables

- Choose at least three different types of resource (people, films, planets, etc)
- Display the information of those resources to the user
- Let users click through to other related resources

## Process Notes
- Material Ui Vs Styled Components...
- Storybook or not to storybook? Time constraints
- Semantic HTML - Rushed towards the end due a refactor.
- Different names for people, ie characters & residents was breaking the site.
- Adding the data once the code was written was super easy. → utlisData.js
- Routing of the pages in done through object literals but they’re hard coded, if they keys were to change the site would break. Could send an options request to see which keys are available and populate the utilsData.js object
- page navigation is hardcoded due to time constraints. If the database updates more entries navigation would be incorrect.
- If I had more time I would have created a style guide with the reusable variable names for the css
- UtilsFunctions file doesn't work without the if statement...

[Site Components](https://www.notion.so/425e70fb96354f1f8299e2bfeddcf7fc)