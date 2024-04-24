---
name: "meerkat-patrol-android-tv"
url: "https://github.com/mllukasik/meerkat-patrol-android-tv"
createdAt: "2024-02-03"
---
# MeerkatPatrol - android tv ip camera client

Android TV rtsp streaming client. Very simple application to view "real time" stream from ip camera.

This application should only be used for testing purpose or if u don't mind that your access credential are stored as plain text :D. 

To implement:
- rtsp URI contains basic auth so we need to obscure this link when we show it and also:
  - change shared preferences to encrypted version
  - ask for password when showing full link
- multi stream view
- stream load optimization
- optimization test
- implement onvif to be able to move camera using tv controller