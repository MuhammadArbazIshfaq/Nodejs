const express = require('express');
const app = express();
const reviews = require('./reviews.json'); // assume we have a JSON file containing all reviews

// delete a review added by a particular user
app.delete('/reviews/:userId/:reviewId', (req, res) => {
  const userId = req.params.userId; // get user id from request URL
  const reviewId = req.params.reviewId; // get review id from request URL
  
  // find the review with the given id and user id
  const review = reviews.find((r) => r.id === reviewId && r.userId === userId);
  
  if (!review) {
    res.status(404).send('Review not found');
  } else {
    // remove the review from the array of reviews
    reviews.splice(reviews.indexOf(review), 1);
    res.status(200).send('Review deleted successfully');
  }
});

// start the server
app.listen(3000, () => console.log('Server listening on port 3000'));
