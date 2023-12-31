<?php declare(strict_types=1);

namespace Shopware\Core\System\Salutation\Event;

use Shopware\Core\Framework\Adapter\Cache\StoreApiRouteCacheTagsEvent;
use Shopware\Core\Framework\Log\Package;

#[Package('buyers-experience')]
class SalutationRouteCacheTagsEvent extends StoreApiRouteCacheTagsEvent
{
}
