# (Fav) Icons

<ToughZone /> has the ability to include multiple vendor-specific and general icons for different
use-cases outlined below.

## Regular Favicon

Most regular favicons types are supported. Browser support varies across types and browser versions.

<table>
    <thead>
        <th>File Type</th>
        <th>Sizes</th>
        <th>File Name</th>
        <th>Browser support</th>
    </thead>
    <tbody>
        <tr>
            <td><code>.ico</code></td>
            <td>16 x 16 px</td>
            <td><code>favicon.ico</code></td>
            <td>all</td>
        </tr>
        <tr>
            <td rowspan="2"><code>.png</code></td>
            <td>16 x 16 px</td>
            <td><code>favicon-16x16.png</code></td>
            <td rowspan="2">
                <a href="https://caniuse.com/link-icon-png">very good</a>
            </td>
        </tr>
        <tr>
            <td>32 x 32 px</td>
            <td><code>favicon-32x32.png</code></td>
        </tr>
        <tr>
            <td><code>.svg</code></td>
            <td>64 x 64 px</td>
            <td><code>favicon.svg</code></td>
            <td><a href="https://caniuse.com/link-icon-svg">mediocre</a></td>
        </tr>
    </tbody>
</table>

## Manufacturer specific icons

### Google / Android

Used by Android when installing the platform as web app on the home screen. As it is an experimental
technology, we only implement icons by default. Read the 
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Manifest) for more information.

| Size         | File Name                  |
|--------------|----------------------------|
| 36 x 36 px   | `android-icon-36x36.png`   |
| 48 x 48 px   | `android-icon-48x48.png`   |
| 72 x 72 px   | `android-icon-72x72.png`   |
| 96 x 96 px   | `android-icon-96x96.png`   |
| 144 x 144 px | `android-icon-144x144.png` |
| 192 x 192 px | `android-icon-192x192.png` |

### Apple / iOS

#### Touch Icon

Used by iOS devices when installing the platform as web app on the home screen. We only implement
the touch icon by default, contact us for more options.

Read the [official Apple documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
for more details.

Required size is 180 x 180 px and the file name is `apple-touch-icon.png`.

#### Mask Icon

Mask icons are used by Apple's Safari browser for pinned tabs. Read the
[official Apple documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html)
for more details.

The icon must
* be a `.svg` file with its `viewBox` set to `0 0 16 16`
* use 100% black for all vectors
* be called `mask-icon.svg`

Additionally, we need the color which should be used to render the icon.
