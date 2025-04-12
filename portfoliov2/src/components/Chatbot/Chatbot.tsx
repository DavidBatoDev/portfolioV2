"use client"
import React, { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import ReactMarkdown from 'react-markdown';

// Define types for messages
interface Message {
  type: "user" | "bot";
  text: string;
  time: string;
}

export const Chatbot = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [viewportHeight, setViewportHeight] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);
  
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setViewportHeight(window.innerHeight);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setViewportHeight(window.innerHeight);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to check if device is mobile
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
    setViewportHeight(window.innerHeight);
  }, []);

  // Add this useEffect to handle screen resize
  useEffect(() => {
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  // Improve the auto-resize function for textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const maxHeight = isMobile ? 80 : 100; // Lower max height on mobile
      textareaRef.current.style.height = 
        Math.min(textareaRef.current.scrollHeight, maxHeight) + "px";
    }
  }, [input, isMobile]);

  const formatTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  console.log('messages',  process.env.GEMINI_API_KEY);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: "user", text: input, time: formatTime() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      // Call our API endpoint instead of directly using Gemini
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userQuery: input }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      // Update messages state with the response
      setMessages(prev => [
        ...prev, 
        { type: "bot", text: data.text, time: formatTime() }
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [
        ...prev, 
        { 
          type: "bot", 
          text: "Sorry, I encountered an error. Please contact David directly at batobatodavid20@gmail.com.", 
          time: formatTime() 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Updated to use ReactMarkdown for bot messages
  const formatMessageText = (text: string, isBot: boolean) => {
    if (isBot) {
      return (
        <ReactMarkdown
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            a: ({ node, ...props }) => (
              <a 
                {...props} 
                className="text-blue-400 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              />
            ),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            p: ({ node, ...props }) => <p {...props} className="mb-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            h1: ({ node, ...props }) => <h1 {...props} className="text-xl font-bold mt-3 mb-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            h2: ({ node, ...props }) => <h2 {...props} className="text-lg font-bold mt-3 mb-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            h3: ({ node, ...props }) => <h3 {...props} className="text-base font-bold mt-2 mb-1" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            h4: ({ node, ...props }) => <h4 {...props} className="text-sm font-bold mt-2 mb-1" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-5 my-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-5 my-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            li: ({ node, ...props }) => <li {...props} className="mb-1" />,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
            code: ({ inline, className, children, ...props }: any) => (
              inline ? 
                <code {...props} className="px-1 py-0.5 bg-tech-navy font-mono text-sm rounded">{children}</code> :
                <code {...props} className="block p-2 bg-tech-navy font-mono text-sm rounded my-2 whitespace-pre-wrap">{children}</code>
            ),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            pre: ({ node, ...props }) => <pre {...props} className="my-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 border-tech-teal pl-4 italic my-2" />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            strong: ({ node, ...props }) => <strong {...props} className="font-bold" />
          }}
        >
          {text}
        </ReactMarkdown>
      );
    } else {
      return text.split('\n').map((line, i) => (
        <p key={i} className="mb-2">{line || <br />}</p>
      ));
    }
  };

  // Function to handle closing chat on mobile
  const handleCloseChat = () => {
    setIsOpen(false);
    
    // Reset body styles
    document.body.style.overflow = '';
    document.documentElement.style.height = '';
    document.body.style.height = '';
  };

  return (
    <>
      {!isOpen && (
        <button 
          className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-tech-slate text-tech-navy flex items-center justify-center border-none cursor-pointer shadow-lg hover:scale-105 hover:bg-tech-light transition-all duration-300 z-50"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div 
          className={`fixed bottom-0 lg:bottom-5 right-5 ${isMobile ? 'w-full h-full bottom-0 right-0 left-0 rounded-none' : 'w-[350px] h-[520px] rounded-2xl'} bg-[#1e1e3f] shadow-xl flex flex-col overflow-hidden font-sans z-[14444000] border border-[#342b55] animate-[slide-up_0.3s_ease-out]`}
          style={isMobile ? {height: `${viewportHeight}px`} : {}}
        >
          <div className="px-4 py-3 bg-tech-navy border-b border-tech-light flex justify-between items-center remove-scollbar">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-tech-teal text-tech-navy flex items-center justify-center font-semibold text-lg">
                  D
                </div>
                <div className="absolute w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e1e3f] bottom-0 right-0"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="m-0 text-base font-semibold text-white">David AI Assistant</h3>
                <span className="text-xs text-[#a8a8c8]">Online</span>
              </div>
            </div>
            <button className="bg-transparent border-none text-[#a8a8c8] cursor-pointer flex items-center justify-center p-1 rounded-full hover:bg-[#342b55] hover:text-white transition-colors" onClick={handleCloseChat}>
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 remove-scollbar overflow-y-auto p-4 flex flex-col gap-4 bg-tech-navy scrollbar-thin scrollbar-thumb-[#342b55] scrollbar-track-transparent scrollbar-thumb-rounded">
            {messages.length === 0 && (
              <div className="flex items-start gap-3 bg-tech-navy rounded-lg p-4 shadow max-w-[85%] mx-auto border border-tech-light">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-tech-teal text-tech-navy flex items-center justify-center font-semibold text-lg">
                    D
                  </div>
                </div>
                <div>
                  <h3 className="m-0 mb-2 text-[15px] font-semibold text-white">Hi, I&apos;m David&apos;s Assistant</h3>
                  <p className="m-0 text-sm text-[#d1d1e6]">👋 Hello! I can tell you about David&apos;s skills, experience, projects, and qualifications. How can I help you today?</p>
                </div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-2 max-w-[90%] ${msg.type === 'user' ? 'flex-row-reverse self-end' : 'self-start'}`}>
                {msg.type === "bot" && (
                  <div className="w-8 h-8 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-tech-teal text-tech-navy flex items-center justify-center font-semibold text-lg">
                      D
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-0.5">
                  <div className={`p-2 px-3 rounded-2xl remove-scollbar border border-tech-light min-w-[40px] max-w-full relative break-words ${
                    msg.type === 'user' 
                      ? 'bg-tech-navy text-white rounded-tr-sm' 
                      : 'bg-tech-navy text-white rounded-tl-sm'
                  }`}>
                    {formatMessageText(msg.text, msg.type === 'bot')}
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${msg.type === 'user' ? 'justify-end' : ''}`}>
                    <span className="text-[#a8a8c8]">{msg.time}</span>
                    {msg.type === "user" && (
                      <span className="text-[#a8a8c8]">✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 max-w-[90%] self-start">
                <div className="w-8 h-8 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-tech-teal text-tech-navy flex items-center justify-center font-semibold text-lg">
                    D
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="p-2 px-3 rounded-2xl min-w-[40px] bg-tech-slate text-[#d1d1e6] rounded-tl-sm">
                    <div className="flex items-center py-2 gap-0.5">
                    <span className="w-2 h-2 bg-tech-navy rounded-full inline-block opacity-40 animate-[pulse_1s_infinite]"></span>
                      <span className="w-2 h-2 bg-tech-navy rounded-full inline-block opacity-40 animate-[pulse_1s_infinite_0.2s]"></span>
                      <span className="w-2 h-2 bg-tech-navy rounded-full inline-block opacity-40 animate-[pulse_1s_infinite_0.4s]"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-tech-navy border-t border-tech-slate flex items-center gap-2.5">
            <div className="flex items-center bg-tech-navy rounded-full px-3 py-2 flex-1 border border-[#342b55]">
              {/* <button className="bg-transparent border-none text-[#a8a8c8] p-0 flex items-center justify-center cursor-pointer hover:text-[#d1d1e6] transition-colors">
                <Paperclip size={18} />
              </button> */}
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about David's experience, projects, or skills..."
                rows={1}
                className="flex-1 border-none bg-transparent px-2 max-h-[100px] font-inherit text-sm outline-none resize-none m-0 text-[#d1d1e6] placeholder-[#a8a8c8] overflow-y-auto leading-5"
              />
              {/* <button className="bg-transparent border-none text-[#a8a8c8] p-0 flex items-center justify-center cursor-pointer hover:text-[#d1d1e6] transition-colors">
                <Smile size={18} />
              </button> */}
            </div>
            <button 
              className={`w-9 h-9 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors flex-shrink-0 ${
                isLoading || !input.trim() 
                  ? 'bg-gray-600 text-[#a8a8c8] cursor-not-allowed' 
                  : 'bg-tech-teal text-tech-navy  hover:bg-[#8a6ad2]'
              }`}
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

export default Chatbot;