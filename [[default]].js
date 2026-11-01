/* ===== Zoblox avatar: item catalog + blocky 3D geometry (shared by hub, server and Blox Fruits) =====
   Coordinates match the Blox Fruits character rig: origin at the feet, +y up, +z the way the character faces.
   Head centre (0,2.66,0) size .62 | torso centre (0,1.75,0) size 1 x 1.2 x .55 | arm pivots (+-.68,2.25,0) | leg pivots (+-.26,1.15,0).
   A box is [attach, colour, sx, sy, sz, x, y, z]. attach: root | armL | armR | legL | legR | arms | legs (arms/legs = both sides).
   Colour may be "$skin" "$shirt" "$pants" "$hair" (the player's own colours), optionally "col:0.7" to darken (<1) or lighten (>1). */
var ZAV = (function () {
  var SLOTS = ['hair', 'hat', 'face', 'glasses', 'neck', 'shirt', 'pants', 'shoes', 'hands', 'back'];
  var SLOT_NAMES = { hair: 'Hair', hat: 'Hats', face: 'Faces', glasses: 'Glasses', neck: 'Neck', shirt: 'Tops', pants: 'Bottoms', shoes: 'Shoes', hands: 'Hands', back: 'Back' };
  var DEFAULTS = { hair: 'hair_short', face: 'face_smile', shirt: 'top_tee', pants: 'btm_jeans', shoes: 'shoe_sneak' };
  var ITEMS = [], BY = {};
  function B(a, c, sx, sy, sz, x, y, z) { return [a, c, sx, sy, sz, x, y, z]; }
  function R(c, sx, sy, sz, x, y, z) { return ['root', c, sx, sy, sz, x, y, z]; }
  function add(id, slot, name, price, boxes, opt) {
    var it = { id: id, slot: slot, name: name, price: price, boxes: boxes || [], opt: opt || {} };
    ITEMS.push(it); BY[id] = it;
  }
  var H = '$hair';

  /* ---------- hair (tinted with hair colour) ---------- */
  add('hair_short', 'hair', 'Short', 0, [R(H, .68, .22, .68, 0, 2.98, 0)]);
  add('hair_bald', 'hair', 'Bald', 0, []);
  add('hair_buzz', 'hair', 'Buzz Cut', 30, [R(H, .65, .1, .65, 0, 2.96, 0)]);
  add('hair_side', 'hair', 'Side Part', 60, [R(H, .68, .22, .68, 0, 2.98, 0), R(H, .2, .3, .5, -.31, 2.85, .02)]);
  add('hair_spiky', 'hair', 'Spiky', 90, [R(H, .66, .16, .66, 0, 2.97, 0), R(H, .14, .3, .14, -.2, 3.15, 0), R(H, .14, .38, .14, 0, 3.2, 0), R(H, .14, .3, .14, .2, 3.15, 0)]);
  add('hair_mohawk', 'hair', 'Mohawk', 110, [R(H, .14, .34, .62, 0, 3.12, 0), R(H, .6, .06, .6, 0, 2.97, 0)]);
  add('hair_long', 'hair', 'Long', 130, [R(H, .68, .22, .68, 0, 2.98, 0), R(H, .68, .75, .14, 0, 2.62, -.31), R(H, .12, .6, .5, -.34, 2.7, -.05), R(H, .12, .6, .5, .34, 2.7, -.05)]);
  add('hair_pony', 'hair', 'Ponytail', 120, [R(H, .68, .22, .68, 0, 2.98, 0), R(H, .2, .2, .2, 0, 2.95, -.4), R(H, .16, .6, .16, 0, 2.58, -.44)]);
  add('hair_pigtails', 'hair', 'Pigtails', 140, [R(H, .68, .22, .68, 0, 2.98, 0), R(H, .16, .55, .16, -.42, 2.62, -.05), R(H, .16, .55, .16, .42, 2.62, -.05)]);
  add('hair_bun', 'hair', 'Top Bun', 120, [R(H, .68, .22, .68, 0, 2.98, 0), R(H, .3, .3, .3, 0, 3.22, 0)]);
  add('hair_afro', 'hair', 'Afro', 200, [R(H, .98, .85, .98, 0, 3.08, -.03)]);
  add('hair_curly', 'hair', 'Curly Top', 170, [R(H, .7, .2, .7, 0, 2.98, 0), R(H, .26, .26, .26, -.2, 3.2, .05), R(H, .26, .26, .26, .2, 3.2, -.05), R(H, .26, .26, .26, 0, 3.26, .12)]);
  add('hair_messy', 'hair', 'Messy', 150, [R(H, .7, .2, .7, 0, 2.98, 0), R(H, .2, .24, .2, -.25, 3.17, .1), R(H, .2, .3, .2, .15, 3.2, -.1), R(H, .24, .2, .24, .28, 3.1, .15)]);
  add('hair_bob', 'hair', 'Bob Cut', 160, [R(H, .7, .22, .7, 0, 2.98, 0), R(H, .7, .42, .14, 0, 2.78, -.32), R(H, .12, .42, .56, -.35, 2.8, -.02), R(H, .12, .42, .56, .35, 2.8, -.02)]);
  add('hair_emo', 'hair', 'Fringe', 190, [R(H, .7, .22, .7, 0, 2.98, 0), R(H, .5, .22, .1, .06, 2.86, .33), R(H, .12, .5, .5, -.35, 2.72, 0)]);
  add('hair_flat', 'hair', 'Flat Top', 100, [R(H, .66, .34, .66, 0, 3.07, 0)]);
  add('hair_viking', 'hair', 'Wild Mane', 260, [R(H, .72, .26, .72, 0, 3.0, 0), R(H, .8, .9, .2, 0, 2.55, -.36), R(H, .16, .8, .5, -.4, 2.6, -.08), R(H, .16, .8, .5, .4, 2.6, -.08)]);
  add('hair_unicorn', 'hair', 'Unicorn Mane', 420, [R(H, .68, .22, .68, 0, 2.98, 0), R(H, .12, .8, .3, 0, 2.7, -.38), R('#f5f0ff', .1, .46, .1, 0, 3.32, .1)]);

  /* ---------- hats ---------- */
  add('hat_cap', 'hat', 'Baseball Cap', 90, [R('#d64545', .72, .22, .72, 0, 3.07, 0), R('#b53030', .66, .06, .4, 0, 3.0, .5)]);
  add('hat_capback', 'hat', 'Backwards Cap', 90, [R('#3a6fd8', .72, .22, .72, 0, 3.07, 0), R('#2a55a8', .66, .06, .4, 0, 3.0, -.5)]);
  add('hat_beanie', 'hat', 'Beanie', 100, [R('#8a4fd0', .72, .3, .72, 0, 3.1, 0), R('#6c38b0', .76, .1, .76, 0, 3.0, 0), R('#f5f5f5', .16, .14, .16, 0, 3.3, 0)], { nohair: true });
  add('hat_top', 'hat', 'Top Hat', 240, [R('#161616', .95, .06, .95, 0, 3.0, 0), R('#161616', .6, .6, .6, 0, 3.3, 0), R('#c43a3a', .62, .1, .62, 0, 3.1, 0)]);
  add('hat_crown', 'hat', 'Royal Crown', 700, [R('#ffd23f', .72, .2, .72, 0, 3.07, 0), R('#ffd23f', .14, .22, .14, -.28, 3.27, -.28), R('#ffd23f', .14, .22, .14, .28, 3.27, -.28), R('#ffd23f', .14, .22, .14, -.28, 3.27, .28), R('#ffd23f', .14, .22, .14, .28, 3.27, .28), R('#d6204a', .12, .12, .12, 0, 3.12, .37)]);
  add('hat_party', 'hat', 'Party Hat', 120, [R('#ff5ca8', .5, .2, .5, 0, 3.05, 0), R('#ffd23f', .36, .2, .36, 0, 3.25, 0), R('#4cd0ff', .22, .2, .22, 0, 3.45, 0), R('#fff', .1, .1, .1, 0, 3.6, 0)]);
  add('hat_wizard', 'hat', 'Wizard Hat', 520, [R('#3a2a8a', 1.05, .06, 1.05, 0, 3.0, 0), R('#3a2a8a', .66, .3, .66, 0, 3.17, 0), R('#4a38a8', .46, .3, .46, 0, 3.45, 0), R('#5b46c4', .26, .3, .26, 0, 3.75, 0), R('#ffd23f', .12, .12, .12, 0, 3.2, .34)]);
  add('hat_pirate', 'hat', 'Pirate Hat', 420, [R('#151515', 1.0, .2, .66, 0, 3.08, 0), R('#151515', .5, .2, .5, 0, 3.25, 0), R('#f5f5f5', .16, .14, .05, 0, 3.12, .34)]);
  add('hat_chef', 'hat', 'Chef Hat', 160, [R('#fafafa', .68, .14, .68, 0, 3.05, 0), R('#fafafa', .8, .4, .8, 0, 3.32, 0)]);
  add('hat_cowboy', 'hat', 'Cowboy Hat', 340, [R('#a8743a', 1.1, .06, .9, 0, 3.0, 0), R('#a8743a', .66, .3, .62, 0, 3.17, 0), R('#6a4220', .68, .08, .64, 0, 3.08, 0)]);
  add('hat_helmet', 'hat', 'Knight Helmet', 600, [R('#aab3bf', .74, .52, .74, 0, 3.0, 0), R('#2a2f36', .5, .1, .06, 0, 2.95, .38), R('#d64545', .1, .3, .6, 0, 3.4, 0)], { nohair: true });
  add('hat_halo', 'hat', 'Halo', 450, [R('#fff2a0', .6, .06, .06, 0, 3.4, .3), R('#fff2a0', .6, .06, .06, 0, 3.4, -.3), R('#fff2a0', .06, .06, .6, .3, 3.4, 0), R('#fff2a0', .06, .06, .6, -.3, 3.4, 0)]);
  add('hat_horns', 'hat', 'Devil Horns', 380, [R('#c4202e', .12, .3, .12, -.22, 3.1, 0), R('#c4202e', .12, .3, .12, .22, 3.1, 0), R('#c4202e', .1, .14, .1, -.26, 3.3, 0), R('#c4202e', .1, .14, .1, .26, 3.3, 0)]);
  add('hat_cat', 'hat', 'Cat Ears', 200, [R('#3a3a42', .2, .26, .14, -.22, 3.1, 0), R('#3a3a42', .2, .26, .14, .22, 3.1, 0), R('#ff9ac8', .1, .14, .06, -.22, 3.08, .05), R('#ff9ac8', .1, .14, .06, .22, 3.08, .05)]);
  add('hat_bunny', 'hat', 'Bunny Ears', 220, [R('#fafafa', .16, .7, .12, -.18, 3.3, 0), R('#fafafa', .16, .7, .12, .18, 3.3, 0), R('#ffb3d0', .08, .5, .06, -.18, 3.3, .05), R('#ffb3d0', .08, .5, .06, .18, 3.3, .05)]);
  add('hat_antlers', 'hat', 'Antlers', 360, [R('#8a5a30', .1, .5, .1, -.22, 3.2, 0), R('#8a5a30', .1, .5, .1, .22, 3.2, 0), R('#8a5a30', .3, .1, .1, -.34, 3.35, 0), R('#8a5a30', .3, .1, .1, .34, 3.35, 0), R('#8a5a30', .3, .1, .1, -.3, 3.15, 0), R('#8a5a30', .3, .1, .1, .3, 3.15, 0)]);
  add('hat_headband', 'hat', 'Sweatband', 60, [R('#ff4d6d', .68, .12, .68, 0, 2.9, 0)]);
  add('hat_bandana', 'hat', 'Bandana', 80, [R('#d64545', .68, .16, .68, 0, 2.95, 0), R('#d64545', .12, .3, .1, 0, 2.8, -.36)], {});
  add('hat_viking', 'hat', 'Viking Helmet', 480, [R('#9aa3ad', .72, .34, .72, 0, 3.07, 0), R('#f5e6c4', .12, .3, .12, -.4, 3.2, 0), R('#f5e6c4', .12, .3, .12, .4, 3.2, 0), R('#f5e6c4', .1, .14, .1, -.44, 3.4, 0), R('#f5e6c4', .1, .14, .1, .44, 3.4, 0)], { nohair: true });
  add('hat_propeller', 'hat', 'Propeller Cap', 260, [R('#37c26a', .72, .2, .72, 0, 3.06, 0), R('#ffd23f', .06, .14, .06, 0, 3.22, 0), R('#e63946', .6, .04, .12, 0, 3.3, 0), R('#3a8bff', .12, .04, .6, 0, 3.3, 0)]);
  add('hat_sombrero', 'hat', 'Sombrero', 320, [R('#e8c25a', 1.35, .06, 1.35, 0, 3.0, 0), R('#e8c25a', .5, .4, .5, 0, 3.22, 0), R('#d64545', .54, .08, .54, 0, 3.08, 0)]);
  add('hat_santa', 'hat', 'Santa Hat', 200, [R('#d62839', .72, .3, .72, 0, 3.1, 0), R('#d62839', .46, .3, .46, -.05, 3.35, 0), R('#fff', .76, .12, .76, 0, 3.0, 0), R('#fff', .16, .16, .16, -.15, 3.55, 0)], { nohair: true });
  add('hat_flowers', 'hat', 'Flower Crown', 240, [R('#ff7ab8', .14, .14, .14, -.28, 3.02, .2), R('#ffd23f', .14, .14, .14, 0, 3.04, .32), R('#ff7ab8', .14, .14, .14, .28, 3.02, .2), R('#7bd36a', .6, .06, .62, 0, 2.98, 0)]);
  add('hat_headphones', 'hat', 'Headphones', 280, [R('#2a2a33', .7, .08, .1, 0, 3.05, 0), R('#2a2a33', .12, .3, .1, -.36, 2.95, 0), R('#2a2a33', .12, .3, .1, .36, 2.95, 0), R('#ff4d6d', .16, .34, .3, -.42, 2.7, 0), R('#ff4d6d', .16, .34, .3, .42, 2.7, 0)]);
  add('hat_pumpkin', 'hat', 'Pumpkin Head', 500, [R('#ff8a1f', .74, .74, .74, 0, 2.7, 0), R('#3a8a2a', .1, .18, .1, 0, 3.15, 0), R('#222', .14, .14, .05, -.16, 2.78, .38), R('#222', .14, .14, .05, .16, 2.78, .38), R('#222', .4, .1, .05, 0, 2.52, .38)], { nohair: true });
  add('hat_astro', 'hat', 'Space Helmet', 900, [R('#e8edf2', .8, .8, .8, 0, 2.7, 0), R('#4cc9f0:0.6', .64, .46, .06, 0, 2.7, .39), R('#e63946', .14, .14, .06, .2, 2.98, .4)], { nohair: true });
  add('hat_dragon', 'hat', 'Dragon Horns', 1100, [R('#2a2a33', .14, .4, .14, -.24, 3.17, -.05), R('#2a2a33', .14, .4, .14, .24, 3.17, -.05), R('#ff6a2a', .1, .16, .1, -.24, 3.42, -.1), R('#ff6a2a', .1, .16, .1, .24, 3.42, -.1)]);

  /* ---------- faces ---------- */
  var Z = .32;
  add('face_smile', 'face', 'Smile', 0, [R('#111', .3, .05, .03, 0, 2.5, Z)]);
  add('face_grin', 'face', 'Big Grin', 60, [R('#111', .38, .1, .03, 0, 2.5, Z), R('#fff', .3, .05, .03, 0, 2.52, Z + .01)]);
  add('face_none', 'face', 'Poker Face', 0, [R('#111', .2, .03, .03, 0, 2.5, Z)]);
  add('face_angry', 'face', 'Angry', 80, [R('#111', .16, .04, .04, -.15, 2.84, Z), R('#111', .16, .04, .04, .15, 2.84, Z), R('#111', .26, .04, .03, 0, 2.48, Z)]);
  add('face_surprised', 'face', 'Surprised', 70, [R('#111', .12, .16, .03, 0, 2.47, Z), R('#fff', .13, .13, .02, -.15, 2.7, Z + .02), R('#fff', .13, .13, .02, .15, 2.7, Z + .02)]);
  add('face_tongue', 'face', 'Silly Tongue', 100, [R('#111', .3, .05, .03, 0, 2.5, Z), R('#ff6b8b', .12, .12, .03, .06, 2.43, Z)]);
  add('face_blush', 'face', 'Blush', 110, [R('#111', .3, .05, .03, 0, 2.5, Z), R('#ff8aa8', .14, .08, .02, -.2, 2.58, Z), R('#ff8aa8', .14, .08, .02, .2, 2.58, Z)]);
  add('face_freckles', 'face', 'Freckles', 90, [R('#111', .3, .05, .03, 0, 2.5, Z), R('#a0643a', .04, .04, .02, -.2, 2.6, Z), R('#a0643a', .04, .04, .02, -.12, 2.57, Z), R('#a0643a', .04, .04, .02, .2, 2.6, Z), R('#a0643a', .04, .04, .02, .12, 2.57, Z)]);
  add('face_mustache', 'face', 'Mustache', 130, [R('#111', .2, .04, .03, 0, 2.45, Z), R('#2a1a10', .36, .08, .05, 0, 2.55, Z + .02)]);
  add('face_beard', 'face', 'Full Beard', 220, [R('#2a1a10', .66, .26, .2, 0, 2.43, .24), R('#2a1a10', .14, .3, .5, -.31, 2.5, 0), R('#2a1a10', .14, .3, .5, .31, 2.5, 0)]);
  add('face_goatee', 'face', 'Goatee', 150, [R('#2a1a10', .22, .22, .12, 0, 2.38, Z), R('#111', .24, .04, .03, 0, 2.5, Z)]);
  add('face_scar', 'face', 'Battle Scar', 160, [R('#111', .3, .05, .03, 0, 2.5, Z), R('#c46a5a', .04, .34, .02, .17, 2.72, Z + .01)]);
  add('face_eyepatch', 'face', 'Eyepatch', 200, [R('#111', .3, .05, .03, 0, 2.5, Z), R('#151515', .2, .2, .04, .15, 2.7, Z + .01), R('#151515', .62, .04, .62, 0, 2.86, 0)]);
  add('face_fangs', 'face', 'Vampire Fangs', 250, [R('#111', .3, .05, .03, 0, 2.5, Z), R('#fff', .05, .1, .03, -.1, 2.44, Z + .01), R('#fff', .05, .1, .03, .1, 2.44, Z + .01)]);
  add('face_robot', 'face', 'Robot Face', 380, [R('#4cffb0', .34, .06, .03, 0, 2.5, Z), R('#4cffb0', .12, .12, .03, -.15, 2.7, Z + .02), R('#4cffb0', .12, .12, .03, .15, 2.7, Z + .02)]);
  add('face_cat', 'face', 'Cat Nose', 140, [R('#ff9ac8', .1, .08, .04, 0, 2.58, Z + .01), R('#111', .3, .04, .03, 0, 2.47, Z), R('#fff', .24, .02, .02, -.28, 2.58, Z), R('#fff', .24, .02, .02, .28, 2.58, Z)]);
  add('face_cool', 'face', 'Smirk', 40, [R('#111', .2, .05, .03, .06, 2.5, Z)]);

  /* ---------- glasses ---------- */
  add('gl_round', 'glasses', 'Round Glasses', 120, [R('#222', .22, .22, .04, -.15, 2.7, Z + .03), R('#222', .22, .22, .04, .15, 2.7, Z + .03), R('#cdeeff:1', .15, .15, .05, -.15, 2.7, Z + .04), R('#cdeeff:1', .15, .15, .05, .15, 2.7, Z + .04), R('#222', .1, .04, .04, 0, 2.72, Z + .03)]);
  add('gl_shades', 'glasses', 'Shades', 180, [R('#111', .28, .14, .05, -.15, 2.7, Z + .04), R('#111', .28, .14, .05, .15, 2.7, Z + .04), R('#111', .64, .03, .05, 0, 2.74, Z + .04)]);
  add('gl_square', 'glasses', 'Nerd Glasses', 120, [R('#3a3a45', .26, .2, .04, -.15, 2.7, Z + .03), R('#3a3a45', .26, .2, .04, .15, 2.7, Z + .03), R('#dbeeff', .18, .13, .05, -.15, 2.7, Z + .04), R('#dbeeff', .18, .13, .05, .15, 2.7, Z + .04)]);
  add('gl_3d', 'glasses', '3D Glasses', 150, [R('#ff3b3b', .26, .18, .05, -.15, 2.7, Z + .04), R('#3bb8ff', .26, .18, .05, .15, 2.7, Z + .04), R('#f5f5f5', .64, .04, .05, 0, 2.8, Z + .03)]);
  add('gl_heart', 'glasses', 'Heart Glasses', 220, [R('#ff4d8d', .24, .22, .05, -.15, 2.7, Z + .04), R('#ff4d8d', .24, .22, .05, .15, 2.7, Z + .04)]);
  add('gl_monocle', 'glasses', 'Monocle', 260, [R('#ffd23f', .24, .24, .04, .15, 2.7, Z + .03), R('#e8f6ff', .17, .17, .05, .15, 2.7, Z + .04), R('#ffd23f', .03, .4, .03, .26, 2.45, Z + .03)]);
  add('gl_visor', 'glasses', 'Cyber Visor', 480, [R('#00e5ff', .66, .16, .06, 0, 2.7, Z + .04), R('#0a1a2a', .7, .05, .06, 0, 2.8, Z + .03)]);
  add('gl_goggles', 'glasses', 'Aviator Goggles', 300, [R('#7a4a22', .3, .24, .05, -.15, 2.7, Z + .04), R('#7a4a22', .3, .24, .05, .15, 2.7, Z + .04), R('#ffb347:0.9', .2, .16, .06, -.15, 2.7, Z + .05), R('#ffb347:0.9', .2, .16, .06, .15, 2.7, Z + .05), R('#4a3015', .7, .05, .66, 0, 2.7, 0)]);

  /* ---------- neck ---------- */
  add('nk_scarf', 'neck', 'Cozy Scarf', 140, [R('#e63946', 1.04, .22, .64, 0, 2.38, 0), R('#e63946', .22, .6, .1, .3, 2.1, .3)]);
  add('nk_bow', 'neck', 'Bow Tie', 110, [R('#d62839', .16, .14, .06, -.14, 2.34, .29), R('#d62839', .16, .14, .06, .14, 2.34, .29), R('#9a1a28', .1, .1, .08, 0, 2.34, .3)]);
  add('nk_tie', 'neck', 'Necktie', 110, [R('#2a4fd0', .16, .1, .06, 0, 2.32, .29), R('#2a4fd0', .2, .8, .05, 0, 1.9, .29)]);
  add('nk_chain', 'neck', 'Gold Chain', 400, [R('#ffd23f', .5, .06, .06, 0, 2.28, .3), R('#ffd23f', .06, .3, .06, -.22, 2.15, .3), R('#ffd23f', .06, .3, .06, .22, 2.15, .3), R('#ffd23f', .18, .18, .06, 0, 1.95, .3)]);
  add('nk_medal', 'neck', 'Champion Medal', 350, [R('#e63946', .34, .5, .04, 0, 2.15, .29), R('#ffd23f', .3, .3, .06, 0, 1.85, .3)]);
  add('nk_lei', 'neck', 'Flower Lei', 180, [R('#ff7ab8', .16, .16, .1, -.34, 2.28, .28), R('#ffd23f', .16, .16, .1, -.12, 2.22, .3), R('#ff7ab8', .16, .16, .1, .12, 2.22, .3), R('#ffd23f', .16, .16, .1, .34, 2.28, .28)]);
  add('nk_bandana', 'neck', 'Neck Bandana', 90, [R('#2b6cd6', 1.0, .2, .62, 0, 2.38, 0), R('#2b6cd6', .3, .3, .06, 0, 2.18, .3)]);
  add('nk_pearls', 'neck', 'Pearl Necklace', 300, [R('#fff7f0', .52, .06, .06, 0, 2.3, .3), R('#fff7f0', .08, .2, .06, -.22, 2.2, .3), R('#fff7f0', .08, .2, .06, .22, 2.2, .3)]);
  add('nk_camera', 'neck', 'Camera', 260, [R('#2a2a33', .1, .5, .05, -.3, 2.1, .3), R('#2a2a33', .1, .5, .05, .3, 2.1, .3), R('#3a3a45', .46, .3, .24, 0, 1.78, .4), R('#9fd0ff', .16, .16, .06, 0, 1.78, .54)]);

  /* ---------- tops (tinted by your shirt colour; sleeves too) ---------- */
  add('top_tee', 'shirt', 'T-Shirt', 0, []);
  add('top_stripes', 'shirt', 'Striped Tee', 90, [R('#ffffff', 1.02, .14, .57, 0, 1.95, 0), R('#ffffff', 1.02, .14, .57, 0, 1.55, 0)]);
  add('top_polo', 'shirt', 'Polo', 110, [R('$shirt:1.25', .5, .1, .6, 0, 2.3, 0), R('#f5f5f5', .08, .3, .58, 0, 2.15, 0)]);
  add('top_hoodie', 'shirt', 'Hoodie', 220, [R('$shirt:0.85', 1.0, .3, .3, 0, 2.4, -.34), R('$shirt:0.8', .7, .3, .06, 0, 1.3, .3), R('#f5f5f5', .05, .5, .04, -.12, 2.1, .29), R('#f5f5f5', .05, .5, .04, .12, 2.1, .29)]);
  add('top_tank', 'shirt', 'Tank Top', 100, [], { sleeve: 'skin' });
  add('top_vest', 'shirt', 'Puffer Vest', 200, [R('$shirt:0.8', 1.04, .5, .6, 0, 2.05, 0), R('$shirt:0.8', 1.04, .5, .6, 0, 1.45, 0)], { sleeve: 'skin' });
  add('top_jacket', 'shirt', 'Jacket', 260, [R('$shirt:0.75', .2, 1.2, .58, -.4, 1.75, 0), R('$shirt:0.75', .2, 1.2, .58, .4, 1.75, 0), R('#f5f5f5', .5, 1.1, .56, 0, 1.75, 0), R('$shirt:0.7', 1.04, .14, .6, 0, 2.3, 0)]);
  add('top_tux', 'shirt', 'Tuxedo', 480, [R('#fafafa', .46, 1.1, .56, 0, 1.78, .01), R('#111', .26, 1.2, .58, -.37, 1.75, 0), R('#111', .26, 1.2, .58, .37, 1.75, 0), R('#111', .1, .1, .06, 0, 2.28, .3)], { sleeve: '#151515' });
  add('top_armor', 'shirt', 'Plate Armor', 650, [R('#aab3bf', 1.06, .9, .6, 0, 1.9, 0), R('#7c8793', 1.06, .26, .6, 0, 1.28, 0), R('#ffd23f', .2, .2, .05, 0, 1.95, .31)], { sleeve: '#8c97a3' });
  add('top_overalls', 'shirt', 'Overalls', 200, [R('#3a62c8', 1.0, .6, .58, 0, 1.45, 0), R('#3a62c8', .16, .7, .58, -.3, 2.0, 0), R('#3a62c8', .16, .7, .58, .3, 2.0, 0), R('#ffd23f', .1, .1, .06, -.3, 2.2, .3), R('#ffd23f', .1, .1, .06, .3, 2.2, .3)]);
  add('top_star', 'shirt', 'Star Tee', 150, [R('#ffd23f', .36, .36, .05, 0, 1.85, .29), R('#ffd23f', .14, .14, .05, 0, 2.1, .29)]);
  add('top_heart', 'shirt', 'Heart Tee', 150, [R('#ff4d6d', .18, .18, .05, -.1, 1.9, .29), R('#ff4d6d', .18, .18, .05, .1, 1.9, .29), R('#ff4d6d', .24, .14, .05, 0, 1.78, .29), R('#ff4d6d', .1, .1, .05, 0, 1.66, .29)]);
  add('top_hero', 'shirt', 'Hero Suit', 520, [R('#ffd23f', .4, .4, .05, 0, 1.9, .29), R('#d62839', .22, .22, .06, 0, 1.9, .3), R('$shirt:0.7', 1.04, .16, .6, 0, 1.18, 0)], { sleeve: '$shirt' });
  add('top_labcoat', 'shirt', 'Lab Coat', 300, [R('#f7f7fa', 1.06, 1.2, .6, 0, 1.75, 0), R('#cfd6dd', .08, 1.2, .62, 0, 1.75, 0), R('#4cc9f0', .16, .16, .06, .3, 1.6, .31)], { sleeve: '#f7f7fa' });
  add('top_robe', 'shirt', 'Wizard Robe', 420, [R('#5b46c4', 1.1, 1.3, .62, 0, 1.7, 0), R('#ffd23f', .1, 1.3, .64, 0, 1.7, 0), R('#ffd23f', .3, .1, .64, 0, 1.15, 0)], { sleeve: '#5b46c4' });
  add('top_ninja', 'shirt', 'Ninja Gi', 380, [R('#e63946', 1.04, .14, .6, 0, 1.2, 0), R('#151515', .4, 1.0, .58, 0, 1.78, 0)], { sleeve: '#1a1a22' });
  add('top_sailor', 'shirt', 'Sailor Top', 170, [R('#2a4a8a', 1.04, .3, .6, 0, 2.2, 0), R('#fff', .5, .1, .62, 0, 2.28, 0), R('#e63946', .2, .12, .05, 0, 2.05, .3)]);
  add('top_flame', 'shirt', 'Flame Tee', 280, [R('#ff8a1f', 1.02, .2, .57, 0, 1.28, 0), R('#ffd23f', .5, .16, .58, 0, 1.3, 0), R('#ff4d1f', .3, .3, .58, -.3, 1.42, 0)]);
  add('top_galaxy', 'shirt', 'Galaxy Tee', 360, [R('#7a3bff', 1.02, .4, .57, 0, 1.9, 0), R('#fff', .06, .06, .05, -.2, 2.1, .29), R('#fff', .06, .06, .05, .25, 1.8, .29), R('#4cd0ff', .08, .08, .05, .1, 2.15, .29)]);

  /* ---------- bottoms (tinted by your pants colour) ---------- */
  add('btm_jeans', 'pants', 'Jeans', 0, []);
  add('btm_shorts', 'pants', 'Shorts', 80, [B('legs', '$pants', .46, .55, .46, 0, -.28, 0)], { legcol: 'skin' });
  add('btm_cargo', 'pants', 'Cargo Pants', 160, [B('legs', '$pants:0.8', .1, .3, .24, .22, -.5, 0), R('$pants:0.7', 1.04, .1, .58, 0, 1.18, 0)]);
  add('btm_skirt', 'pants', 'Skirt', 150, [R('$pants', 1.12, .5, .66, 0, 1.12, 0)], { legcol: 'skin' });
  add('btm_sweats', 'pants', 'Sweatpants', 120, [B('legs', '#f5f5f5', .05, 1.15, .45, .22, -.575, 0)]);
  add('btm_knight', 'pants', 'Knight Greaves', 400, [B('legs', '#aab3bf', .48, .5, .48, 0, -.4, 0), B('legs', '#8c97a3', .5, .18, .5, 0, -.1, 0)], { legcol: '#7c8793' });
  add('btm_patch', 'pants', 'Patched Jeans', 130, [B('legs', '#d9b44a', .2, .2, .06, 0, -.45, .23)]);
  add('btm_camo', 'pants', 'Camo Pants', 220, [B('legs', '#3d5a2a', .2, .3, .46, 0, -.3, 0), B('legs', '#6b8a3a', .2, .26, .46, 0, -.8, 0)], { legcol: '#5a7a34' });
  add('btm_tutu', 'pants', 'Tutu', 260, [R('#ff9ad0', 1.3, .12, .8, 0, 1.2, 0), R('#ffb8e0', 1.1, .1, .7, 0, 1.12, 0)]);
  add('btm_ninja', 'pants', 'Ninja Pants', 240, [B('legs', '#e63946', .47, .1, .47, 0, -.1, 0)], { legcol: '#1a1a22' });
  add('btm_hero', 'pants', 'Hero Tights', 300, [B('legs', '#ffd23f', .47, .14, .47, 0, -.9, 0)]);

  /* ---------- shoes ---------- */
  add('shoe_sneak', 'shoes', 'Sneakers', 0, [], { shoe: '#222222' });
  add('shoe_white', 'shoes', 'White Kicks', 80, [B('legs', '#6a7380', .47, .06, .57, 0, -1.12, .05)], { shoe: '#f5f5f5' });
  add('shoe_red', 'shoes', 'Red Runners', 90, [B('legs', '#fff', .47, .06, .57, 0, -1.12, .05)], { shoe: '#e63946' });
  add('shoe_boots', 'shoes', 'Boots', 130, [B('legs', '#4a2f18', .47, .35, .47, 0, -.92, 0)], { shoe: '#5a3a20' });
  add('shoe_cowboy', 'shoes', 'Cowboy Boots', 200, [B('legs', '#8a5a30', .47, .4, .47, 0, -.9, 0), B('legs', '#ffd23f', .1, .1, .05, 0, -.82, .24)], { shoe: '#a8743a' });
  add('shoe_flip', 'shoes', 'Flip-Flops', 70, [], { shoe: '#4cc9f0' });
  add('shoe_rocket', 'shoes', 'Rocket Boots', 600, [B('legs', '#ff8a1f', .3, .16, .3, 0, -1.25, 0), B('legs', '#ffd23f', .18, .14, .18, 0, -1.4, 0)], { shoe: '#c4202e' });
  add('shoe_clown', 'shoes', 'Clown Shoes', 180, [B('legs', '#ff5ca8', .52, .22, .85, 0, -1.05, .2)], { shoe: '#ffd23f' });
  add('shoe_gold', 'shoes', 'Golden Kicks', 900, [B('legs', '#fff2a0', .47, .06, .57, 0, -1.12, .05)], { shoe: '#ffc83d' });
  add('shoe_slime', 'shoes', 'Slime Shoes', 260, [B('legs', '#7bff7b', .5, .1, .6, 0, -1.12, .05)], { shoe: '#3acc4a' });

  /* ---------- hands ---------- */
  add('hd_glove', 'hands', 'Gloves', 90, [B('arms', '#f5f5f5', .36, .4, .36, 0, -.88, 0)]);
  add('hd_black', 'hands', 'Black Gloves', 110, [B('arms', '#1a1a22', .36, .4, .36, 0, -.88, 0)]);
  add('hd_band', 'hands', 'Wristbands', 70, [B('arms', '#ff4d6d', .36, .1, .36, 0, -.74, 0)]);
  add('hd_gauntlet', 'hands', 'Gauntlets', 420, [B('arms', '#aab3bf', .4, .5, .4, 0, -.8, 0), B('arms', '#ffd23f', .42, .08, .42, 0, -.58, 0)]);
  add('hd_pads', 'hands', 'Shoulder Pads', 330, [B('arms', '#aab3bf', .46, .16, .46, 0, .02, 0), B('arms', '#ffd23f', .18, .06, .18, 0, .12, 0)]);
  add('hd_watch', 'hands', 'Watch', 150, [B('armL', '#2a2a33', .36, .08, .36, 0, -.7, 0), B('armL', '#4cc9f0', .12, .1, .12, 0, -.7, .16)]);
  add('hd_boxing', 'hands', 'Boxing Gloves', 260, [B('arms', '#d62839', .5, .5, .5, 0, -.92, .04)]);
  add('hd_ice', 'hands', 'Frost Gloves', 380, [B('arms', '#9fe8ff', .4, .44, .4, 0, -.88, 0), B('arms', '#e8fbff', .12, .2, .12, 0, -1.16, 0)]);

  /* ---------- back ---------- */
  add('bk_cape', 'back', 'Red Cape', 300, [R('#d62839', 1.0, 1.7, .08, 0, 1.55, -.36), R('#a81c2b', 1.0, .14, .1, 0, 2.38, -.34)]);
  add('bk_backpack', 'back', 'Backpack', 140, [R('#3a6fd8', .8, .9, .3, 0, 1.85, -.42), R('#2a55a8', .6, .3, .1, 0, 1.6, -.6)]);
  add('bk_angel', 'back', 'Angel Wings', 650, [R('#ffffff', .1, 1.0, .5, -.5, 2.05, -.4), R('#ffffff', .1, 1.0, .5, .5, 2.05, -.4), R('#e8f0ff', .1, .7, .4, -.7, 2.2, -.4), R('#e8f0ff', .1, .7, .4, .7, 2.2, -.4)]);
  add('bk_devil', 'back', 'Devil Wings', 650, [R('#b81c2b', .1, 1.0, .5, -.5, 2.05, -.4), R('#b81c2b', .1, 1.0, .5, .5, 2.05, -.4), R('#7a0f1a', .1, .7, .4, -.7, 2.2, -.4), R('#7a0f1a', .1, .7, .4, .7, 2.2, -.4)]);
  add('bk_butterfly', 'back', 'Butterfly Wings', 700, [R('#ff7ac0', .1, .8, .6, -.55, 2.15, -.4), R('#ff7ac0', .1, .8, .6, .55, 2.15, -.4), R('#8a6bff', .1, .5, .5, -.6, 1.65, -.4), R('#8a6bff', .1, .5, .5, .6, 1.65, -.4)]);
  add('bk_jet', 'back', 'Jetpack', 800, [R('#aab3bf', .3, .8, .3, -.25, 1.85, -.45), R('#aab3bf', .3, .8, .3, .25, 1.85, -.45), R('#ff8a1f', .18, .2, .18, -.25, 1.35, -.45), R('#ff8a1f', .18, .2, .18, .25, 1.35, -.45), R('#ffd23f', .1, .16, .1, -.25, 1.2, -.45), R('#ffd23f', .1, .16, .1, .25, 1.2, -.45)]);
  add('bk_sword', 'back', 'Sword on Back', 350, [R('#c9d1d9', .12, 1.7, .06, 0, 1.9, -.34), R('#ffd23f', .5, .1, .1, 0, 1.15, -.34)]);
  add('bk_shield', 'back', 'Round Shield', 280, [R('#8a5a30', .8, .8, .1, 0, 1.8, -.36), R('#ffd23f', .2, .2, .12, 0, 1.8, -.4)]);
  add('bk_guitar', 'back', 'Guitar', 420, [R('#c4702a', .5, .6, .12, 0, 1.4, -.4), R('#7a4a22', .12, .9, .08, 0, 2.15, -.4), R('#151515', .12, .2, .1, 0, 2.7, -.4)]);
  add('bk_tail', 'back', 'Fox Tail', 360, [R('#ff8a1f', .2, .2, .5, 0, 1.2, -.5), R('#ff8a1f', .26, .26, .4, 0, 1.3, -.85), R('#fff', .2, .2, .2, 0, 1.38, -1.1)]);
  add('bk_quiver', 'back', 'Quiver', 230, [R('#6a4220', .3, .8, .3, .1, 1.9, -.42), R('#e8d9b0', .05, .3, .05, .05, 2.45, -.42), R('#e8d9b0', .05, .3, .05, .15, 2.45, -.42)]);
  add('bk_balloon', 'back', 'Balloon', 200, [R('#ff4d6d', .5, .6, .5, .4, 3.6, -.3), R('#ccc', .03, 1.4, .03, .3, 2.6, -.3)]);
  add('bk_sprout', 'back', 'Leaf Sprout', 150, [R('#4cb84c', .3, .12, .12, -.1, 3.3, 0), R('#3a9a3a', .3, .12, .12, .1, 3.36, 0), R('#6a4a2a', .06, .2, .06, 0, 3.15, 0)]);

  /* ---------- colour presets ---------- */
  var SKINS = ['#f9d7b5', '#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#5c3a21', '#ffe0d0', '#ffd9e6', '#d6f5e3', '#bfe0ff', '#c8b6ff', '#7bd389'];
  var CLOTHES = ['#2d7bff', '#e63946', '#2ec4b6', '#ffb02e', '#8a4fd0', '#ff7ac0', '#1f2937', '#f5f5f5', '#3a9a3a', '#ff7a1f', '#6a7380', '#0f3a8a', '#7a1f2c', '#f0e6c8', '#4cc9f0', '#ffd23f'];
  var HAIRS = ['#2a1a10', '#111111', '#6a4220', '#c68c3a', '#f2d16b', '#d64545', '#ff7ac0', '#4a8bff', '#7bd36a', '#8a4fd0', '#e8e8ee', '#ff7a1f'];

  function validColor(c) { return typeof c === 'string' && /^#[0-9a-fA-F]{6}$/.test(c); }
  function defaultOutfit() {
    return { skin: '#f1c27d', shirt: '#2d7bff', pants: '#2a3350', hair: '#2a1a10', eq: { hair: 'hair_short', face: 'face_smile', shirt: 'top_tee', pants: 'btm_jeans', shoes: 'shoe_sneak' } };
  }
  /* returns a sanitised outfit; owned = array of item ids the player owns (free items always allowed) */
  function clean(o, owned) {
    var d = defaultOutfit(); o = o || {};
    var out = { skin: validColor(o.skin) ? o.skin : d.skin, shirt: validColor(o.shirt) ? o.shirt : d.shirt, pants: validColor(o.pants) ? o.pants : d.pants, hair: validColor(o.hair) ? o.hair : d.hair, eq: {} };
    var eq = o.eq || {};
    SLOTS.forEach(function (s) {
      var id = eq[s], it = typeof id === 'string' ? BY[id] : null;
      if (it && it.slot === s && (it.price === 0 || (owned && owned.indexOf(id) >= 0))) out.eq[s] = id;
      else if (DEFAULTS[s] && !(id === null && s === 'face')) out.eq[s] = DEFAULTS[s];
    });
    return out;
  }
  function shade(hex, f) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    var k = function (v) { v = Math.round(v * f); return Math.max(0, Math.min(255, v)); };
    return '#' + [k(r), k(g), k(b)].map(function (v) { return (v < 16 ? '0' : '') + v.toString(16); }).join('');
  }
  function col(c, o) {
    var f = 1, i = c.indexOf(':'); if (i > 0) { f = parseFloat(c.slice(i + 1)); c = c.slice(0, i); }
    if (c.charAt(0) === '$') c = o[c.slice(1)];
    return f === 1 ? c : shade(c, f);
  }
  /* build -> everything a renderer needs: base colours plus the extra boxes with colours resolved */
  function build(outfit) {
    var o = clean(outfit, ITEMS.map(function (i) { return i.id; })); // renderers trust ownership was checked elsewhere
    var res = { skin: o.skin, shirt: o.shirt, pants: o.pants, hair: o.hair, sleeve: o.shirt, legcol: o.pants, shoe: '#222222', nohair: false, extras: [] };
    var hideHair = SLOTS.some(function (s) { var t = BY[o.eq[s]]; return t && t.opt.nohair; });
    SLOTS.forEach(function (s) {
      var it = BY[o.eq[s]]; if (!it) return;
      if (s === 'hair' && hideHair) return;
      var op = it.opt;
      if (op.sleeve) res.sleeve = op.sleeve === 'skin' ? o.skin : col(op.sleeve, o);
      if (op.legcol) res.legcol = op.legcol === 'skin' ? o.skin : col(op.legcol, o);
      if (op.shoe) res.shoe = op.shoe;
            it.boxes.forEach(function (b) {
        var a = b[0], c = col(b[1], o), rest = b.slice(2);
        if (a === 'arms') { res.extras.push(['armL', c].concat(rest)); res.extras.push(['armR', c].concat(rest)); }
        else if (a === 'legs') { res.extras.push(['legL', c].concat(rest)); res.extras.push(['legR', c].concat(rest)); }
        else res.extras.push([a, c].concat(rest));
      });
    });
    res.nohair = true; // hair comes from the hair item boxes
    return res;
  }

  /* ---------- CSS 3D renderer (used by the hub) ---------- */
  var U = 44, YMAX = 4.5, PIV = { root: [0, 0], armL: [-.68, 2.25], armR: [.68, 2.25], legL: [-.26, 1.15], legR: [.26, 1.15] };
  var FACE = [['f', 1], ['b', .68], ['r', .84], ['l', .78], ['t', 1.12], ['d', .58]];
  function boxHTML(c, sx, sy, sz, x, y, z) {
    var w = sx * U, h = sy * U, d = sz * U, o = '';
    function face(k, fw, fh, tr, br) { return '<i style="width:' + fw.toFixed(1) + 'px;height:' + fh.toFixed(1) + 'px;margin:' + (-fh / 2).toFixed(1) + 'px 0 0 ' + (-fw / 2).toFixed(1) + 'px;transform:' + tr + ';background:' + c + ';filter:brightness(' + br + ')"></i>'; }
    o += face('f', w, h, 'translateZ(' + (d / 2).toFixed(1) + 'px)', 1);
    o += face('b', w, h, 'rotateY(180deg) translateZ(' + (d / 2).toFixed(1) + 'px)', .68);
    o += face('r', d, h, 'rotateY(90deg) translateZ(' + (w / 2).toFixed(1) + 'px)', .84);
    o += face('l', d, h, 'rotateY(-90deg) translateZ(' + (w / 2).toFixed(1) + 'px)', .78);
    o += face('t', w, d, 'rotateX(90deg) translateZ(' + (h / 2).toFixed(1) + 'px)', 1.12);
    o += face('d', w, d, 'rotateX(-90deg) translateZ(' + (h / 2).toFixed(1) + 'px)', .58);
    return '<b style="left:' + (x * U).toFixed(1) + 'px;top:' + (-y * U).toFixed(1) + 'px;transform:translateZ(' + (z * U).toFixed(1) + 'px)">' + o + '</b>';
  }
  function rigHTML(b) {
    var g = { root: [], armL: [], armR: [], legL: [], legR: [] };
    var piv = PIV;
    function P(grp, c, sx, sy, sz, x, y, z) { g[grp].push([c, sx, sy, sz, x, y, z]); }
    P('root', b.shirt, 1, 1.2, .55, 0, 1.75, 0); P('root', b.skin, .62, .62, .62, 0, 2.66, 0);
    if (!b.nohair) P('root', b.hair, .68, .22, .68, 0, 2.98, 0);
    P('root', '#111111', .1, .1, .05, -.15, 2.7, .32); P('root', '#111111', .1, .1, .05, .15, 2.7, .32);
    ['armL', 'armR'].forEach(function (a) { P(a, b.sleeve, .32, .7, .32, 0, -.35, 0); P(a, b.skin, .3, .36, .3, 0, -.88, 0); });
    ['legL', 'legR'].forEach(function (l) { P(l, b.legcol, .43, 1.15, .43, 0, -.575, 0); P(l, b.shoe, .45, .2, .55, 0, -1.05, .05); });
    b.extras.forEach(function (e) { P(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]); });
    var html = '';
    ['root', 'armL', 'armR', 'legL', 'legR'].forEach(function (k) {
      var p = piv[k], inner = g[k].map(function (a) { return boxHTML(a[0], a[1], a[2], a[3], a[4], a[5], a[6]); }).join('');
      html += '<div class="zg zg-' + k + '" style="left:' + (p[0] * U).toFixed(1) + 'px;top:' + ((YMAX - p[1]) * U).toFixed(1) + 'px">' + inner + '</div>';
    });
    return html;
  }
  function mount(el, outfit, opt) {
    opt = opt || {};
    var st = { ry: opt.ry == null ? -28 : opt.ry, drag: false, lx: 0, auto: opt.auto !== false, dead: false, t0: Date.now() };
    el.classList.add('zav');
    el.innerHTML = '<div class="zrig"></div>';
    var rig = el.firstChild;
    function apply() {
      var sc = opt.scale || 1;
      rig.style.transform = 'scale(' + sc + ') rotateX(-6deg) rotateY(' + st.ry.toFixed(1) + 'deg)';
    }
    function set(o) { rig.innerHTML = rigHTML(build(o)); }
    function loop() {
      if (st.dead || !el.isConnected) { if (!el.isConnected) st.dead = true; return; }
      if (st.auto && !st.drag) { st.ry += .5; }
      apply(); requestAnimationFrame(loop);
    }
    el.addEventListener('pointerdown', function (e) { st.drag = true; st.lx = e.clientX; try { el.setPointerCapture(e.pointerId); } catch (x) { } });
    el.addEventListener('pointermove', function (e) { if (st.drag) { st.ry += (e.clientX - st.lx) * .8; st.lx = e.clientX; } });
    var up = function () { st.drag = false; };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    set(outfit); loop();
    return { set: set, destroy: function () { st.dead = true; } };
  }
  var CSS = '.zav{position:relative;touch-action:pan-y;cursor:grab;perspective:900px;width:' + (U * 3.2) + 'px;height:' + (U * (YMAX + .2)) + 'px;margin:0 auto;user-select:none;-webkit-user-select:none}' +
    '.zav:active{cursor:grabbing}.zrig{position:absolute;left:50%;top:0;width:0;height:0;transform-style:preserve-3d;transform-origin:0 ' + (YMAX - 1.6) * U + 'px}' +
    '.zg{position:absolute;width:0;height:0;transform-style:preserve-3d}.zg b{position:absolute;width:0;height:0;transform-style:preserve-3d;display:block}' +
    '.zg i{position:absolute;left:0;top:0;display:block;backface-visibility:hidden}' +
    '.zg-armL{transform-origin:0 0;animation:zswL 3.2s ease-in-out infinite}.zg-armR{transform-origin:0 0;animation:zswR 3.2s ease-in-out infinite}' +
    '.zg-legL,.zg-legR{transform-origin:0 0}@keyframes zswL{50%{transform:rotateX(18deg)}}@keyframes zswR{50%{transform:rotateX(-18deg)}}' +
    '@media(prefers-reduced-motion:reduce){.zg-armL,.zg-armR{animation:none}}';
  return { SLOTS: SLOTS, SLOT_NAMES: SLOT_NAMES, DEFAULTS: DEFAULTS, ITEMS: ITEMS, BY: BY, SKINS: SKINS, CLOTHES: CLOTHES, HAIRS: HAIRS, defaultOutfit: defaultOutfit, clean: clean, build: build, col: col, mount: mount, css: CSS, validColor: validColor };
})();
if (typeof module !== 'undefined') module.exports = ZAV;

/* ===== Zoblox core: accounts, Zobux, XP, boosts, shop, friends, leaderboards, admin =====
   Runs on EdgeOne Pages (Edge Function + KV) and inside the page as an offline fallback.
   kv must provide: get(key) -> string|null, put(key, string), delete(key), list({prefix,limit}) -> {keys:[{key}]} */
function createCore(kv, cfg) {
  'use strict';
  cfg = cfg || {};
  const AV = (typeof ZAV !== 'undefined') ? ZAV : require('./avatar.js');
  const ADMIN_SALT = 'zoblox-admin-v1', ADMIN_ITER = 20000;
  const ADMIN_HASH = cfg.adminHash || '7a37f1a6e9b001b49e10fb9987c99a510a9a5060f3f00c65268d3a4d8d38b83c';
  const enc = new TextEncoder();
  const GAMES = ['oe', 'bf', 'rl'];
  const GAME_NAMES = { oe: 'Orchard Evolution', bf: 'Blox Fruits', rl: 'Rocket League' };
  const BOOST_TYPES = ['click', 'income', 'damage', 'health', 'speed', 'power', 'infboost', 'god'];
  const FLAG_BOOSTS = ['infboost', 'god'];
  const SESSION_MS = 30 * 864e5, ADMIN_MS = 30 * 864e5, ONLINE_MS = 120e3;
  const SHOP = [
    { id: 'oe_click2', game: 'oe', name: '2x Picks', desc: 'Every pick counts double. Permanent.', price: 450, type: 'click', mult: 2, mins: 0, glyph: 'C' },
    { id: 'oe_click5', game: 'oe', name: '5x Picks', desc: 'Every pick counts five times. Permanent.', price: 2500, type: 'click', mult: 5, mins: 0, glyph: 'C' },
    { id: 'oe_income2', game: 'oe', name: '2x Helper Income', desc: 'Helpers earn double. Permanent.', price: 750, type: 'income', mult: 2, mins: 0, glyph: 'I' },
    { id: 'oe_income5', game: 'oe', name: '5x Helper Income', desc: 'Helpers earn five times. Permanent.', price: 3500, type: 'income', mult: 5, mins: 0, glyph: 'I' },
    { id: 'bf_dmg2', game: 'bf', name: '2x Damage', desc: 'Hit twice as hard. Permanent.', price: 600, type: 'damage', mult: 2, mins: 0, glyph: 'D' },
    { id: 'bf_dmg5', game: 'bf', name: '5x Damage', desc: 'Hit five times as hard. Permanent.', price: 3000, type: 'damage', mult: 5, mins: 0, glyph: 'D' },
    { id: 'bf_hp2', game: 'bf', name: '2x Health', desc: 'Double max health. Permanent.', price: 450, type: 'health', mult: 2, mins: 0, glyph: 'H' },
    { id: 'bf_hp5', game: 'bf', name: '5x Health', desc: 'Five times max health. Permanent.', price: 2500, type: 'health', mult: 5, mins: 0, glyph: 'H' },
    { id: 'rl_power2', game: 'rl', name: '2x Shot Power', desc: 'Stronger hits on the ball. Permanent.', price: 450, type: 'power', mult: 2, mins: 0, glyph: 'P' },
    { id: 'rl_speed', game: 'rl', name: '1.3x Car Speed', desc: 'A faster car. Permanent.', price: 600, type: 'speed', mult: 1.3, mins: 0, glyph: 'S' }
  ];
  const BOARDS = {
    xp: { title: 'Most XP', game: 'all', get: u => u.xp },
    oe_picks: { title: 'Most clicks', game: 'oe', get: u => u.stats.oe.picks },
    oe_tier: { title: 'Highest evolution', game: 'oe', get: u => (u.stats.oe.picks > 0 ? u.stats.oe.tier + 1 : 0) },
    bf_level: { title: 'Highest level', game: 'bf', get: u => (u.stats.bf.kills > 0 || u.stats.bf.level > 1 ? u.stats.bf.level : 0) },
    rl_goals: { title: 'Most goals', game: 'rl', get: u => u.stats.rl.goals },
    rl_wins: { title: 'Most wins', game: 'rl', get: u => u.stats.rl.wins }
  };

  const T = () => Date.now();
  const hex = buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  const rand = n => { const a = new Uint8Array(n); crypto.getRandomValues(a); return hex(a); };
  async function pbkdf2(pw, salt, iter) {
    const k = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
    return hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: enc.encode(salt), iterations: iter }, k, 256));
  }
  const jget = async k => { const v = await kv.get(k); if (v == null || v === '') return null; try { return JSON.parse(v); } catch (e) { return null; } };
  const jput = (k, v) => kv.put(k, JSON.stringify(v));
  const clampInt = (v, a, b) => Math.min(b, Math.max(a, Math.floor(Number(v)) || 0));
  const levelOf = xp => 1 + Math.floor(Math.sqrt(Math.max(0, xp) / 60));
  const eqHash = (a, b) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };
  const validName = n => typeof n === 'string' && /^[A-Za-z0-9_]{3,20}$/.test(n);
  const RESERVED = ['admin', 'administrator', 'zoblox', 'owner', 'system', 'moderator', 'support'];
  const validColor = c => typeof c === 'string' && /^#[0-9a-fA-F]{6}$/.test(c);

  const getUser = l => jget('u_' + l);
  const saveUser = u => jput('u_' + u.lname, u);
  const getGlob = async () => (await jget('glob')) || {};
  const saveGlob = g => jput('glob', g);

  function newUser(name, salt, hash, avatar) {
    return {
      name, lname: name.toLowerCase(), salt, hash, avatar: validColor(avatar) ? avatar : '#2d7bff',
      created: T(), lastSeen: 0, activity: '', zobux: 100, xp: 0,
      stats: { oe: { picks: 0, tier: 0, rebirths: 0 }, bf: { level: 1, kills: 0 }, rl: { goals: 0, wins: 0 } },
      outfit: Object.assign(AV.defaultOutfit(), { shirt: validColor(avatar) ? avatar : '#2d7bff' }), owned: [], saved: [], email: '', saves: {}, friends: [], boosts: [], lastGift: '', banned: '', hidden: false, sv: 0, bg: '#121317',
      fails: 0, lockUntil: 0, adminFail: 0, adminLock: 0, rate: null, lbv: {}
    };
  }
  function maskEmail(e) { const [a, b] = e.split('@'); return a.slice(0, 2) + '***@' + b; }
  function activeBoosts(u) { const t = T(); return (u.boosts || []).filter(b => !b.until || b.until > t); }
  function effective(u, g) {
    const t = T(), fx = {};
    const all = activeBoosts(u).concat(((g && g.boosts) || []).filter(b => !b.until || b.until > t));
    for (const b of all) {
      if (FLAG_BOOSTS.indexOf(b.type) >= 0) fx[b.type] = true;
      else fx[b.type] = Math.max(fx[b.type] || 1, b.mult);
    }
    return fx;
  }
  function meOf(u, g, withSaves) {
    const o = {
      name: u.name, avatar: u.avatar, zobux: Math.floor(u.zobux), xp: Math.floor(u.xp), level: levelOf(u.xp),
      stats: u.stats, friends: u.friends, boosts: activeBoosts(u), fx: effective(u, g), bg: u.bg, created: u.created,
      outfit: AV.clean(u.outfit, u.owned || []), owned: u.owned || [], saved: u.saved || [], email: u.email ? maskEmail(u.email) : '', hasEmail: !!u.email
    };
    if (withSaves) o.saves = u.saves || {};
    return o;
  }
  function globOf(g) {
    const t = T();
    return {
      announce: g.announce && g.announce.until > t ? g.announce : null,
      gift: g.gift && g.gift.until > t ? g.gift : null
    };
  }

  /* ---- sessions ---- */
  async function newSession(u) {
    const token = rand(24);
    await jput('s_' + token, { u: u.lname, sv: u.sv, exp: T() + SESSION_MS });
    return token;
  }
  async function auth(token) {
    if (!token || !/^[a-f0-9]{48}$/.test(token)) return { err: [401, 'Please log in again.'] };
    const s = await jget('s_' + token);
    if (!s || s.exp < T()) return { err: [401, 'Your session ended. Please log in again.'] };
    const u = await getUser(s.u);
    if (!u || u.sv !== s.sv) return { err: [401, 'Your session ended. Please log in again.'] };
    if (u.banned) return { err: [403, 'This account is banned: ' + u.banned] };
    return { u, token };
  }

  /* ---- leaderboards ---- */
  async function pushBoard(id, u, v) {
    const arr = (await jget('lb_' + id)) || [];
    const i = arr.findIndex(e => e.l === u.lname);
    if (i >= 0) arr.splice(i, 1);
    if (v > 0 && !u.hidden) arr.push({ n: u.name, l: u.lname, v: Math.floor(v), a: u.avatar });
    arr.sort((x, y) => y.v - x.v || x.n.localeCompare(y.n));
    if (arr.length > 100) arr.length = 100;
    await jput('lb_' + id, arr);
  }
  async function updateBoards(u) {
    u.lbv = u.lbv || {};
    for (const id in BOARDS) {
      const v = u.hidden ? 0 : Math.floor(BOARDS[id].get(u));
      if (u.lbv[id] !== v) { await pushBoard(id, u, v); u.lbv[id] = v; }
    }
  }
  async function removeFromBoards(u) { for (const id in BOARDS) await pushBoard(id, u, 0); u.lbv = {}; }

  /* ---- sync (called every ~20s by the page) ---- */
  async function doSync(u, body) {
    const t = T();
    let changed = false;
    const g = await getGlob();
    const aw = body.award || {};
    let ax = clampInt(aw.xp, 0, 2000), az = clampInt(aw.zobux, 0, 1000);
    const hr = u.rate && t - u.rate.t < 36e5 ? u.rate : { t, xp: 0, z: 0 };
    ax = Math.min(ax, Math.max(0, 30000 - hr.xp)); az = Math.min(az, Math.max(0, 15000 - hr.z));
    if (ax || az) { u.xp += ax; u.zobux += az; hr.xp += ax; hr.z += az; u.rate = hr; changed = true; }
    const st = body.stats || {};
    if (st.oe) {
      const o = u.stats.oe;
      o.picks = Math.max(o.picks, clampInt(st.oe.picks, 0, 1e12));
      o.tier = Math.max(o.tier, clampInt(st.oe.tier, 0, 29));
      o.rebirths = Math.max(o.rebirths, clampInt(st.oe.rebirths, 0, 1000));
      changed = true;
    }
    if (st.bf) {
      const o = u.stats.bf;
      o.level = Math.max(o.level, clampInt(st.bf.level, 1, 2550));
      o.kills = Math.max(o.kills, clampInt(st.bf.kills, 0, 1e7));
      changed = true;
    }
    const inc = body.inc || {};
    if (inc.rl) {
      u.stats.rl.goals += clampInt(inc.rl.goals, 0, 50);
      u.stats.rl.wins += clampInt(inc.rl.wins, 0, 20);
      changed = true;
    }
    if (body.save && GAMES.indexOf(body.save.game) >= 0 && body.save.data && typeof body.save.data === 'object') {
      let size = 0; const clean = {};
      for (const k of Object.keys(body.save.data).slice(0, 8)) {
        const v = body.save.data[k];
        if (typeof v === 'string') { size += v.length; if (size < 700000) clean[k] = v; }
      }
      u.saves = u.saves || {}; u.saves[body.save.game] = clean; changed = true;
    }
    if (validColor(body.bg) && body.bg !== u.bg) { u.bg = body.bg; changed = true; }
    if (validColor(body.avatar) && body.avatar !== u.avatar) { u.avatar = body.avatar; changed = true; u.lbv = {}; }
    if (typeof body.activity === 'string') u.activity = GAMES.indexOf(body.activity) >= 0 ? body.activity : '';
    let gift = null;
    if (g.gift && g.gift.until > t && u.lastGift !== g.gift.id) {
      u.zobux += g.gift.zobux || 0; u.xp += g.gift.xp || 0; u.lastGift = g.gift.id; changed = true;
      gift = { zobux: g.gift.zobux || 0, xp: g.gift.xp || 0, msg: g.gift.msg || '' };
    }
    u.lastSeen = t;
    if (changed) await updateBoards(u);
    await saveUser(u);
    return { me: meOf(u, g, false), glob: globOf(g), gift, now: t };
  }

  /* ---- shop & friends ---- */
  async function buy(u, itemId) {
    const it = SHOP.find(x => x.id === itemId);
    if (!it) return [404, { error: 'That item does not exist.' }];
    u.boosts = activeBoosts(u);
    if (u.boosts.some(b => b.src === 'shop' && b.type === it.type && b.mult >= it.mult)) return [400, { error: 'You already own that (or something better).' }];
    if (u.zobux < it.price) return [400, { error: 'Not enough Zobux.' }];
    u.zobux -= it.price;
    u.boosts = u.boosts.filter(b => !(b.src === 'shop' && b.type === it.type));
    u.boosts.push({ type: it.type, mult: it.mult, until: 0, src: 'shop' });
    await saveUser(u);
    return [200, { me: meOf(u, await getGlob(), false), item: it }];
  }
  async function buyAvatar(u, id) {
    const it = AV.BY[id];
    if (!it) return [404, { error: 'That item does not exist.' }];
    u.owned = u.owned || [];
    if (it.price === 0 || u.owned.indexOf(id) >= 0) return [400, { error: 'You already own that.' }];
    if (u.zobux < it.price) return [400, { error: 'Not enough Zobux.' }];
    u.zobux -= it.price; u.owned.push(id);
    await saveUser(u);
    return [200, { me: meOf(u, await getGlob(), false), item: { id: it.id, name: it.name, price: it.price } }];
  }
  async function friendsList(u) {
    const t = T(), out = [];
    for (const l of (u.friends || []).slice(0, 40)) {
      const f = await getUser(l); if (!f) continue;
      out.push({ name: f.name, avatar: f.avatar, level: levelOf(f.xp), online: !f.banned && t - f.lastSeen < ONLINE_MS, activity: f.activity || '' });
    }
    return out;
  }


  /* ---- avatar ---- */
  async function saveOutfit(u, body) {
    const o = AV.clean(body.outfit, u.owned || []);
    u.outfit = o; u.avatar = o.shirt;
    u.lbv = {}; // refresh avatar colour on boards
    await saveUser(u);
  }
  async function savedOutfits(u, path, body) {
    u.saved = u.saved || [];
    if (path === '/avatar/saved/add') {
      const name = String(body.name || '').trim().slice(0, 24) || 'Outfit ' + (u.saved.length + 1);
      if (u.saved.length >= 12) return [400, { error: 'You can keep up to 12 saved avatars. Delete one first.' }];
      u.saved.push({ name, outfit: AV.clean(body.outfit || u.outfit, u.owned || []) });
    } else {
      const i = clampInt(body.index, 0, 999);
      if (!u.saved[i]) return [404, { error: 'No saved avatar there.' }];
      u.saved.splice(i, 1);
    }
    await saveUser(u);
    return [200, { me: meOf(u, await getGlob(), false) }];
  }

  /* ---- people search ---- */
  async function searchUsers(u, q) {
    q = String(q || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 20);
    if (q.length < 2) return [];
    const r = await kv.list({ prefix: 'u_' + q, limit: 12 });
    let keys = r.keys.map(k => k.key.slice(2));
    if (keys.length < 8) {
      const all = await kv.list({ prefix: 'u_', limit: 256 });
      all.keys.forEach(k => { const n = k.key.slice(2); if (n.indexOf(q) > 0 && keys.indexOf(n) < 0) keys.push(n); });
    }
    const out = [], t = T();
    for (const l of keys.slice(0, 10)) {
      const f = await getUser(l); if (!f || f.banned || f.hidden && false) continue;
      out.push({ name: f.name, avatar: f.avatar, level: levelOf(f.xp), online: t - f.lastSeen < ONLINE_MS, friend: (u.friends || []).indexOf(l) >= 0, self: l === u.lname });
      if (out.length >= 8) break;
    }
    return out;
  }

  /* ---- chats (direct messages and group chats) ---- */
  const MAXMSG = 200, MAXTXT = 300;
  const getIdx = async l => (await jget('ci_' + l)) || { ids: [], seen: {} };
  const putIdx = (l, x) => jput('ci_' + l, x);
  async function addToIdx(l, id) { const x = await getIdx(l); if (x.ids.indexOf(id) < 0) { x.ids.push(id); await putIdx(l, x); } }
  async function chatView(c, me, idx) {
    const names = [];
    for (const l of c.members) { const f = await getUser(l); if (f) names.push({ name: f.name, avatar: f.avatar }); }
    const last = c.msgs[c.msgs.length - 1] || null, seen = (idx.seen || {})[c.id] || 0;
    const other = c.group ? null : names.find(n => n.name.toLowerCase() !== me);
    return { id: c.id, group: c.group, name: c.group ? c.name : (other ? other.name : 'Chat'), members: names, last, unread: c.msgs.filter(m => m.t > seen && m.u.toLowerCase() !== me).length, owner: c.owner || '' };
  }
  async function chatRoute(u, path, method, body, q) {
    const me = u.lname;
    if (path === '/chats' && method === 'GET') {
      const idx = await getIdx(me), out = [];
      for (const id of idx.ids.slice(0, 60)) { const c = await jget('c_' + id); if (c && c.members.indexOf(me) >= 0) out.push(await chatView(c, me, idx)); }
      out.sort((a, b) => ((b.last && b.last.t) || 0) - ((a.last && a.last.t) || 0));
      return [200, { chats: out }];
    }
    if (path === '/chat' && method === 'GET') {
      const id = String(q.id || '').replace(/[^A-Za-z0-9_]/g, ''), c = await jget('c_' + id);
      if (!c || c.members.indexOf(me) < 0) return [404, { error: 'Chat not found.' }];
      const after = Number(q.after) || 0, idx = await getIdx(me);
      const msgs = c.msgs.filter(m => m.t > after).slice(-100);
      const lastT = c.msgs.length ? c.msgs[c.msgs.length - 1].t : 0;
      if ((idx.seen[id] || 0) < lastT) { idx.seen[id] = lastT; await putIdx(me, idx); }
      return [200, { chat: await chatView(c, me, idx), msgs }];
    }
    if (path === '/chat/send' && method === 'POST') {
      const id = String(body.id || '').replace(/[^A-Za-z0-9_]/g, ''), c = await jget('c_' + id);
      if (!c || c.members.indexOf(me) < 0) return [404, { error: 'Chat not found.' }];
      const text = String(body.text || '').replace(/\s+/g, ' ').trim().slice(0, MAXTXT);
      if (!text) return [400, { error: 'Type a message first.' }];
      const now = T(), last = c.msgs[c.msgs.length - 1];
      let t = now; if (last && t <= last.t) t = last.t + 1;
      const m = { u: u.name, t, x: text };
      c.msgs.push(m); if (c.msgs.length > MAXMSG) c.msgs = c.msgs.slice(-MAXMSG);
      await jput('c_' + id, c);
      return [200, { msg: m }];
    }
    if (path === '/chat/open' && method === 'POST') {
      const n = String(body.name || '').trim().toLowerCase();
      const f = validName(n) ? await getUser(n) : null;
      if (!f || f.banned) return [404, { error: 'No player with that username.' }];
      if (n === me) return [400, { error: 'You cannot message yourself.' }];
      const id = 'd_' + [me, n].sort().join('_');
      let c = await jget('c_' + id);
      if (!c) { c = { id, group: false, name: '', members: [me, n], msgs: [], owner: '' }; await jput('c_' + id, c); }
      await addToIdx(me, id); await addToIdx(n, id);
      return [200, { id }];
    }
    if (path === '/chat/group' && method === 'POST') {
      const name = String(body.name || '').trim().slice(0, 30) || 'Group chat';
      const raw = Array.isArray(body.members) ? body.members : [];
      const members = [me];
      for (const m of raw.slice(0, 30)) {
        const l = String(m || '').trim().toLowerCase();
        if (!validName(l) || members.indexOf(l) >= 0) continue;
        const f = await getUser(l); if (f && !f.banned) members.push(l);
      }
      if (members.length < 2) return [400, { error: 'Pick at least one other player that exists.' }];
      if (members.length > 20) return [400, { error: 'Group chats hold up to 20 people.' }];
      const id = 'g_' + rand(8);
      await jput('c_' + id, { id, group: true, name, members, msgs: [{ u: 'Zoblox', t: T(), x: u.name + ' created the group "' + name + '".' }], owner: me });
      for (const l of members) await addToIdx(l, id);
      return [200, { id }];
    }
    if (path === '/chat/add' && method === 'POST') {
      const id = String(body.id || '').replace(/[^A-Za-z0-9_]/g, ''), c = await jget('c_' + id);
      if (!c || !c.group || c.members.indexOf(me) < 0) return [404, { error: 'Group not found.' }];
      const l = String(body.name || '').trim().toLowerCase(), f = validName(l) ? await getUser(l) : null;
      if (!f || f.banned) return [404, { error: 'No player with that username.' }];
      if (c.members.indexOf(l) >= 0) return [400, { error: f.name + ' is already in this group.' }];
      if (c.members.length >= 20) return [400, { error: 'Group chats hold up to 20 people.' }];
      c.members.push(l); c.msgs.push({ u: 'Zoblox', t: Math.max(T(), (c.msgs[c.msgs.length - 1] || { t: 0 }).t + 1), x: u.name + ' added ' + f.name + '.' });
      await jput('c_' + id, c); await addToIdx(l, id);
      return [200, { ok: true }];
    }
    if (path === '/chat/leave' && method === 'POST') {
      const id = String(body.id || '').replace(/[^A-Za-z0-9_]/g, ''), c = await jget('c_' + id);
      if (!c || !c.group || c.members.indexOf(me) < 0) return [404, { error: 'Group not found.' }];
      c.members = c.members.filter(x => x !== me);
      if (c.members.length) { c.msgs.push({ u: 'Zoblox', t: Math.max(T(), (c.msgs[c.msgs.length - 1] || { t: 0 }).t + 1), x: u.name + ' left the group.' }); await jput('c_' + id, c); }
      else await kv.delete('c_' + id);
      const idx = await getIdx(me); idx.ids = idx.ids.filter(x => x !== id); await putIdx(me, idx);
      return [200, { ok: true }];
    }
    return null;
  }

  /* ---- email (optional, for password reset) ---- */
  const validEmail = e => typeof e === 'string' && e.length <= 120 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
  async function sendResetCode(u) {
    const now = T();
    if (u.resetSent && now - u.resetSent < 60e3) return;
    const code = String(100000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 900000));
    u.reset = { h: await pbkdf2(code, u.salt, 1000), exp: now + 15 * 6e4, tries: 0 }; u.resetSent = now;
    await saveUser(u);
    await cfg.sendMail(u.email, 'Your Zoblox password reset code',
      'Hi ' + u.name + ',\n\nYour Zoblox reset code is ' + code + '. It works for 15 minutes.\n\nIf you did not ask for this, you can ignore this email.\n');
  }

  async function tallies(id) {
    const out = [0, 0];
    for (let i = 0; i < 2; i++) out[i] = (await kv.list({ prefix: 'pv_' + id + '_' + i + '_', limit: 1000 })).keys.length;
    return out;
  }
  const SAY_KEEP = 20e3;
  async function liveInfo(u) {
    const g = await getGlob(), t = T(), o = { now: t, say: null, poll: null };
    if (g.say && t - g.say.t < SAY_KEEP) o.say = g.say;
    if (g.poll && g.poll.until > t) {
      const mine = (await kv.get('pv_' + g.poll.id + '_0_' + u.lname)) != null ? 0 : (await kv.get('pv_' + g.poll.id + '_1_' + u.lname)) != null ? 1 : null;
      o.poll = { id: g.poll.id, q: g.poll.q, opts: g.poll.opts, until: g.poll.until, by: g.poll.by, mine, counts: mine === null ? null : await tallies(g.poll.id) };
    }
    return o;
  }
  async function votePoll(u, body) {
    const g = await getGlob(), t = T();
    if (!g.poll || g.poll.until < t || g.poll.id !== String(body.id || '')) return [400, { error: 'That poll has ended.' }];
    const c = clampInt(body.choice, 0, 1);
    await kv.delete('pv_' + g.poll.id + '_' + (1 - c) + '_' + u.lname);
    await kv.put('pv_' + g.poll.id + '_' + c + '_' + u.lname, '1');
    const counts = await tallies(g.poll.id);
    const me = counts.slice(); // eventual consistency: make sure my own vote shows right away
    return [200, { mine: c, counts: me }];
  }

  /* ---- admin ---- */
  const hasCode = async code => {
    let h = ADMIN_HASH;
    if (cfg.adminCode) h = await pbkdf2(cfg.adminCode, ADMIN_SALT, ADMIN_ITER);
    return eqHash(await pbkdf2(String(code || ''), ADMIN_SALT, ADMIN_ITER), h);
  };
  function tokenize(line) { const out = []; const re = /"([^"]*)"|(\S+)/g; let m; while ((m = re.exec(line))) out.push(m[1] !== undefined ? m[1] : m[2]); return out; }
  const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
  const fmtN = n => Math.floor(n).toLocaleString('en-US');
  const dur = ms => { const m = Math.round(ms / 6e4); return m >= 120 ? Math.round(m / 60) + 'h' : m + 'm'; };

  async function runCommand(adminUser, line) {
    const a = tokenize(line.trim());
    const cmd = (a.shift() || '').toLowerCase();
    const out = [];
    const find = async n => { if (!n) return null; return getUser(String(n).toLowerCase()); };
    const need = async (n) => { const u = await find(n); if (!u) out.push('No player named "' + n + '".'); return u; };
    const kvOpts = args => { const o = {}; args.forEach(x => { const i = x.indexOf('='); if (i > 0) o[x.slice(0, i).toLowerCase()] = x.slice(i + 1); }); return o; };
    const C = {};
    C.help = async () => [
      'PLAYERS',
      '  users                         list player names',
      '  info <user>                   show a player\'s details',
      '  online                        who is online now',
      '  stats                         server totals',
      'CURRENCY AND XP',
      '  give zobux|xp <user> <n>      add to a player',
      '  take zobux|xp <user> <n>      remove from a player',
      '  set zobux|xp <user> <n>       set exactly',
      '  setlevel <user> <level>       set account level',
      '  setstat <user> <game.stat> <n>  e.g. oe.picks, oe.tier, bf.level, bf.kills, rl.goals, rl.wins',
      '  gift <zobux> [xp=N] [hours=N] [msg="text"]   gift to EVERYONE who joins while it is active',
      '  endgift / giftinfo            stop or view the active gift',
      'BOOSTS (apply inside the games)',
      '  boost <user|all> <type> <mult> [minutes=60|perm]',
      '        types: click income (Orchard) | damage health (Blox Fruits) | speed power (Rocket League)',
      '        flag types: god (no damage) infboost (infinite boost); mult is ignored for these',
      '  unboost <user|all> [type]     remove boosts',
      '  boosts [user|all]             list boosts',
      'CHEATS (for your own account)',
      '  cheat money|levels|xp [n]     infinite Zobux, add levels, add XP',
      '  cheat damage|health|god|infboost|click|income|speed|power|all   permanent game cheats  |  cheat off',
      '  cheat unlock                  own every avatar item   |  cheat top  rank #1 on every leaderboard',
      '  addlevels <user> <n>          raise a player\'s level',
      'AVATAR ITEMS',
      '  grantitem <user> <itemId|all|none>   |  items [slot]   list item ids',
      '  email <user>                  show the email on file',
      'LIVE MESSAGES',
      '  say <text>                    on-screen admin message for ~5 seconds (new one replaces the old)',
      '  poll "Question?" "Option A" "Option B" [minutes=5]   |  pollresults  |  endpoll',
      'MESSAGES',
      '  announce <minutes> <text>     banner for everyone     |  clearannounce',
      'MODERATION',
      '  ban <user> [reason] (stays until you unban)  |  unban <user>  |  banlist  |  kick <user> (log them out)',
      '  resetpw <user> <newpassword>  |  delete <user> confirm',
      '  resetstats <user> [oe|bf|rl|all]  (also clears that game\'s save)',
      'LEADERBOARDS',
      '  lbhide <user>  |  lbshow <user>  |  lbclear <board> confirm',
      '  boards: ' + Object.keys(BOARDS).join(' ')
    ];
    C.users = async () => {
      const r = await kv.list({ prefix: 'u_', limit: 256 });
      const names = r.keys.map(k => k.key.slice(2));
      return [names.length + ' player(s):', names.join(', ') || '(none)'];
    };
    C.online = async () => {
      const r = await kv.list({ prefix: 'u_', limit: 100 }), t = T(), on = [];
      for (const k of r.keys) { const u = await jget(k.key); if (u && t - u.lastSeen < ONLINE_MS) on.push(u.name + (u.activity ? ' (' + GAME_NAMES[u.activity] + ')' : '')); }
      return [on.length + ' online:', on.join(', ') || '(nobody)'];
    };
    C.stats = async () => {
      const r = await kv.list({ prefix: 'u_', limit: 256 });
      return ['Players: ' + r.keys.length + (r.keys.length >= 256 ? '+' : ''), 'Server time: ' + new Date().toISOString()];
    };
    C.info = async () => {
      const u = await need(a[0]); if (!u) return [];
      const s = u.stats;
      return [u.name + (u.banned ? '  [BANNED: ' + u.banned + ']' : '') + (u.hidden ? '  [hidden from leaderboards]' : ''),
        'Level ' + levelOf(u.xp) + '  XP ' + fmtN(u.xp) + '  Zobux ' + fmtN(u.zobux),
        'Orchard: ' + fmtN(s.oe.picks) + ' picks, evolution ' + (s.oe.tier + 1) + ', rebirths ' + s.oe.rebirths,
        'Blox Fruits: level ' + s.bf.level + ', kills ' + fmtN(s.bf.kills),
        'Rocket League: ' + s.rl.goals + ' goals, ' + s.rl.wins + ' wins',
        'Email: ' + (u.email || 'none') + '  Avatar items owned: ' + (u.owned || []).length,
        'Friends: ' + (u.friends || []).length + '  Boosts: ' + (activeBoosts(u).map(b => b.type + (FLAG_BOOSTS.indexOf(b.type) < 0 ? 'x' + b.mult : '')).join(', ') || 'none'),
        'Joined ' + new Date(u.created).toISOString().slice(0, 10) + '  Last seen ' + (u.lastSeen ? new Date(u.lastSeen).toISOString().replace('T', ' ').slice(0, 16) : 'never')];
    };
    const money = (mode) => async () => {
      const kind = (a[0] || '').toLowerCase();
      if (kind !== 'zobux' && kind !== 'xp') return ['Usage: ' + (mode === 'set' ? 'set' : mode) + ' zobux|xp <user> <n>'];
      if ((a[1] || '').toLowerCase() === 'all') return ['"all" is not supported here. Use: gift <zobux> [xp=N] so everyone who joins gets it.'];
      const u = await need(a[1]); if (!u) return [];
      const n = num(a[2], NaN); if (!Number.isFinite(n) || n < 0 || n > 1e12) return ['Give a number between 0 and 1,000,000,000,000.'];
      const f = kind;
      if (mode === 'give') u[f] += n; else if (mode === 'take') u[f] = Math.max(0, u[f] - n); else u[f] = n;
      await updateBoards(u); await saveUser(u);
      return [u.name + ' now has ' + fmtN(u.zobux) + ' Zobux and ' + fmtN(u.xp) + ' XP (level ' + levelOf(u.xp) + ').'];
    };

    C.grantitem = async () => {
      const u = await need(a[0]); if (!u) return [];
      const id = (a[1] || '').toLowerCase();
      u.owned = u.owned || [];
      if (id === 'all') { u.owned = AV.ITEMS.filter(i => i.price > 0).map(i => i.id); await saveUser(u); return [u.name + ' now owns every avatar item (' + u.owned.length + ').']; }
      if (id === 'none') { u.owned = []; await saveUser(u); return [u.name + '\'s avatar items were removed.']; }
      if (!AV.BY[id]) return ['Unknown item "' + id + '". Use item ids like hat_crown, bk_jet or "all".'];
      if (u.owned.indexOf(id) < 0) u.owned.push(id);
      await saveUser(u); return [u.name + ' now owns ' + AV.BY[id].name + '.'];
    };
    C.items = async () => {
      const slot = (a[0] || '').toLowerCase();
      if (!slot) return ['Slots: ' + AV.SLOTS.join(' '), 'Use: items <slot>  to list item ids and prices'];
      const l = AV.ITEMS.filter(i => i.slot === slot);
      return l.length ? l.map(i => i.id + '  ' + i.name + '  ' + fmtN(i.price)) : ['Unknown slot.'];
    };
    C.addlevels = async () => {
      const u = await need(a[0]); if (!u) return [];
      const n = clampInt(a[1], 1, 5000), l = Math.min(5000, levelOf(u.xp) + n);
      u.xp = 60 * (l - 1) * (l - 1); await updateBoards(u); await saveUser(u); return [u.name + ' is now level ' + l + '.'];
    };
    /* cheats act on the admin themself: cheat <what> [n] */
    C.cheat = async () => {
      const u = adminUser, what = (a[0] || '').toLowerCase(), n = num(a[1], NaN);
      const perm = (type, mult) => { u.boosts = activeBoosts(u).filter(b => !(b.type === type && b.src === 'cheat')).concat([{ type, mult, until: 0, src: 'cheat' }]); };
      const names = { click: 'Super picks', income: 'Super income', damage: 'Infinite damage', health: 'Infinite health', speed: 'Turbo speed', power: 'Mega shots', god: 'God mode', infboost: 'Infinite boost' };
      const mults = { click: 1e6, income: 1e6, damage: 1e6, health: 1e6, speed: 2.5, power: 5, god: 1, infboost: 1 };
      let msg = [];
      if (what === 'money') { u.zobux = Number.isFinite(n) ? Math.min(1e12, Math.max(0, n)) : 1e12; msg.push('Zobux set to ' + fmtN(u.zobux) + '.'); }
      else if (what === 'levels') { const l = Math.min(5000, levelOf(u.xp) + clampInt(n || 10, 1, 5000)); u.xp = 60 * (l - 1) * (l - 1); msg.push('You are now level ' + l + '.'); }
      else if (what === 'xp') { u.xp += Number.isFinite(n) ? Math.min(1e12, Math.max(0, n)) : 1e6; msg.push('XP is now ' + fmtN(u.xp) + '.'); }
      else if (mults[what] !== undefined && String(a[1] || '').toLowerCase() === 'off') { u.boosts = (u.boosts || []).filter(b => !(b.src === 'cheat' && b.type === what)); msg.push(names[what] + ' is OFF.'); }
      else if (mults[what] !== undefined) { perm(what, mults[what]); msg.push(names[what] + ' is ON (permanent for your account).'); }
      else if (what === 'all') { Object.keys(mults).forEach(k => perm(k, mults[k])); msg.push('Every game cheat is ON.'); }
      else if (what === 'off') { u.boosts = (u.boosts || []).filter(b => b.src !== 'cheat'); msg.push('All game cheats are OFF.'); }
      else if (what === 'unlock') { u.owned = AV.ITEMS.filter(i => i.price > 0).map(i => i.id); msg.push('You own every avatar item (' + u.owned.length + ').'); }
      else if (what === 'top') {
        u.xp = Math.max(u.xp, 1e10); const s = u.stats;
        s.oe.picks = Math.max(s.oe.picks, 1e10); s.oe.tier = 29; s.oe.rebirths = Math.max(s.oe.rebirths, 99);
        s.bf.level = 2550; s.bf.kills = Math.max(s.bf.kills, 1e6); s.rl.goals = Math.max(s.rl.goals, 9999); s.rl.wins = Math.max(s.rl.wins, 999);
        msg.push('You now sit at the top of every leaderboard.');
      }
      else return ['Usage: cheat <money|levels|xp|click|income|damage|health|speed|power|god|infboost|all|off|unlock|top> [n]'];
      await updateBoards(u); await saveUser(u);
      return msg;
    };
    C.cheats = async () => {
      const l = activeBoosts(adminUser).filter(b => b.src === 'cheat').map(b => b.type);
      return ['Active cheats: ' + (l.join(', ') || 'none')];
    };
    C.email = async () => { const u = await need(a[0]); if (!u) return []; return [u.name + ': ' + (u.email || '(no email on file)')]; };

    C.banlist = async () => {
      const r = await kv.list({ prefix: 'u_', limit: 256 }), out2 = [];
      for (const k of r.keys) { const p = await jget(k.key); if (p && p.banned) out2.push(p.name + ': ' + p.banned); }
      return out2.length ? [out2.length + ' banned (use unban <name> to restore):'].concat(out2) : ['Nobody is banned.'];
    };
    /* say: a short on-screen message from the admins (players see it for ~5 seconds and cannot reply) */
    C.say = async () => {
      const msg = a.join(' ').trim().slice(0, 200);
      if (!msg) return ['Usage: say <message>   (shows for 5 seconds; a new one replaces the old one)'];
      const g = await getGlob(); g.say = { id: rand(4), msg, by: adminUser.name, t: T() }; await saveGlob(g);
      return ['Sent: "' + msg + '" (visible for about 5 seconds)'];
    };
    C.talk = C.say;
    C.poll = async () => {
      let mins = 5; const rest = [];
      a.forEach(x => { const m = /^minutes=(\d+)$/i.exec(x); if (m) mins = Math.min(1440, Math.max(1, +m[1])); else rest.push(x); });
      if (rest.length < 3) return ['Usage: poll "Question?" "Option A" "Option B" [minutes=5]'];
      const g = await getGlob();
      g.poll = { id: rand(4), q: rest[0].slice(0, 140), opts: [rest[1].slice(0, 40), rest[2].slice(0, 40)], until: T() + mins * 6e4, by: adminUser.name };
      await saveGlob(g);
      return ['Poll live for ' + mins + ' min: "' + g.poll.q + '"  [A] ' + g.poll.opts[0] + '  [B] ' + g.poll.opts[1], 'A new poll or "endpoll" replaces it. Use pollresults to watch the votes.'];
    };
    C.pollresults = async () => {
      const g = await getGlob(); if (!g.poll || g.poll.until < T()) return ['No poll is running.'];
      const c = await tallies(g.poll.id);
      return ['"' + g.poll.q + '"', g.poll.opts[0] + ': ' + c[0], g.poll.opts[1] + ': ' + c[1], 'Ends in ' + dur(g.poll.until - T()) + '.'];
    };
    C.endpoll = async () => {
      const g = await getGlob(); if (!g.poll) return ['No poll is running.'];
      const c = await tallies(g.poll.id), res = ['Final: ' + g.poll.opts[0] + ' ' + c[0] + '  |  ' + g.poll.opts[1] + ' ' + c[1]];
      g.poll = null; await saveGlob(g); return res;
    };
    C.endsay = async () => { const g = await getGlob(); g.say = null; await saveGlob(g); return ['Message cleared.']; };
    C.give = money('give'); C.take = money('take'); C.set = money('set');
    C.setlevel = async () => {
      const u = await need(a[0]); if (!u) return [];
      const l = clampInt(a[1], 1, 5000); u.xp = 60 * (l - 1) * (l - 1);
      await updateBoards(u); await saveUser(u); return [u.name + ' is now level ' + l + '.'];
    };
    C.setstat = async () => {
      const u = await need(a[0]); if (!u) return [];
      const key = (a[1] || '').toLowerCase(), n = clampInt(a[2], 0, 1e12);
      const [g, k] = key.split('.');
      if (!u.stats[g] || u.stats[g][k] === undefined) return ['Unknown stat. Try oe.picks oe.tier oe.rebirths bf.level bf.kills rl.goals rl.wins'];
      u.stats[g][k] = n; await updateBoards(u); await saveUser(u); return [u.name + ' ' + key + ' = ' + fmtN(n)];
    };
    C.gift = async () => {
      const z = num(a[0], NaN); if (!Number.isFinite(z) || z < 0 || z > 1e9) return ['Usage: gift <zobux> [xp=N] [hours=N] [msg="text"]'];
      const o = kvOpts(a.slice(1)), hours = num(o.hours, 24), xp = num(o.xp, 0);
      const g = await getGlob();
      g.gift = { id: rand(6), zobux: Math.floor(z), xp: Math.floor(xp), until: T() + hours * 36e5, msg: (o.msg || 'A gift from the Zoblox admin!').slice(0, 140), by: adminUser.name };
      await saveGlob(g);
      return ['Gift active for ' + hours + 'h: ' + fmtN(z) + ' Zobux' + (xp ? ' + ' + fmtN(xp) + ' XP' : '') + '.', 'Everyone who joins (or is online) while it is active gets it once.'];
    };
    C.endgift = async () => { const g = await getGlob(); g.gift = null; await saveGlob(g); return ['Gift ended.']; };
    C.giftinfo = async () => {
      const g = await getGlob();
      if (!g.gift || g.gift.until < T()) return ['No active gift.'];
      return ['Active: ' + fmtN(g.gift.zobux) + ' Zobux + ' + fmtN(g.gift.xp) + ' XP, ends in ' + dur(g.gift.until - T()) + '. "' + g.gift.msg + '"'];
    };
    C.boost = async () => {
      const who = (a[0] || '').toLowerCase(), type = (a[1] || '').toLowerCase();
      if (!who || BOOST_TYPES.indexOf(type) < 0) return ['Usage: boost <user|all> <type> <mult> [minutes=60|perm]', 'Types: ' + BOOST_TYPES.join(' ')];
      const flag = FLAG_BOOSTS.indexOf(type) >= 0;
      const mult = flag ? 1 : num(a[2], NaN);
      if (!flag && (!Number.isFinite(mult) || mult <= 0 || mult > 1e6)) return ['Give a multiplier between 0 and 1,000,000, e.g. 3'];
      const o = kvOpts(a.slice(flag ? 2 : 3)); const mRaw = (o.minutes || a[flag ? 2 : 3] || '60').toLowerCase();
      const until = mRaw === 'perm' || mRaw === '0' ? 0 : T() + num(mRaw, 60) * 6e4;
      const b = { type, mult, until, src: 'admin' };
      if (who === 'all') {
        const g = await getGlob(); g.boosts = (g.boosts || []).filter(x => x.type !== type).concat([b]); await saveGlob(g);
        return ['Global boost on: ' + type + (flag ? '' : ' x' + mult) + (until ? ' for ' + dur(until - T()) : ' (permanent)') + '. Applies to everyone.'];
      }
      const u = await need(who); if (!u) return [];
      u.boosts = activeBoosts(u).filter(x => !(x.type === type && x.src === 'admin')).concat([b]); await saveUser(u);
      return [u.name + ': ' + type + (flag ? '' : ' x' + mult) + (until ? ' for ' + dur(until - T()) : ' (permanent)') + '.'];
    };
    C.unboost = async () => {
      const who = (a[0] || '').toLowerCase(), type = (a[1] || '').toLowerCase();
      if (!who) return ['Usage: unboost <user|all> [type]'];
      const keep = x => type && x.type !== type;
      if (who === 'all') { const g = await getGlob(); g.boosts = (g.boosts || []).filter(keep); await saveGlob(g); return ['Global boosts cleared' + (type ? ' (' + type + ')' : '') + '.']; }
      const u = await need(who); if (!u) return [];
      u.boosts = (u.boosts || []).filter(keep); await saveUser(u); return [u.name + ': boosts cleared' + (type ? ' (' + type + ')' : '') + '.'];
    };
    C.boosts = async () => {
      const who = (a[0] || 'all').toLowerCase(), fmtB = b => b.type + (FLAG_BOOSTS.indexOf(b.type) < 0 ? ' x' + b.mult : '') + (b.until ? ' (' + dur(b.until - T()) + ' left)' : ' (permanent)');
      if (who === 'all') { const g = await getGlob(); const l = (g.boosts || []).filter(b => !b.until || b.until > T()); return l.length ? ['Global boosts:'].concat(l.map(fmtB)) : ['No global boosts.']; }
      const u = await need(who); if (!u) return [];
      const l = activeBoosts(u); return l.length ? [u.name + ':'].concat(l.map(fmtB)) : [u.name + ' has no boosts.'];
    };
    C.announce = async () => {
      const mins = num(a[0], NaN); const msg = a.slice(1).join(' ').slice(0, 200);
      if (!Number.isFinite(mins) || mins <= 0 || !msg) return ['Usage: announce <minutes> <text>'];
      const g = await getGlob(); g.announce = { id: rand(6), msg, until: T() + mins * 6e4 }; await saveGlob(g); return ['Announcement live for ' + mins + ' minutes.'];
    };
    C.clearannounce = async () => { const g = await getGlob(); g.announce = null; await saveGlob(g); return ['Announcement cleared.']; };
    C.ban = async () => {
      const u = await need(a[0]); if (!u) return [];
      if (u.lname === adminUser.lname) return ['You cannot ban yourself.'];
      u.banned = a.slice(1).join(' ').slice(0, 120) || 'Broke the rules'; u.sv++; await saveUser(u); return [u.name + ' is banned.'];
    };
    C.unban = async () => { const u = await need(a[0]); if (!u) return []; u.banned = ''; await saveUser(u); return [u.name + ' is unbanned.']; };
    C.kick = async () => { const u = await need(a[0]); if (!u) return []; u.sv++; await saveUser(u); return [u.name + ' was logged out everywhere.']; };
    C.resetpw = async () => {
      const u = await need(a[0]); if (!u) return [];
      const p = a[1] || ''; if (p.length < 6 || p.length > 64) return ['Password must be 6 to 64 characters.'];
      u.salt = rand(16); u.hash = await pbkdf2(p, u.salt, 20000); u.sv++; u.fails = 0; u.lockUntil = 0; await saveUser(u); return ['Password reset for ' + u.name + '. They were logged out.'];
    };
    C.delete = async () => {
      const u = await need(a[0]); if (!u) return [];
      if ((a[1] || '').toLowerCase() !== 'confirm') return ['This permanently deletes ' + u.name + '. Run again with: delete ' + u.name + ' confirm'];
      if (u.lname === adminUser.lname) return ['You cannot delete yourself.'];
      await removeFromBoards(u); await kv.delete('u_' + u.lname); return [u.name + ' was deleted.'];
    };
    C.resetstats = async () => {
      const u = await need(a[0]); if (!u) return [];
      const g = (a[1] || 'all').toLowerCase(), fresh = newUser('x', '', '', '').stats;
      const list = g === 'all' ? GAMES : [g]; if (list.some(x => GAMES.indexOf(x) < 0)) return ['Game must be oe, bf, rl or all.'];
      list.forEach(x => { u.stats[x] = fresh[x]; if (u.saves) delete u.saves[x]; });
      await updateBoards(u); await saveUser(u); return [u.name + ': ' + list.join(', ') + ' reset.'];
    };
    C.lbhide = async () => { const u = await need(a[0]); if (!u) return []; u.hidden = true; await removeFromBoards(u); await saveUser(u); return [u.name + ' is hidden from leaderboards.']; };
    C.lbshow = async () => { const u = await need(a[0]); if (!u) return []; u.hidden = false; u.lbv = {}; await updateBoards(u); await saveUser(u); return [u.name + ' is back on leaderboards.']; };
    C.lbclear = async () => {
      const id = (a[0] || '').toLowerCase(); if (!BOARDS[id]) return ['Boards: ' + Object.keys(BOARDS).join(' ')];
      if ((a[1] || '').toLowerCase() !== 'confirm') return ['This empties the "' + id + '" board. Run again with: lbclear ' + id + ' confirm'];
      await jput('lb_' + id, []); return ['Board "' + id + '" cleared. Players return to it as they earn more.'];
    };
    if (!C[cmd]) return ['Unknown command "' + cmd + '". Type help.'];
    const r = await C[cmd]();
    return out.length ? out.concat(r || []) : r;
  }

  /* ---- router ---- */
  async function handle(req) {
    const method = req.method || 'GET', path = (req.path || '/').replace(/\/+$/, '') || '/', body = req.body || {}, q = req.query || {};
    try {
      if (path === '/ping') return [200, { ok: true, mode: cfg.mode || 'server', shop: SHOP, boards: Object.keys(BOARDS).map(id => ({ id, title: BOARDS[id].title, game: BOARDS[id].game })) }];
      if (path === '/leaderboards' && method === 'GET') {
        const boards = {}; for (const id in BOARDS) boards[id] = ((await jget('lb_' + id)) || []).slice(0, 50);
        return [200, { boards }];
      }
      if (path === '/signup' && method === 'POST') {
        const name = String(body.username || '').trim(), pw = String(body.password || '');
        if (!validName(name)) return [400, { error: 'Username must be 3 to 20 letters, numbers or underscores.' }];
        if (RESERVED.some(r => name.toLowerCase().indexOf(r) >= 0)) return [400, { error: 'That username is not available.' }];
        if (pw.length < 6 || pw.length > 64) return [400, { error: 'Password must be 6 to 64 characters.' }];
        if (pw.toLowerCase() === name.toLowerCase()) return [400, { error: 'Password cannot be your username.' }];
        const em = String(body.email || '').trim().toLowerCase();
        if (em && !validEmail(em)) return [400, { error: 'That email does not look right. You can also leave it empty.' }];
        if (await getUser(name.toLowerCase())) return [409, { error: 'That username is already taken.' }];
        const salt = rand(16), u = newUser(name, salt, await pbkdf2(pw, salt, 20000), body.avatar);
        u.email = em;
        u.lastSeen = T(); await saveUser(u);
        return [200, { token: await newSession(u), me: meOf(u, await getGlob(), true) }];
      }
      if (path === '/login' && method === 'POST') {
        const u = await getUser(String(body.username || '').trim().toLowerCase());
        const bad = [401, { error: 'Incorrect username or password.' }];
        if (!u) return bad;
        if (u.lockUntil > T()) return [429, { error: 'Too many tries. Wait a few minutes and try again.' }];
        if (!eqHash(await pbkdf2(String(body.password || ''), u.salt, 20000), u.hash)) {
          u.fails = (u.fails || 0) + 1; if (u.fails >= 8) { u.lockUntil = T() + 5 * 6e4; u.fails = 0; } await saveUser(u); return bad;
        }
        if (u.banned) return [403, { error: 'This account is banned: ' + u.banned }];
        u.fails = 0; u.lastSeen = T(); await saveUser(u);
        return [200, { token: await newSession(u), me: meOf(u, await getGlob(), true) }];
      }
      if (path === '/forgot' && method === 'POST') {
        if (!cfg.sendMail) return [501, { error: 'Password emails are not set up on this server yet. Ask the admin to reset your password.' }];
        const f = await getUser(String(body.username || '').trim().toLowerCase());
        if (f && f.email && !f.banned) { try { await sendResetCode(f); } catch (e) { return [502, { error: 'Could not send the email right now. Try again later.' }]; } }
        return [200, { ok: true, message: 'If that account has an email on file, we sent a 6 digit code to it.' }];
      }
      if (path === '/reset' && method === 'POST') {
        const f = await getUser(String(body.username || '').trim().toLowerCase());
        const bad = [400, { error: 'That code is wrong or has expired.' }];
        const pw = String(body.password || '');
        if (pw.length < 6 || pw.length > 64) return [400, { error: 'Password must be 6 to 64 characters.' }];
        if (!f || !f.reset || f.reset.exp < T() || f.reset.tries >= 5) return bad;
        f.reset.tries++;
        if (!eqHash(await pbkdf2(String(body.code || '').trim(), f.salt, 1000), f.reset.h)) { await saveUser(f); return bad; }
        f.salt = rand(16); f.hash = await pbkdf2(pw, f.salt, 20000); f.sv++; f.fails = 0; f.lockUntil = 0; f.reset = null; await saveUser(f);
        return [200, { ok: true }];
      }
      const A = await auth(req.token);
      if (A.err) return [A.err[0], { error: A.err[1] }];
      const u = A.u;
      if (path === '/logout' && method === 'POST') { u.activity = ''; u.lastSeen = 0; await saveUser(u); await kv.delete('s_' + A.token); return [200, { ok: true }]; }
      if (path === '/me' && method === 'GET') { const g = await getGlob(); return [200, { me: meOf(u, g, true), glob: globOf(g) }]; }
      if (path === '/sync' && method === 'POST') return [200, await doSync(u, body)];
      if (path === '/buy' && method === 'POST') return buy(u, body.item);
      if (path === '/live' && method === 'GET') return [200, await liveInfo(u)];
      if (path === '/poll/vote' && method === 'POST') return votePoll(u, body);
      if (path === '/avatar/buy' && method === 'POST') return buyAvatar(u, body.item);
      if (path === '/avatar/save' && method === 'POST') { await saveOutfit(u, body); return [200, { me: meOf(u, await getGlob(), false) }]; }
      if ((path === '/avatar/saved/add' || path === '/avatar/saved/delete') && method === 'POST') return savedOutfits(u, path, body);
      if (path === '/users/search' && method === 'GET') return [200, { users: await searchUsers(u, q.q) }];
      if (path === '/account/email' && method === 'POST') {
        const e = String(body.email || '').trim().toLowerCase();
        if (e && !validEmail(e)) return [400, { error: 'That does not look like an email address.' }];
        if (!eqHash(await pbkdf2(String(body.password || ''), u.salt, 20000), u.hash)) return [403, { error: 'Wrong password.' }];
        u.email = e; u.reset = null; await saveUser(u);
        return [200, { me: meOf(u, await getGlob(), false) }];
      }
      if (path === '/chats' || path.indexOf('/chat') === 0) { const r = await chatRoute(u, path, method, body, q); if (r) return r; }
      if (path === '/friends' && method === 'GET') return [200, { friends: await friendsList(u) }];
      if (path === '/friends/add' && method === 'POST') {
        const n = String(body.name || '').trim().toLowerCase();
        if (!validName(n)) return [400, { error: 'Type a valid username.' }];
        if (n === u.lname) return [400, { error: 'You cannot add yourself.' }];
        const f = await getUser(n); if (!f || f.banned) return [404, { error: 'No player with that username.' }];
        if ((u.friends || []).indexOf(n) >= 0) return [400, { error: 'You already added ' + f.name + '.' }];
        if ((u.friends || []).length >= 40) return [400, { error: 'Friend list is full (40).' }];
        u.friends = (u.friends || []).concat([n]); await saveUser(u);
        return [200, { friends: await friendsList(u), me: meOf(u, await getGlob(), false) }];
      }
      if (path === '/friends/remove' && method === 'POST') {
        const n = String(body.name || '').toLowerCase(); u.friends = (u.friends || []).filter(x => x !== n); await saveUser(u);
        return [200, { friends: await friendsList(u), me: meOf(u, await getGlob(), false) }];
      }
      if (path === '/admin/login' && method === 'POST') {
        if (u.adminLock > T()) return [429, { error: 'Locked for a while after too many wrong codes.' }];
        if (!(await hasCode(body.code))) {
          u.adminFail = (u.adminFail || 0) + 1; if (u.adminFail >= 5) { u.adminLock = T() + 15 * 6e4; u.adminFail = 0; } await saveUser(u);
          return [403, { error: 'Wrong code.' }];
        }
        u.adminFail = 0; await saveUser(u);
        const at = rand(24); await jput('a_' + at, { u: u.lname, exp: T() + ADMIN_MS });
        return [200, { adminToken: at }];
      }
      if (path.indexOf('/admin/') === 0) {
        const s = await jget('a_' + String(req.adminToken || ''));
        if (!s || s.exp < T() || s.u !== u.lname) return [403, { error: 'Admin session ended. Enter the code again.' }];
        if (path === '/admin/status' && method === 'GET') return [200, { ok: true }];
        if (path === '/admin/logout' && method === 'POST') { await kv.delete('a_' + String(req.adminToken || '')); return [200, { ok: true }]; }
        if (path === '/admin/cmd' && method === 'POST') return [200, { out: await runCommand(u, String(body.line || '').slice(0, 600)) }];
        if (path === '/admin/players' && method === 'GET') {
          const r = await kv.list({ prefix: 'u_', limit: 60 }), t = T(), list = [];
          for (const k of r.keys) { const p = await jget(k.key); if (p) list.push({ name: p.name, level: levelOf(p.xp), zobux: Math.floor(p.zobux), xp: Math.floor(p.xp), online: t - p.lastSeen < ONLINE_MS, banned: !!p.banned, hidden: !!p.hidden }); }
          return [200, { players: list }];
        }
      }
      return [404, { error: 'Not found.' }];
    } catch (e) {
      return [500, { error: 'Server error: ' + (e && e.message ? e.message : e) }];
    }
  }
  return { handle: async r => { const [status, json] = await handle(r); return { status, json }; }, SHOP, BOARDS, levelOf };
}
if (typeof module !== 'undefined') module.exports = { createCore };

/* ===== EdgeOne Pages Edge Function wrapper ===== */
/* ===== EMAIL SETTINGS: paste your Brevo key and verified sender here (or set them as EdgeOne environment variables). =====
   This file runs on the server only. Visitors can never download it. Do not post the key anywhere public. */
const MAIL_SETTINGS = {
  BIRD_API_KEY: '',                           // Bird (bird.com): paste your key here (starts with 'bk_')
  BIRD_FROM: 'Zoblox <onboarding@messagebird.dev>',
  MAILERSEND_API_KEY: '',                     // MailerSend: paste your API token here (starts with 'mlsn.')
  BREVO_API_KEY: '',                          // or Brevo: e.g. 'xkeysib-....'
  MAIL_FROM: 'Zoblox <noreply@test-ywj2lpn2qkqg7oqz.mlsender.net>'
};
const __kv = {
  get: (k) => zoblox_kv.get(k),
  put: (k, v) => zoblox_kv.put(k, v),
  delete: (k) => zoblox_kv.delete(k),
  list: async (o) => { const r = await zoblox_kv.list({ prefix: (o && o.prefix) || '', limit: (o && o.limit) || 256 }); return r; }
};
let __core = null;
const __H = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const rParam = url.searchParams.get('r');
  let path = rParam || url.pathname.replace(/^\/api/, '') || '/';
  if (path.length > 1) path = path.replace(/\/+$/, '');
  if (!rParam && (path === '/' || path === '')) return new Response(JSON.stringify({ ok: true, server: 'zoblox', note: 'The Zoblox server is running. The game talks to it automatically.', storage: typeof zoblox_kv === 'undefined' ? 'NOT CONNECTED: bind a KV namespace named zoblox_kv' : 'connected' }), { status: 200, headers: __H });
  if (!__core) {
    const env = Object.assign({}, MAIL_SETTINGS, context.env || {});
    const sendMail = env.BIRD_API_KEY ? async (to, subject, text) => {
      const host = /^bk_eu/.test(env.BIRD_API_KEY) ? 'https://eu1.platform.bird.com' : 'https://us1.platform.bird.com';
      const r = await fetch(host + '/v1/email/messages', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + env.BIRD_API_KEY }, body: JSON.stringify({ from: env.BIRD_FROM || 'Zoblox <onboarding@messagebird.dev>', to: [to], subject, text, category: 'transactional' }) });
      if (!r.ok) throw new Error('mail failed');
    } : env.MAILERSEND_API_KEY && env.MAIL_FROM ? async (to, subject, text) => {
      const m = /^(.*)<(.+)>\s*$/.exec(env.MAIL_FROM);
      const from = { email: (m ? m[2] : env.MAIL_FROM).trim(), name: (m ? m[1].trim().replace(/"/g, '') : '') || 'Zoblox' };
      const r = await fetch('https://api.mailersend.com/v1/email', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + env.MAILERSEND_API_KEY }, body: JSON.stringify({ from, to: [{ email: to }], subject, text }) });
      if (!r.ok) throw new Error('mail failed');
    } : env.BREVO_API_KEY && env.MAIL_FROM && env.MAIL_FROM.indexOf('example.com') < 0 ? async (to, subject, text) => {
      const m = /^(.*)<(.+)>\s*$/.exec(env.MAIL_FROM);
      const sender = { name: (m ? m[1].trim().replace(/"/g, '') : '') || 'Zoblox', email: (m ? m[2] : env.MAIL_FROM).trim() };
      const r = await fetch('https://api.brevo.com/v3/smtp/email', { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', 'api-key': env.BREVO_API_KEY }, body: JSON.stringify({ sender, to: [{ email: to }], subject, textContent: text }) });
      if (!r.ok) throw new Error('mail failed');
    } : (env.RESEND_API_KEY && env.MAIL_FROM && env.MAIL_FROM.indexOf('example.com') < 0) ? async (to, subject, text) => {
      const r = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + env.RESEND_API_KEY }, body: JSON.stringify({ from: env.MAIL_FROM, to: [to], subject, text }) });
      if (!r.ok) throw new Error('mail failed');
    } : undefined;
    __core = createCore(__kv, { adminHash: env.ZOBLOX_ADMIN_HASH || undefined, adminCode: env.ZOBLOX_ADMIN_CODE || undefined, mode: 'server', sendMail });
  }
  let body = {};
  if (request.method === 'POST') { try { body = await request.json(); } catch (e) { body = {}; } }
  const auth = request.headers.get('authorization') || '';
  const token = auth.replace(/^Bearer\s+/i, '') || null;
  const adminToken = request.headers.get('x-admin-token') || null;
  const query = Object.fromEntries([...url.searchParams].filter(([k]) => k !== 'r'));
  try {
    if (typeof zoblox_kv === 'undefined') return new Response(JSON.stringify({ error: 'KV_NOT_BOUND' }), { status: 503, headers: __H });
    const r = await __core.handle({ method: request.method, path, query, body, token, adminToken });
    return new Response(JSON.stringify(r.json), { status: r.status, headers: __H });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Server error.' }), { status: 500, headers: __H });
  }
}

export default onRequest;
