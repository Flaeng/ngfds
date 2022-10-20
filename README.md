# ngfds
An Angular Component Library implemeting DKFDS - Fælles Design System

## Builds

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/flaeng/ngfds/Build%20source%20code?label=source%20code%20compiles%20%26%20passes%20tests&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/flaeng/ngfds/Build%20for%20Angular?label=can%20build%20for%20supported%20angular%20versions&style=for-the-badge)

| Angular version    | Compatible versions | Recommended install command | Supported untill | Status |
| ------------------ | ------------------- | --------------------------- | ---------------- | ------------ |
| 15.0.0 - <16.0.0   | 15.X.X.X            | npm install ngfds^next      | Unknown          | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |
| 14.0.0 - <15.0.0   | 14.X.X.X            | npm install ngfds^14        | Dec 2025         | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |
| 13.0.0 - <14.0.0   | 13.X.X.X            | npm install ngfds^13        | May 2025         | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |
| 12.0.0 - <13.0.0   | 12.X.X.X            | npm install ngfds^12        | Nov 2024         | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |
| 11.0.0 - <12.0.0   | 11.X.X.X            | npm install ngfds^11        | May 2024         | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |
| 10.1.0 - <11.0.0   | 10.X.X.X            | npm install ngfds^10        | Dec 2023         | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |
| 9.1.0 - <10.0.0    | 9.X.X.X             | npm install ngfds^9         | May 2023         | ![Supported](https://img.shields.io/badge/-Supported-success?style=for-the-badge) |

## Github

![GitHub issue custom search in repo](https://img.shields.io/github/issues-search/flaeng/ngfds?label=KNOWN%20BUGS&query=label%3Abug%20is%3Aopen&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/flaeng/ngfds?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/flaeng/ngfds?style=for-the-badge)

## Codeclimate

![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/Flaeng/ngfds?style=for-the-badge)
![Code Climate issues](https://img.shields.io/codeclimate/issues/Flaeng/ngfds?label=Maintainability%20Issues&style=for-the-badge)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/Flaeng/ngfds?style=for-the-badge)

https://codeclimate.com/github/Flaeng/ngfds

## Codefactor

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/flaeng/ngfds?style=for-the-badge)

https://www.codefactor.io/repository/github/flaeng/ngfds

## Version schema

Major version is always the Angular version that the package is compatible with
Minor is the version of FDS that it is using
Patch & Build are ngfds versions

### What does that mean?

It means if you're running a Angular 13 project you have to install a package with the major version 13 untill you upgrade your @angular/core package.

If you have other dependencies using FDS you can use the install command `npm install ngfds~X.Y` where X is your Angular version and the major version of FDS that you want to stay within. This way when both ngfds and your other dependencies that depends on FDS both support i.e. version 9 of FDS you can upgrade ngfds to version ngfds~X.Z where Z is the new version of FDS that you want to install.

