# wovenstarlight's AO3 work skins
This is a collection of my Archive Of Our Own work skins, along with samples. You can find me on AO3 directly: here are [my work skin previews](https://archiveofourown.org/users/wovenstarlight/pseuds/unpredictableArtist), and [my writing/fics](https://archiveofourown.org/users/wovenstarlight/pseuds/wovenstarlight).

## Table of contents
Currently, this repo contains the following workskins:
- Extended Homestuck Work Skin (`homestuck_ex`)
- Homestuck colors Work Skin for The S-Ranks That I Raised (`sranks_hs`)
- Discord Work Skin with light and dark modes (`discord`)
 - Now with an updated, cleaner version, `discord_v2`!
- System Windows Work Skin for The S-Ranks That I Raised (`sranks_system`)
- System Windows Work Skin for Omniscient Reader's Viewpoint (`orv_system`)

It also contains `TEMPLATE.html`, a template file for making your own work skins or work drafts. See the *Personal use and TEMPLATE.html* section below for usage instructions.

## Files
For each work skin, this repo has:
- 1 CSS file: the actual code for the workskin. What gets saved as a workskin on AO3.
- 1 HTML file: a preview for the workskin. If I've posted an AO3 preview, this contains the code for that page. At the top of each HTML file will be a link to the AO3 preview of the skin.

Feel free to use these skins as you'd like. If *adding on to or otherwise modifying* these skins, **you must credit [@wovenstarlight](https://archiveofourown.org/users/wovenstarlight) on AO3**.

## Usage guide
### CSS files
- Go to the following link: https://archiveofourown.org/skins/new?skin_type=WorkSkin
- Enter a recognizable name in the Title field.
- Copy everything in the CSS file and paste it in the "CSS" field, then hit `Save`.
- Edit the work you want to use this skin in. If it's a multi-chapter work, you'll want to edit the entire work, not just a single chapter. Scroll down to the "Associations" section; in the last option, "Select Work Skin", pick the name that you saved the work skin under. Save the work. You will now be able to add in formatted text similar to that shown in the AO3 preview.

### HTML files
- Create the work skin as instructed above.
- Create a new work/chapter, or edit an existing one (if trying to add this to a multi-chapter work, edit the entire work).
- Scroll down to the "Work Text" section, and select the `HTML` editor. Insert your code with appropriate `class` attributes. You can copy it from the corresponding HTML sample file as desired, or write your own from scratch using the file as a reference.
- Preview the work to ensure it works as expected, then Update. (Double-check for any `<p></p>` tags, which should be removed. If you get spacing errors, just delete all spacing between any `<>` tags.)

## Personal use and TEMPLATE.html
If you'd like to use one of these skins yourself, follow the instructions in the *Usage guide* section above.

If you'd like to create your own work skin and want an HTML template to test it in, or even if you just want to draft a work locally, you can use `TEMPLATE.html`. This is a document with everything except the body already filled out. All you need to add is:
- A link to the CSS file(s) for the work skin(s) you're using in the work *(optional)*
 - This goes in the `<head>` section, replacing `YOURSKINHERE.css` under the `skins.css` sheet
 - If adding more than one work skin, be sure to add `class="custom"` to each `<link>` tag!
- A link to a work using the skin on AO3 *(optional)*
- Your content inside `<section id="workskin">`, where you'll see the placeholder `Content goes here` paragraph

Once you're done, open the HTML file in your browser to preview it. Enjoy!