<?php

class StarterKitPostInstall
{
    public function handle($console)
    {
        $console->line('Thanks for installing!');
        $filesAndDirs = scandir(__DIR__);
        $console->line($filesAndDirs);
    }
}
