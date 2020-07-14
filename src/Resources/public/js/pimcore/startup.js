pimcore.object.tags.wysiwyg.defaultEditorConfig = {
    extraAllowedContent : '*[class];div(*){*}[*];a(*){*}[*];img[alt,pimcore_id,pimcore_type,!src,align]{width,height,float}',
    enterMode : CKEDITOR.ENTER_P,
    shiftEnterMode: CKEDITOR.ENTER_BR,
    format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div',
    autoParagraph : true,
    removePlugins: 'font,colordialog',
    extraPlugins: ['blockquote', 'pastefromword'],
};

CKEDITOR.plugins.addExternal('notification', '/bundles/ckeditorconfig/js/plugins/notification/');
CKEDITOR.plugins.addExternal('clipboard', '/bundles/ckeditorconfig/js/plugins/clipboard/');
CKEDITOR.plugins.addExternal('pastetools', '/bundles/ckeditorconfig/js/plugins/pastetools/');
CKEDITOR.plugins.addExternal('pastefromword', '/bundles/ckeditorconfig/js/plugins/pastefromword/');
CKEDITOR.plugins.addExternal('blockquote', '/bundles/ckeditorconfig/js/plugins/blockquote/');


// add stylesheet for wysiwyg outside of document context if needed

// var head = document.head;
// var link = document.createElement("link");

// link.type = "text/css";
// link.rel = "stylesheet";
// link.href = '/dist/admin/admin-dataobject-wysiwyg.css';

// head.appendChild(link);