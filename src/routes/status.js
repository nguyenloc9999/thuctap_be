import express from 'express'
import { getStatusById, getAllStatuses, createStatus, updateStatus } from '../controller/status.js'

const routerStatus = express.Router()
routerStatus.get('/status', getAllStatuses)
routerStatus.get('/status/:id', getStatusById)
routerStatus.post('/status', createStatus);
routerStatus.patch("/status/:id", updateStatus);


export default routerStatus
