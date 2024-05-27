# DiFLUsion Web

## Introduction

This is the 'front-end' part of the DiFlusion application for predicting risks of avian influenza outbreaks in Spain.

## Local Deployment (for development)

### Environment variables

```ini
MONGODB_URI=mongodb://127.0.0.1:27017
DB_NAME=diflusionWDB
NEXT_PUBLIC_LOCALE=es-ES
```
> Note: all values can be changed but should be consistent with the values defined in the DiFLUsion Back-end app.

### Installation

```
npm install
```

### Run

```
npm run dev
```

## Deployment with Docker Compose

### Environment variables

```ini
MONGODB_URI=mongodb://<user>:<password>@mongodb
DB_NAME=diflusionWDB
NEXT_PUBLIC_LOCALE=es-ES
```
> Note: the URL to database should be consistent with the `DB_USER` and `DB_PASSWORD` variables defined in the DiFLUsion Back-end app.

### Deployment

Copy the path where you save this repository and set to that the variable `WEB_PATH` in the DiFLUsion Back-end app. After that you can follow the steps in the README file of the DiFLUsion Back-end app.
