import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    sucess: true,
    statusCode: 200,
    body: "Hello World!",
  });
});

export default router;
