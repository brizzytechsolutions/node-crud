const express = require('express');
const router = express.Router();
const Course = require('./models/Course');

router.get('/', async (req, res) => {
    try {
      const getCourses = await Course.find();
      res.json(getCourses);
    } catch (error) {
      res.json({message: error});
    }
});

router.post('/', async (req, res) => {
  const course = new Course({
    name: req.body.name,
    duration: req.body.duration
  });
  try {
    const saveCourse = await course.save();
    res.json(saveCourse);
  } catch (error) {
    res.json({message: error});
  }
});

router.get('/:_id', async (req, res) => {
  try {
    const courseId = await Course.findById(req.params._id);
    res.json(courseId);
  } catch (error) {
    res.json({message: error});
  }
});

router.patch('/:_id', async (req, res) => {
  try {
    const updateCourse = await Course.updateOne(
      { _id: req.params._id },
      { $set: { name: req.body.name }},
      { $set: { duration: req.body.duration }});
    res.json(updateCourse);
  } catch (error) {
    res.json({ message: error});
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const courseId = await Course.deleteOne({ _id: req.params._id });
    res.json(courseId);
  } catch (error) {
    res.json({message: error});
  }
});

router.search('/:name', async (req, res) => {
  try {
    const courseName = await Course.findOne({ name: req.query.name });
    res.json(courseName);
    console.log(courseName);
  } catch (error) {
    res.json({message: error});
  }
})

module.exports = router;
