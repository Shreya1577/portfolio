const Message = require('../models/Message');

/**
 * POST /api/messages
 * Save a contact form message to MongoDB.
 */
const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic presence check (Mongoose schema handles full validation)
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const newMessage = await Message.create({ name, email, subject, message });

    return res.status(201).json({
      success: true,
      message: 'Your message has been received. I\'ll be in touch soon!',
      data: { id: newMessage._id, createdAt: newMessage.createdAt },
    });
  } catch (error) {
    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({
        success: false,
        message: messages.join(' '),
      });
    }

    console.error('[MessageController] Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

/**
 * GET /api/messages
 * Retrieve all messages (for personal admin use — protect in production!).
 */
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    console.error('[MessageController] Error fetching messages:', error);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { createMessage, getMessages };