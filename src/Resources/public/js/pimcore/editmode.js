// Default documents CKEditor config
pimcore.document.tags.wysiwyg.defaultEditorConfig = {
    extraAllowedContent : '*[class];div(*){*}[*];a(*){*}[*];img[alt,pimcore_id,pimcore_type,!src,align]{width,height,float}',
    enterMode : CKEDITOR.ENTER_P,
    shiftEnterMode: CKEDITOR.ENTER_BR,
    format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div',
    autoParagraph : true,
    removePlugins: 'font,colordialog',
    extraPlugins: ['blockquote', 'pastefromword'],
    pasteFromWordPromptCleanup: false,
};

CKEDITOR.plugins.addExternal('notification', '/bundles/ckeditorconfig/js/plugins/notification/');
CKEDITOR.plugins.addExternal('clipboard', '/bundles/ckeditorconfig/js/plugins/clipboard/');
CKEDITOR.plugins.addExternal('pastetools', '/bundles/ckeditorconfig/js/plugins/pastetools/');
CKEDITOR.plugins.addExternal('pastefromword', '/bundles/ckeditorconfig/js/plugins/pastefromword/');
CKEDITOR.plugins.addExternal('blockquote', '/bundles/ckeditorconfig/js/plugins/blockquote/');