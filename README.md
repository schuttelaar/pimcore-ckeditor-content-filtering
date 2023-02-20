# Pimcore CKEditor Content Filtering Bundle

Configuration for CKEditor used in PimCore to include CKEditor plugins for pasting from Word and other ACF rules.

## Content filtering

This module includes the Paste From Word plugin. Documentation of this plugin can be found at https://ckeditor.com/docs/ckeditor4/latest/examples/pastefromword.html.

This module also contains some basic content filtering that is done by the CKEditor ACF. Also some other input settings are included. The settings included here are:

```
enterMode : CKEDITOR.ENTER_P,
shiftEnterMode: CKEDITOR.ENTER_BR,
format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div',
autoParagraph: true,
removePlugins: 'font,colordialog',
pasteFromWordPromptCleanup: false,
extraAllowedContent: '*[class];div(*){*}[*];a(*){*}[*];img[alt,pimcore_id,pimcore_type,!src,align]{width,height,float}',
```

Note that if you overrule `pasteFromWordPromptCleanup` and set this to `true` and a text from Word is pasted, users get a dialog with the question if the pasted text must be cleaned or not.

## Installation

### Add this module as requirement in composer and add the repository.

Example
```
"require": {
    ...,
    "schuttelaar/pimcore-ckeditor-content-filtering": "^1.0.3",
    ...
  },
  "repositories": [
    ...,
    {
      "type": "git",
      "url": "https://github.com/schuttelaar/pimcore-ckeditor-content-filtering/"
    },
    ...
  ],
```
### Update the project

```
composer update
```

### Enable the bundle

```
bin/console pimcore:bundle:enable CKEditorCFConfigBundle
```

or if there is trouble with priorities of modules/bundles

```
bin/console pimcore:bundle:enable -p 0 CKEditorCFConfigBundle
```

After reloading the browser the Automated Content Filtering and the Paste from Word should work when pasting content in the CKEditor or when updating the content from the source code window.

## Extra custom CKEditor config

This module is made to merge with custom CKEditor configuration settings but preventing configuration of this module to be lost when the browser or PimCore loads this module before the custom configuration settings, it's best to implement this merging in the custom configuration as well.

### Creating a custom CKEditor configuration bundle

If you don't have any custom configuration locally, you should add a bundle for this because PimCore requires custom CKEditor settings to be in a bundle. Let's say you name the bundle `CKEditorConfigBundle`.

If you do have a bundle you can check with the examples below if your bundle is compatible with this module.

#### Create the bundle

```
bin/console pimcore:generate:bundle --namespace=CKEditorConfigBundle
```

#### Enable the bundle

```
bin/console pimcore:bundle:enable CKEditorConfigBundle
```

You probably need to set custom CKEditor settings for the PimCore **object** editor and for the PimCore **document** editor. These have there own Javascript file for setting the configuration. The first one is set in `startup.js` and the latter in `editmode.js`.

When you install a new bundle the `startup.js` already is included but the `editmode.js` is not. This can be included by copying the file `startup.js` to `editmode.js` in the same directory (or create an empty file `editmode.js`). These files are located in `src/CKEditorConfigBundle/Resources/public/js/pimcore/`.

You also need to change the main bundle PHP file, which is here `src/CKEditorConfigBundle/CKEditorConfigBundle.php`. The function `getEditmodeJsPaths()` needs to be added to this class.

```
public function getEditmodeJsPaths()
{
    return [
        '/bundles/ckeditorconfig/js/pimcore/editmode.js'
    ];
}
```

#### startup.js

Here's an example of a custom configuration that adds styling to the style selector and adds another CKEditor plugin. Note that we overrule `format_tags` here because here H1 tags are not allowed in a contents block.

```
// Default objects CKEditor config
let objectEditorConfig = {
    stylesSet : 'styles',
	format_tags: 'p;h2;h3;h4;h5;h6;pre;address;div',
	contentsCss : '/dist/admin/admin-wysiwyg.css'
};

// Merge or set editor config
if (pimcore.object.tags.wysiwyg.defaultEditorConfig) {
    // Make sure the local config has prio
    pimcore.object.tags.wysiwyg.defaultEditorConfig = {
        ...pimcore.object.tags.wysiwyg.defaultEditorConfig,
        ...objectEditorConfig
    };
} else {
    pimcore.object.tags.wysiwyg.defaultEditorConfig = objectEditorConfig;
}

// Add ckeditor plugins
if (pimcore.object.tags.wysiwyg.defaultEditorConfig.extraPlugins === undefined) {
    pimcore.object.tags.wysiwyg.defaultEditorConfig.extraPlugins = [];
}
pimcore.object.tags.wysiwyg.defaultEditorConfig.extraPlugins.push('blockquote');
CKEDITOR.plugins.addExternal('blockquote', '/bundles/ckeditorconfig/js/plugins/blockquote/');

// Add styles to the style list selector
CKEDITOR.stylesSet.add( 'styles', [
    // Intro text semi-bold
    {name: 'Intro text', element: 'p', attributes: {class: 'intro-text'}},

    // Purple text
    {name: 'Purple text', element: 'p', attributes: {class: 'purple-text'}},

    // UL and OL
    {name: 'Purple numbered list', element: 'ol', attributes: {class: 'purple-round'}},
    {name: 'Purple bullet list', element: 'ul', attributes: {class: 'purple-round'}},
]);
```

#### editmode.js

This code can also be used in `editmode.js` with one difference: replace `pimcore.object.tags.wysiwyg.defaultEditorConfig` with `pimcore.document.editables.wysiwyg.defaultEditorConfig` because `editmode.js` is used for setting the configuration for the document editor.

## Links

https://pimcore.com/en

https://ckeditor.com/

https://ckeditor.com/docs/ckeditor4/latest/examples/pastefromword.html