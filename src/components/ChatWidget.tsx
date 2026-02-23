import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';


interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am the ZCase AI Assistant (Preview Version). Please note that I am currently in a testing phase and will be fully functional once the complete system is implemented. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye movement
  const calculateEyeOffset = (x: number, y: number) => {
    const maxOffset = 3;
    const angle = Math.atan2(y, x);
    const distance = Math.min(Math.sqrt(x*x + y*y) / 10, maxOffset);
    return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
    };
  };

  const eyeOffset = calculateEyeOffset(mousePos.x, mousePos.y);

  const handleOpen = () => {
      setIsOpen(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.text);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (text: string): string => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('how much')) {
      return "Our flight cases start from around $850 for standard console cases. Custom configurations and Flip cases vary based on size and features. Would you like a quote for a specific model?";
    }
    if (lowerText.includes('flip') || lowerText.includes('flip case')) {
      return "ZCase Flip Cases are our signature product! They allow you to deploy your console in seconds without lifting. We have models for Digico, Yamaha, Allen & Heath, and more.";
    }
    if (lowerText.includes('shipping') || lowerText.includes('delivery') || lowerText.includes('ship')) {
      return "We ship globally via air and sea freight. Standard manufacturing time is 3-4 weeks, plus shipping time depending on your location.";
    }
    if (lowerText.includes('custom') || lowerText.includes('design')) {
      return "Yes! We specialize in custom flight cases. You can use our 'Custom Build' page to submit your requirements, and our engineering team will design a solution for you.";
    }
    if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('phone')) {
      return "You can reach our sales team at sales@zcaseusa.com or call us at +1 (555) 123-4567 during business hours (9 AM - 5 PM EST).";
    }
    if (lowerText.includes('warranty')) {
        return "All ZCase hardware comes with a Lifetime Structural Warranty. We stand behind the durability of our products.";
    }
    
    return "I'm not sure about that specific detail, but I can connect you with a human specialist. Would you like me to open a support ticket for you?";
  };

  return (
    <>
      {/* Flight Case Button */}
      <div 
        ref={buttonRef}
        onClick={handleOpen}
        className={`fixed bottom-8 right-8 z-40 cursor-pointer group transition-all duration-500 ${isOpen ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 hover:scale-105'}`}
      >
          <div className="relative w-24 h-16 transition-transform duration-300">
              {/* Case Lid */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-800 rounded-t-lg border-2 border-zinc-600 z-20 origin-bottom flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   
                   <div className="relative z-10 flex flex-col items-center">
                      {/* Eyes Container */}
                      <div className="flex gap-3 mb-1">
                          {/* Left Eye */}
                          <div className="w-2.5 h-2.5 bg-white rounded-full relative overflow-hidden shadow-inner border border-zinc-400">
                              <div className="w-1 h-1 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(calc(-50% + ${eyeOffset.x}px), calc(-50% + ${eyeOffset.y}px))` }}></div>
                          </div>
                          {/* Right Eye */}
                          <div className="w-2.5 h-2.5 bg-white rounded-full relative overflow-hidden shadow-inner border border-zinc-400">
                              <div className="w-1 h-1 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(calc(-50% + ${eyeOffset.x}px), calc(-50% + ${eyeOffset.y}px))` }}></div>
                          </div>
                      </div>
                   </div>
                   
                   {/* Rivets */}
                   <div className="absolute top-1 left-1 w-1 h-1 bg-zinc-400 rounded-full shadow-sm"></div>
                   <div className="absolute top-1 right-1 w-1 h-1 bg-zinc-400 rounded-full shadow-sm"></div>
              </div>

              {/* Case Body */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-900 rounded-b-lg border-2 border-t-0 border-zinc-600 z-10 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                   <div className="relative z-10 flex flex-col items-center gap-1">
                      <div className="w-6 h-3 border-b-2 border-zinc-400 rounded-b-full shadow-sm"></div>
                      <span className="text-[6px] font-black text-zinc-500 tracking-widest uppercase shadow-black drop-shadow-md">ZCASE AI</span>
                   </div>

                   {/* Rivets */}
                   <div className="absolute bottom-1 left-1 w-1 h-1 bg-zinc-400 rounded-full shadow-sm"></div>
                   <div className="absolute bottom-1 right-1 w-1 h-1 bg-zinc-400 rounded-full shadow-sm"></div>
              </div>

              {/* Metal Corners - Enhanced */}
              <div className="absolute top-[-2px] left-[-2px] w-3 h-3 border-t-2 border-l-2 border-zinc-300 rounded-tl-md z-30 shadow-sm bg-zinc-300/20 backdrop-blur-[1px]"></div>
              <div className="absolute top-[-2px] right-[-2px] w-3 h-3 border-t-2 border-r-2 border-zinc-300 rounded-tr-md z-30 shadow-sm bg-zinc-300/20 backdrop-blur-[1px]"></div>
              <div className="absolute bottom-[-2px] left-[-2px] w-3 h-3 border-b-2 border-l-2 border-zinc-300 rounded-bl-md z-30 shadow-sm bg-zinc-300/20 backdrop-blur-[1px]"></div>
              <div className="absolute bottom-[-2px] right-[-2px] w-3 h-3 border-b-2 border-r-2 border-zinc-300 rounded-br-md z-30 shadow-sm bg-zinc-300/20 backdrop-blur-[1px]"></div>
          </div>
      </div>

      {/* Chat Window - Full Screen */}
      <div 
        className={`fixed inset-0 z-50 bg-white transition-all duration-300 flex flex-col ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Header - Flight Case Lid Style */}
        <div className="bg-zinc-800 p-4 flex items-center justify-between shrink-0 border-b-4 border-zinc-900 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative">
          {/* Metal Corners for Header */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-500 rounded-tl-sm"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-zinc-500 rounded-tr-sm"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-zinc-500 rounded-bl-sm"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-500 rounded-br-sm"></div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-zcase-accent rounded-full border-2 border-zinc-600 flex items-center justify-center shadow-lg">
              <Bot size={20} className="text-zcase-black" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-none">ZCase AI</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                <span className="text-xs text-zinc-400 font-medium">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 p-2 rounded-lg transition-all relative z-10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-4 shadow-sm relative ${
                  msg.sender === 'user'
                    ? 'bg-zcase-black text-white rounded-tr-none'
                    : 'bg-white text-zcase-black border border-zinc-200 rounded-tl-none'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className="text-[10px] opacity-50 mt-2 block text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1 items-center">
                <span className="w-2 h-2 bg-zcase-accent rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-zcase-accent rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-zcase-accent rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-zinc-200 shrink-0">
          <form 
            onSubmit={handleSendMessage}
            className="flex items-center gap-3 relative"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about flight cases..."
              className="flex-1 bg-zinc-100 border-0 text-zcase-black placeholder-zinc-400 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-zcase-accent focus:bg-white transition-all outline-none"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="bg-zcase-accent text-zcase-black p-3.5 rounded-xl hover:bg-zcase-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send size={20} />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Powered by Gemini AI</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
