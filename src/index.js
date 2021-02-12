// Scripts
import { searchMovies } from './scripts/search_movies.js'

// Plugins
import { initSortable } from './plugins/init_sortable.js'
import { initMarkdown } from './plugins/init_markdown.js'

// Api Calls
searchMovies();

// Initializers
initSortable();
initMarkdown();

import $ from 'jquery'
import 'select2';

$(document).ready(function() {
    $('.js-example-basic-single').select2();
});


