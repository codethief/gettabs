A simple web extension to easily obtain a list with the URLs of all open
tabs for easy copy & paste. Since I only use Firefox (both on my desktop
and on Android) I haven't tested this on Chrome.

# Usage
To obtain the list of tabs

- in the desktop version of Firefox, click on the extension's icon next
  to the address bar.
- in Firefox for Android, tap on the "GetTabs" item in the menu.


# Required permissions
The extension requires the following permissions:

- Access tabs (i.e. their URLs)
- Write to the clipboard


# Debugging / development
First, install web-ext:

```
$ npm install --global web-ext
```

To test the extension in the desktop version of Firefox, run `$ web-ext
run` inside the `/src` folder.

To test it in Firefox for Android, in turn, first make sure adb is
installed, your Android device is connected through USB and USB
debugging is enabled, and the device is listed by `$ adb devices`. Write
down the device ID listed by the latter command. Then (again in the
`/src` folder) run

```
web-ext run --verbose --target=firefox-android --android-device=<insert device ID from adb devices>
```

(You might have to (re-)start Firefox on your Android device before
running this command.)


# Building
To build the extension run `$ web-ext build` inside the `src` folder.
Note that this will create an *unsigned* version of the extension which,
at least in non-developer releases of Firefox, cannot be installed. A
signed build can be created through

```
web-ext sign --api-key=<AMO_JWT_ISSUER> --api-secret=<AMO_JWT_SECRET>
```

where the JWT issuer and secret need to be obtained beforehand from
[addons.mozilla.org](https://addons.mozilla.org/developers/addon/api/key/).



# Similar projects
- [Tabs
  Export](https://addons.mozilla.org/en-US/firefox/addon/tabs-export/)
  - This extension saves all tabs to a file. Before that, however, it
    also reloads all tabs (which I didn't want because I'm afraid of
    reloading each of my 400 or so tabs on my Android device at once).
- [Another
  way](https://android.stackexchange.com/questions/143490/how-can-i-export-all-my-open-firefox-tabs-to-a-text-file/205587#205587)
  to easily obtain the current list of tabs.


# License
© 2020 [codethief](https://codethief.eu). License: [GPL 3.0](LICENSE.md).


# Disclaimer of warranty
THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
