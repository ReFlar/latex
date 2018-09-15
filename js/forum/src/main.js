import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('reflar/latex', () => {
    // on every post loading
    extend(CommentPost.prototype, 'config', function () {
        // run KaTeX renderer on the single post body (not on the entire page or the entire post)
        renderMathInElement($('.Post-body', this.element)[0], {
            // do not render inside those tags
            "ignoredTags":["script", "noscript", "style", "textarea", "pre"],
            // those are the delimiters we are going to use to write latex formulas
            "delimiters":[
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
            ]
        });
    });
});
