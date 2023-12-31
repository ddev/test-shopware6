<?php declare(strict_types=1);

namespace Shopware\Core\Content\Media\Cms;

use Shopware\Core\Framework\Log\Package;

#[Package('buyers-experience')]
class VimeoVideoCmsElementResolver extends YoutubeVideoCmsElementResolver
{
    public function getType(): string
    {
        return 'vimeo-video';
    }
}
