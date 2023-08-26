import { ClientEvents, ChatInputCommandInteraction, SlashCommandBuilder, Awaitable } from 'discord.js';
import { App, Events, EventType } from './app/app';

export type DiscordEvents = ClientEvents;

export interface AudioPlayerEvents {
    error: [discord.CommandInteraction, Error];
}

type EventCallback<
    T extends EventType,
    U extends keyof Events[T]
> = (
    app: App,
    ...args: Events[T][U]
) => Promise<void>

export type CommandCallback = (
    app: App,
    interaction: ChatInputCommandInteraction,
) => Promise<void>;

export type CommandBuilder = Omit<SlashCommandBuilder,
    'addSubcommandGroup' |
    'addSubcommand' |
    'addBooleanOption' |
    'addUserOption' |
    'addChannelOption' |
    'addRoleOption' |
    'addAttachmentOption' |
    'addMentionableOption' |
    'addStringOption' |
    'addIntegerOption' |
    'addNumberOption'
>;

export interface LeaderboardEntry {
    userId: string;
    points: number;
    isMember: boolean;
}

export interface Leaderboard {
    guildId: string;
    entries: LeaderboardEntry[],
}
