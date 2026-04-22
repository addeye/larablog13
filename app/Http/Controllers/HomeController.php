<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // return "Hello World";
        return inertia('Home/Index');
    }

    public function showKanal($slug)
    {
        // return "Kanal: " . $slug;
        return inertia('Home/Category', [
            'slug' => $slug,
        ]);
    }
}
