import express  from 'express';
import { authorizeRoles, isAuthenticated } from '../middleware/auth';
import { getCourseAnalytics, getOrderAnalytics, getUsersAnalytics } from '../controllers/analytics.controller';
const analyticsRouter = express.Router();

analyticsRouter.get("/get-users-analytics", 
    isAuthenticated, 
    authorizeRoles("admin"), 
    getUsersAnalytics);

analyticsRouter.get("/get-course-analytics", 
    isAuthenticated, 
    authorizeRoles("admin"), 
    getCourseAnalytics);

analyticsRouter.get("/get-order-analytics", 
    isAuthenticated, 
    authorizeRoles("admin"), 
    getOrderAnalytics);


export default analyticsRouter;