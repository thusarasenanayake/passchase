<br />
<p align="center">

  <h3 align="center">Passchase</h3>

  <p align="center">
    A command line tool for managing passwords
    <br />
    <br />
    <a href="https://github.com/thusarasenanayake/passchase/issues">Report Bug</a>
    ·
    <a href="https://github.com/thusarasenanayake/passchase/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This command line tool can be used for store, view , delete and update passwords for different services. Database encyption will be added soon.

<p align="center">

![screenshot][product-screenshot-1]

</p>

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

- chalk
- chalk-table
- commander
- inquirer
- sqlite3
<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/thusarasenanayake/passchase.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a symlink in the global folder to use passchase globally
   ```sh
   npm link
   ```

<!-- USAGE EXAMPLES -->

## Usage

to display help

    passchase [help | --help | -h] [command]

to add a record

    passchase add

to delete a record

    passchase delete <id>

to update a record

    passchase update <id> < service | userName | email | password | phone | otherDetails | date > <value>

to view a record

    passchase show < id | all >

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/thusarasenanayake/passchase/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/thusarasenanayake/passchase](https://github.com/thusarasenanayake/passchase)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [README Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)

<!-- github -->

[repo-url]: https://github.com/thusarasenanayake/passchase
[issues-url]: https://github.com/thusarasenanayake/passchase/issues
[contributors-url]: https://github.com/thusarasenanayake/passchase/graphs/contributors
[forks-url]: https://github.com/thusarasenanayake/passchase/network/members
[stars-url]: https://github.com/thusarasenanayake/passchase/stargazers
[license-url]: https://github.com/thusarasenanayake/passchase/blob/main/LICENSE.txt

<!-- shields -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- resources / product -->

[product-screenshot-1]: public/assets/img/screenshot.png

<!-- contact -->

[linkedin-url]: https://linkedin.com/in/github_username
