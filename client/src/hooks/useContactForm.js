import { useState, useCallback } from 'react';
import { sendContactMessage } from '../services/ContactService';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };
  let isValid = true;
  if (!fields.name.trim()) {
    errors.name = 'Name is required.';
    isValid = false;
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email.';
    isValid = false;
  }

  if (!fields.subject.trim()) {
    errors.subject = 'Subject is required.';
    isValid = false;
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
    isValid = false;
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
    isValid = false;
  }

  return { errors, isValid };
}

export function useContactForm() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [errors,  setErrors]  = useState(INITIAL_ERRORS);
  const [status,  setStatus]  = useState('idle'); // idle | loading | success | error
  const [apiError,setApiError]= useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }, [errors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const { errors: newErrors, isValid } = validate(form);
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');
    setApiError('');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setApiError(err.message);
    }
  }, [form]);

  const reset = useCallback(() => {
    setStatus('idle');
    setApiError('');
    setErrors(INITIAL_ERRORS);
  }, []);

  return { form, errors, status, apiError, handleChange, handleSubmit, reset };
}