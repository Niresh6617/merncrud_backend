const express = require('express')
const router = express.Router()
const Course = require('../models/course')

// Create a new course
router.post('/post/course', async (req, res) => {
    const { title, description, duration } = req.body
    const newCourse = new Course({ title, description, duration })
    const savedCourse = await newCourse.save()
    res.json(savedCourse)
})

// Get all courses
router.get('/get/courses', async (req, res) => {
    const courses = await Course.find()
    res.json(courses)
})

// Update a course
router.put('/put/course/:id', async (req, res) => {
    const { title, description, duration } = req.body
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, { title, description, duration }, { new: true })
    res.json(updatedCourse)
})

// Delete a course
router.delete('/delete/course/:id', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id)
    res.json({ message: "Course deleted" })
})

module.exports = router
