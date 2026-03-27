import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            business: formData.business,
            message: formData.message,
          },
        ]);

      if (submitError) {
        throw submitError;
      }

      setSuccess(true);
      setFormData({ name: '', email: '', business: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send message';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6 leading-[1.05]">
              Have a project in mind? Let's talk.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Book a free discovery call or send us a message. We'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {success && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-600">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-600">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  disabled={loading}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={loading}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                <input
                  id="business"
                  type="text"
                  disabled={loading}
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  disabled={loading}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none disabled:opacity-50"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-full text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}