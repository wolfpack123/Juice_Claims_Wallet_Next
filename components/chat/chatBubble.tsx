import { useEffect, useState } from 'react';
import '@n8n/chat/style.css';
import './n8n-chat-custom.css';
import { ChatBubbleIcon } from '../chat/chatBubbleIcon';

export function ChatBubble() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const { createChat } = await import('@n8n/chat');
        
        createChat({
          webhookUrl:
            'https://ai-agents.juicefin.com/webhook/202a6379-0c36-4265-b09a-bc0e404d0c32/chat',
          mode: 'window',
          showWelcomeScreen: false,
          initialMessages: [
            "Hello! I'm Berry👋",
            'I am here to help insurance companies like yours with our comprehensive solutions for managing incoming and outgoing payments.',
            'If you have any questions or need assistance, feel free to ask',
          ],
          i18n: {
            en: {
              title: 'Berry Assistant',
              subtitle: 'Juice Financial',
              inputPlaceholder: 'Type your question...',
              getStarted: 'New Conversation',
              footer: '',
              closeButtonTooltip: 'Close chat',
            },
          },
        });

        // Wait for chat to be initialized, then position and hide it
        setTimeout(() => {
          const chatWindow = document.querySelector('.chat-window');
          const chatWrapper = document.querySelector('.chat-window-wrapper');
          
          if (chatWindow && chatWrapper) {
            (chatWindow as HTMLElement).style.display = 'none';
            // Ensure wrapper doesn't block the button
            (chatWrapper as HTMLElement).style.pointerEvents = 'none';
            (chatWindow as HTMLElement).style.pointerEvents = 'auto';
          }
        }, 100);
      } catch (error) {
        console.error('Failed to initialize chat:', error);
      }
    };

    initializeChat();
  }, []);

  const toggleChat = () => {
    const chatWindow = document.querySelector('.chat-window');
    if (chatWindow) {
      if (isChatOpen) {
        (chatWindow as HTMLElement).style.display = 'none';
        chatWindow.classList.remove('open');
      } else {
        (chatWindow as HTMLElement).style.display = 'flex';
        chatWindow.classList.add('open');
      }
      setIsChatOpen(!isChatOpen);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <div id="n8n-chat" />
      
      {/* Custom chat bubble button - always visible */}
      <button
  onClick={toggleChat}
  className="chat-button-wrapper"
  aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
>
  <ChatBubbleIcon className="w-[95%] h-[95%]" />
</button>

    </div>
  );
}