/*This file was automatically generated */
// tslint:disable
// @ts-nocheck
/* eslint-disable */

import { DialogType } from '@common/model/messages/dialogType';
import { MessageDto } from '../../../../../service.dropbop/src/area/messages/dto/message.dto';
import { DialogUserDto } from '../../../../../service.dropbop/src/area/messages/dto/dialog.dto';
import { UserProfileMessageDto } from '../../../../../service.dropbop/src/area/users/dto/user-profile-message.dto';

export interface DialogViewModel {

  id: string;

  type: DialogType;

  title?: string;

  createdAt: Date;

  lastMessage?: MessageDto;

  dialogUser: DialogUserDto;

  users: UserProfileMessageDto[];

  avatarLink?: string;

  lastMessageDate: Date;

  hasUnread: boolean;

  unreadCount: number;

}
