var gulp = require('flarum-gulp');

gulp({
    modules: {
        'flagrow/latex': [
            'src/**/*.js'
        ]
    }
});
