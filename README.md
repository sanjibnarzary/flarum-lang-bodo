# Bodo Language Pack for [Flarum](https://flarum.org/)

[![Build Status](https://travis-ci.org/sanjibnarzary/flarum-lang-bodo.svg?branch=master)](https://travis-ci.org/sanjibnarzary/flarum-lang-bodo)

Bodo language pack to localize the Flarum forum software, its bundled extensions and libraries.

If you're looking for Bodotranslations of third-party extensions for Flarum, please check [this repository](https://github.com/rooaaar/lang-french-extended).

## Informations

Includes the following Bodo locales compatible with:

- [Flarum 0.1.0 Beta 10](https://github.com/flarum/core)
  - Bundled extensions:
    - [Akismet](https://github.com/flarum/akismet)
    - [Approval](https://github.com/flarum/approval)
    - [Emoji](https://github.com/flarum/emoji)
    - [Facebook Login](https://github.com/flarum/auth-facebook)
    - [Flags](https://github.com/flarum/flags)
    - [GitHub Login](https://github.com/flarum/auth-github)
    - [Likes](https://github.com/flarum/likes)
    - [Lock](https://github.com/flarum/lock)
    - [Markdown](https://github.com/flarum/markdown)
    - [Mentions](https://github.com/flarum/mentions)
    - [Pusher](https://github.com/flarum/pusher)
    - [Statistics](https://github.com/flarum/statistics)
    - [Sticky](https://github.com/flarum/sticky)
    - [Subscriptions](https://github.com/flarum/subscriptions)
    - [Suspend](https://github.com/flarum/suspend)
    - [Tags](https://github.com/flarum/tags)
    - [Twitter Login](https://github.com/flarum/auth-twitter)
  - Bundled libraries:
    - [Laravel's Validation Rules 6.0.2](https://github.com/laravel/laravel)
    - [Moment.js 2.24.0](https://github.com/moment/moment)

Released under the MIT license. Please see [the license terms](https://github.com/sanjibnarzary/flarum-lang-bodo/blob/master/LICENSE).

## Installation

Flarum use Composer to manage its dependencies and extensions. The Bodo language pack is available [on Packagist](https://packagist.org/packages/sanjibnarzary/flarum-lang-bodo) and can be managed that way. Make sure that [Composer](https://getcomposer.org/) is installed on your machine, then run the following command in the location where Flarum is installed:

```shell
composer require sanjibnarzary/flarum-lang-bodo
```

The same command can be used to update independently the Bodo language pack, without updating anything else. Note that because the Bodo language pack will be added as a Flarum's dependency, it will also be automatically updated when updating Flarum and its dependencies via Composer.
