const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Send a contact form message to the backend.
 * @param {{ name: string, email: string, subject: string, message: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendContactMessage(data) {
  const response = await fetch(`${API_BASE}/api/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || 'Failed to send message. Please try again.');
  }

  return json;
}