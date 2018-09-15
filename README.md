# flagrow/flarum-ext-latex

[![Latest Stable Version](https://poser.pugx.org/flagrow/flarum-ext-latex/v/stable)][packagist-link] [![License](https://poser.pugx.org/flagrow/flarum-ext-latex/license)][packagist-link] [![Gitter](https://badges.gitter.im/flagrow/flarum-ext-latex.svg)](https://gitter.im/flagrow/flarum-ext-latex)

A [Flarum](http://flarum.org) extension to render LaTeX expressions in your posts.

## Features
With flagrow-ext-latex you can render LaTeX mathematical expressions inside your forum just by typing them, in **the same way** you would do your TeX document.

It supports:
- Inline expressions like `$\sin\theta$`, as well as
- Display expressions, such as `$$\frac{\cos(kx)}{\cos(x)}$$`.

It also doesn't mess up with **Markdown** and **BBCode** extensions, so you can use all of them at the same time.

This is how the previous paragraph would look like:

![Imgur](http://i.imgur.com/BhEIDD0.png "This is how the previous paragraph would look like")

---

## Install

```bash
composer require flagrow/flarum-ext-latex
```

## Configuration

No configuration, it works out of the box.

## End-user usage

Write LaTeX expressions in your post like you would in your TeX editor.

### Tip
If you want to actually **show** the LaTeX code, you must use Markdown in the following way:

    This is an expression I don't want to render
    ```
    $$\cos(\pi) + 1 = 0$$
    ```
    While this is going to be rendered: $yes$

## Links

- by [Flagrow](https://github.com/flagrow)
- [changelog](CHANGELOG.md)
- [license](LICENSE)

[packagist-link]: https://packagist.org/packages/flagrow/flarum-ext-latex
