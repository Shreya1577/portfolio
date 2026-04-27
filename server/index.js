const express    = require('express');
const cors       = require('cors');
const dotenv     = require('dotenv');
const connectDB  = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173/',
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// ── Routes ──
app.use('/api/messages', messageRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});