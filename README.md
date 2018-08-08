# God-to-Skinner

Browser extension (using the WebExtensions API) that replaces occurences of the word "God" with "Dr. Skinner"

Idea shamelessly ~stolen~ borrowed from the ol' cloud-to-butt community

## Installing

### Firefox
 1. Go to [the releases page](https://github.com/trajing/god-to-skinner/releases) and select the file labelled "firefox"
    (it should have a .xpi extension)
 2. Instead of normally downloading, firefox should prompt you to install the extension

### Chrome
 1. Go to [the releases page](https://github.com/trajing/god-to-skinner/releases) and download the source code
 2. Extract the source code into its own folder
 3. Open up chrome
 4. Go to the extensions page (`chrome://extensions`)
 5. Enable Developer Mode by toggling the switch in the top right
 6. Select "Load Unpacked"
 7. In the selection pop-up, navigate to where you unpacked the source code and select the "src" subdirectory
 8. You can turn off Developer Mode after this, but Chrome may complain.

#### Why is this so complicated on Chrome?
Because ~Google is bad~ Google does not seem to easily support self-hosting packed CRX files and would instead prefer
going through the Chrome store. To circumvent this, you can simply install the extension as an unpacked folder, as a
developer normally would while testing.

## Building
TODO
