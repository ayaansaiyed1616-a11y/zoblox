# Neon Tag Arena — Zoblox Game 4

An original, non-graphic, fast arcade tag game designed for Zoblox players. This is a **single-player prototype**, not a copy of Roblox RIVALS. The game includes a hologram Target Studio, a computer-controlled Rival Duel and 48 collectible fantasy power-orbs.

## Launch
Zoblox's signed-in Games catalog links to `games/neon-tag/index.html`. That small loader retrieves `packed.b64` from the same directory, decodes the compressed, standalone game document and starts it. The build contains no remote asset dependencies.

## Controls
- Keyboard + mouse: WASD movement, mouse look, click/Enter to tag, Space to dash, 1/2 to change orb, Escape to return to menu.
- Browser-compatible gamepads: left stick moves, right stick looks, right trigger tags, A/Cross dashes, LB/RB cycles orbs, Options/Menu opens menu.
- Mobile: left virtual movement stick, right look pad, large TAG and DASH buttons. Test on real devices before claiming hardware certification.

## Game modes
**Target Studio:** 60-second hologram target practice, score and combo points, personal best. **Rival Duel:** solo match against a moving, abstract AI opponent. First to five tags wins.

## Save and admin
The game stores `zoblox_neon_tag_v1` for best score, wins, session count and selected orb. The catalog registers the key for the Zoblox save capture pipeline; the deployed remote backend must separately be updated to accept new game id `nt` before remote cross-device saves can be promised.

The game consumes existing Zoblox server-granted boosts, mapping `speed` to faster movement, `power` to a wider fantasy tag field, `god` to immunity from AI scoring and `infboost` to a shorter tag delay. Do not add a public admin bypass; only use server-issued admin boosts.

## Source and maintenance
The shipped game is stored as an ordinary gzip-compressed UTF-8 HTML file encoded in base64. To recover readable, editable source:
```bash
base64 -d games/neon-tag/packed.b64 | gzip -d > neon-tag-source.html
```
The source can be edited, headless-tested and re-packed with:
```python
import base64, gzip
from pathlib import Path
s=Path('neon-tag-source.html').read_bytes()
Path('games/neon-tag/packed.b64').write_text(base64.b64encode(gzip.compress(s,compresslevel=9,mtime=0)).decode('ascii'))
```

## Current validation
The standalone game and a standalone compressed-document loader were run through headless Chromium via Playwright with desktop, mobile-viewport/touch and simulated Gamepad API input. Physical DualSense controllers, live EdgeOne routes, Supabase cross-device save behavior and a production-hosted fetch of the compressed payload require separate checks.
