<?php

namespace CKEditorCFConfigBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class CKEditorCFConfigBundle extends AbstractPimcoreBundle
{
    public function getDescription() {
        return 'CKEditor Content Filter';
    }

    public function getVersion() {
        return 'v1.1.2';
    }
    
    public function getEditmodeJsPaths()
    {
        return [
            '/bundles/ckeditorcfconfig/js/pimcore/editmode.js'
        ];
    }

    public function getJsPaths()
    {
        return [
            '/bundles/ckeditorcfconfig/js/pimcore/startup.js'
        ];
    }
}
