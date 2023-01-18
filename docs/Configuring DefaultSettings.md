# Configuring DefaultSettings

1. Run the pack at least once after installing DefaultSettings, then exit.
2. Open your file manager to "minecraft/config/defaultsettings" Ignore the following:
  - config/defaultsettings/sharedConfigs
  - config/defaultsettings/sharedConfigs/ignore.json 
3. Copy all modded config files and folders to include in your modpack to "config/defaultsettings/Default/" as shown in the example.
4. Start Minecraft and create or open an existing world.
5. Run the command "/ds save [override option]"
  - "/ds save -o" Override option enforces your new configs for new modpack users.
  - "/ds save -of" Force Override option includes any existing users. 
  - This command generates the file "config/defaultsettings.json" and copies the following files to "config/defaultsettings/Default/":
    - keys.txt
    - options.txt
    - servers.dat
6. Export your pack and only include the following from the "minecraft/config" folder:
  - config/defaultsettings/
  - config/defaultsettings.json
7. **Do NOT export the "ds_private_storage.json"** (.minecraft/ds_private_storage.json) file will break the pack.
8. Test your modpack install zip file.
