import { Router } from "express";
import { ticketController } from "../controller";

const router: Router = Router();

router.get('/:userId', ticketController.getAllTicket );

export default router;