import { State } from '@ngxs/store';
import { IMessage } from '../models/common.model';

export class GetAllMessage {
  static readonly type = '[Message] Get All';
}

export interface MessageStateModel {
  messages: IMessage[] | undefined;
}


@State<MessageStateModel>({
  name: 'Message',
  defaults: {
    messages: [],
  },
})