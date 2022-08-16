<?php

namespace App\Widgets;

use Statamic\Widgets\Widget;

class Notice extends Widget
{
    /**
     * The HTML that should be shown in the widget.
     *
     * @return string|\Illuminate\View\View
     */
    public function html()
    {

        $notice = \Statamic\Facades\GlobalSet::findByHandle('notice')->inCurrentSite();

        return view('cp.widgets._notice', ['notice' => $notice]);
    }
}
