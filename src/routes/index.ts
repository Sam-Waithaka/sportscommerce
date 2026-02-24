import { Express } from "express";
import { createCatalogRoutes } from "./catalogue";

export const createRoutes = (app: Express)=>{
    createCatalogRoutes(app)
}