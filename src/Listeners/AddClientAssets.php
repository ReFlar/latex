<?php
/*
* This file is part of flagrow/flarum-ext-latex.
*
* Copyright (c) Flagrow.
*
* http://flagrow.github.io
*
* For the full copyright and license information, please view the license.md
* file that was distributed with this source code.
*/

namespace Flagrow\Latex\Listeners;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{

    /**
    * Subscribes to the Flarum events.
    *
    * @param Dispatcher $events
    */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureClientView::class, [$this, 'addForumAssets']);
    }

    /**
    * Modifies the client view for the Forum.
    *
    * @param ConfigureClientView $event
    */
    public function addForumAssets(ConfigureClientView $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js'
            ]);
            //Include css and java for KaTeX
            $event->view->addHeadString('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">');
            $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.js"></script>');
            $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/contrib/auto-render.min.js"></script>');

            $event->addBootstrapper('flagrow/latex/main');
        }
    }
}
