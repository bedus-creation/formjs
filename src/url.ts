export function hrefToUrl(href: string | URL): URL {
    return new URL(href.toString(), window.location.toString())
}
