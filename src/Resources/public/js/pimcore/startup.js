// Default objects CKEditor config
let cfEditorConfig = {
    extraAllowedContent : '*[class];p(*){*}[*];div(*){*}[*];a(*){*}[*];img[alt,pimcore_id,pimcore_type,!src,align]{width,height,float}',
    enterMode : CKEDITOR.ENTER_P,
    shiftEnterMode: CKEDITOR.ENTER_BR,
    format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div',
    autoParagraph : true,
    removePlugins: 'font,colordialog',
    pasteFromWordPromptCleanup: false,
};

if (pimcore.object.tags.wysiwyg.defaultEditorConfig) {
    // Make sure the local config has prio
    pimcore.object.tags.wysiwyg.defaultEditorConfig = {
        ...cfEditorConfig,
        ...pimcore.object.tags.wysiwyg.defaultEditorConfig
    };
} else {
    pimcore.object.tags.wysiwyg.defaultEditorConfig = cfEditorConfig;
}

if (pimcore.object.tags.wysiwyg.defaultEditorConfig.extraPlugins === undefined) {
    pimcore.object.tags.wysiwyg.defaultEditorConfig.extraPlugins = [];
}
pimcore.object.tags.wysiwyg.defaultEditorConfig.extraPlugins.push('pastefromword');

CKEDITOR.plugins.addExternal('notification', '/bundles/ckeditorcfconfig/js/plugins/notification/');
CKEDITOR.plugins.addExternal('clipboard', '/bundles/ckeditorcfconfig/js/plugins/clipboard/');
CKEDITOR.plugins.addExternal('pastetools', '/bundles/ckeditorcfconfig/js/plugins/pastetools/');
CKEDITOR.plugins.addExternal('pastefromword', '/bundles/ckeditorcfconfig/js/plugins/pastefromword/');
