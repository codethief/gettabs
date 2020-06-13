Since this is my first web extension, I took some personal notes while
developing it. I'll leave them here in case I need them again once day.


# Basics
- Very useful information: https://blog.mozilla.org/addons/

- Helpful: https://webextensions.in/ allows generating a skeleton

- Getting started:
  https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/

- Debugging extensions:
  https://extensionworkshop.com/documentation/develop/debugging/
  - Debugging popups:
    https://extensionworkshop.com/documentation/develop/debugging/#debugging-popups


# Notes on how to implement the extension's functionality
- The extension's functionality is accessed using a so-called browser
  action (toolbar button) which upon click will open a popup. See
  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups
  - On Android, the popup will just be another tab

- Use
  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query
  to obtain the list of tabs
  - Browser support:
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs#Browser_compatibility
    - browser.tabs.query() needs at least Firefox for Android 54 (or regular Firefox 45)


# Android
- Android-specific stuff:
  https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/
  https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#testing-in-firefox-for-android
  https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/
  - No support of bookmark handling for extensions on Android.
    Fantastic.

- Bad news regarding future extension support on Android:
  https://blog.mozilla.org/addons/2020/02/11/faq-for-extension-support-in-new-firefox-for-android/
