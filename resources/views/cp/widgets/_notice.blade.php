<div class="rounded-md bg-blue-50 p-4 card content">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Heroicon name: solid/information-circle -->
      <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3 flex-1 md:flex md:justify-between md:items-center">
        <div>
            @if($notice->enabled)
                @if($notice->date > now())
                    <p class="text-blue-700 text-base">Site-wide notice active until {{ $notice->date->diffForHumans() }} ({{ $notice->date->format('m/d/Y') }})</p>
                @else
                    <p class="text-blue-700 text-base">Site-wide notice expired {{ $notice->date->diffForHumans() }} ({{ $notice->date->format('m/d/Y') }})</p>
                @endif
            @else
                <p class="text-blue-700 text-base">Site-wide notice disabled</p>
            @endif
            @if($notice->heading)
                <p class="text-blue-700 text-xs">Current notice heading: {{ $notice->heading }}</p>
            @endif
        </div>
        <p class="mt-3 text-sm md:mt-0 md:ml-6">
            <a href="/cp/globals/notice" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">View/Edit <span aria-hidden="true">&rarr;</span>
            </a>
        </p>
    </div>
  </div>
</div>
