ZOBLOX - hosting on EdgeOne Pages
==================================
1. Upload the ZIP (or the unzipped folder) to an EdgeOne Pages project with "Direct Upload".
   After unzipping, index.html must sit at the TOP of what you upload, with the edge-functions folder next to it:
        index.html
        edge-functions/api/index.js
   (If you see a folder inside a folder, upload the inner one.)
2. In the EdgeOne console open KV Storage, create a namespace, and bind it to your project
   with the variable name:  zoblox_kv
3. Redeploy. Then open  https://YOUR-SITE/api  in a browser. You should see {"ok":true,"server":"zoblox",...,"storage":"connected"}.
     - 404 / not found  -> the edge-functions folder was not in the upload (see step 1), or you did not redeploy.
     - storage NOT CONNECTED -> do step 2 and redeploy.
   When both are right, the Zoblox sign-in screen shows no "offline mode" note.

Admin: open your profile (or the account menu) -> Admin panel and enter your admin code. Type "help" in the console.

Email for password resets (optional): open edge-functions/api/index.js, find MAIL_SETTINGS near the bottom, and paste in ONE key
(Bird, MailerSend or Brevo). Never share the key publicly. Without it, use "resetpw <user> <newpassword>" in the admin console.

Notes
- Without steps 1 and 2, Zoblox falls back to OFFLINE mode: accounts, Zobux and leaderboards only exist in each visitor's own browser.
- KV is eventually consistent: changes (gifts, polls, messages, leaderboards) can take up to about a minute to show everywhere.
- Game rewards are reported by the visitor's browser, so a determined cheater could fake scores. Use "lbhide <user>" or "lbclear <board> confirm".
- To change the admin code later, set an environment variable ZOBLOX_ADMIN_CODE in EdgeOne (it overrides the built-in one).
