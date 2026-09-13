# Dynamic JavaScript DOM Logic & RESTful API Client

## Overview

This project implements a dynamic product explorer using JavaScript ES6+ and a public REST API. The application retrieves live product data and updates the page dynamically without requiring a full-page reload.

## Implementation

### 1. REST API Integration

* Used the Fake Store API to retrieve product data.
* Implemented asynchronous API requests using `fetch()` and `async/await`.
* Added response validation and error handling.

### 2. Dynamic Search and Filtering

* Added real-time product search.
* Added category-based filtering.
* Added sorting options:

  * Default order
  * Price: Low to High
  * Price: High to Low
  * Name: A to Z
* DOM content updates automatically when the user changes search, category, or sorting options.

### 3. Client-Side State Management

* Implemented a shopping cart using JavaScript.
* Cart data is stored in `localStorage`.
* Cart information remains available after refreshing the page.

### 4. Loading and Error States

* Added a loading skeleton while API data is being retrieved.
* Added a user-friendly error banner when the API request fails.
* Used `try...catch...finally` for robust asynchronous error handling.

## Technologies Used

* HTML5
* CSS3
* JavaScript ES6+
* REST API
* Fetch API
* Async/Await
* DOM Manipulation
* LocalStorage

## Result

The application provides a responsive and interactive product browsing experience where users can search, filter, sort, and add products to a persistent client-side cart without refreshing the page.
