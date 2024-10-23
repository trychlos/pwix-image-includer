# pwix:image-includer

## What is it

A simple Blaze component for Meteor which provides a dynamic image includer.

## Usage

Very simple:

### Include in your HTML template

```
    {{> ImageIncluder }}
```

## Configuration

None at the moment.

## Provides

### Functions

#### `ImageIncluder.configure( o<Object> )`

See [below](#configuration)

##### `ImageIncluder.i18n.namespace()`

Returns the i18n namespace used by the package. Used to add translations at runtime.

Available both on the client and the server.

### Blaze components

#### `ImageIncluder`

A simple image includer.

The component is configurable with an object passed as an argument, which may contain:

- `classes`:

    The classes to set on the `img` element.

    Defaults to none.

- `title`:

    A title to set on the `img` element.

    Defaults to none.

- `imageUrl`:

    The url of the image to be displayed.

    Defaults to none.

- `defaultIcon`:

    The name of the Font Awesome default svg, defaulting to 'fa-user'.

- `imageWidth`:

    An optional width, defaulting to '10em'.

- `imageHeight`:

    An optional height, defaulting to '11.5em'

- `withInput`:

    Whether have an input field, defaulting to 'false'.

## NPM peer dependencies

This package has no NPM dependencies.

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-image-includer/pulls).

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-image-includer/issues).


---
P. Wieser
- Last updated on 2024, Oct. 4th
