<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CleanupSpam extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cleanup:spam {--keep=100}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $keep = $this->option('keep');

        $spam_folder = storage_path('app/_spam');
        if (!is_dir($spam_folder)) {
            $this->error('Spam folder does not exist.');
            return 1;
        }

        // Get all directories in the spam folder
        $spam_directories = array_filter(glob($spam_folder.'/*'), 'is_dir');

        $files_deleted = 0;
        // For each directory, if the number of files is greater than $keep, delete the oldest files until we're at $keep
        foreach ($spam_directories as $spam_directory) {
            $files = array_filter(glob($spam_directory.'/*'), 'is_file');
            $files = array_map(function($file) {
                return [
                    'path' => $file,
                    'time' => filemtime($file)
                ];
            }, $files);
            usort($files, function($a, $b) {
                return $a['time'] <=> $b['time'];
            });
            $files_to_delete = array_slice($files, 0, count($files) - $keep);
            foreach ($files_to_delete as $file) {
                unlink($file['path']);
                $files_deleted++;
            }
        }
        $this->info('Removed '.$files_deleted.' spam files.');
        return Command::SUCCESS;
    }
}
