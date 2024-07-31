import type {
    AnySelectMenuInteraction,
    APIModalInteractionResponseCallbackData,
    ApplicationCommand,
    ApplicationCommandType,
    AutocompleteInteraction,
    AwaitModalSubmitOptions,
    BooleanCache,
    ButtonInteraction,
    CacheType,
    ChannelSelectMenuInteraction,
    ChatInputCommandInteraction,
    Collection,
    CommandInteraction,
    CommandInteractionOptionResolver,
    ContextMenuCommandInteraction,
    Entitlement,
    GuildResolvable,
    InteractionDeferReplyOptions,
    InteractionEditReplyOptions,
    InteractionReplyOptions,
    InteractionResponse,
    InteractionWebhook,
    JSONEncodable,
    Locale,
    MentionableSelectMenuInteraction,
    Message,
    MessageComponentInteraction,
    MessageContextMenuCommandInteraction,
    MessagePayload,
    MessageResolvable,
    ModalComponentData,
    ModalSubmitInteraction,
    PermissionsBitField,
    RepliableInteraction,
    RoleSelectMenuInteraction,
    Snowflake,
    StringSelectMenuInteraction,
    User,
    UserContextMenuCommandInteraction,
    UserSelectMenuInteraction
} from "discord.js";
import { CommandContext } from "./CommandContext.js";

export class CommandInteractionContext extends CommandContext {
    public constructor(public override readonly context: CommandInteraction) {
        super(context);
    }

    public get deferred(): boolean {
        return this.context.deferred;
    }

    public get command():
        | ApplicationCommand
        | ApplicationCommand<{ guild: GuildResolvable }>
        | null {
        return this.context.command;
    }

    public get options(): Omit<
        CommandInteractionOptionResolver,
        | "getAttachment"
        | "getBoolean"
        | "getChannel"
        | "getFocused"
        | "getInteger"
        | "getMember"
        | "getMentionable"
        | "getMessage"
        | "getNumber"
        | "getRole"
        | "getString"
        | "getSubcommand"
        | "getSubcommandGroup"
        | "getUser"
    > {
        return this.context.options;
    }

    public get commandId(): string {
        return this.context.commandId;
    }

    public get commandName(): string {
        return this.context.commandName;
    }

    public get commandType(): ApplicationCommandType {
        return this.context.commandType;
    }

    public get commandGuildId(): string | null {
        return this.context.commandGuildId;
    }

    public get ephemeral(): boolean | null {
        return this.context.ephemeral;
    }

    public get replied(): boolean {
        return this.context.replied;
    }

    public get webhook(): InteractionWebhook {
        return this.context.webhook;
    }

    public get token(): string {
        return this.context.token;
    }

    public get user(): User {
        return this.context.user;
    }

    public get version(): number {
        return this.context.version;
    }

    public get appPermissions(): Readonly<PermissionsBitField> | null {
        return this.context.appPermissions;
    }

    public get memberPermissions(): Readonly<PermissionsBitField> | null {
        return this.context.memberPermissions;
    }

    public get locale(): Locale {
        return this.context.locale;
    }

    public get guildLocale(): Locale | null {
        return this.context.guildLocale;
    }

    public get entitlements(): Collection<string, Entitlement> {
        return this.context.entitlements;
    }

    public inCachedGuild(): this is CommandInteraction<"cached"> {
        return this.context.inCachedGuild();
    }

    public inRawGuild(): this is CommandInteraction<"raw"> {
        return this.context.inRawGuild();
    }

    public deferReply(
        options: InteractionDeferReplyOptions
    ): Promise<Message<BooleanCache<CacheType>>>;

    public deferReply(
        options?: InteractionDeferReplyOptions
    ): Promise<InteractionResponse<BooleanCache<CacheType>>>;

    public async deferReply(
        options?: InteractionDeferReplyOptions | undefined
    ): Promise<InteractionResponse<BooleanCache<CacheType>> | Message<BooleanCache<CacheType>>> {
        return this.context.deferReply(options);
    }

    public async deleteReply(message?: MessageResolvable): Promise<void> {
        return this.context.deleteReply(message);
    }

    public async editReply(
        options: InteractionEditReplyOptions | MessagePayload | string
    ): Promise<Message<BooleanCache<CacheType>>> {
        return this.context.editReply(options);
    }

    public async fetchReply(message?: Snowflake): Promise<Message<BooleanCache<CacheType>>> {
        return this.context.fetchReply(message);
    }

    public async followUp(
        options: InteractionReplyOptions | MessagePayload | string
    ): Promise<Message<BooleanCache<CacheType>>> {
        return this.context.followUp(options);
    }

    public async showModal(
        modal:
            | APIModalInteractionResponseCallbackData
            | JSONEncodable<APIModalInteractionResponseCallbackData>
            | ModalComponentData
    ): Promise<void> {
        return this.context.showModal(modal);
    }

    public async sendPremiumRequired(): Promise<void> {
        return this.context.sendPremiumRequired();
    }

    public async awaitModalSubmit(
        options: AwaitModalSubmitOptions<ModalSubmitInteraction>
    ): Promise<ModalSubmitInteraction> {
        return this.context.awaitModalSubmit(options);
    }

    public isButton(): this is ButtonInteraction {
        return this.context.isButton();
    }

    public isAutocomplete(): this is AutocompleteInteraction {
        return this.context.isAutocomplete();
    }

    public isChatInputCommand(): this is ChatInputCommandInteraction {
        return this.context.isChatInputCommand();
    }

    public isCommand(): this is CommandInteraction {
        return this.context.isCommand();
    }

    public isContextMenuCommand(): this is ContextMenuCommandInteraction {
        return this.context.isContextMenuCommand();
    }

    public isMessageComponent(): this is MessageComponentInteraction {
        return this.context.isMessageComponent();
    }

    public isMessageContextMenuCommand(): this is MessageContextMenuCommandInteraction {
        return this.context.isMessageContextMenuCommand();
    }

    public isModalSubmit(): this is ModalSubmitInteraction {
        return this.context.isModalSubmit();
    }

    public isUserContextMenuCommand(): this is UserContextMenuCommandInteraction {
        return this.context.isUserContextMenuCommand();
    }

    public isSelectMenu(): this is StringSelectMenuInteraction {
        return this.context.isSelectMenu();
    }

    public isAnySelectMenu(): this is AnySelectMenuInteraction {
        return this.context.isAnySelectMenu();
    }

    public isStringSelectMenu(): this is StringSelectMenuInteraction {
        return this.context.isStringSelectMenu();
    }

    public isUserSelectMenu(): this is UserSelectMenuInteraction {
        return this.context.isUserSelectMenu();
    }

    public isRoleSelectMenu(): this is RoleSelectMenuInteraction {
        return this.context.isRoleSelectMenu();
    }

    public isMentionableSelectMenu(): this is MentionableSelectMenuInteraction {
        return this.context.isMentionableSelectMenu();
    }

    public isChannelSelectMenu(): this is ChannelSelectMenuInteraction {
        return this.context.isChannelSelectMenu();
    }

    public isRepliable(): this is RepliableInteraction {
        return this.context.isRepliable();
    }
}