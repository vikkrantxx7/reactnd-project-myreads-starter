# MyReads Project

Do you want to organize your reads? If yes, you are at the right place. Organize loads of reads into shelves provided just for you.
Read on for - How To ??

## Table of Contents

* [Getting Started](#gettingstarted)
* [How To](#howto)
* [Important](#important)
* [Dependencies](#dependencies)
* [Contributing](#contributing)
* [Authors](#authors)

### GettingStarted

To run this awesome app. Just clone the repo(or fork and then clone) and in the project folder run `npm install` to install all the dependencies and then type `npm start` to start the server.

### HowTo

The homepage displays three shelves-
* Currently Reading
* Want To Read
* Read

In which some books are organised. To reorganize them just click on the green icon provided on every book and choose your selection. Wait till the book moves. The green icon now shows the new shelf selected. On selecting none the book disappears from the home. <br>
To search and add more books click on `+` icon at bottom-right and then search for the books. For the search queries just read the [Important](#important) section. Here to use the same approach to move the book to shelves. The books which are already in shelves have the shelf name selected and rest all have the `none` value.<br>
So what are you waiting for ? Go - Play around !!

### Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Dependencies

[create react app](https://github.com/facebook/create-react-app)- Used to bootstrap the whole project.<br>
[react router dom](https://reacttraining.com/react-router/web/guides/quick-start)- Used for routing functionality.

### Contributing

I accept the style change.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

### Authors

* [Vikrant Sharma](https://github.com/vikkrantxx7) - Filled with lovely React.
* [Udacity Team](https://github.com/udacity) - Static Skeleton.
