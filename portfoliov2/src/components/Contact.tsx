"use client"
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };
  
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="terminal-header mb-4">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-xs font-mono opacity-50">contact_me.sh</span>
            </div>
            
            <h3 className="text-2xl font-mono text-tech-lightest mb-6">Get in Touch</h3>
            
            <p className="text-tech-light mb-8">
              I'm currently looking for new opportunities and collaborations. Whether you have a question,
              project idea, or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <ul className="space-y-5">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tech-teal/10 flex items-center justify-center mr-4">
                  <Mail className="text-tech-teal" size={18} />
                </div>
                <div>
                  <p className="text-tech-light">Email</p>
                  <a href="mailto:johnjustin@example.com" className="text-tech-teal hover:underline">
                    batobatodavid20@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tech-teal/10 flex items-center justify-center mr-4">
                  <Phone className="text-tech-teal" size={18} />
                </div>
                <div>
                  <p className="text-tech-light">Phone</p>
                  <a href="tel:+123456789" className="text-tech-teal hover:underline">
                    +63 9944345742
                  </a>
                </div>
              </li>
              
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tech-teal/10 flex items-center justify-center mr-4">
                  <MapPin className="text-tech-teal" size={18} />
                </div>
                <div>
                  <p className="text-tech-light">Location</p>
                  <p className="text-tech-teal">Manila, Philippines</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="bg-tech-navy/40 backdrop-blur-sm p-6 rounded-lg border border-tech-slate/10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-tech-teal/20 rounded-full flex items-center justify-center mb-4">
                    <Send className="text-tech-teal" size={24} />
                  </div>
                  <h4 className="text-2xl font-mono text-tech-lightest mb-3">Message Sent!</h4>
                  <p className="text-tech-light text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-tech-light text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-tech-navy border border-tech-slate/30 rounded-md p-3 text-tech-light focus:ring-2 focus:ring-tech-teal/50 focus:border-tech-teal transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-mono text-tech-light text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-tech-navy border border-tech-slate/30 rounded-md p-3 text-tech-light focus:ring-2 focus:ring-tech-teal/50 focus:border-tech-teal transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-mono text-tech-light text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-tech-navy border border-tech-slate/30 rounded-md p-3 text-tech-light focus:ring-2 focus:ring-tech-teal/50 focus:border-tech-teal transition-all duration-300"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-secondary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
