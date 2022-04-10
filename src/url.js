export function hrefToUrl(href){
    return new URL(href.toString(), window.location.toString())
}
