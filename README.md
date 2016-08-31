# MigHub
This is the "app store" for initiatives in Sweden that want to help refugees. 

![https://d17oy1vhnax1f7.cloudfront.net/items/0X0a0b0e1l0i1y2U2I3J/Image%202016-08-31%20at%2010.18.24%20AM.png?v=b8a0dd6b](https://d17oy1vhnax1f7.cloudfront.net/items/0X0a0b0e1l0i1y2U2I3J/Image%202016-08-31%20at%2010.18.24%20AM.png?v=b8a0dd6b)

The latest code in the `develop`branch is automatically built and published to the test url:
https://dev.setel.in

## Frameworks etc
We use Ionic as base which means the app works both on web and in packaged format for distributing on App Store and Google Marketplace. That means that before writing features/views you should try to find suitable components in Ionic to start from. That will help keep our own code as small as possible. Ionic uses Angular 1.x. 

## Tests and refactor
Currently there are no tests verifying the code which is a huge potential problem (of course coming from the fact that the main code in this project was conceived in 24 hours during a hackathon in Stockholm). After public launch we want to spend some time (help is highly appreciated here) to write tests and in the same time refactor the code into smaller pieces. We also plan to start converting the code into ES6 with a build-step (babel).

## Using this project

Install.

```bash
$ npm install
```

run locally:

```bash
$ npm start
```

## Contributions
This project is built by the community for the community and if you want to help out, just look at the issues and submit a pull-request. Please try to stick to the prioritized list of issues and bugs.

## License

MIT
