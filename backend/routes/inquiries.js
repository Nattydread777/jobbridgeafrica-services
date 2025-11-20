const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');
const logger = require('../utils/logger');

// Validation middleware
const inquiryValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('service').notEmpty().withMessage('Service selection is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// @route   POST /api/inquiries
// @desc    Submit a new inquiry
// @access  Public
router.post('/', inquiryValidation, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const inquiry = await Inquiry.create(req.body);

    logger.info(`New inquiry received from ${inquiry.email}`);

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! We will get back to you soon.',
      data: {
        id: inquiry._id,
        name: inquiry.name,
        service: inquiry.service
      }
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/inquiries
// @desc    Get all inquiries (for admin)
// @access  Private (add auth middleware later)
router.get('/', async (req, res, next) => {
  try {
    const { status, priority, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;

    const inquiries = await Inquiry.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Inquiry.countDocuments(query);

    res.json({
      success: true,
      data: inquiries,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/inquiries/:id
// @desc    Get single inquiry
// @access  Private
router.get('/:id', async (req, res, next) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.json({
      success: true,
      data: inquiry
    });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/inquiries/:id
// @desc    Update inquiry status/notes
// @access  Private
router.put('/:id', async (req, res, next) => {
  try {
    const { status, priority, notes } = req.body;
    
    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (notes) updateData.notes = notes;

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    logger.info(`Inquiry ${inquiry._id} updated`);

    res.json({
      success: true,
      message: 'Inquiry updated successfully',
      data: inquiry
    });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/inquiries/:id
// @desc    Delete inquiry
// @access  Private
router.delete('/:id', async (req, res, next) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    logger.info(`Inquiry ${inquiry._id} deleted`);

    res.json({
      success: true,
      message: 'Inquiry deleted successfully'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
