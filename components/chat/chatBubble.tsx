import { useEffect } from 'react';
import '@n8n/chat/style.css';
import './n8n-chat-custom.css';
import { ChatBubbleIcon } from '../chat/chatBubbleIcon';

export function ChatBubble() {
  useEffect(() => {
    // Dynamically import createChat to avoid proxy error
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
              footer: 'Powered by Juice Financial',
              closeButtonTooltip: 'Close chat',
            },
          },
        });
      } catch (error) {
        console.error('Failed to initialize chat:', error);
      }
    };

    initializeChat();
  }, []);

  return (
    <div id="n8n-chat" className="fixed bottom-6 right-6 z-50">
      {/* Custom chat bubble icon - purely visual with pointer-events: none */}
      <div className="chat-button-wrapper" aria-label="Chat button visual">
        <ChatBubbleIcon className="w-[95%] h-[95%]" />
      </div>
    </div>
  );
}