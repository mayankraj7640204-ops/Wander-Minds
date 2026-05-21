import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface AiPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AiPlannerModal({ isOpen, onClose }: AiPlannerModalProps) {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        setMessages([{ role: 'ai', text: 'Hi! I am your WanderMind AI. Where would you like to go on your next adventure?' }]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `That sounds amazing! I can totally help you plan a trip to ${userMsg}. Let me analyze flight trends, weather, and popular itineraries... I recommend 5 days to fully experience it. Should I generate a day-by-day plan for you?` 
      }]);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-[#141724] border border-white/10 rounded-2xl shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1b1e2e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">WanderMind AI Planner</h3>
              <p className="text-xs text-cyan-400">Online</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0f111a]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-cyan-500 text-white' : 'bg-brand-terracotta text-white'}`}>
                {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`p-4 rounded-2xl max-w-[80%] ${msg.role === 'ai' ? 'bg-[#1b1e2e] text-slate-200 rounded-tl-none' : 'bg-brand-terracotta text-white rounded-tr-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="p-4 rounded-2xl bg-[#1b1e2e] text-slate-400 rounded-tl-none flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-[#1b1e2e]">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your dream destination..."
              className="w-full bg-[#0f111a] border border-white/10 rounded-full py-4 pl-6 pr-14 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-400 disabled:opacity-50 transition-colors"
            >
              <Send size={18} className="-ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
