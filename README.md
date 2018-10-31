# dist-two-points
[![npm](https://img.shields.io/npm/v/dist-two-points.svg)](https://www.npmjs.com/package/dist-two-points)
![CircleCI (all branches)](https://img.shields.io/circleci/project/github/mhfen/dist-two-points/master.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A JavaScript utility for finding the distance between two points given latitude and longitude.

## Install

```bash
$ npm install --save dist-two-points
```
or
```bash
$ yarn add dist-two-points
```

## Usage

```javascript
import distanceBetweenPoints from 'dist-two-points';

const dist = distanceBetweenPoints(37.4219752, -122.084076, 37.3348136, -122.0091032);
```

<table>
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>lat1</td>
      <td>Number</td>
      <td>37.4219752</td>
    </tr>
    <tr>
      <td>long1</td>
      <td>Number</td>
      <td>-122.084076</td>
    </tr>
    <tr>
      <td>lat2</td>
      <td>Number</td>
      <td>37.3348136</td>
    </tr>
    <tr>
      <td>long2</td>
      <td>Number</td>
      <td>-122.0091032</td>
    </tr>
  </tbody>
</table>

The function will return a Number value in meters.

## Contributing

Create an Issue if there is not already one created. Open up a Pull Request against `master` with your fix branch.

### Install Dependencies

```bash
$ npm install
```

### Run Tests

```bash
$ npm test
```

### Run a babel transpile

```bash
$ npm run build
```
