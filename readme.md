# Full Stack Application Example

Here, we have our `client` and our `server` in what's known as a _monorepo_.

We could have them as separate repositories,
which simplifies deployment of a single application,
but makes it more difficult to coordinate releases,
because features often have one pull request in each repo that need to be merged in an exact order.

The monorepo – a single repository grouping together related services – has been adopted as a best practice.

## Deploying the server

This is a heroku deployment, and it can be achieved with a `git push`, provided we only push a "subtree" of the repository.

First, we need to login, then add the remote:

```
heroku login
```

If we don't already have an app, we create one:

```
heroku apps:create final-livecoding
```

We now need to set up our local git to know about the remote git repo on heroku.

```
heroku git:remote -a final-livecoding
```

Finally, we can push our server code:

```
git subtree push --prefix server heroku main
```

We have set this up for future deployments with an npm script: `npm run deploy:backend`.

## Deploying the client

Netlify's dashboard allows us to do this.

We follow through their steps, making careful note that we set up `client` as our starter folder.

![Setting subfolder](https://user-images.githubusercontent.com/7150842/175980696-b30ab541-cd38-4c11-84aa-ce82f2e387db.png)
