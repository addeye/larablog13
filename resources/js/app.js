import './bootstrap';
// css
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
    pages: './Pages',
    strictMode: true,
});
