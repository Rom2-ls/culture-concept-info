import { Body, Controller, Post } from '@nestjs/common';
import { Message } from '@anthropic-ai/sdk/resources';

import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async askAI(@Body() chatInput: string): Promise<Message> {
    return this.chatService.askAI(chatInput);
  }
}
