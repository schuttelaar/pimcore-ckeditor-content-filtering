<?php

namespace CKEditorConfigBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class CKEditorConfigBundle extends AbstractPimcoreBundle
{
    public function getEditmodeJsPaths()
    {
        return [
            '/bundles/ckeditorconfig/js/pimcore/editmode.js'
        ];
    }

    public function getJsPaths()
    {
        return [
            '/bundles/ckeditorconfig/js/pimcore/startup.js'
        ];
    }
}
