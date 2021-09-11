<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lumamoto/rate-my-hackathon">
    <img src="frontend/src/assets/RMH.png" alt="RMH Logo" height="50">
  </a>

  <h3 align="center">Rate My Hackathon</h3>

  <p align="center">
    A simple web app that allows hackers to rate hackathons they've participated in.
    <br />
    <a href="https://ratemyhackathon.herokuapp.com/"><strong>View application »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lumamoto/rate-my-hackathon/issues">Report Bug</a>
    ·
    <a href="https://github.com/lumamoto/rate-my-hackathon/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#how-to-run">How to Run</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Rate my Hackathon is a web application that allows hackers to discern more accurately which hackathon they want to participate in. Hackers can leave a review of hackathons they have finished as well as see other reviews left by hackers.

### Built With

* [React](https://reactjs.org/)
* [Express](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Node.js](https://nodejs.org/en/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lumamoto/rate-my-hackathon.git
   ```
2. Install NPM packages
   ```sh
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```


### How to Run

To run the app locally, starting up both the frontend and backend concurrently:
```sh
npm run dev
```


<!-- ROADMAP -->
## Roadmap

- [x] Add a hackathon to DB
- [x] Add a review to DB
- [x] Create home page
- [x] Adjust styling
  - [x] Add Hackathon page
  - [x] Add Review page
  - [x] View All Hackathons page
  - [x] View Hackathon page
  - [x] Home page
- [x] Implement search functionality
- [ ] Add auth (via GitHub and/or Google?)
  - [ ] Upvote and downvote reviews
  - [ ] Flag a review to be removed
  - [ ] Create individual profile pages
    - [ ] Edit/delete hackathons you've added
    - [ ] Edit/delete reviews you've written
- [x] Deploy to Heroku



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
