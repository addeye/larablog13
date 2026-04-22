<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite('resources/js/app.js')
        <x-inertia::head />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lora:wght@500;600&display=swap');
            main { font-family: 'Inter', sans-serif; }
            .news-title { font-family: 'Lora', serif; }
        </style>
    </head>
    <body>
        <x-inertia::app />
    </body>
</html>
