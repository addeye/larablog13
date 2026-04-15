<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EventController extends Controller
{
    public function show(Event $event)
    {
        return Inertia::render('Event/Show', [
            'event' => $event->only(
                'id',
                'title',
                'start_date',
                'description',
            ),
        ]);
    }
}
