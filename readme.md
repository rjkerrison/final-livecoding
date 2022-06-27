# Full Stack Application Example

Here, we have our `client` and our `server` in what's known as a _monorepo_.

We could have them as separate repositories,
which simplifies deployment of a single application,
but makes it more difficult to coordinate releases,
because features often have one pull request in each repo that need to be merged in an exact order.

The monorepo – a single repository grouping together related services – has been adopted as a best practice.

## Deploying the server

This is a heroku deployment, and it can be achieved with a `git push`, provided we only push a "subtree" of the repository.

```
git subtree push --prefix server heroku main
```

We have set this up with a shorthand: `npm run deploy:backend`.

## Deploying the client

Netlify's dashboard allows us to do this.
