<h1 align="center">Morpho-UI</h1>
<p align="center"><img src="./assets/logo.png" height="120px" align="center"/></p>
<h2 align="center">Elegant, modular and easy-to-use react-based component library</h2>
</center>

### Tech Stack
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

### Motivation
Building components repetitively is cumbersome and time-consuming. Building morpho-UI brings uniformity, reusability and less decision making in styling for all your projects. It contains the global styling which gives you variety of color choices and 
components like buttons, alerts are provided with 5 CTA(call to action) colors(red, green, blue, yellow, and pink).
### How to install? 
```npm i @launchpad5682/morpho-ui```
### Components:
- Alert
- Avatar
- Badge
- Button
- Card
- Chips
- Image
- Modal
- Snack Bar
- Tabs
- Typography
### Color Psychology: 
- Success/peaceful optimism: green
- Information: blue
- Danger or focus: red
- Warning or grab attention: yellow
- Excitement: pink
- Minimalistic sophistication: black

### References
* Start development server using ```npm start``` and  ```npm run storybook```.
* Bootstrapped storybook typescript using [TSDX](https://tsdx.io/).
* Deploy Storybook using [github actions](https://dev.to/kouts/deploy-storybook-to-github-pages-3bij).
* Altered default configuration using ts.config.js and added css imports with live changes with css [link](https://stackoverflow.com/questions/63285566/css-module-gets-bundled-but-is-not-referenced-using-tsdx-which-uses-rollup-under).
* User guide for [TSDX React w/ Storybook](https://github.com/jaredpalmer/tsdx/blob/master/templates/react-with-storybook/README.md).
* Made all the components accessible using ```index.tsx``` in ```src``` folder.
* Call to action color guide [link](https://aritic.com/blog/aritic-pinpoint/call-to-action-button-color-guide/).
### Workflow 
- Make changes, add version to the commit message to release a package.
- Make version update in ```package.json``` and push code using ```git push --follow-tags```.
