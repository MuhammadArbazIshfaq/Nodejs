app.post('/books/:id/review', async (req, res) => {
  try {
    const bookId = req.params.id;
    const { username, rating, comment } = req.body;

    // Check if the user has already reviewed the book
    const existingReview = await Review.findOne({ bookId, username });

    if (existingReview) {
      // Update existing review
      existingReview.rating = rating;
      existingReview.comment = comment;
      await existingReview.save();

      res.status(200).json({ message: 'Review updated successfully.' });
    } else {
      // Add new review
      const review = new Review({ bookId, username, rating, comment });
      await review.save();

      res.status(201).json({ message: 'Review added successfully.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
