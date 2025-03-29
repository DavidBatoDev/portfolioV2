import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, Send, X, Paperclip, Smile } from "lucide-react";
import "./Chatbot.css";

const API_KEY = "AIzaSyBa7k2BCQg4d-30fPRgmB79yv8sYzDG2Sk";

const genAI = new GoogleGenerativeAI(API_KEY);

export const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea as content grows
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = 
        Math.min(textareaRef.current.scrollHeight, 100) + "px";
    }
  }, [input]);

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input, time: formatTime() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [
        ...prev, 
        { type: "bot", text, time: formatTime() }
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [
        ...prev, 
        { 
          type: "bot", 
          text: "Sorry, I encountered an error. Please try again.", 
          time: formatTime() 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageText = (text) => {
    return text.split('\n').map((line, i) => (
      <p key={i}>{line || <br />}</p>
    ));
  };

  return (
    <>
      {!isOpen && (
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <div className="avatar-img">G</div>
                <div className="online-indicator"></div>
              </div>
              <div className="chatbot-info">
                <h3>David</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="welcome-message">
                <div className="welcome-avatar">
                  <div className="welcome-img">G</div>
                </div>
                <div className="welcome-text">
                  <h3>Hi ask me about anythin</h3>
                  <p>👋 Hi there! How can I help you today?</p>
                </div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.type === "bot" && (
                  <div className="message-avatar">
                    <div className="avatar-img">G</div>
                  </div>
                )}
                <div className="message-content">
                  <div className={`message-bubble ${msg.type}`}>
                    {formatMessageText(msg.text)}
                  </div>
                  <div className="message-info">
                    <span className="message-time">{msg.time}</span>
                    {msg.type === "user" && (
                      <span className="message-status">✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message bot">
                <div className="message-avatar">
                  <div className="avatar-img">G</div>
                </div>
                <div className="message-content">
                  <div className="message-bubble bot typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-footer">
            <div className="chatbot-input-wrapper">
              <button className="attachment-button">
                <Paperclip size={18} />
              </button>
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Message Gemini AI..."
                rows="1"
              />
              <button className="emoji-button">
                <Smile size={18} />
              </button>
            </div>
            <button 
              className="send-button"
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};