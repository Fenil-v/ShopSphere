const {
  getAllShippingTypes,
  addShippingType,
  updateShippingType,
  deleteShippingType,
} = require("../controller/shippingTypeController");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

const { Router } = require("express");

const router = Router();
router.get("/", getAllShippingTypes);
router.post(
  "/",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  addShippingType
);
router.put(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  updateShippingType
);
router.delete(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  deleteShippingType
);

module.exports = router;
