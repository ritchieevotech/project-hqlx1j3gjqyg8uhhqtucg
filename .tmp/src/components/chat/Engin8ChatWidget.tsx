import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { textAgentChat } from "@/integrations/core";
import { cn } from "@/lib/utils";

const AGENT_ID = "24fb3bac-253f-4d0c-8d2d-354c50a387ad";
const PUBLIC_CHAT_KEY = "dbdbaf64a441626244ae8c7e3ca3df06f462228991d000d5154e7a572335c29f";

interface Message {
  id: string;
  from: "user" | "agent";
  text: string;
}

export function Engin8ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Handle initialization when widget opens
  const handleToggle = async () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState && !isInitialized && !isInitializing) {
      setIsInitializing(true);
      try {
        const result = await textAgentChat({
          agent_id: AGENT_ID,
          mode: "init",
          contact: { name: "Website Visitor" },
          public_chat_key: PUBLIC_CHAT_KEY,
        });

        if (result.conversation_id) {
          setConversationId(result.conversation_id);
          setMessages([{ 
            id: Date.now().toString(), 
            from: "agent", 
            text: result.response 
          }]);
          setIsInitialized(true);
        }
      } catch (err) {
        console.error("Failed to initialize Engin8 Support Bot:", err);
      } finally {
        setIsInitializing(false);
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || !conversationId || isLoading || !isInitialized) return;

    const userMessage = input.trim();
    const messageId = Date.now().toString();
    
    setMessages((prev) => [...prev, { id: messageId, from: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await textAgentChat({
        agent_id: AGENT_ID,
        message: userMessage,
        mode: "message",
        conversation_id: conversationId,
        contact: { name: "Website Visitor" },
        public_chat_key: PUBLIC_CHAT_KEY,
      });

      setMessages((prev) => [...prev, { 
        id: (Date.now() + 1).toString(), 
        from: "agent", 
        text: result.response 
      }]);
    } catch (err) {
      console.error("Engin8 Chat error:", err);
      setMessages((prev) => [...prev, { 
        id: (Date.now() + 1).toString(), 
        from: "agent", 
        text: "Sorry, I encountered an error. Please try again or contact us directly." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-[100] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mb-4 w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-10rem)] bg-card border shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold leading-none mb-1">Engin8 Support</h3>
                <p className="text-xs opacity-80 font-sans">Powering your Amazon success</p>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-primary-foreground hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-primary-foreground hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30"
            >
              {!isInitialized && !isInitializing && (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm font-sans">
                  Click below to start a conversation
                </div>
              )}
              
              {isInitializing && (
                <div className="flex flex-col items-center justify-center h-full gap-2 text-muted-foreground text-sm font-sans">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  <span>Connecting to Engin8 Support...</span>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.from === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm font-sans leading-relaxed",
                      msg.from === "user" 
                        ? "bg-secondary text-secondary-foreground rounded-tr-none" 
                        : "bg-background border text-foreground rounded-tl-none shadow-sm"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex flex-col items-start mr-auto max-w-[85%] animate-pulse">
                  <div className="bg-background border px-4 py-2.5 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-card">
              <div className="relative flex items-end gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isInitialized ? "Type your question..." : "Waiting for connection..."}
                  className="min-h-[44px] max-h-32 py-3 px-4 resize-none rounded-xl pr-12 text-sm"
                  rows={1}
                  disabled={!isInitialized || isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={!isInitialized || isLoading || !input.trim()}
                  size="icon"
                  className="absolute right-1 bottom-1 h-9 w-9 rounded-lg"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-[10px] text-center text-muted-foreground mt-2 font-sans">
                Engineered by Engin8 Support AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className={cn(
          "pointer-events-auto flex items-center gap-2 px-4 h-14 rounded-full shadow-lg transition-colors z-50",
          isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-heading font-bold hidden sm:inline">Ask Engin8 Bot</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
