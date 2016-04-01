'use strict';

System.register('flagrow/latex/main', ['flarum/extend', 'flarum/components/CommentPost'], function (_export, _context) {
  var extend, CommentPost;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsCommentPost) {
      CommentPost = _flarumComponentsCommentPost.default;
    }],
    execute: function () {

      app.initializers.add('flagrow/latex', function () {
        // on every post loading
        extend(CommentPost.prototype, 'config', function () {
          // run KaTeX renderer on the single post body (not on the entire page or the entire post)
          renderMathInElement($('.Post-body', this.element)[0], {
            // do not render inside those tags
            "ignoredTags": ["script", "noscript", "style", "textarea", "pre"],
            // those are the delimiters we are going to use to write latex formulas
            "delimiters": [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }]
          });
        });
      });
    }
  };
});