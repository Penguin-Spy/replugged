import { defineMessages } from "@discord/intl";

export const meta = {
  translationsPath: "./translations",
  secret: false,
  translate: true,
};

// @ts-ignore
export default defineMessages({
  REPLUGGED_ACCOUNT: "Replugged Account",
  REPLUGGED_BADGES_CONTRIBUTOR: "Replugged Contributor",
  REPLUGGED_BADGES_DEVELOPER: "Replugged Developer",
  REPLUGGED_BADGES_EARLY: "Replugged Early User",
  REPLUGGED_BADGES_HUNTER: "Replugged Bug Hunter",
  REPLUGGED_BADGES_STAFF: "Replugged Staff",
  REPLUGGED_BADGES_SUPPORT: "Replugged Support",
  REPLUGGED_BADGES_TRANSLATOR: "Replugged Translator",
  REPLUGGED_BADGES_BOOSTER: "Replugged Server Booster",
  REPLUGGED_BUTTON_GOT_IT: "Got It",
  REPLUGGED_BUTTON_INSTALLER_INSTALLED: "{type} Installed",
  REPLUGGED_BUTTON_INSTALLER_DOWNLOAD: "Download {type}",
  REPLUGGED_CANCEL: "Cancel",
  REPLUGGED_CONFIRM: "Confirm",
  REPLUGGED_OK: "OK",
  REPLUGGED_COMMAND_ERROR_GENERIC:
    "Something went wrong, please try again later. If this issue persists, please contact the Replugged team.",
  REPLUGGED_COMMAND_SUCCESS_GENERIC: "Success",
  REPLUGGED_COMMAND_ENABLE_NAME: "enable",
  REPLUGGED_COMMAND_ENABLE_DESC: "Enable a plugin or theme",
  REPLUGGED_COMMAND_ENABLE_OPTION_ADDON_NAME: "addon",
  REPLUGGED_COMMAND_ADDONS_OPTION_ADDON_DESC: "Choose which addon to enable",
  REPLUGGED_COMMAND_ENABLE_MESSAGE_ENABLED: "{type} {name} has been enabled!",
  REPLUGGED_COMMAND_DISABLE_NAME: "disable",
  REPLUGGED_COMMAND_DISABLE_DESC: "Disable a plugin or theme",
  REPLUGGED_COMMAND_DISABLE_OPTION_ADDON_NAME: "addon",
  REPLUGGED_COMMAND_DISABLE_OPTION_ADDON_DESC: "Choose which addon to disable",
  REPLUGGED_COMMAND_DISABLE_MESSAGE_ENABLED: "{type} {name} has been disabled!",
  REPLUGGED_COMMAND_RELOAD_NAME: "reload",
  REPLUGGED_COMMAND_RELOAD_DESC: "Reload a plugin or theme",
  REPLUGGED_COMMAND_RELOAD_OPTION_ADDON_NAME: "addon",
  REPLUGGED_COMMAND_RELOAD_OPTION_ADDON_DESC: "Choose which addon to reload",
  REPLUGGED_COMMAND_RELOAD_MESSAGE_ENABLED: "{type} {name} has been reloaded!",
  REPLUGGED_COMMAND_LIST_NAME: "list",
  REPLUGGED_COMMAND_LIST_DESC: "List all plugins or themes",
  REPLUGGED_COMMAND_LIST_OPTION_SEND_NAME: "send",
  REPLUGGED_COMMAND_LIST_OPTION_SEND_DESC: "Share the list publicly in chat",
  REPLUGGED_COMMAND_LIST_OPTION_TYPE_NAME: "type",
  REPLUGGED_COMMAND_LIST_OPTION_TYPE_DESC: "What type of addons to show",
  REPLUGGED_COMMAND_LIST_OPTION_TYPE_CHOICE_PLUGIN: "List Plugins",
  REPLUGGED_COMMAND_LIST_OPTION_TYPE_CHOICE_THEME: "List Themes",
  REPLUGGED_COMMAND_LIST_OPTION_VERSION_NAME: "version",
  REPLUGGED_COMMAND_LIST_OPTION_VERSION_DESC: "Include version numbers in the list",
  REPLUGGED_COMMAND_LIST_OPTION_STATUS_NAME: "status",
  REPLUGGED_COMMAND_LIST_OPTION_STATUS_DESC:
    "Whether to show addons that are enabled, disabled or both",
  REPLUGGED_COMMAND_LIST_OPTION_STATUS_CHOICE_ENABLED: "Enabled",
  REPLUGGED_COMMAND_LIST_OPTION_STATUS_CHOICE_DISABLED: "Disabled",
  REPLUGGED_COMMAND_LIST_OPTION_STATUS_CHOICE_BOTH: "Both",
  REPLUGGED_COMMAND_LIST_HEADER_ENABLED: "Enabled {type}",
  REPLUGGED_COMMAND_LIST_HEADER_DISABLED: "Disabled {type}",
  REPLUGGED_COMMAND_LIST_ERROR_SPECIFY:
    "You need to specify whether to send a plugin or theme list",
  REPLUGGED_COMMAND_INSTALL_NAME: "install",
  REPLUGGED_COMMAND_INSTALL_DESC: "Install a plugin or theme",
  REPLUGGED_COMMAND_INSTALL_OPTION_ADDON_NAME: "addon",
  REPLUGGED_COMMAND_INSTALL_OPTION_ADDON_DESC: "Identifier of the addon to install from the source",
  REPLUGGED_COMMAND_INSTALL_OPTION_SOURCE_NAME: "source",
  REPLUGGED_COMMAND_INSTALL_OPTION_SOURCE_DESC: "Source to install the addon from",
  REPLUGGED_COMMAND_INSTALL_OPTION_ID_NAME: "id",
  REPLUGGED_COMMAND_INSTALL_OPTION_ID_DESC:
    "If the source has multiple addons, specify which one to install",
  REPLUGGED_ERROR_ALREADY_INSTALLED: "{name} is already installed.",
  REPLUGGED_ERROR_AN_ERROR_OCCURRED_COMMAND: "An error occurred while executing the command:",
  REPLUGGED_ERROR_CHECK_CONSOLE: "Check the console for more details.",
  REPLUGGED_GENERAL_SETTINGS: "General Settings",
  REPLUGGED_I18N_CONTRIBUTE: "Want to help translate Replugged? Go to our [Weblate]({weblateUrl})!",
  REPLUGGED_I18N_TRANSLATED_PERCENTAGE: "Replugged: {translated,number}% translated",
  REPLUGGED_INSTALL_MODAL_HEADER: "Install {type}",
  REPLUGGED_LINK_NOW: "Link it now",
  REPLUGGED_NOTICES_WELCOME_NEW_USER:
    "Welcome! Replugged has been successfully injected into your Discord client. Feel free to join our Discord server for announcements, support and more!",
  REPLUGGED_NOTICES_JOIN_SERVER_BUTTON: "Join Server",
  REPLUGGED_PLUGIN: "Plugin",
  REPLUGGED_PLUGINS: "Plugins",
  REPLUGGED_QUICKCSS: "Quick CSS",
  REPLUGGED_SETTINGS_ADVANCED_DESC:
    "Don't touch stuff in here if you don't know what you're doing. Unexpected things can happen to your cat.",
  REPLUGGED_SETTINGS_BACKEND: "Backend URL",
  REPLUGGED_SETTINGS_BACKEND_DESC:
    "URL used to fetch some assets and to query Replugged's REST API.",
  REPLUGGED_SETTINGS_DISCORD_EXPERIMENTS: "Enable Discord Experiments",
  REPLUGGED_SETTINGS_DISCORD_EXPERIMENTS_DESC:
    "****WARNING:**** Enabling this gives you access to features that can be detected by Discord and may result in an ****account termination****. Replugged is **not responsible** for what you do with this feature. Leave it disabled if you are unsure. The Replugged Team will **not** provide any support regarding any experiment. **Requires restart**.",
  REPLUGGED_SETTINGS_ERROR_HEADER: "Something went wrong rendering this element!",
  REPLUGGED_SETTINGS_ERROR_RENDER_PANEL: "An error occurred while rendering settings panel.",
  REPLUGGED_SETTINGS_ERROR_COMPONENT_STACK: "Component stack:",
  REPLUGGED_SETTINGS_KEEP_TOKEN: "Keep token stored",
  REPLUGGED_SETTINGS_KEEP_TOKEN_DESC:
    "Prevents Discord from removing your token from localStorage, reducing the numbers of unwanted logouts.",
  REPLUGGED_SETTINGS_NO_CLYDE: "Eradicate Clyde",
  REPLUGGED_SETTINGS_NO_CLYDE_DESC:
    'Replaces [Clyde]({clydeUrl}) in Replugged commands with a mixed range of avatars and usernames selected by plug-in developers - fallbacks to "Replugged" by default.',
  REPLUGGED_SETTINGS_OVERLAY: "Overlay DevTools",
  REPLUGGED_SETTINGS_OVERLAY_DESC:
    "Opens a DevTools window that lets you inspect what's happening within Discord's in-game overlay.",
  REPLUGGED_SETTINGS_RESTART:
    "This setting requires you to restart Discord to take effect. Do you want to restart Discord now?",
  REPLUGGED_SNIPPET_APPLIED: "Snippet Applied",
  REPLUGGED_SNIPPET_APPLY: "Apply Snippet",
  REPLUGGED_SNIPPET_LINE1:
    "Snippet from #css-snippets applied the {date, date, medium} at {date, time, medium}",
  REPLUGGED_SNIPPET_LINE2: "Created by {authorTag} ({authorId})",
  REPLUGGED_THEME: "Theme",
  REPLUGGED_THEMES: "Themes",
  REPLUGGED_UPDATES_AVAILABLE: "{count, plural, =1 {# update is} other {# updates are}} available.",
  REPLUGGED_UPDATES_AWAITING_RELOAD_TITLE: "Reload Required",
  REPLUGGED_UPDATES_CHECK: "Check for Updates",
  REPLUGGED_UPDATES_ENABLE: "Enable Updates",
  REPLUGGED_UPDATES_FAILED: "Some updates failed!",
  REPLUGGED_UPDATES_FORCE: "Force Update",
  REPLUGGED_UPDATES_LAST_CHECKED: "Last checked: {date}",
  REPLUGGED_UPDATES_OPEN_UPDATER: "Open Updater",
  REPLUGGED_UPDATES_OPTS_AUTO: "Check for updates automatically",
  REPLUGGED_UPDATES_OPTS_AUTO_DESC:
    "Replugged will automatically check for updates and show you an alert when one is available. Updates will not be installed until you choose to update it. Only official addons will be checked automatically.",
  REPLUGGED_UPDATES_OPTS_CHANGE_LOGS: "Open Change Log",
  REPLUGGED_UPDATES_OPTS_CHANGE_LOGS_DESC: "Missed the change log, or want to see it again?",
  REPLUGGED_UPDATES_OPTS_CONCURRENCY: "Update Concurrency Limit",
  REPLUGGED_UPDATES_OPTS_CONCURRENCY_DESC:
    "How many concurrent tasks Replugged will run in background to check for updates. Minimum 1. If unsure, leave 2.",
  REPLUGGED_UPDATES_OPTS_DEBUG: "Debugging Information",
  REPLUGGED_UPDATES_OPTS_DEBUG_DESC:
    "Things that you may find useful for troubleshooting or flexing on some stats.",
  REPLUGGED_UPDATES_OPTS_DEBUG_CATEGORY_SYSTEM_DISCORD: "System / Discord",
  REPLUGGED_UPDATES_OPTS_DEBUG_CATEGORY_PROCESS_VERSIONS: "Process Versions",
  REPLUGGED_UPDATES_OPTS_DEBUG_LOCALE: "Locale:",
  REPLUGGED_UPDATES_OPTS_DEBUG_OS: "OS:",
  REPLUGGED_UPDATES_OPTS_DEBUG_OS_64BIT: "64-bit",
  REPLUGGED_UPDATES_OPTS_DEBUG_ARCH: "Architecture:",
  REPLUGGED_UPDATES_OPTS_DEBUG_DISTRO: "Distro:",
  REPLUGGED_UPDATES_OPTS_DEBUG_RELEASE_CHANNEL: "Release Channel:",
  REPLUGGED_UPDATES_OPTS_DEBUG_APP_VERSION: "App Version:",
  REPLUGGED_UPDATES_OPTS_DEBUG_BUILD_NUMBER: "Build Number:",
  REPLUGGED_UPDATES_OPTS_DEBUG_BUILD_ID: "Build ID:",
  REPLUGGED_UPDATES_OPTS_DEBUG_EXPERIMENTS: "Experiments:",
  REPLUGGED_UPDATES_OPTS_DEBUG_COMMANDS: "Commands:",
  REPLUGGED_UPDATES_OPTS_DEBUG_COPIED: "Copied!",
  REPLUGGED_UPDATES_OPTS_DEBUG_COPY: "Copy",
  REPLUGGED_UPDATES_OPTS_DEBUG_SETTINGS: "Settings:",
  REPLUGGED_UPDATES_OPTS_DEBUG_PLUGINS: "Plugins:",
  REPLUGGED_UPDATES_OPTS_DEBUG_PLUGINS_SHOW_LESS: "Show less",
  REPLUGGED_UPDATES_OPTS_DEBUG_PLUGINS_SHOW_MORE: "Show more",
  REPLUGGED_UPDATES_OPTS_DEBUG_UNAUTHORIZED_PLUGINS: "Unauthorized plugins:",
  REPLUGGED_UPDATES_OPTS_DEBUG_BETTERDISCORD_PLUGINS: "BetterDiscord Plugins:",
  REPLUGGED_UPDATES_OPTS_DEBUG_THEMES: "Themes:",
  REPLUGGED_UPDATES_OPTS_DEBUG_LABS: "Labs:",
  REPLUGGED_UPDATES_OPTS_DEBUG_SETTINGS_SYNC: "Settings Sync:",
  REPLUGGED_UPDATES_OPTS_DEBUG_CACHED_FILES: "Cached Files:",
  REPLUGGED_UPDATES_OPTS_DEBUG_ACCOUNT: "Account:",
  REPLUGGED_UPDATES_OPTS_DEBUG_APIS: "APIs:",
  REPLUGGED_UPDATES_OPTS_DEBUG_CONNECTIONS: "Connections:",
  REPLUGGED_UPDATES_OPTS_DEBUG_UPSTREAM: "Upstream:",
  REPLUGGED_UPDATES_OPTS_DEBUG_REVISION: "Revision:",
  REPLUGGED_UPDATES_OPTS_DEBUG_BRANCH: "Branch:",
  REPLUGGED_UPDATES_OPTS_DEBUG_LATEST: "Latest:",
  REPLUGGED_UPDATES_OPTS_DEBUG_REPLUGGED_PATH: "Replugged Path",
  REPLUGGED_UPDATES_OPTS_DEBUG_DISCORD_PATH: "Discord Path",
  REPLUGGED_UPDATES_OPTS_INTERVAL: "Update Check Interval",
  REPLUGGED_UPDATES_OPTS_INTERVAL_DESC:
    "How frequently Replugged will check for updates. Minimum 10 minutes.",
  REPLUGGED_UPDATES_OPTS_RELEASE: "Change Release Channel",
  REPLUGGED_UPDATES_OPTS_RELEASE_DESC:
    "You can choose between the stable branch, or the development branch. Stable branch will only get major updates, security and critical updates. If unsure, stay on stable.",
  REPLUGGED_UPDATES_OPTS_RELEASE_DEVELOP_BTN: "Switch to development branch",
  REPLUGGED_UPDATES_OPTS_RELEASE_MODAL:
    "Are you sure you want to change your release channel? Replugged will reload your Discord client.",
  REPLUGGED_UPDATES_OPTS_RELEASE_MODAL_HEADER: "Change release channel",
  REPLUGGED_UPDATES_OPTS_RELEASE_STABLE_BTN: "Switch to stable",
  REPLUGGED_UPDATES_OPTS_RELEASE_SWITCH: "Switch",
  REPLUGGED_UPDATES_OPTS_TOAST_ENABLED: "Show update checker toast",
  REPLUGGED_UPDATES_OPTS_TOAST_ENABLED_DESC:
    "Show an overlay over the client which says updates are being checked for, and if updates are found, prompt you to update. Only applies if update in background is disabled.",
  REPLUGGED_UPDATES_UPDATER: "Updater",
  REPLUGGED_UPDATES_UPDATE: "Update",
  REPLUGGED_UPDATES_UPDATING: "Updating Replugged…",
  REPLUGGED_UPDATES_UPDATING_ITEM: "Updating…",
  REPLUGGED_UPDATES_UP_TO_DATE: "Everything is up to date.",
  REPLUGGED_PLUGIN_EMBED_COPY: "Copy Link",
  REPLUGGED_PLUGIN_EMBED_VIEW_REPO: "View Repo",
  REPLUGGED_PLUGIN_EMBED_COPIED: "Copied!",
  REPLUGGED_PLUGIN_EMBED_WHATISTHIS: "What is this?",
  REPLUGGED_PLUGIN_EMBED_WHATISTHIS_CONTENT:
    "This is a Replugged feature. It allows you to install plugins or themes straight from chat.\nSimply hit the install button on the embed.",
  REPLUGGED_ADDON_DELETE: "Delete {type}",
  REPLUGGED_ADDON_PAGE_OPEN: "Open {type} Page",
  REPLUGGED_ADDON_PROFILE_OPEN: "Open {type} Profile",
  REPLUGGED_ADDON_RELOAD: "Reload {type}",
  REPLUGGED_ADDON_SETTINGS: "Open {type} Settings",
  REPLUGGED_ADDON_UNINSTALL_PROMPT_BODY:
    "Are you sure you want to uninstall this {type}? This cannot be undone.",
  REPLUGGED_ADDON_UNINSTALL: "Uninstall {name}",
  REPLUGGED_ADDONS_FOLDER_OPEN: "Open {type} Folder",
  REPLUGGED_ADDONS_LOAD_MISSING: "Load Missing {type}",
  REPLUGGED_ADDONS_TITLE_COUNT: "{type} ({count, number})",
  REPLUGGED_LIST_RESULTS: "{count, plural, =1 {# match} other {# matches}}",
  REPLUGGED_NO_ADDON_RESULTS: "No {type} matched your search.",
  REPLUGGED_NO_ADDONS_INSTALLED: "No {type} installed.",
  REPLUGGED_QUICKCSS_CHANGES_APPLY: "Apply Changes",
  REPLUGGED_SEARCH_FOR_ADDON: "Search for a {type}",
  REPLUGGED_TOAST_ADDON_DISABLE_FAILED: "Failed to disable {name}",
  REPLUGGED_TOAST_ADDON_DISABLE_SUCCESS: "Disabled {name}",
  REPLUGGED_TOAST_ADDON_ENABLE_FAILED: "Failed to enable {name}",
  REPLUGGED_TOAST_ADDON_ENABLE_SUCCESS: "Enabled {name}",
  REPLUGGED_TOAST_ADDON_RELOAD_FAILED: "Failed to reload {name}",
  REPLUGGED_TOAST_ADDON_RELOAD_SUCCESS: "Reloaded {name}",
  REPLUGGED_TOAST_ADDON_TOGGLE_FAILED: "Failed to toggle {name}",
  REPLUGGED_TOAST_ADDON_UNINSTALL_FAILED: "Failed to uninstall {name}",
  REPLUGGED_TOAST_ADDON_UNINSTALL_SUCCESS: "Uninstalled {name}",
  REPLUGGED_TOAST_ADDONS_LOAD_MISSING_FAILED: "Failed to load missing {type}",
  REPLUGGED_TOAST_ADDONS_LOAD_MISSING_SUCCESS: "Loaded missing {type}",
  REPLUGGED_TOAST_PROFILE_FETCH_FAILED: "Failed to fetch user profile",
  REPLUGGED_TOAST_QUICKCSS_CODE_FORMAT_FAILED: "Failed to format code",
  REPLUGGED_TOAST_QUICKCSS_CODE_FORMAT_SUCCESS: "Code formatted",
  REPLUGGED_TOAST_QUICKCSS_RELOAD: "Quick CSS reloaded",
  REPLUGGED_SETTINGS_ERROR_SUB_HEADER: "Check console for details.",
  REPLUGGED_INSTALLER_INSTALL_PROMPT_BODY: "Do you want to install {name} {authors}?",
  REPLUGGED_TOAST_INSTALLER_ADDON_INSTALL_FAILED: "Failed to install {name}.",
  REPLUGGED_TOAST_INSTALLER_ADDON_LOAD_FAILED: "{name} was installed but could not be loaded.",
  REPLUGGED_TOAST_INSTALLER_ADDON_INSTALL_SUCCESS: "{name} installed successfully.",
  REPLUGGED_TOAST_INSTALLER_ADDON_FETCH_INFO_FAILED: "Failed to get info for addon.",
  REPLUGGED_TOAST_INSTALLER_ADDON_CANCELED_INSTALL: "Install canceled.",
  REPLUGGED_QUICKCSS_FOLDER_OPEN: "Open Quick CSS Folder",
  REPLUGGED_ADDON_AUTHORS_ONE: "by {author1}",
  REPLUGGED_ADDON_AUTHORS_TWO: "by {author1} and {author2}",
  REPLUGGED_ADDON_AUTHORS_THREE: "by {author1}, {author2}, and {author3}",
  REPLUGGED_ADDON_AUTHORS_MANY:
    "by {author1}, {author2}, {author3}, and {count, plural, =1 {# other} other {# others}}",
  REPLUGGED_CONFIRM_INSTALL: "Install",
  REPLUGGED_UPDATES_UPDATE_ALL: "Update All",
  REPLUGGED_UPDATES_UPDATE_TO: "Update to {version}",
  REPLUGGED_UPDATES_TOAST_NO_NEW: "No new updates available.",
  REPLUGGED_UPDATES_TOAST_NEW:
    "{count, plural, =1 {# new update} other {# new updates}} available!",
  REPLUGGED_UPDATES_TOAST_FAILED_ONE: "Update failed!",
  REPLUGGED_UPDATES_TOAST_FAILED_ALL: "Some updates failed!",
  REPLUGGED_UPDATES_TOAST_SUCCESS_ONE: "Update completed successfully.",
  REPLUGGED_UPDATES_TOAST_SUCCESS_ALL: "All updates completed successfully.",
  REPLUGGED_PLUGIN_INSTALL_RELOAD_PROMPT_BODY:
    "{name} requires a reload to work properly. Reload now?",
  REPLUGGED_RELOAD: "Reload",
  REPLUGGED_UPDATES_UPDATE_NOUN: "Update",
  REPLUGGED_VERSION: "Replugged {version, select, dev {[DEV MODE]} other {v{version}}}",
  REPLUGGED_SETTINGS_BADGES: "Enable Replugged Badges",
  REPLUGGED_SETTINGS_BADGES_DESC: "Show custom Replugged badges on user profiles.",
  REPLUGGED_I18N: "Replugged Translations",
  REPLUGGED_VIEW_UPDATES: "View {count, plural, =1 {# Update} other {# Updates}}",
  REPLUGGED_DEVELOPER_MODE_WARNING:
    "You are currently running Replugged in developer mode and Replugged will not be able to update itself. [Switch to production mode]({url}).",
  REPLUGGED_ADDON_BROWSE: "Browse {type}",
  REPLUGGED_ADDON_NOT_REVIEWED: "Unreviewed {type}",
  REPLUGGED_ADDON_NOT_REVIEWED_DESC:
    "This {type} has not been reviewed by the Replugged team and could harm your computer. Use at your own risk.",
  REPLUGGED_SETTINGS_QUICKCSS_AUTO_APPLY: "Automatically Apply Quick CSS",
  REPLUGGED_SETTINGS_QUICKCSS_AUTO_APPLY_DESC:
    "Automatically apply changes to Quick CSS as you type.",
  REPLUGGED_SETTINGS_DEV_COMPANION: "Reconnect Dev Companion",
  REPLUGGED_SETTINGS_DEV_COMPANION_DESC:
    "Reconnects the Dev Companion coremod to the VSCode extension.",
  REPLUGGED_SETTINGS_DEV_COMPANION_RECONNECT: "Reconnect",
  REPLUGGED_SETTINGS_ADVANCED: "Advanced Settings",
  REPLUGGED_SETTINGS_REACT_DEVTOOLS: "Enable React DevTools",
  REPLUGGED_SETTINGS_REACT_DEVTOOLS_DESC:
    "Loads the React DevTools extension, allowing you to inspect the React tree and debug more easily. **Requires restart**.",
  REPLUGGED_SETTINGS_REACT_DEVTOOLS_FAILED: "Failed to download React DevTools.",
  REPLUGGED_INSTALLER_OPEN_STORE: "View in Store",
  REPLUGGED_SETTINGS_ADDON_EMBEDS: "Show Addon Embeds",
  REPLUGGED_SETTINGS_ADDON_EMBEDS_DESC:
    "Show a card with information on an addon when a store/install link is shared in chat.",
  REPLUGGED_RESTART: "Restart",
  REPLUGGED_SETTINGS_RESTART_TITLE: "Restart Required",
  REPLUGGED_SETTINGS_TRANSPARENT: "Transparent Window",
  REPLUGGED_SETTINGS_TRANSPARENT_DESC:
    "Makes the Discord window transparent, primarily useful for theming. **Requires restart**.",
  REPLUGGED_SETTINGS_TRANSPARENT_ISSUES_WINDOWS:
    "****WARNING:**** This will break **window snapping**. In some cases, you may experience a black background, such as when the window is cut off at the top or bottom due to the monitor resolution, or when the development tools are open and docked.",
  REPLUGGED_SETTINGS_TRANSPARENT_ISSUES_LINUX:
    "****WARNING:**** **Hardware acceleration** may need to be turned **off**. In some cases, you may experience a black background, such as when the window is cut off at the top or bottom due to the monitor resolution, or when the development tools are open and docked.",
  REPLUGGED_SETTINGS_ERROR_PLUGIN_NAME: "Plugin: {name}",
  REPLUGGED_STORE: "Store",
});