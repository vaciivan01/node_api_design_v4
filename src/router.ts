import {Router} from 'express'

const router = Router()

router.get('/products', (req, res) => {
console.log("asdfasdf");

    res.status(200)
    res.json({message: "asdfasdf"})
})

router.get('/products/:id', () => {
    
})

router.put('/products/:id', () => {
    
})

router.post('/products', () => {
    
})

router.delete('/products/:id', () => {
    
})

export default router