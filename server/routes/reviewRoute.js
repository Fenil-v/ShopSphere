const express = require("express");
const { getProfile, updateProfile } = require("../controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  addReview,
  getProductsReviews,
} = require("../controller/reviewController");

const router = express.Router();

router.post("/", isAuthenticatedUser, addReview);
router.get("/productreviews/:pid", isAuthenticatedUser, getProductsReviews);

module.exports = router;
