import LeaderboardModel from '../../models/leaderboard';
import { createEvent } from '../../utils/event';
import { EventCategory } from '../../enums/event';

export const messageCreate = createEvent({
    type: EventCategory.Discord,
    name: 'messageCreate',

    callback: async (bot, message) => {
        const memberId = message?.member?.id;

        if (
            !memberId ||
            message.author.id === bot.client.user!.id ||
            message.author.bot
        ) {
            return;
        }

        const member = await LeaderboardModel.findOneAndUpdate(
            {
                guildId: message.guildId,
                userId: memberId,
            },
            { $setOnInsert: { lastMessageSentDate: Date.now() } },
            {
                upsert: true,
                new: true,
            },
        ).exec();

        const minutes = Math.floor((Date.now() - parseInt(member.lastMessageSentDate!)) / 60000);

        if (minutes >= 5) {
            await LeaderboardModel.findOneAndUpdate(
                {
                    guildId: message.guildId,
                    userId: memberId,
                },
                {
                    $inc: { points: 1 },
                    $set: { lastMessageSentDate: Date.now() },
                },
            ).exec();
        }
    },
});